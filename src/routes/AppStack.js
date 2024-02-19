import * as React from 'react';

import Home from '../screens/AppStack/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Shop from '../screens/AppStack/Shop';
import BookNow from '../screens/AppStack/BookNow';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <Stack.Navigator
        initialRouteName="BookNow"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="BottomTab" component={BottomTab} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="BookNow" component={BookNow} />
      </Stack.Navigator>
    </>
  );
}

export default AppStack;
