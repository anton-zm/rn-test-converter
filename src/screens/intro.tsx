import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../assets/img/logo.png'

export const Intro = ({ navigation }: {navigation: any}) => {    

useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Main')
    }, 6000)
},[])

  return (
    <View style={styles.container}>
        <Image fadeDuration={3000} source={logo} style={styles.logo} resizeMode='contain'></Image>
        <View style={styles.text_container}>
            <Text style={styles.text}>TEST TASK</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4c4ff1',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text_container: {
    alignItems: 'center',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    bottom: 30,
    width: '100%'
  },
  text: {
    color:'white',
    fontSize: 22,
  },
  logo: {
      width: '80%',
  },
});