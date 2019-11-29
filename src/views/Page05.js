import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

/* eslint-disable react-native/no-inline-styles */
class Home extends React.Component {
  render() {
    console.log('Home is rendered');
    return (
      <View style={{backgroundColor: '#eee', flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#eee" />
        <Text>Home</Text>
        <Button
          title="go detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}

class Detail extends React.Component {
  render() {
    console.log('Detail is rendered');
    return (
      <View style={{backgroundColor: 'skyblue', flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="skyblue" />
        <Text>Detail</Text>
        <Button
          title="go home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const StackNavigator = createStackNavigator({
  Home,
  Detail,
});

export default createAppContainer(StackNavigator);
