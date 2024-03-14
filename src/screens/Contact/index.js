import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import leaf4 from '../../assets/images/leaf4.jpg';
import call from '../../assets/images/call.png';
import email from '../../assets/images/email.png';
import logo from '../../assets/images/logo.jpg';
import location from '../../assets/images/location.png';

const Contact = () => {
  leaf4;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#fff"
          translucent={true}
        />
        <Header />
        <View
          style={{
            flex: 1,
            backgroundColor: '#EEEEEE',
            minHeight: 130,
            padding: 20,
            marginTop: 40,
          }}>
          <Text style={styles.heading}>Get In Touch</Text>
        </View>

        <View style={styles.box}>
          <Image
            style={{alignSelf: 'center', width: 220, height: 100}}
            source={leaf4}
          />
          <View
            style={{
              marginTop: 15,
              width: 350,
              height: 130,
              // backgroundColor: '#EEEEEE',
              alignSelf: 'center',
              borderRadius: 2,
              borderColor: '#121212',
              elevation: 1,
            }}>
            <Image style={{alignSelf: 'center'}} source={call} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#121212',
              }}>
              +91 88914 86139
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: 350,
              height: 130,
              alignSelf: 'center',
              borderRadius: 2,
              borderColor: '#121212',
              elevation: 1,
            }}>
            <Image style={{alignSelf: 'center', marginTop: 5}} source={email} />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#121212',
                marginTop: 15,
              }}>
              hairvelIndia@gmail.com
            </Text>
          </View>

          <View
            style={{
              marginTop: 15,
              width: 350,
              height: 130,
              alignSelf: 'center',
              borderRadius: 2,
              borderColor: '#121212',
              elevation: 1,
              marginTop: 15,
              marginBottom:5
            }}>
            <Image
              style={{alignSelf: 'center', marginTop: 5}}
              source={location}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#121212',
                marginTop: 15,
                padding: 5,
              }}>
              12/220, Pattarampally,Kosathara Kerala , Pin- 678101
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#0D0635',
            minHeight: 250,
            marginTop: 30,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
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
          <Text style={{marginTop: 35, color: '#9E9E9E', padding: 5}}>
            Copyright@ 2024 | Hairvel.in,India
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // marginTop: 25,
  },
  scrollView: {
    marginHorizontal: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 35,
    padding: 15,
    fontWeight: 'bold',
    color: '#121212',
    fontFamily: 'popins',
    textAlign: 'center',
    alignSelf: 'center',
  },
  box: {
    height: 560,
    margin: 15,
    backgroundColor: '#fff',
    elevation: 6,
    // marginBottom: 10,
    paddingBottom: 5,
  },
});
