import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>DetailScreen</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
    },
  },
  DetailScreen,
});

export default createAppContainer(TabNavigator);
