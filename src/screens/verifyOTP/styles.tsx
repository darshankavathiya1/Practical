import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#E2E9FF',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  backgroundImage: {
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  centerImage: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  resendContainer: {
    marginVertical: 10,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  resendText: {
    fontSize: 16,
    color: '#000',
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
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  infoText: {
    color: '#343434',
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
