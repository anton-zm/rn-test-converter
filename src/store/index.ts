import { makeAutoObservable } from "mobx"
import config from "../config"

export class Storage { 
    _data = {}
    _currencies:string[] = []
    _from = 'USD'
    _to = 'RUB'
    
    constructor() { makeAutoObservable(this) }

    getInitData(){
        fetch(`${config.api_url}latest?${config.api_key}&base=USD`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                this.setData(res)
                this.setCurrencies(res)
            })
    }

    setData(v:any){
        this._data = v
    }
    setCurrencies(v:any){
        this._currencies = Object.keys(v.rates)
    }
    setFrom(v:string){
        this._from = v
    }
    setTo(v:string){
        this._to = v
    }

    get currentData(){
        return this._data
    }
    get currencies(){
        return this._currencies
    }
    get fromCur(){
        return this._from
    }
    get toCur(){
        return this._to
    }
}



