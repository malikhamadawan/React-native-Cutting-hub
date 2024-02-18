import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const index = ({onPress, onPressReview,onPressServices}) => {
  return (
    <ImageBackground
      source={require('../../assets/mrCuts.jpeg')}
      style={{
        height: 270,
        width: '100%',
        opacity: 10,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/profile2.jpeg')}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              marginTop: 70,
            }}
          />
          <Text
            style={{
              marginTop: 5,
              color: '#fff',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Usman
          </Text>
        </View>
        <View
          style={{
            marginTop: 19,
            // backgroundColor: 'red',
            height: 50,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={onPress}
            style={{
              //   backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              INFO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressServices}
            style={{
              //   backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              SERVICES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={onPressReview}
            style={{
              //   backgroundColor: 'pink',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 19,
                color: '#fff',
                fontWeight: '600',
              }}>
              REVIEWS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default index;
