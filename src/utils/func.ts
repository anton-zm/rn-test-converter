import { months, days } from "./consts"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Result } from '../types';

export const getTextDate = (date: Date) => {
    const m = date.getMonth()
    const y = date.getFullYear()
    const d = date.getDate()
    const weekD = date.getDay()
    return `${days[weekD]}, ${d} ${months[m]} ${y}`
}

function addNull(inp:any){
	if(inp.toString().length === 1){
		return `0${inp.toString()}`
	}
	return inp
}

export const getResultDate = (date: Date) => {
    const m = date.getMonth()
    const y = date.getFullYear()
    const d = date.getDate()
    const h = date.getHours()
    const min = date.getMinutes()
    
    return `${d}/${m+1}/${y} ${addNull(h)}:${addNull(min)}`
}

export const saveResult = async (data: any) => {
    const result: Result = {
      from: data.query.from,
      to: data.query.to,
      date: new Date(),
      amount: data.query.amount,
      result: data.result
    }

    try {
        const storage = await AsyncStorage.getItem('results')
        console.log(storage)
        if(storage){
            const results = JSON.parse(storage)
            results.push(result)
            const updatedData = await AsyncStorage.setItem('results', JSON.stringify(results))
            console.log(updatedData)
        }else{
            const firstRes = await AsyncStorage.setItem('results', JSON.stringify([result]))
            console.log(firstRes)
        }
    } catch(e){
        console.log(e)
    }
  }