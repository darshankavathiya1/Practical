/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputBoxProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur: () => void;
  isPassword?: boolean;
}

export const InputBox = ({
  label,
  value,
  onChangeText,
  onBlur,
  isPassword,
}: InputBoxProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };
  return (
    <View style={styles.inputContainer}>
      <Text
        style={[
          styles.label,
          {
            top: isFocused || value ? -10 : 20,
            fontSize: isFocused || value ? 12 : 16,
          },
        ]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={handleBlur}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    left: 0,
    color: '#aaa',
    zIndex: 1,
    // transition: 'all 0.2s ease',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkboxText: {
    fontSize: 14,
    marginLeft: 8,
    color: '#333',
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
