import {View, Text} from 'react-native';
import React from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../constants';

export default function Gesture(params) {
  return (
    <View style={{flexDirection: 'row', gap: 20, paddingTop: 15}}>
      <View
        style={{
          height: 5,
          width: 100,
          borderRadius: SIZES.radius,
          backgroundColor: params.left,
        }}></View>
      <View
        style={{
          height: 5,
          width: 100,
          borderRadius: SIZES.radius,
          backgroundColor: params.middle,
        }}></View>
      <View
        style={{
          height: 5,
          width: 100,
          borderRadius: SIZES.radius,
          backgroundColor: params.right,
        }}></View>
    </View>
  );
}
