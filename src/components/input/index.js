import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';

const index = ({img, placeholder, press, password}) => {
  return (
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
        source={img}
        style={{
          height: password=== true ? 20:24,
          width: password=== true ? 20:24,
          marginLeft: 10,
          marginRight:5
        }}
      />
      <TextInput
        style={{
        //   marginLeft: 10,
          width: password=== true ? "77%":"85%",
        }}
        placeholder={placeholder}
      />
      {password === true && (
        <TouchableOpacity onPress={press}>
          <Image
            source={require('../../assets/icon4.png')}
            style={{
              height: 24,
              width: 24,
              marginLeft: 10,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default index;
