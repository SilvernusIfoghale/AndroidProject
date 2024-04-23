import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigator/AuthStack';
import AppStack from './src/navigator/AppStack';

function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AppStack" component={AppStack} />
          <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
// import { StyleSheet, Text, View, Image } from 'react-native'
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import MainNavigator from './screens/MainNavigator';
// import { COLORS, icons, images, SIZES, FONTS } from './src/constants';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <MainNavigator />
//     </NavigationContainer>
//   );
// };
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

// export default App

// const styles = StyleSheet.create({})
