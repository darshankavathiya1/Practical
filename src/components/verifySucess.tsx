import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const VerifySucess = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>OTP is verified...</Text>
      <Text style={styles.infoText}>
        Happy to say everything went smoothly. Start with Tradesmen for great
        experience...
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.continueText}>Continue to App</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 24,
    color: '#000',
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#343434',
    fontSize: 16,
    paddingVertical: 10,
  },
  continueText: {
    color: '#314FA4',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});
