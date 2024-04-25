import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../../constants';
import Lang from '../../components/Lang';
import {useNavigation} from '@react-navigation/native';
import FirstScreen from './FirstScreen';

export default function LanguageScreen() {
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('FirstScreen');
  };
  return (
    <>
      <StatusBar backgroundColor="#1C792C" barStyle="light-content" />
      <View
        style={{
          backgroundColor: COLORS.greenFill,
          flex: 1,
        }}>
        <View
          style={{
            paddingTop: '90%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={images.Logo} />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingTop: 80,
          }}>
          <Text style={{color: COLORS.white, paddingVertical: 40}}>
            Please Select Your Language
          </Text>
          <Lang language="English" flag={icons.english} click={handleNext} />
          <Lang language="Arabic" flag={icons.iraq} click={handleNext} />
        </View>
      </View>
    </>
  );
}
