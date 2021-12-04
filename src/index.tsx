import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Intro } from './screens/intro';
import { Main } from './screens/main';

const Route = createStackNavigator();


export default function App(){
  return (
    <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown:false}}>
            <Route.Screen name='Intro' component={Intro} />
            <Route.Screen name='Main' component={Main} />
        </Route.Navigator>
    </NavigationContainer>
  );
};

/* const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
}); */


