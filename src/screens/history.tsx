import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from '../components/footer';

export const History = ({ navigation }: {navigation: any}) => {
    
  return (
    <View style={styles.wrapper}>
        <Text>History screen</Text>
        <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      justifyContent: 'space-between',

  }
});