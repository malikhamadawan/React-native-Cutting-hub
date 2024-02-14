import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import CustomButton from '../../components/customButton';
import Header from '../../components/header';
import MainContainer from '../../components/mainContainer';

const Start = ({navigation}) => {
  const [splash, setSplash] = useState(0);

  const imageSources = [
    require('../../assets/backGround1.png'),
    require('../../assets/backGround2.png'),
    require('../../assets/backGround3.png'),
    require('../../assets/backGround4.png'),
  ];

  const backgroundImage = imageSources[splash];

  return (
    <MainContainer
      onBoarding={true}
      statusbar="light"
      backgroundColor={'transparent'}
      width={'100%'}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <Header splash={splash} onboarding={'onboard'} />
        <View style={styles.buttonContainer}>
          <CustomButton
            btnColor={'#2158FF'}
            text={'Next'}
            justi={'center'}
            txtColor={'#fff'}
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
              btnColor={'#fff'}
              text={'Skip'}
              justi={'center'}
              txtColor={'#2158FF'}
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
    marginTop: '80%',
  },
});

export default Start;
