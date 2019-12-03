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
          title="open modal"
          onPress={() => this.props.navigation.navigate('Modal')}
        />
      </View>
    );
  }
}

class Modal extends React.Component {
  render() {
    return (
      <View>
        <Text>this is home</Text>
        <Button
          title="close modal"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const stackNavigatior = createStackNavigator(
  {
    Home,
    Modal,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(stackNavigatior);
