import {View, Text, Platform, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const BookNow = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 50 : 30,
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          marginTop: 5,
          width: '95%',
          backgroundColor: 'white',
          height: 150,
          borderRadius: 15,
          justifyContent: 'center',
        }}>
        <View
          style={{
            // backgroundColor: 'blue',
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/profile2.jpeg')}
            style={{
              height: 127,
              width: 127,
              borderRadius: 10,
              marginLeft: 11,
            }}
          />
          <View
            style={{
              width: '30%',
              alignItems: 'center',
              marginVertical: 10,
              justifyContent: 'space-between',
              marginHorizontal: 40,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: 'black',
                textAlign: 'center',
                marginLeft: 20,
              }}>
              Usman{'\n'}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '300',
                  color: 'black',
                }}>
                Barber
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 40,
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 90,
                  backgroundColor: '#F5F5F5',
                  // marginLeft:10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginRight: 20,
                }}>
                <Image
                  source={require('../../assets/phoneIcon.png')}
                  style={{
                    height: 27,
                    width: 27,
                  }}
                />
                <Text>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 90,
                  backgroundColor: '#F5F5F5',
                  // marginLeft:10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../../assets/whatsappIcon.png')}
                  style={{
                    height: 38,
                    width: 38,
                  }}
                />
                <Text>Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookNow;
