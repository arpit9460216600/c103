import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class RequestScreen extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  updateDatabase = () => {  
    firebase
      .database()
      .ref('/Request/' + (Math.random().toString(36).slice(2)))
      .set({
        new_request: this.state.name
      });
  };

  render() {
    return (
      <View>
        <ImageBackground
          source={require('../background1.png')}
          style={styles.backgroundImage}>
          <Text style={styles.heading}>Request Screen</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ name: text });
            }}
            value={this.state.name}
            placeholder="Enter Your Request"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.updateDatabase()}>
            <Text style={styles.text2}> Submit </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 35,
    flex: 1,
    marginLeft: 45,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  text: {
    flex: 2.19,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    backgroundColor: 'yellow',
  },

  text2: {
    color: 'black',

    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#07B89E',
    marginTop: 60,
    borderRadius: 50,
    width: '60%',
    alignSelf: 'center',
    height: 80,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});
