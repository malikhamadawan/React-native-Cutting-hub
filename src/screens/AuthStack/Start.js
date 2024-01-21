/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Start = ({navigation}) => {
  const [splash, setSplash] = useState(0);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
        }}>
        <ImageBackground
          source={
            splash === 0
              ? require('../../assets/backGround1.png')
              : splash === 1
              ? require('../../assets/backGround2.png')
              : splash === 2
              ? require('../../assets/backGround3.png')
              : require('../../assets/backGround4.png')
          }
          style={{
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              marginVertical: '20%',
              paddingHorizontal: '5%',
            }}>
            <Text
              style={{
                fontSize: 33,
                color: 'white',
                fontWeight: 'bold',
              }}>
              {splash === 0
                ? 'Get Started with \nThe Cutting Hub'
                : splash === 1
                ? 'Book Your Favourite \nServices'
                : splash === 2
                ? 'Stay Relax and \nEntertained'
                : 'Never Miss an \nAppointment'}
            </Text>
            <View
              style={{
                marginVertical: '5%',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                {splash === 0
                  ? 'The Ultimate Salon Booking \nExperience.'
                  : splash === 1
                  ? "From haircuts to facials, we've got you \ncovered"
                  : splash === 2
                  ? 'Games, news, and more while you \nwait.'
                  : 'Get appointment reminders and \nupdates in real-time.'}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: '80%',
            }}>
            <TouchableOpacity
              onPress={() => {
                if (splash === 3) {
                  navigation.navigate('SignUp');
                } else {
                  setSplash(splash + 1);
                }
              }}
              style={{
                backgroundColor: '#C6147B',
                width: '80%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Text>Next</Text>
            </TouchableOpacity>
            {splash < 3 && (
              <TouchableOpacity
                onPress={() => setSplash(0)}
                style={{
                  backgroundColor: 'black',
                  width: '80%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  Skip
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Start;
