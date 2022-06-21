import {
  View,
  Button,
  Text,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import google from '../Assets/google.png';
import facebook from '../Assets/Face.png';
import apple from '../Assets/apple.png';
import {register, getverificationlink} from '../Utils/apiconfig';
import qs from 'qs';
import {useDispatch, useSelector} from 'react-redux';
import {setLoggedIn, setToken} from '../store/action/auth/action';
import {TextInput} from 'react-native-paper';

const isValidField = obj => {
  return Object.values(obj).every(value => value.trim());
};

const updateError = (error, stateUpdate) => {
  stateUpdate(error);
  setTimeout(() => {
    stateUpdate('');
  }, 2500);
};

const isValidEmail = value => {
  const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regx.test(value);
};

const Signup = ({navigation}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);
  const {fullName, email, password, confirmPassword} = form;

  const handleOnChangeText = (value, fieldName) => {
    setForm({...form, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidField(form))
      return updateError('Required all fields!', setError);
    if (!fullName.trim() || fullName.length < 3)
      return updateError('Invalid name!', setError);
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);
    if (password !== confirmPassword)
      return updateError('Password does not match!', setError);
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      // Keyboard.dismiss();
      // const link = await generateLink(form.email);
      setloading(true);
      let data = qs.stringify({
        grant_type: 'password',
        UserName: form.email,
        Password: form.password,
        ClientId: 2,
        Role: 3,
        FullName: form.fullName,
        User_IsActive: 1,
      });
      console.log('register data', data);
      await register(data)
        .then(async res => {
          console.log('res: ', JSON.stringify(res));
          console.log('res:123', res.access_token);
          setloading(false);
          if (res.access_token) {
            dispatch(setToken(res.access_token));
            dispatch(setLoggedIn());
          }
        })
        .catch(error => {
          if (error.response) {
            setloading(false);
            console.log(error);
            if (error.response.data.error == '-99') {
              alert('Email Already Exist.');
            }
          } else if (error.request) {
            setloading(false);
            console.log('request error', error);
          } else if (error) {
            alert('Server Error');
            setloading(false);
          }
        });
      console.log('formsubmit', form);
    }
  };

  console.log(form);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View>
        <View style={styles.heading}>
          <Text style={styles.text}>Sign Up</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.text2}>Please sign up to enter in a app</Text>
        </View>
        <View style={styles.textinput}>
          <TextInput
            value={fullName}
            onChangeText={value => handleOnChangeText(value, 'fullName')}
            style={styles.input}
            autoCapitalize="none"
            label="Full name"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
          <TextInput
            value={email}
            onChangeText={value => handleOnChangeText(value, 'email')}
            style={styles.input}
            autoCapitalize="none"
            label="Email address*"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
          <TextInput
            value={password}
            onChangeText={value => handleOnChangeText(value, 'password')}
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            label="Password*"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
          <TextInput
            value={confirmPassword}
            onChangeText={value => handleOnChangeText(value, 'confirmPassword')}
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            label="Confirm Password*"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
        </View>
        <Text style={styles.error}>{error ? <Text>{error}</Text> : null}</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={submitForm}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.or}>
          <Text>
            ----------------------------------- OR
            ------------------------------------
          </Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.circle}>
            <TouchableOpacity>
              <Image source={facebook} style={styles.facebook} />
            </TouchableOpacity>
          </View>
          <View style={styles.circle}>
            <TouchableOpacity>
              <Image source={google} style={styles.google} />
            </TouchableOpacity>
          </View>
          <View style={styles.circle}>
            <TouchableOpacity>
              <Image source={apple} style={styles.app} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.footer}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.footer1}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  heading: {
    marginTop: 12,
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
  header: {
    width: '90%',

    marginLeft: 20,
  },
  text2: {
    fontSize: 16,

    color: '#9B9C9F',
    fontWeight: '400',
    fontFamily: 'Open Sans',
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
    marginBottom: 0,
    marginVertical: 5,
    padding: 10,
  },

  button: {
    // marginTop: 0,
    width: '90%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#DBBE80',
    marginBottom: 10,
    alignSelf: 'center',
  },
  submit: {
    textAlign: 'center',
    padding: 18,
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  or: {
    width: '90%',
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#9B9C9F',
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 13,
    marginLeft: 18,
    padding: 21,
    width: '90%',
    height: 66,
  },

  facebook: {
    width: 28,
    height: 28,
  },
  google: {
    width: 34,
    height: 34,
  },
  app: {
    width: 23,
    height: 27,
  },
  circle: {
    width: 60,
    height: 60,
    backgroundColor: '#EFECEC',
    borderRadius: 40,
    elevation: 10,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 16,
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  footer: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#98A6AE',
    height: 22,
  },
  footer1: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Open Sans',
    color: '#98A6AE',
    height: 22,
    color: '#DBBE80',
  },
  error: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#DBBE80',

    fontSize: 15,
    width: '90%',
    marginLeft: 20,
  },
});
