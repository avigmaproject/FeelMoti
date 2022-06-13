import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

const ResetPassword = ({navigation}) => {
  const [resetPassword, setResetPassword] = useState({
    password: '',
    confirmpassword: '',
  });

  const {password, confirmpassword} = resetPassword;
  const handleOnChangeText = (value, fieldName) => {
    console.log(value, fieldName);
    setResetPassword({...resetPassword, [fieldName]: value});
  };

  const submitForm = () => {
    console.log('info', resetPassword);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>ResetPassword</Text>

      <TextInput
        value={password}
        style={styles.input}
        autoCapitalize="none"
        label="Password"
        placeholder="Password"
        onChangeText={value => handleOnChangeText(value, 'password')}
      />

      <TextInput
        maxLength={10}
        value={confirmpassword}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        label="Confirmpassword"
        placeholder="Confirmpassword*"
        onChangeText={value => handleOnChangeText(value, 'confirmpassword')}
      />

      <TouchableOpacity>
        <Text style={styles.smt} onPress={submitForm}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 25,
    top: -90,
    left: 20,
    width: '100%',
    height: 43,
    color: '#424242',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },

  input: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 18,
    bottom: 80,
    margin: 6,
    borderWidth: 1,
    height: 65,
  },
  password: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: 65,
    color: '#9B9C9F',
    width: '95%',
  },
  reset: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    bottom: 65,
    color: '#9B9C9F',
    width: '95%',
  },
  bttn: {
    width: '90%',
    bottom: 40,
    left: 20,
    fontWeight: 200,
    height: 60,
    background: '#DBBE80',
  },

  header: {
    fontSize: 16,
    textAlignVertical: 'top',
    bottom: 90,
    padding: 10,
    left: 10,
    color: '#9B9C9F',
    fontWeight: '400',
    fontFamily: 'Open Sans',
  },
  or: {
    left: 3,
    textAlign: 'center',
    fontSize: 16,
    bottom: 20,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#9B9C9F',
  },
  footer: {
    textAlign: 'center',
    bottom: -10,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#98A6AE',
    height: 22,
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    width: '100%',
  },
  app: {
    left: 8,
    width: 23,
    height: 27,
    padding: 4,
  },
  google: {
    left: 2,
    width: 34,
    height: 34,
    padding: 4,
  },
  facebook: {
    top: 4,
    left: 5,
    width: 28,
    height: 28,
    padding: 3,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: -20,
    width: '100%',
    height: 130,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 40,
    elevation: 10,
    left: 5,
  },
  circleFacebook: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 40,
    elevation: 10,
    left: -180,
  },
  circleApple: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 40,
    elevation: 10,
    left: 180,
  },
  smt: {
    width: '90%',
    height: 60,
    backgroundColor: '#DBBE80',
    padding: 20,
    textAlign: 'center',
    left: 20,
  },
});

export default ResetPassword;
