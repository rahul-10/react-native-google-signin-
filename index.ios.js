import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class demo extends Component {

    _callGoogle(){
        GoogleSignin.configure({
          iosClientId: '482024258204-f54mv8au2moev83soqoafdu9hvdn87tr.apps.googleusercontent.com',
        })
        .then(() => {
            GoogleSignin.signIn()
            .then((user) => {
              alert('Hey '+user.givenName+' you are successfully logged in !');
            })
            .catch((err) => {
              console.log('WRONG SIGNIN', err);
            })
            .done();
        });
    }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this._callGoogle.bind(this)}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>Google Sign in</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
     justifyContent:'center',
     alignItems:'center',
     padding: 10,
     borderRadius:10,
     backgroundColor:'rgb(202,0,0)'
  },
  buttonText:{
      fontSize:16,
      fontWeight :'bold',
      color:'#FFFFFF'
  }
});

AppRegistry.registerComponent('demo', () => demo);
