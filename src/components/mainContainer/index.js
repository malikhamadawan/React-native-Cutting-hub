// CustomView.js

import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

const CustomView = ({ children, onBoarding, statusbar }) => {
  const dynamicMarginTop = onBoarding !== true ? (Platform.OS === 'ios' ? 49 : 5) : 0;

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: dynamicMarginTop }}>
      {statusbar === 'light' ? (
        <StatusBar barStyle="light-content" />
      ) : (
        <StatusBar barStyle="dark-content" />
      )}
      <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
        {children}
      </View>
    </View>
  );
};

export default CustomView;
