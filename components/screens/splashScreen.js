import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.godshadow}>
        <ImageBackground
          source={require('../../assest/God.png')}
          resizeMode="contain"
          style={styles.topRightImage}></ImageBackground>
      </View>

      <ImageBackground
        source={require('../../assest/Sparkles.png')}
        resizeMode="cover"
        style={styles.backgroundImage}></ImageBackground>

      <View style={styles.logoContainer}>
        <ImageBackground
          source={require('../../assest/Logo.png')}
          resizeMode="contain"
          style={styles.logo}></ImageBackground>
        <Text style={styles.textStyle1}>Zero Cost</Text>
        <Text style={styles.textStyle2}>WhatsApp Messaging</Text>
        <Text style={styles.textStyle3}>platform</Text>
      </View>

      <TouchableOpacity
        style={styles.getStartedButtonContainer}
        onPress={() => navigation.navigate('SignUp')}>
        <LinearGradient
          colors={['#3b3c3d', '#000000']}
          start={{x: 1, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.getStartedButtonGradient}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account?</Text>
          <Text style={styles.signInLink}>Sign in instead</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    width: '90%',
    height: '40%',
    left: '20%',
  },
  logoContainer: {
    position: 'absolute',
    left: '5%',
    top: '39%',
    width: '40%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  textStyle1: {
    position: 'absolute',
    left: '5%',
    top: '85%',
    color: 'white',
    fontSize: 34,
    width: '110%',
    textAlign: 'left',
    fontFamily: 'GT-Super-Text-Regular-Trial',
  },
  textStyle2: {
    position: 'absolute',
    left: '5%',
    top: '119%',
    color: 'white',
    fontSize: 34,
    width: '260%',
    textAlign: 'left',
    fontFamily: 'GT-Super-Text-Regular-Trial',
  },
  textStyle3: {
    position: 'absolute',
    left: '5%',
    top: '148%',
    color: 'white',
    fontSize: 34,
    width: '260%',
    textAlign: 'left',
    fontFamily: 'GT-Super-Text-Regular-Trial',
  },
  getStartedButtonContainer: {
    position: 'absolute',
    bottom: 85,
    alignSelf: 'center',
  },
  getStartedButtonGradient: {
    paddingHorizontal: 130,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
  },
  getStartedText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 45,
    width: '100%',
  },
  signInText: {
    color: '#FFF',
    fontSize: 16,
  },
  signInLink: {
    color: '#D4FB54',
    fontSize: 16,
  },
  godshadow: {
    position: 'absolute',
    right: 0,
    top: 0,

    width: '155%',
    height: '155%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRightImage: {
    width: '100%',
    bottom: 200,
    height: '100%',
  },
});
