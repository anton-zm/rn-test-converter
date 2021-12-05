import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Result } from '../types';
import { getResultDate } from '../utils/func';

const ResultsList = ({data}:{data: Result[]}) => {
  return (
    <View>
      {data.map((e,i) => (
        <Text key={i}>{getResultDate(new Date(e.date))} - {e.amount} {e.from} to {e.to} {'=>'} {e.result} </Text>
      ))}
    </View>
  )
}

export const History = ({ navigation }: {navigation: any}) => {
  const [results, setResults] = useState<Result[]>([])
  const [empty, setEmpty] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('results').then((res) => {
      if(res){
        setResults(JSON.parse(res))
        setEmpty(false)
      }else{
        setEmpty(true)
      }
    })
  },[])
    
  return (
    <View style={styles.wrapper}>
        <Header title='История' />
        <ScrollView style={styles.main}>
          <Text style={styles.title}>{empty ? 'Нет результатов' : 'Результаты конвертаций'}</Text>
          <ResultsList data={results} />
        </ScrollView>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 24
  },
});