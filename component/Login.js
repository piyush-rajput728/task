import React, { Component } from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation-stack';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  render() {
    return (
         
         <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Load List" onPress={() => this.props.navigation.navigate('Details')} />
              
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Newd')}>
            <Text style={{fontSize:16}}>DATA...</Text>
          </TouchableOpacity>
        </View>
 
    );
  }
}


