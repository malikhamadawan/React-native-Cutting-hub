import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from '../screens/AppStack/Explore';
import Home from '../screens/AppStack/Home';
import {Image, Settings} from 'react-native';
import Schedule from '../screens/AppStack/Schedule';
import Settiing from '../screens/AppStack/Setting';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="BottomTab"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#2158FF'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/homeIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/exploreIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/scheduleIcon.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Settiing}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/setting11.png')}
              resizeMode={'contain'}
              style={{
                width: 20,
                height: 20,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
