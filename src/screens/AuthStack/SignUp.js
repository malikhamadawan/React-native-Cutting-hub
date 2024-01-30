/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  StatusBar,
} from 'react-native';
import React from 'react';
import Input from '../../components/input';
import CustomButton from '../../components/button';
import OrSeprator from '../../components/orSeprator';
import MainContainer from '../../components/mainContainer';

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <View
        style={{
          width: '90%',
          marginTop: '10%',
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
          }}>
          Create an account,
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '300',
            color: 'black',
          }}>
          Please type full information bellow and we can create{'\n'}your
          account
        </Text>
      </View>
      <View
        style={{
          marginTop: '15%',
          width: '100%',
        }}>
        <Input img={require('../../assets/icon1.png')} placeholder={'Name'} />
        <Input img={require('../../assets/icon2.png')} placeholder={'Email'} />
        <Input
          img={require('../../assets/icon3.png')}
          placeholder={'Password'}
          password={true}
        />
        <Input
          img={require('../../assets/icon3.png')}
          placeholder={'Confirm Password'}
          password={true}
        />
        <Text
          style={{
            fontSize: 11,
            color: 'black',
            marginHorizontal: '8%',
            marginTop: 5,
          }}>
          By signing up you agree to our
          <Text
            style={{
              color: '#2158FF',
            }}>
            {' '}
            Term of use and privacy{' '}
          </Text>
          notice
        </Text>
      </View>
      <CustomButton
        text={'Sign Up'}
        txtColor={'#fff'}
        btnColor={'#2158ff'}
        press={() => {
          console.log('hello');
        }}
      />
      <OrSeprator />
      <CustomButton
        text={'Sign Up with Google'}
        txtColor={'#2158ff'}
        borderColor={'#2158ff'}
        img={true}
        imgPath={require('../../assets/googleIcon.png')}
        borderWidth={true}
        press={() => {
          console.log('hello');
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: 45,
        }}>
        <Text
          style={{
            fontSize: 13,
            color: 'black',
          }}>
          Already have an account?
        </Text>
        <Text
          onPress={() => navigation.navigate('AuthStack', {screen: 'LogIn'})}
          style={{
            fontSize: 13,
            color: '#2158FF',
            marginLeft: 2,
          }}>
          Sign In
        </Text>
      </View>
    </MainContainer>
  );
};

export default SignUp;
