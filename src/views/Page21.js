import React from 'react';
import {View, Text, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>this is home</Text>
        <Button
          title="go detail"
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        />
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
