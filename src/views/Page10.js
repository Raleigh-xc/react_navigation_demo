import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <Text>HomePage</Text>
      </View>
    );
  }
}

class ListPage extends React.Component {
  // static navigationOptions = {
  //   headerTitle: 'list page',
  //   headerShown: false,
  // };

  render() {
    return (
      <View>
        <Text>ListPage</Text>
        <Button
          title="go item"
          onPress={() => this.props.navigation.navigate('ItemPage')}
        />
      </View>
    );
  }
}

class ItemPage extends React.Component {
  render() {
    return (
      <View>
        <Text>ItemPage</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeTab: HomePage,
  ListTab: ListPage,
});

const AppNavigator = createStackNavigator({
  Tabs: TabNavigator,
  ItemPage,
});

export default createAppContainer(AppNavigator);
