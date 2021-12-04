import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Intro } from './screens/intro';
import { Main } from './screens/main';
import { History } from './screens/history';
import config from './config';
import { useStore } from './store/use-store';

const Route = createStackNavigator();

export default function App(){
  const store = useStore()
  
  return (
    <NavigationContainer>
        <Route.Navigator screenOptions={{headerShown:false}}>
            <Route.Screen name='Intro' component={Intro} />
            <Route.Screen name='Main' component={Main} />
            <Route.Screen name='History' component={History} />
        </Route.Navigator>
    </NavigationContainer>
  );
};