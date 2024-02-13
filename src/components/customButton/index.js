import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const CustomButton = ({
  text,
  press,
  width,
  style,
  imgPath,
  btnColor,
  txtColor,
  showImage,
  borderWidth,
  borderColor,
  btnHeight,
  fontWeight,
  justi,
  textmarginL,
  imgMarg,
}) => {
  const handlePress = () => {
    press();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.button,
        {
          backgroundColor: btnColor,
          borderWidth: borderWidth ? 2 : 0,
          borderColor: borderColor,
          width: width ? width : '90%',
          justifyContent: justi,
          height: btnHeight ? btnHeight : 48,
        },
        style,
      ]}>
      {showImage && (
        <Image
          source={imgPath}
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
            marginLeft: imgMarg,
          }}
        />
      )}
      <Text style={{color: txtColor, fontWeight: fontWeight}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
});

export default CustomButton;
