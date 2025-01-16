import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {otpValidationSchema} from '../../utils/utils';
import {styles} from './styles';
import {VerifySucess} from '../../components/verifySucess';
import ResetPassword from '../../components/resetPassword';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  VerifyOTPScreen: {fromForgot: boolean};
  // Add other screens here as needed
};

type VerifyOTPScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerifyOTPScreen'
>;

type VerifyOTPScreenRouteProp = RouteProp<
  RootStackParamList,
  'VerifyOTPScreen'
>;

type Props = {
  navigation: VerifyOTPScreenNavigationProp;
  route: VerifyOTPScreenRouteProp;
};

const VerifyOTPScreen: React.FC<Props> = ({route}) => {
  const inputs = useRef<(TextInput | null)[]>([]);

  const fromForgot = route?.params?.fromForgot;

  const [verifySucess, setVerifySucess] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const handleSubmit = () => {
    fromForgot ? setOpenResetPassword(true) : setVerifySucess(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={require('../../assets/verifyBg.png')} // Background image
            style={styles.backgroundImage}>
            <Image
              source={require('../../assets/verifyimg.png')} // Center image
              style={styles.centerImage}
            />
          </ImageBackground>
        </View>

        {verifySucess ? (
          <VerifySucess />
        ) : openResetPassword ? (
          <ResetPassword />
        ) : (
          <Formik
            initialValues={{otp: ''}}
            validationSchema={otpValidationSchema}
            onSubmit={handleSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.form}>
                <Text style={styles.titleText}>Verify OTP</Text>

                <Text style={styles.infoText}>
                  Check your Email Inbox we have sent you the code at
                  john******om
                </Text>
                {/* OTP Input Fields */}
                <View style={styles.otpContainer}>
                  {Array(4)
                    .fill('')
                    .map((_, index) => (
                      <TextInput
                        key={index}
                        style={styles.otpInput}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={text => {
                          let otp = values.otp.split('');
                          otp[index] = text;
                          handleChange('otp')(otp.join(''));

                          if (text && inputs.current[index + 1]) {
                            inputs.current[index + 1]?.focus();
                          }
                        }}
                        value={values.otp[index] || ''}
                        onBlur={handleBlur('otp')}
                        ref={el => (inputs.current[index] = el)}
                        autoFocus={index === 0}
                      />
                    ))}
                </View>
                {errors.otp && touched.otp && (
                  <Text style={styles.errorText}>{errors.otp}</Text>
                )}
                <View style={styles.resendContainer}>
                  <Text style={styles.resendText}>(2:33)</Text>
                  <Text style={styles.resendText}>
                    Did not received the code?
                  </Text>
                  <Text style={styles.linkText}>Resend Code</Text>
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleSubmit()}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        )}
      </ScrollView>
    </View>
  );
};

export default VerifyOTPScreen;
