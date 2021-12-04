import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from '../components/footer';

export const Main = ({ navigation }: {navigation: any}) => {
    
  return (
    <View style={styles.wrapper}>
        
        <Text>Main screen</Text>
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