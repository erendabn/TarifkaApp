import React from 'react';
import LottieView from 'lottie-react-native';

function Loading() {
  return (
    <LottieView
      source={require('../../assets/loadingWhite.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
}
export default Loading;
