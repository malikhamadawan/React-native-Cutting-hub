import React from 'react';
import { View, StatusBar, Platform, SafeAreaView } from 'react-native';

const CustomView = ({ children, onBoarding, statusbar }) => {
  const dynamicMarginTop = onBoarding !== true ? (Platform.OS === 'ios' ? 50 : 30) : 0;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: dynamicMarginTop }}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {statusbar === 'light' ? (
          <StatusBar barStyle="light-content" />
        ) : (
          <StatusBar barStyle="dark-content" />
        )}
        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomView;
