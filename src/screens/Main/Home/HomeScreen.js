import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
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
