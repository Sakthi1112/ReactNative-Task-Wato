import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window'); 

export default function LoginScreen() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const EyeIcon = () => (
    <Svg height="24" width="24" viewBox="0 0 24 24" style={styles.eyeIcon}>
      <Path
        d="M1,12 C1,12 5,3 12,3 C19,3 23,12 23,12 C23,12 19,21 12,21 C5,21 1,12 1,12 Z"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />
      {secureTextEntry ? (
        <Path
          d="M9,12 L15,12"
          stroke="white"
          strokeWidth="2"
        />
      ) : (
        <Path
          d="M12,15 C13.1045695,15 14,14.1045695 14,13 C14,11.8954305 13.1045695,11 12,11 C10.8954305,11 10,11.8954305 10,13 C10,14.1045695 10.8954305,15 12,15 Z"
          fill="white"
        />
      )}
    </Svg>
  );

  const handleCreateAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please sign-in to your account</Text>
      <LinearGradient
        colors={['#000', 'rgba(255, 255, 205, 0.5)', '#888', '#555', '#222']}
        start={{ x: 0, y: 3 }}
        end={{ x: 1, y: 0 }}
        style={styles.card}
      >
        <TextInput
          style={[styles.input, styles.emailInput]}
          placeholder="Email"
          placeholderTextColor="grey"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={styles.eyeButton}
          >
            <EyeIcon />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.createAccount} onPress={handleCreateAccount}>
            <Text style={styles.whiteText}>New to our platform?</Text> Create an account
          </Text>
        </TouchableOpacity>

        <Text style={styles.or}>or</Text>

        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../../assest/google.png')} 
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue With Google</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.9, 
    padding: width * 0.05, 
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: width * 0.06, 
    marginBottom: height * 0.05, 
    alignSelf: 'stretch',
    paddingLeft: width * 0.05, 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.01, 
  },
  input: {
    backgroundColor: 'transparent',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: width * 0.04, 
  },
  emailInput: {
    borderColor: 'white',
    borderWidth: 1,
    marginTop: height * 0.01, 
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: height * 0.01, 
    paddingRight: 40, 
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -12,
  },
  eyeButton: {
    position: 'absolute',
    right: 0,
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  forgotPassword: {
    color: '#D4FB54',
    alignSelf: 'flex-end',
    marginTop: height * 0.03, 
    fontSize: width * 0.04, 
  },
  loginButton: {
    backgroundColor: '#D4FB54',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: height * 0.07, 
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: width * 0.045, 
  },
  createAccount: {
    color: '#D4FB54',
    alignSelf: 'center',
    marginTop: height * 0.025, 
    fontSize: width * 0.038, 
  },
  whiteText: {
    color: 'white',
  },
  or: {
    alignSelf: 'center',
    color: '#bbb',
    marginBottom: height * 0.015, 
    marginTop: height * 0.015, 
    fontSize: width * 0.042, 
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.01, 
  },
  googleIcon: {
    width: width * 0.06, 
    height: height * 0.035, 
    marginRight: 10,
  },
  googleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: width * 0.04, 
  },
});
