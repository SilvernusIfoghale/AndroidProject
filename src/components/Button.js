import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {COLORS, icons, images, SIZES, FONTS} from '../constants';

export default function Button(params) {
  return (
    <>
      <TouchableOpacity onPress={params.back}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: SIZES.body6,
            marginVertical: SIZES.body6,
            backgroundColor: params.bgColor,
            borderRadius: SIZES.body6,
            height: 45,
            width: 340,
            marginTop: 20,
          }}>
          <Text style={{...FONTS.h4, color: COLORS.greenSkin}}>
            {params.btn}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
