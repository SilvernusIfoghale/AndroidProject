import {View, Text, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import LanguageScreen from './LanguageScreen';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LanguageScreen');
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar backgroundColor="#1C792C" barStyle="light-content" />
      <View
        style={{
          backgroundColor: COLORS.greenFill,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={images.Logo} />
      </View>
    </>
  );
}
