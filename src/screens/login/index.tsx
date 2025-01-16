import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import {loginValidationSchema} from '../../utils/utils';
import {InputBox} from '../../components/inputBox';
import {login} from '../../features/api';
import {NavigationProp} from '@react-navigation/native';

type LoginValues = {
  email: string;
  password: string;
};

type LoginResponse = {
  data?: any;
};

type Props = {
  navigation: NavigationProp<any>;
  login: (email: string, password: string) => Promise<LoginResponse>;
};

const initialValues = {
  email: '',
  password: '',
};
const LoginScreen = ({navigation}: Props) => {
  const handleLogin = async (values: LoginValues) => {
    try {
      const response = await login(values?.email, values?.password);

      if (response?.data) {
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('User not found', 'Please first register your email');
      }
    } catch (error: any) {
      Alert.alert(
        'Login Failed',
        error?.response?.data?.message || error?.message,
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../../assets/background.png')}
            style={styles.backgroundImage}>
            <Image
              source={require('../../assets/userIcon.png')}
              style={styles.centerImage}
            />
          </ImageBackground>
        </View>
        <Text style={styles.titleText}>Login</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}>
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
                label="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              {/* Password */}
              <InputBox
                label="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => handleBlur('password')}
                isPassword={true}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                  <Text style={styles.linkText}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Don’t have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={styles.loginTitle}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
