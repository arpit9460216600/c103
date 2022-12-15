import React, { Component } from 'react';
import RequestScreen from './RequestScreen';
import { Text, View,StyleSheet,ImageBackground,TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
          <View>
          <ImageBackground source={require('../background0.png')} style={styles.backgroundImage}>           
            <Text style={styles.heading}>Home Screen</Text>
            <TouchableOpacity style={styles.routeCard} 
            onPress={()=>this.props.navigation.navigate('RequestScreen')}
                    >
            <Text style={styles.routeText}>press me</Text>
            </TouchableOpacity>          
              </ImageBackground>
              </View>              
        )
    }      
}
const styles = StyleSheet.create({
  heading:{
    color:'green',
    fontSize:35,
     flex: 1,
     marginLeft:70,
     fontWeight: "bold",
    justifyContent: 'center',
     alignItems: 'center',
      resizeMode: 'cover'
  },
   backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width:330,
        height:477
    },
       routeCard: {
        flex: 2.19,
        justifyContent: "center",
        alignItems: "center",
        margin: 175,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 200,
        backgroundColor: "yellow"
    },
      routeText: {
        fontSize: 29,
        fontWeight: "bold",
        marginLeft: 5,
        color: 'blue',
        justifyContent: "center",
        alignItems: "center"
    }
});