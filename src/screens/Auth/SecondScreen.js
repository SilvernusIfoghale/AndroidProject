import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../../constants';
import Gesture from '../../components/Gesture';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import ThirdScreen from './ThirdScreen';

export default function SecondScreen() {
  const navigation = useNavigation();
  handleNext = () => {
    navigation.navigate('ThirdScreen');
  };
  return (
    <>
      <StatusBar backgroundColor="#1C792C" barStyle="light-content" />
      <View style={{backgroundColor: COLORS.greenFill, flex: 1}}>
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
            justifyContent: 'center',
            gap: SIZES.body6,
            paddingTop: 140,
          }}>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.white,
              letterSpacing: 2.7,
              lineHeight: 35,
            }}>
            The App also Enables{' '}
            <Text style={{color: COLORS.yellowFill}}>Users</Text> Interact
          </Text>
          <Button btn="Next" bgColor={COLORS.white} back={handleNext} />
          <Gesture
            left={COLORS.grayWhite}
            middle={COLORS.white}
            right={COLORS.grayWhite}
          />
        </View>
      </View>
    </>
  );
}
