import React from 'react';
import {View, Platform} from 'react-native';
import MainContainer from '../../components/mainContainer';
import {ProfileHeader} from '../../components/profileHeader';
import Input from '../../components/input';
import ScheduleCard from '../../components/scheduleCard';
const Schedule = () => {
  return (
    <MainContainer marginTop={'10%'} align={'flex-start'} width={'95%'}>
      <View
        style={{
          marginHorizontal: '3%',
        }}>
        <ProfileHeader />
        <Input
          img={require('../../assets/magniferIcon.png')}
          img2={require('../../assets/icons5.png')}
          password={false}
          justifyContent={'space-between'}
        />
        <ScheduleCard />
      </View>
    </MainContainer>
  );
};

export default Schedule;
