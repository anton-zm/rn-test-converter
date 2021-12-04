import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const History = ({ navigation }: {navigation: any}) => {
    
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