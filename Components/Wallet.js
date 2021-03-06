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
import cash from '../Assets/cash.png';
import back from '../Assets/back.png';
import wallet from '../Assets/wallet.png';
import Credit from 'react-native-vector-icons/SimpleLineIcons';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
const Wallet = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flex: 1}}
      style={{backgroundColor: '#E5E5E5'}}>
      <View>
        <View style={styles.heading}>
          <View style={styles.back}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Image source={back} style={styles.back1} />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Wallet</Text>
        </View>
        <View style={styles.cash}>
          <View style={styles.waletcash}>
            <Image source={wallet} style={styles.wallet} />
            <View style={styles.walettext}>
              <Text style={styles.cashtext}>$0.00 USD</Text>
              <Text style={styles.cashtext1}>
                {' '}
                Funds available in your account
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.textinput}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Amount (Min $5-Max $5000)"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
          <TextInput
            style={styles.transaction}
            autoCapitalize="none"
            label="Transaction Fee: $10"
            theme={{colors: {primary: '#424242'}}}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            label="Debit/Credit Card (Stirpe)"
            theme={{colors: {primary: '#9B9C9F'}}}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={styles.submit}>Add Funds</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    width: '90%',

    marginVertical: 10,
  },
  text: {
    fontSize: 24,
    marginRight: 140,
    color: '#424242',
    fontFamily: 'Open Sans',
    fontWeight: '700',
    height: 43,
    padding: 4,
  },
  waletcash: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  cash: {
    width: '90%',
    marginTop: 20,
    height: 116,
    marginLeft: 20,
    backgroundColor: '#7889E8',

    borderRadius: 10,
  },
  wallet: {
    marginLeft: 20,
    marginTop: 30,
  },
  cashtext: {
    fontSize: 26,
    marginLeft: 20,
    marginTop: 22,
    // padding: 10,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cashtext1: {
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 14,
    opacity: 0.78,
    color: '#FFFFFF',
  },
  textinput: {
    justifyContent: 'space-between',
    width: '90%',
    lineHeight: 22,
    marginLeft: 20,
    margin: 15,
  },

  input: {
    height: 46,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    // lineHeight: 22,
    marginVertical: 15,
    padding: 10,
  },
  transaction: {
    height: 90,
    backgroundColor: 'rgba(155, 156, 159, 0.1)',
    opacity: 0.5,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,

    marginVertical: 15,
    padding: 10,
    fontSize: 16,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#424242',
  },
  button: {
    width: '90%',
    height: 60,
    backgroundColor: '#DBBE80',
    marginBottom: 55,
    borderRadius: 10,
    marginTop: 25,
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
    borderRadius: 10,
  },
});

export default Wallet;
