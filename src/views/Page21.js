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
          title="go setting ... navigate"
          onPress={() => {
            this.props.navigation.navigate('Setting');
          }}
        />
      </View>
    );
  }
}

class Setting extends React.Component {
  render() {
    return (
      <View>
        <Text>this is setting</Text>
        <Button
          title="go message ... navigate"
          onPress={() => {
            this.props.navigation.navigate('Message');
          }}
        />
      </View>
    );
  }
}

class Message extends React.Component {
  render() {
    return (
      <View>
        <Text>this is message</Text>
        <Button
          title="go detail ... navigate"
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
        <Button
          title="go detail again ... navigate"
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}
        />
        <Button
          title="go detail again ... push"
          onPress={() => {
            this.props.navigation.push('Detail');
          }}
        />
        <Button
          title="go home ... navigate"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <Button
          title="go setting ... navigate"
          onPress={() => {
            this.props.navigation.navigate('Setting');
          }}
        />
      </View>
    );
  }
}

const StackNavigator = createStackNavigator({
  Home,
  Detail,
  Setting,
  Message,
});

export default createAppContainer(StackNavigator);
