import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  formContainer: {
    // flex: 1,
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
  forgotPasswordContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'flex-end',
  },

  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 18,
    color: '#000',
  },
  loginTitle: {
    fontSize: 18,
    color: '#314FA4',
  },
  infoText: {
    color: '#343434',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
