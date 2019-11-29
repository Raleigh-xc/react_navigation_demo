import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';

class Main extends React.Component {
  handleOutClick = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <View>
        <Text>this is main page</Text>
        <Button title="login out" onPress={this.handleOutClick} />
      </View>
    );
  }
}

export default Main;
