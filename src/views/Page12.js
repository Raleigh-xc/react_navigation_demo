import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer, withNavigation} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class ButtonWithNavigation extends React.Component {
  render() {
    return (
      <View>
        <Button
          title="click me"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
      </View>
    );
  }
}
const Button2 = withNavigation(ButtonWithNavigation);

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>this is home</Text>
        <Button2 />
      </View>
    );
  }
}

class Detail extends React.Component {
  render() {
    return (
      <View>
        <Text>this is detail</Text>
      </View>
    );
  }
}

const StackNavigator = createStackNavigator({
  Home,
  Detail,
});

export default createAppContainer(StackNavigator);
