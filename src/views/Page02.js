import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

class DetailPage extends React.Component {
  render() {
    return (
      <View>
        <Text>DetailPage</Text>
      </View>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button
          title="go detail"
          onPress={() => {
            this.props.navigation.navigate('DetailPage');
          }}
        />
      </View>
    );
  }
}

class SettingPage extends React.Component {
  render() {
    return (
      <View>
        <Text>SettingPage</Text>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  HomePage,
  DetailPage,
});

const SettingStack = createStackNavigator({
  SettingPage,
  DetailPage,
});

const TabNavigator = createBottomTabNavigator({
  HomePage: HomeStack,
  SettingPage: SettingStack,
});

export default createAppContainer(TabNavigator);
