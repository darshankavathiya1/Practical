import React, {useState} from 'react';
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
import {validationSchema} from '../../utils/utils';
import {InputBox} from '../../components/inputBox';
import {CheckBox} from 'react-native-elements';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isAgreeTC: false,
};
const RegisterScreen = ({navigation}: any) => {
  // const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleRegister = () => {
    console.log('call');

    navigation.navigate('VerifyOTPScreen');
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
        <Text style={styles.titleText}>Sign up</Text>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.formContainer}>
              {/* First Name */}
              <InputBox
                label="First Name"
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                onBlur={() => handleBlur('firstName')}
              />
              {touched.firstName && errors.firstName && (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              )}

              {/* Last Name */}
              <InputBox
                label="Last Name"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                onBlur={() => handleBlur('lastName')}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              )}

              {/* Email */}
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
              {/* <CheckBox title="Click Here" checked={values.isAgreeTC} /> */}
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxText}>
                  By clicking here you are agreed to our{' '}
                  <Text style={styles.linkText}>Terms & Condition</Text>
                </Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <Text style={styles.footerText}>
                We will share OTP to your Email ID for authentication
              </Text>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Already have an Account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('LoginScreen')}>
                  <Text style={styles.loginTitle}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;
