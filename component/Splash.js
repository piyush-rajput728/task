import React, { useState, useEffect, Component } from 'react';

import { ActivityIndicator, View, StyleSheet, Image,Text } from 'react-native';

export default class SplashScreen extends Component
{
  constructor(props)
  {
      super(props);
      setTimeout(()=>
      {
        this.props.navigation.navigate("Login");
      },1000);

}
render()
{

  return (
    <View style={styles.container}>

     <Text style={{fontSize:20}}>Welcome...</Text>
     
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
