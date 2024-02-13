import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MainContainer from '../../components/mainContainer';
import {ProfileHeader} from '../../components/profileHeader';
import Input from '../../components/input';
import ScheduleCard from '../../components/scheduleCard';
import CustomButton from '../../components/customButton';

const Schedule = () => {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <MainContainer marginTop={'10%'}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 28,
              color: '#0D1230',
              fontWeight: '600',
            }}>
            Schedule
          </Text>
          <TouchableOpacity onPress={toggleInput}>
            <Image
              source={require('../../assets/magniferIcon.png')}
              style={{
                height: 24,
                width: 24,
              }}
            />
          </TouchableOpacity>
        </View>
        {showInput && (
          <Input
            img={require('../../assets/magniferIcon.png')}
            img2={require('../../assets/icons5.png')}
            password={false}
            justifyContent={'space-between'}
          />
        )}
        <ScheduleCard showBtn={true} />
      </View>
    </MainContainer>
  );
};

export default Schedule;
