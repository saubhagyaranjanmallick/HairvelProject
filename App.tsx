import * as React from 'react';
import {Image, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import logo from './src/assets/images/logo.jpg';
import cart from './src/assets/images/cart.png';

import Home from './src/screens/Home';
import Shop from './src/screens/Shop';
import Contact from './src/screens/Contact';
import MyAccount from './src/screens/MyAccount';
import Header from './src/components/Header';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  const CustomHeader = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          // paddingVertical: 40,
        }}>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: '#8BC34A'}}>
          Hairvel
        </Text>

        <Image
          source={logo} // Replace with the path to your logo image
          style={{width: 60, height: 50}}
        />
      </View>
    );
  };
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 3}}>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#fff',
              width: 240,
            },
          }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Shop" component={Shop} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="MyAccount" component={MyAccount} />
        </Drawer.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
