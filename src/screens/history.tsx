import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const History = ({ navigation }: {navigation: any}) => {

  useEffect(() => {
    AsyncStorage.getItem('results').then((res) => {
      if(res) console.log(JSON.parse(res))
    })
  })
    
  return (
    <View style={styles.wrapper}>
        <Header title='История' />
        <Text>History screen</Text>
        <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      justifyContent: 'space-between',

  }
});