/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import logo from '../../assets/images/logo.jpg';
import menu from '../../assets/images/menu.png';
import cart from '../../assets/images/cart.png';
import rupees from '../../assets/images/rupees.png';

const Header = ({navigation}) => {
  const goToScreen = () => {
    Alert.alert('Hello');
    navigation.toggleDrawer();
  };
  return (
    <View
      style={{flexDirection: 'row', height: 50, marginTop: 40, padding: 30}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={styles.tinyLogo} source={logo} />
      </View>
      <View style={{flex: 4}} />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={rupees}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
      </View>
      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={cart}
          style={{width: 30, height: 30, resizeMode: 'contain'}}
        />
      </View>
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'right', alignItems: 'right'}}>
        {/* <Image
          source={menu}
          style={{width: 50, height: 50, resizeMode: 'contain'}}
          onPress={goToScreen}
        /> */}
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 10,
    padding: 10,
  },
  heading: {
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: 30,
  },
  tinyLogo: {
    height: 120,
    width: 130,
  },
});
