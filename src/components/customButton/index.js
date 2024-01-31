import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const CustomButton = ({ text, press, btnColor, txtColor, borderWidth, borderColor, showImage, imgPath }) => {
  const handlePress = () => {
    press();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, { backgroundColor: btnColor, borderWidth: borderWidth ? 2 : 0, borderColor: borderColor }]}>
      {showImage && (
        <Image
          source={imgPath}
          style={{
            height: 24,
            width: 24,
            marginRight: 10,
          }}
        />
      )}
      <Text style={{ color: txtColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
});

export default CustomButton;
