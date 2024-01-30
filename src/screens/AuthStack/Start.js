import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import CustomButton from '../../components/button';
import OnboardingText from '../../components/onboardingText';
import MainContainer from '../../components/mainContainer';

const Start = ({ navigation }) => {
  const [splash, setSplash] = useState(0);

  const imageSources = [
    require('../../assets/backGround1.png'),
    require('../../assets/backGround2.png'),
    require('../../assets/backGround3.png'),
    require('../../assets/backGround4.png'),
  ];

  const backgroundImage = imageSources[splash];

  return (
    <MainContainer onBoarding={true} statusbar="light">
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <OnboardingText splash={splash} />
        <View style={styles.buttonContainer}>
          <CustomButton
            btnColor={'#C6147B'}
            text={'Next'}
            txtColor={'black'}
            press={() => {
              if (splash === 3) {
                navigation.navigate('SignUp');
              } else {
                setSplash(splash + 1);
              }
            }}
          />
          {splash < 3 ? (
            <CustomButton
              btnColor={'#000'}
              text={'Skip'}
              txtColor={'#fff'}
              press={() => navigation.navigate('SignUp')}
            />
          ) : null}
        </View>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '80%',
  },
});

export default Start;
