/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import React from 'react';

const SignUp = ({navigation}) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'ios' ? 49 : 5,
        flex: 1,
        backgroundColor: '#F5F5F5',
      }}>
      <View
        style={{
          marginHorizontal: '5%',
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
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginVertical: '3%',
          }}>
          <Image
            source={require('../../assets/icon1.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
          <TextInput
            style={{
              marginLeft: 10,
            }}
            placeholder="Name"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginVertical: '3%',
          }}>
          <Image
            source={require('../../assets/icon2.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
          <TextInput
            style={{
              marginLeft: 10,
              width: '18%',
            }}
            placeholder="Email"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginVertical: '3%',
          }}>
          <Image
            source={require('../../assets/icon3.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
          <TextInput
            style={{
              marginLeft: 10,
              width: '45%',
            }}
            placeholder="Password"
          />
          <Image
            source={require('../../assets/icon4.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 115,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 40,
            width: '90%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderRadius: 8,
            alignItems: 'center',
            marginVertical: '3%',
          }}>
          <Image
            source={require('../../assets/icon3.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
          <TextInput
            style={{
              marginLeft: 10,
              width: '45%',
            }}
            placeholder="Confirm the Password"
          />
          <Image
            source={require('../../assets/icon4.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 115,
            }}
          />
        </View>
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
      <TouchableOpacity
        style={{
          height: '6%',
          width: '80%',
          backgroundColor: '#2158FF',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          marginTop: 50,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
          }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignContent: 'space-between',
          flexDirection: 'row',
          //   backgroundColor: 'red',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          width: '80%',
          marginTop: 30,
        }}>
        <Image
          source={require('../../assets/lineIcon1.png')}
          style={{
            width: 130,
            height: 3,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}>
          or
        </Text>
        <Image
          source={require('../../assets/lineIcon1.png')}
          style={{
            height: 3,
            width: 130,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          height: '5%',
          width: '80%',
          backgroundColor: 'transparent',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderColor: '#2158FF',
          marginTop: 25,
          borderWidth: 2,
        }}>
        <Image
          source={require('../../assets/googleIcon.png')}
          style={{
            height: 24,
            width: 24,
          }}
        />
        <Text
          style={{
            fontSize: 13,
            color: '#2158FF',
            marginLeft: 10,
          }}>
          Sign Up with Google
        </Text>
      </TouchableOpacity>
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
    </View>
  );
};

export default SignUp;
