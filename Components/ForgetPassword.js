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
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

const ForgetPassword = ({navigation}) => {
  const [ForgetPassword, setForgetPassword] = useState({
    password: '',
  });

  const handleOnChangeText = e => {
    console.log(e);
    setForgetPassword({ForgetPassword: e});
  };

  const submitForm = () => {
    console.log('info', ForgetPassword);
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View>
        <View style={styles.heading}>
          <Text style={styles.text}>ForgetPassword</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Password"
            placeholder="Password"
            onChangeText={e => handleOnChangeText(e)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={submitForm}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Launcher')}>
          <Text style={styles.home}>Launcher</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.home}>Home</Text>
        </TouchableOpacity>
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
    height: 65,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,

    marginVertical: 15,
    padding: 15,
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#DBBE80',
    marginBottom: 55,
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
  home: {
    width: '45%',
    height: 60,
    backgroundColor: '#DBBE80',
    padding: 20,
    textAlign: 'center',
    left: 100,
    margin: 15,
  },
});

export default ForgetPassword;
