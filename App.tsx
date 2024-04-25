import React from 'react';
import {Text, View} from 'react-native';
import AppStack from './src/navigator/AppStack';
import {COLORS, icons, images, SIZES, FONTS} from './src/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './src/navigator/AuthStack';

function App() {
  const Stack = createStackNavigator();
  return (
    <>
      {/* <AppStack /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

// import { COLORS, icons, images, SIZES, FONTS } from './src/constants';

//     <View>
//       <Text style={{ fontFamily: "Poppins-Bold" }}>App</Text>
//       <Image source={icons.check} />
//       <Image source={images.boy} />
//       <View style={{ marginTop: SIZES.h5, marginBottom: SIZES.h4 }}>
//         <Text style={{ ...FONTS.body4, color: COLORS.pink }}>My name is Favour, I'm the most handsome boy in Africa.</Text>
//       </View>
//     </View>
//   )
// }
