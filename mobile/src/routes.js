import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import  { createStackNavigator } from '@react-navigation/stack'


const AppStack = createStackNavigator();

import Incidents from './pages/Incidents'
import Detail from './pages/Details'

export default function Routes(){
  return (
    <NavigationContainer>
      <AppStack screenOptions={{headerShow: false}}>
        <AppStack.Screen name="Incidents" component={Incidents}/>
        <AppStack.Screen name="Details" component={Detail} />
      </AppStack>
    </NavigationContainer>  
  );
}