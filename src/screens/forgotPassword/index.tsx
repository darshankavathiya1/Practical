import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {Formik} from 'formik';
import {forgotPasswordSchema} from '../../utils/utils';
import {InputBox} from '../../components/inputBox';

const initialValues = {
  email: '',
};
const ForgotPasswordScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    navigation.navigate('VerifyOTPScreen', {fromForgot: true});
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../../assets/background.png')} // Background image
            style={styles.backgroundImage}>
            <Image
              source={require('../../assets/userIcon.png')} // Center image
              style={styles.centerImage}
            />
          </ImageBackground>
        </View>
        <Text style={styles.titleText}>Forgot Password?</Text>
        <Text style={styles.infoText}>
          Enter your registered email id, we will share verification code.
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordSchema}
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
                label="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => handleBlur('email')}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
