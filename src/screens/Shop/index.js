import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import dashimage from '../../assets/images/dashimage.webp';
import logo from '../../assets/images/logo.jpg';
import Slider from 'react-native-slider';
// import {TextInput} from 'react-native-gesture-handler';

const Shop = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View
          style={{
            flex: 1,
            backgroundColor: '#EEEEEE',
            minHeight: 130,
            padding: 20,
            marginTop: 40,
          }}>
          <Text style={{fontSize: 16}}>Home/Shop</Text>

          <Text
            style={{
              fontSize: 29,
              padding: 10,
              fontWeight: 'bold',
              color: '#558B2F',
            }}>
            Shop
          </Text>
          <Text style={{fontSize: 16}}>Showing the single result</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: '#EEEEEE',
              minHeight: 190,
              padding: 10,
              marginTop: 30,
              alignSelf: 'center',
            }}>
            <Image
              source={dashimage}
              style={{width: 380, height: 260, position: 'relative'}}
            />
            <View style={styles.greenCircle}>
              <Text style={{marginTop: 10, alignSelf: 'center', fontSize: 16}}>
                Sale!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.transparentButton}
              onPress={() => {
                // Handle button press
              }}>
              <Text style={styles.buttonText}>OUT OF STOCK</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{fontSize: 16, marginTop: 10, textAlign: 'center'}}>
              Hair Products
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              HAIRVEL Herbal Hair Oil
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              $49.00
            </Text>
          </View>

          <View style={{marginTop: 10, flexDirection: 'row', columnGap: 3}}>
            <View
              style={{
                flex: 5,
              }}>
              <TextInput style={styles.input}>Search products...</TextInput>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#558B2F',
                borderRadius: 5,
                margin: 5,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: 10,
                }}>
                Go
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 25,
                marginTop: 30,
                color: '#212121',
              }}>
              Filter by price
            </Text>
            <Slider
              value={0.3}
              thumbTintColor="#8BC34A"
              minimumTrackTintColor="#8BC34A"
              // minimumValue='100'
              // maximumValue='500'
              // step="50"
            />
          </View>

          <View style={{flexDirection: 'row', columnGap: 3}}>
            <View style={{flex: 3}}></View>

            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 3,
                margin: 2,
                padding: 5,
                elevation: 1,
                borderWidth: 1,
                borderColor: '#BDBDBD',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#121212',
                  fontSize: 18,
                  marginTop: 5,
                  padding: 3,
                  alignSelf: 'center',
                }}>
                500
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                borderRadius: 3,
                margin: 2,
                padding: 5,
                elevation: 1,
                borderWidth: 1,
                borderColor: '#BDBDBD',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  color: '#121212',
                  fontSize: 18,
                  marginTop: 5,
                  padding: 3,
                  alignSelf: 'center',
                }}>
                350
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0D0635',
            minHeight: 250,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 50,
            paddingTop: 30,
          }}>
          <Image style={styles.tinyLogo} source={logo} />

          <Text
            style={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: 25,
              margin: 15,
            }}>
            Site Links
          </Text>
          <Text style={{color: '#BDBDBD', fontSize: 16}}>
            Cancellation , Return & Refund Policy
          </Text>
          <Text style={{color: '#BDBDBD', fontSize: 16}}>
            Terms & Conditions
          </Text>
          <Text style={{color: '#BDBDBD', fontSize: 16}}>
            Shipping & Delivery Support
          </Text>
          {/* <View
            style={{
              borderBottomColor: '#6E6E6E',
              borderBottomWidth:5,
            }}
          /> */}
          <Text style={{marginTop: 35, color: '#9E9E9E', padding: 8}}>
            Copyright@ 2024 | Hairvel.in,India
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // marginTop: 25,
  },
  transparentButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Transparent white background
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    alignSelf: 'center',
    width: 330,
    marginTop: 210,
  },
  buttonText: {
    color: '#558B2F', // Change text color as needed
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  greenCircle: {
    width: 50,
    height: 50,
    backgroundColor: '#7CB342',
    borderRadius: 30,
    position: 'absolute',
    top: 0, // Adjust the top position as needed
    right: 0,
  },
  tinyLogo: {
    height: 120,
    width: 130,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFFFFF',
    backgroundColor: '#fff',
    elevation: 1,
  },
});
