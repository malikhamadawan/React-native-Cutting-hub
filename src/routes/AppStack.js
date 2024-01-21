import * as React from 'react';

import Home from '../screens/AppStack/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default AppStack;
