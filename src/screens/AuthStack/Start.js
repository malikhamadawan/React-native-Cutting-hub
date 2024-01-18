/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Start = () => {
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
          source={require('../../assets/backGround1.png')}
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
              Get Started with {'\n'}The Cutting Hub
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
                The Ultimate Salon Booking {'\n'}Experience.
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
            <TouchableOpacity
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
                  color: 'red',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Start;
