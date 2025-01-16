import {Formik} from 'formik';
import React, {useState} from 'react';
import {repetPasswordSchema} from '../utils/utils';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {InputBox} from './inputBox';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  LoginScreen: undefined;
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

const initialValues = {
  newPassword: '',
  confirmPassword: '',
};
const ResetPassword = () => {
  const [confirmReset, setConfirmReset] = useState(false);
  const navigation = useNavigation<NavigationProp>();
  const handleSubmit = () => {
    setConfirmReset(true);
  };
  return (
    <View style={styles.container}>
      {confirmReset ? (
        <>
          <Text style={styles.titleText}>Reset Password?</Text>

          <Text style={styles.infoText}>
            Your new password must be different from previous used password,
            contain at least 8 letters.
          </Text>
          <Formik
            initialValues={initialValues}
            validationSchema={repetPasswordSchema}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.formContainer}>
                {/* email */}
                <InputBox
                  label="New Password"
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={() => handleBlur('newPassword')}
                />
                {touched.newPassword && errors.newPassword && (
                  <Text style={styles.errorText}>{errors.newPassword}</Text>
                )}

                {/* Password */}
                <InputBox
                  label="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={() => handleBlur('confirmPassword')}
                  isPassword={true}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </>
      ) : (
        <View>
          <Text style={styles.titleText}>Password is set</Text>

          <Text style={styles.infoText}>
            Reset password is done, login with new password to continue using
            app.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.continueText}>Continue to Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#314FA4',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 24,
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#343434',
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  continueText: {
    color: '#314FA4',
    textDecorationLine: 'underline',
    fontSize: 18,
    paddingHorizontal: 20,
  },
});
