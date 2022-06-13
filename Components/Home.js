import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
} from 'react-native';
import moti from '../Assets/moti.png';
import bell from '../Assets/bell.png';
import profile from '../Assets/profile.png';
import user from '../Assets/user.png';
import like from '../Assets/like.png';
import comment from '../Assets/comment.png';
import save from '../Assets/save.png';
import body from '../Assets/body.jpeg';
import React from 'react';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={moti} style={styles.moti} />
          </TouchableOpacity>
          <View style={styles.header1}>
            <TouchableOpacity>
              <Image source={bell} style={styles.bell} />
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Image source={profile} style={styles.profile} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bar}>
          <View style={styles.bar1}>
            <TouchableOpacity>
              <Image source={user} style={styles.user} />
            </TouchableOpacity>
            <View style={styles.text}>
              <TouchableOpacity>
                <Text style={styles.text1}>Ronald Richards</Text>

                <Text style={styles.text2}>United States</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.dot}>
            <Text>;;;</Text>
          </View>
        </View>
        <View style={styles.image}>
          <TouchableOpacity>
            <Image source={body} style={styles.image1} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    marginLeft: 20,
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  header1: {
    flexDirection: 'row',
  },
  moti: {
    width: 90,
    height: 45,
    backgroundColor: 'white',
  },
  bell: {
    margin: 10,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
  },
  profile: {
    marginHorizontal: 10,
    backgroundColor: 'yellow',

    width: 40,
    height: 40,
  },
  bar: {
    padding: 5,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: 'red',
    width: '90%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bar1: {
    flexDirection: 'row',
  },
  user: {
    backgroundColor: 'blue',
    height: 44,
  },
  text: {
    marginLeft: 10,
    backgroundColor: 'green',
  },
  text1: {
    fontSize: 14,
    height: 19,
    color: '#36596A',
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
  text2: {
    fontSize: 12,
    height: 16,
    color: '#A6A6A6',
    fontFamily: 'Open Sans',
    fontWeight: '400',
  },
  image: {
    width: '90%',
    marginLeft: 20,
    backgroundColor: 'green',
  },
  image1: {
    resizeMode: 'stretch',
  },
  dot: {
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
  },
});

export default Home;
