import {
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

const ResetPassword = () => {
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
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View>
        <View style={styles.heading}>
          <Text style={styles.text}>ResetPassword</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            value={password}
            style={styles.input}
            autoCapitalize="none"
            label="Password"
            theme={{colors: {primary: '#9B9C9F'}}}
            onChangeText={value => handleOnChangeText(value, 'password')}
          />
          <TextInput
            value={confirmpassword}
            style={styles.input}
            autoCapitalize="none"
            label="confirm password"
            theme={{colors: {primary: '#9B9C9F'}}}
            onChangeText={value => handleOnChangeText(value, 'confirmpassword')}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={submitForm}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginTop: 40,
    marginLeft: 20,
    width: '90%',
    height: 43,

    marginVertical: 10,
  },
  text: {
    fontSize: 30,

    color: '#424242',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  textinput: {
    justifyContent: 'space-between',
    width: '90%',

    marginLeft: 20,
    margin: 15,
  },

  input: {
    height: 45,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,

    marginVertical: 15,
    padding: 10,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#DBBE80',
    marginBottom: 55,
    borderRadius: 10,
    left: 20,
  },
  submit: {
    textAlign: 'center',
    padding: 18,
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default ResetPassword;
