
import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import data from './data.json';
export default class Newd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isLoading: true,
      dataSource: [],
    };
  }
   componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: data.info
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.id} is {item.category} or {item.image} or {item.id} or {item.subCategory}</Text>
              </View>
            )
          }}
          keyExtractor={(item, index) => index.toString()} />
      </View>

    );
  }
}

