import React from 'react';
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
  Dimensions,
} from 'react-native';

const EditProfile = () => {
  return (
    <ScrollView
      style={{
        height: Dimensions.get('screen').height,
      }}>
      <View style={styles.heading}>
        <Text style={styles.text}>Edit Profile</Text>
      </View>
      <View style={styles.textinput}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Full name*"
          placeholder="Full name* "
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="username"
          placeholder="username*"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Email Address"
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Profession/Ocupation"
          placeholder="Profession/Ocupation"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Language"
          placeholder="Language"
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Date of Birth"
          placeholder="Date of Birth"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Gender"
          placeholder="Gender"
        />
      </View>

      <View style={styles.heading}>
        <Text style={styles.text2}>Billing Information</Text>
      </View>
      <View style={styles.textinput}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Company"
          placeholder="Company "
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="united States"
          placeholder="united States"
        />

        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="City"
          placeholder="City"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Address"
          placeholder="Address"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          label="Postal/ZIP"
          placeholder="Postal/ZIP"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.submit}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 25,
    marginLeft: 20,
    width: '90%',
    height: 32,
  },
  text: {
    color: '#424242',
    fontSize: 24,
    justifyContent: 'center',
    textAlign: 'center',
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

    marginVertical: 10,
    padding: 15,
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
  text2: {
    color: '#424242',
    fontSize: 24,

    color: '#424242',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
});
export default EditProfile;
