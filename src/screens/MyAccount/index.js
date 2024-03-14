import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import Header from '../../components/Header';
import google from '../../assets/images/google.png';
import logo from '../../assets/images/logo.jpg';

const MyAccount = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />

        <View style={{marginTop: 40, backgroundColor: '#FAFAFA'}}>
          <Text
            style={{
              fontSize: 28,
              padding: 15,
              fontWeight: 'bold',
              color: '#212121',
            }}>
            My account
          </Text>
          <Text
            style={{
              fontSize: 26,
              padding: 15,
              fontWeight: 'bold',
              color: '#212121',
            }}>
            Login
          </Text>
          <View
            style={{
              margin: 10,
              elevation: 3,
              height: 440,
              width: 390,
              backgroundColor: '#FAFAFA',
              borderRadius: 5,
              alignSelf: 'center',
              padding: 5,
              borderColor: '#BDBDBD',
            }}>
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
                color: '#212121',
              }}>
              Username or email address
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />

            <Text
              style={{
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 1,
                color: '#212121',
              }}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <Text
              style={{
                paddingLeft: 15,
                textAlign: 'left',
                fontSize: 16,
                color: '#212121',
              }}>
              Your personal data will be used to support your experience
              throughout the website,to manage access to your account and for
              other purposes describe in your{' '}
              <Text style={{color: '#8BC34A'}}>privacy policy</Text>.
            </Text>

            <View style={styles.button}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                LOGIN
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  height: 40,
                  paddingLeft: 10,
                }}>
                <Image source={google} />
              </View>
              <View style={styles.linkbutton}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Continue with Google
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 26,
                padding: 15,
                fontWeight: 'bold',
                color: '#212121',
              }}>
              Register
            </Text>

            <View
              style={{
                margin: 10,
                elevation: 3,
                height: 440,
                width: 390,
                backgroundColor: '#FAFAFA',
                borderRadius: 5,
                alignSelf: 'center',
                padding: 5,
                borderColor: '#BDBDBD',
              }}>
              <Text
                style={{
                  paddingLeft: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 10,
                  color: '#212121',
                }}>
                Email address
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />

              <Text
                style={{
                  paddingLeft: 15,
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 1,
                  color: '#212121',
                }}>
                Password
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
              <Text
                style={{
                  paddingLeft: 15,
                  textAlign: 'left',
                  fontSize: 16,
                  color: '#212121',
                }}>
                Your personal data will be used to support your experience
                throughout the website,to manage access to your account and for
                other purposes describe in your{' '}
                <Text style={{color: '#8BC34A'}}>privacy policy</Text>.
              </Text>

              <View style={styles.button}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  REGISTER
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 40,
                    paddingLeft: 10,
                  }}>
                  <Image source={google} />
                </View>
                <View style={styles.linkbutton}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                    Continue with Google
                  </Text>
                </View>
              </View>
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
            <Text style={{marginTop: 35, color: '#9E9E9E', padding: 5}}>
              Copyright@ 2024 | Hairvel.in,India
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // marginTop: 20,
  },
  input: {
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FFFFFF',
    backgroundColor: '#fff',
    elevation: 1,
  },
  button: {
    elevation: 8,
    backgroundColor: '#BA68C8',
    borderRadius: 5,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'left',
    color: '#ffffff',
    textTransform: 'capitalize',
    margin: 20,
  },
  linkbutton: {
    width: 200,
    height: 45,
    backgroundColor: '#2196F3',
    marginLeft: 10,
    justifyContent: 'center',
    alignSelf: 'left',
  },
});
