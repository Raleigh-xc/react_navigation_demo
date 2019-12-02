import React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/* eslint-disable react-native/no-inline-styles */
class Home extends React.Component {
  static navigationOptions = {
    title: '首页stack-title',
    tabBarLabel: '首页stack',
  };

  render() {
    console.log('Home is rendered');
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="go Home2"
          onPress={() => this.props.navigation.navigate('Home2')}
        />
      </View>
    );
  }
}

class Home2 extends React.Component {
  static navigationOptions = {
    // title: '首页2stack-title',
    // tabBarLabel: '首页2stack',
  };

  render() {
    console.log('Home2 is rendered');
    return (
      <View>
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
  static navigationOptions = {
    tabBarLabel: '详情stack',
  };

  render() {
    console.log('Detail is rendered');
    return (
      <View>
        <Text>Detail</Text>
        <Button
          title="go home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {Home, Home2},
  {
    defaultNavigationOptions: {
      title: '首页default',
    },
    // navigationOptions: {
    //   tabBarLabel: '首页tab',
    // },
    navigationOptions: ({navigation, screenProps}) => {
      console.log('navigation,screenProps', navigation, screenProps);
      // console.log(...getActiveChildNavigationOptions(navigation, screenProps))
      return {
        tabBarLabel: '首页tab',
      };
    },
  },
);

const DetailStack = createStackNavigator({Detail});

// HomeStack.navigationOptions = {
//   // title: '首页tab-title',
//   tabBarLabel: '首页tab',
// };

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  DetailStack,
});

export default createAppContainer(TabNavigator);
