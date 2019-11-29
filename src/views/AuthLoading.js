import React from 'react';
import {View, ActivityIndicator, AsyncStorage, StatusBar} from 'react-native';

class AuthLoading extends React.Component {
  componentDidMount() {
    this._initAuth();
  }

  _initAuth = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    console.log(userToken);
    const routeName = userToken ? 'Main' : 'SignIn';
    this.props.navigation.navigate(routeName);
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" backgroundColor="red" />
      </View>
    );
  }
}

export default AuthLoading;
