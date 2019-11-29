import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';

class SignIn extends React.Component {
  handleSignInClick = async () => {
    await AsyncStorage.setItem('userToken', 'DOG');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View>
        <Text>this is sign in page</Text>
        <Button title="sign in" onPress={this.handleSignInClick} />
      </View>
    );
  }
}

export default SignIn;
