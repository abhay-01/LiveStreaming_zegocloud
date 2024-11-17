import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Host from '../screens/Host';
import Viewer from '../screens/Viewer';

const Stack = createNativeStackNavigator();

export default function ScreenNav(props) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        headerMode="none"
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Host"
        component={Host}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Viewer"
        component={Viewer}
      />
    </Stack.Navigator>
  );
}
