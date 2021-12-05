import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Select } from '../components/select';
import { useStore } from '../store/use-store';
import { getTextDate } from '../utils/func';
import config from '../config';
import { Convert } from '../assets/svg/convert';
import { saveResult } from '../utils/func';

export const Main = ({ navigation }: {navigation: any}) => {
  const store = useStore()
  const [from, setFrom] = useState(store.fromCur)  
  const [to, setTo] = useState(store.toCur)
  const [fromValue, setFromValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [error, setError] = useState(' ')

  const startConvert = async () => {
    if(isNaN(+fromValue)){
      setError('Ошибка! Можно вводить только цифры.')
    }else if(!fromValue){
      setError('Ошибка! Введите сумму для конвертации.')
    }
    try{
      fetch(`${config.api_url}convert?${config.api_key}&from=${from}&to=${to}&amount=${fromValue}`)
        .then(res => res.json())
        .then(res => {
          setResultValue(res.result)
          saveResult(res)
        })
        
    } catch(e){
      setError('Что-то пошло не так. Попробуйте еще раз.')
    }
  }

  const reverse = () => {
    setFrom(to)
    setTo(from)
    setFromValue('')
    setResultValue('')
  }

  useEffect(() => {
    if(fromValue) setError('')
  },[fromValue])

  return (
    <View style={styles.wrapper}>
        <Header title='Конвертер' />
        <View style={styles.main}>
          <Text style={styles.date}>{getTextDate(new Date())}</Text>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <Select styles={SelectStyles} onChange={setFrom} data={store.currencies} value={from} />
              <TextInput
                value={fromValue} 
                onChangeText={setFromValue}
                keyboardType='numeric'
                placeholder = '0'
                style={styles.input_value} 
              />
              <TouchableOpacity onPress={reverse} style={styles.convert_icon}>
                <Convert  color={config.mainColor} />
              </TouchableOpacity >
            </View>
            
            <View style={styles.input}>
              <Select styles={SelectStyles} onChange={setTo} data={store.currencies} value={to} />
              <View style={styles.result}>
                <Text>{resultValue}</Text>
              </View>
            </View>
          </View>
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity onPress={startConvert} style={styles.button}>
            <Text style={styles.button_text}>Конвертировать</Text>
          </TouchableOpacity>
        </View>
        <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign: 'center',

  },
  wrapper: {
      flex: 1,
      justifyContent: 'space-between',
  },
  main: {
    flex:1,
    paddingHorizontal:10
  },
  date: {
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.5,
    color: '#B2B2B2',
  },
  inputs: {
    marginTop: 48
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 60
  },
  input_value: {
    width: 200,
    height: 55,
    borderWidth: 2,
    borderColor: '#d8d1d1',
    paddingHorizontal: 10
  },
  result: {
    width: 200,
    height: 55,
    borderWidth: 2,
    borderColor: '#d8d1d1',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  button: {
    paddingHorizontal:24,
    paddingVertical: 15,
    borderWidth: 4,
    borderColor: config.mainColor,
    borderRadius: 25,
    marginTop: 32,
    
  },
  button_text: {
    textAlign: 'center',
    color: config.mainColor,
    fontSize: 18
  },
  convert_icon: {
    position: 'absolute',
    top: 70,
    left: 0,
    transform: [{rotate:'90deg'}]
  }
});

const SelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: '#d8d1d1',
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    width: 150,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#d8d1d1',
    color: 'black',
    paddingRight: 30,
    
  },
});