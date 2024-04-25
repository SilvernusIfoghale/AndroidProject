import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, icons, images, SIZES, FONTS} from '../constants';

export default function Lang(params) {
  return (
    <TouchableOpacity onPress={params.click}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: SIZES.body6,
          marginVertical: SIZES.body6,
          borderColor: COLORS.white,
          borderWidth: 1,
          borderRadius: SIZES.body6,
          // height: SIZES.navTitle,
          height: 45,
          width: 340,
        }}>
        <Image
          source={params.flag}
          style={{width: SIZES.h2, height: SIZES.h2}}
        />
        <Text style={{color: COLORS.white}}>{params.language}</Text>
      </View>
    </TouchableOpacity>
  );
}
