import React, { Component } from 'react';
import { Text, View, Button, Modal, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StackNavigator } from 'react-navigation-stack';
import data from './data.json';
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }


render()
{
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
     <Modal>
        <View style={{ backgroundColor: "#000000", flex: 1 }}>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}>
            <Button style={{ backgroundColor: "#5f9ea0" }} title="Close" onPress={() => this.props.navigation.navigate('Login')} />
          </View>
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: -35
          }}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Newd')}>
              <FontAwesome5 name={'comment'} size={40} color="skyblue" />
            </TouchableHighlight>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: -35
          }}>
            <FontAwesome5 name={'search'} size={40} color="skyblue" Light />
          </View>
          <View style={{ backgroundColor: "#ffffff", margin: 15, padding: 30, borderRadius: 10, flex: 1, alignItems: 'center' }}>
            <Text style={{ fontSize: 30, justifyContent:"center", alignItems:"center"}}>Modal... FULL SCREEN POPUP</Text>
          </View>
        </View>
      </Modal>
      <View style={{ flex: 1, padding: 20 }}>
      </View>
    </View>
  );
}
}


