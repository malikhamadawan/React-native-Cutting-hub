import {View, Text} from 'react-native';
import React from 'react';

const index = ({day, openTime, closeTime}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          fontWeight: '500',
        }}>
        {day}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: '400',
          marginLeft: 5,
        }}>
        {openTime}
      </Text>
      <Text
        style={{
          color: 'black',
          fontSize: 15,
          fontWeight: '400',
        }}>
        -
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: 'black',
          fontWeight: '400',
        }}>
        {closeTime}
      </Text>
    </View>
  );
};

export default index;
