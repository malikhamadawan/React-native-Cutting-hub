import {TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';

const index = ({text, press, btnColor, txtColor, borderWidth, borderColor,img,imgPath}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        press();
      }}
      style={{
        backgroundColor: btnColor,
        width: '90%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
        borderWidth: borderWidth == true ? 2 : 0,
        borderColor: borderColor,
        flexDirection:'row',
      }}>
      {img===true &&(<Image source={imgPath} style={{
        height:24,
        width: 24,
        marginRight: 10,
      }} />)}
      <Text
        style={{
          color: txtColor,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default index;
