import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import Header from '../../components/Header';
import leaf from '../../assets/images/leaf.png';
import logo from '../../assets/images/logo.jpg';
import truck from '../../assets/images/truck.png';
import leaf2 from '../../assets/images/leaf2.png';
import rupee from '../../assets/images/rupee.png';
import user from '../../assets/images/user.png';
import done from '../../assets/images/done.png';
import cart2 from '../../assets/images/cart2.png';
import cart1 from '../../assets/images/cart1.png';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import dashimage from '../../assets/images/dashimage.webp';
import Swiper from 'react-native-swiper';

const Home = () => {
  return (
    <>
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
              backgroundColor: '#AD1457',
              minHeight: 180,
              padding: 20,
              marginTop: 40,
            }}>
            <Text style={styles.heading}>
              Christmas and new year offer Available Now
            </Text>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>🛒 CHECKOUT NOW</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.scrollView}>
            <Image style={{alignSelf: 'center'}} source={leaf} />
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: 15,
                color: '#121212',
                marginBottom: 10,
              }}>
              100% Organic
            </Text>
            <Text style={styles.subheader}>Hairvel</Text>
            <Text style={styles.subheader}>Herbal Hair Oil</Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                padding: 12,
                fontSize: 16,
                lineHeight: 25,
                marginTop: 10,
              }}>
              Our hair oil is a treatment to the synergy between locally sourced
              coconut oil, directly collected from the farmers of our region,
              and handpicked natural herbs.
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              <Image source={cart2} style={{height: 25, width: 25}} /> BUY NOW
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              backgroundColor: '#EEEEEE',
              minHeight: 190,
              margin: 15,
              marginTop: 30,
            }}>
            <Image source={dashimage} style={{width: 380, height: 240}} />
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: '#FF1744',
              minHeight: 140,
              margin: 15,
              marginTop: 35,
              borderRadius: 10,
              padding: 20,
            }}>
            <Image style={{alignSelf: 'left'}} source={truck} />
            <Text style={styles.cardtitel}>Free Shiping</Text>
            <Text style={{color: '#fff', fontSize: 16}}>Inside India</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#388E3C',
              minHeight: 140,
              margin: 15,
              borderRadius: 10,
              padding: 20,
            }}>
            <Image style={{alignSelf: 'left'}} source={leaf2} />
            <Text style={styles.cardtitel}>Completely Organic</Text>
            <Text style={{color: '#fff', fontSize: 16}}>100% Guarantee</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#7B1FA2',
              minHeight: 140,
              margin: 15,
              borderRadius: 10,
              padding: 20,
            }}>
            <Image style={{alignSelf: 'left'}} source={rupee} />
            <Text style={styles.cardtitel}>Huge Savings</Text>
            <Text style={{color: '#fff', fontSize: 16}}>RS. 50 Off </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#0277BD',
              minHeight: 140,
              margin: 15,
              borderRadius: 10,
              padding: 20,
            }}>
            <Image style={{alignSelf: 'left'}} source={user} />
            <Text style={styles.cardtitel}>Huge Savings</Text>
            <Text style={{color: '#fff', fontSize: 16}}>Safe To Use</Text>
          </View>
          {/* ImageSlider */}
          <View
            style={{
              flex: 1,
              backgroundColor: '#121212',
              margin: 30,
              borderRadius: 15,
            }}>
            <Swiper style={{height: 300}} autoplay={true}>
              <View>
                <Image source={img1} style={{width: 352, height: 300}} />
              </View>
              <View>
                <Image source={img2} style={{width: 350, height: 300}} />
              </View>
              <View>
                <Image source={img3} style={{width: 352, height: 300}} />
              </View>
            </Swiper>
          </View>

          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.tinyLogo} source={logo} />
            <Text style={{fontSize: 26, fontWeight: 'bold', color: '#212121'}}>
              Natural Hair Care Product
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 10,
                textAlign: 'center',
                margin: 15,
              }}>
              Inspire by the lush landscapes of Palakkad, the granary of Kerela.
            </Text>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#212121',
                marginTop: 10,
              }}>
              An Elixir of Pure Nourishment
            </Text>
          </View>
          <Image style={{alignSelf: 'center', margin: 15}} source={leaf} />

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              columnGap: 10,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'left', fontSize: 16}}>
              <Image source={done} /> 100% Natural
            </Text>
            <Text style={{textAlign: 'right', fontSize: 16}}>
              <Image source={done} />
              Promotes Hair Growth
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              columnGap: 10,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'left', fontSize: 16}}>
              <Image source={done} /> Reduces Hair Fall
            </Text>
            <Text style={{textAlign: 'right', fontSize: 16}}>
              <Image source={done} />
              Cures Scalp Irritating
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              columnGap: 10,
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Text style={{textAlign: 'left', fontSize: 16}}>
              <Image source={done} /> High Nourishing
            </Text>
            <Text style={{textAlign: 'right', fontSize: 16}}>
              <Image source={done} />
              Absorbs Easily
            </Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
              }}>
              <Image source={cart2} style={{height: 25, width: 25}} /> BUY NOW
            </Text>
          </TouchableOpacity>
            <View
              style={{
                flex: 1,
                backgroundColor: '#0D0635',
                minHeight: 250,
                marginTop: 30,
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
              <Text style={{color: '#BDBDBD', fontSize: 14}}>
                Cancellation , Return & Refund Policy
              </Text>
              <Text style={{color: '#BDBDBD', fontSize: 14}}>
                Terms & Conditions
              </Text>
              <Text style={{color: '#BDBDBD', fontSize: 14}}>
                Shipping & Delivery Support
              </Text>
              <Text style={{marginTop: 35, color: '#9E9E9E', padding: 5}}>
                Copyright@ 2024 | Hairvel.in,India
              </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // marginTop: 20,
  },
  scrollView: {
    marginHorizontal: 1,
    marginTop: 20,
  },
  heading: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'popins',
    textAlign: 'center',
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#eee237',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 180,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: '#121212',
  },
  button: {
    elevation: 8,
    backgroundColor: '#558B2F',
    borderRadius: 5,
    width: 180,
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
    margin: 20,
  },
  subheader: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  cardtitel: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    justifyContent: 'center',
  },
  containers: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  column: {
    flex: 1,
    marginLeft: 8,
  },
  // wrapper: {},
  slide: {
    flex: 1,
    width: 440,
    height: 230,
  },
  containerd: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});
