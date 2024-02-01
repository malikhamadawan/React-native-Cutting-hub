import {View, Text, Image} from 'react-native';
import React from 'react';
import MainContainer from '../../components/mainContainer';
import {ProfileHeader} from '../../components/profileHeader';
import CustomButton from '../../components/customButton';

const Setting = () => {
  return (
    <MainContainer>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/umair1.jpg')}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
          }}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: '#000',
            }}>
            Umair Malik
          </Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '200',
            }}>
            talhabinumar004@gmail.com
          </Text>
        </View>
      </View>
      <CustomButton
        btnColor={'#fff'}
        text={'Profile'}
        txtColor={'#2158ff'}
        imgPath={require('../../assets/icon1.png')}
        showImage={true}
        width={'100%'}
      />
    </MainContainer>
  );
};

export default Setting;
