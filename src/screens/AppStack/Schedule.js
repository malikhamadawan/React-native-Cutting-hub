import React from 'react';
import { View } from 'react-native';
import Button from '../../components/button'; // Correct import

const Schedule = () => {
  return (
    <View>
      <Button text={'hello'} img={require('../../assets/back.png')} />
    </View>
  );
};

export default Schedule;