import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Select } from '../components/select';
import { useStore } from '../store/use-store';



export const Main = ({ navigation }: {navigation: any}) => {
  const store = useStore()
  const [from, setFrom] = useState(store.fromCur)  
  const [to, setTo] = useState(store.toCur)

  return (
    <View style={styles.wrapper}>
        <Header title='Конвертер' />
        <View style={styles.main}>
          <Text style={styles.date}>Пятница, 12 декабря 2021</Text>
          <View style={styles.inputs}>
            <View style={styles.input}>
              <Select styles={SelectStyles} onChange={setFrom} data={store.currencies} value={from} />
              <TextInput keyboardType='numeric' style={styles.input_value} />
            </View>
            <View style={styles.input}>
              <Select styles={SelectStyles} onChange={setTo} data={store.currencies} value={to} />
            </View>
            
            
          </View>
        </View>
        
        
        <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 30
  },
  input_value: {
    width: 200,
    height: 55,
    borderWidth: 2,
    borderColor: '#d8d1d1',
    paddingHorizontal: 10
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