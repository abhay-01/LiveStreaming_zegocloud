import React from 'react';
import ScreenNav from './src/navigation/ScreenNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return(
    <NavigationContainer>
      <ScreenNav />
    </NavigationContainer>
  )
}