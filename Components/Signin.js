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
import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import google from '../Assets/google.png';
import facebook from '../Assets/Face.png';
import apple from '../Assets/apple.png';
import {setLoggedIn, setToken} from '../store/action/auth/action';
import {login} from '../Utils/apiconfig';
import qs from 'qs';
import {useDispatch, useSelector} from 'react-redux';

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

const Signin = ({navigation}) => {
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [loading, setloading] = useState(false);
  const [error, setError] = useState('');
  const {email, password} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    console.log(value, fieldName);
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (!isValidField(userInfo))
      return updateError('Required all fields!', setError);
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    if (!password.trim() || password.length < 8)
      return updateError('Password must be atleast 8 chracter long!', setError);
    return true;
  };

  const submitForm = async value => {
    console.log('first', userInfo);
    if (isValidForm()) {
      // Keyboard.dismiss();
      setloading(true);
      let data = qs.stringify({
        grant_type: 'password',
        username: userInfo.email,
        password: userInfo.password,
        ClientId: 1,
        Role: 2,
      });
      console.log('loginnnnnn', data);
      await login(data)
        .then(res => {
          console.log('res: ', JSON.stringify(res));
          setloading(false);
          dispatch(setToken(res.access_token));
          dispatch(setLoggedIn());
        })
        .catch(error => {
          setloading(false);
          if (error.response) {
            console.log('error.response', error.response);
            console.log('responce_error', error.response.data.error);

            if (error.response.data.error == '0') {
              alert('The Email or password is incorrect.');
            }
          } else if (error.request) {
            setloading(false);
            console.log('request error', error.request);
          } else if (error) {
            alert('Server Error');
            setloading(false);
          }
        });
      console.log('info', userInfo);
    }
  };
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View>
        {/* <Text>
          {error ? (
            <Text style={{color: '#DBBE80', fontSize: 15, textAlign: 'center'}}>
              {error}
            </Text>
          ) : null}
        </Text> */}

        <View style={styles.heading}>
          <Text style={styles.text}>Sign In</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.text2}>Please sign in to enter in a app</Text>
        </View>

        <View style={styles.textinput}>
          <TextInput
            value={email}
            style={styles.email}
            autoCapitalize="none"
            label="Email address*"
            onChangeText={value => handleOnChangeText(value, 'email')}
            theme={{colors: {primary: '#9B9C9F'}}}
          />

          <TextInput
            value={password}
            maxLength={10}
            style={styles.pas}
            autoCapitalize="none"
            secureTextEntry={true}
            label="Password*"
            onChangeText={value => handleOnChangeText(value, 'password')}
            theme={{colors: {primary: '#9B9C9F'}}}
          />
        </View>
        <View style={styles.password}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reset}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.reset1}>Reset password?</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{error ? <Text>{error}</Text> : null}</Text>

        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit} onPress={submitForm}>
              {' '}
              Sign In
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
          <Text style={styles.footer}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footer1}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 25,
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
  email: {
    height: 47,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    // fontSize: 6,
    marginVertical: 20,
    padding: 10,
  },
  pas: {
    height: 47,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    padding: 10,
  },
  password: {
    width: '90%',

    marginLeft: 20,
    marginBottom: 10,
  },
  forgot: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',

    color: '#9B9C9F',
  },
  reset: {
    width: '90%',

    marginLeft: 20,
    marginBottom: 15,
  },
  reset1: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Open Sans',
    fontWeight: '600',

    color: '#9B9C9F',
  },
  button: {
    marginTop: 3,
    width: '90%',
    height: 60,
    borderRadius: 10,
    backgroundColor: '#DBBE80',
    marginBottom: 40,
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
    marginTop: 23,
    alignSelf: 'center',
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
    color: '#DBBE80',
    height: 22,
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

export default Signin;
