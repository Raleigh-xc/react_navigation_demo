import React, {Component} from 'react';
import {View, Text, Image, Button, Alert} from 'react-native';

class LogoTitle extends React.Component {
  render() {
    let pic = {
      uri:
        'https://upload.jianshu.io/users/upload_avatars/13473030/d2995655-983b-4d1f-b47e-5c64479f80ba.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
    };
    return <Image source={pic} style={{width: 30, height: 30}} />;
  }
}

class App extends Component {
  static navigationOptions = {
    headerTitle: () => {
      return (
        <View style={{height: 30, width: 30, backgroundColor: '#fff'}}>
          <Text>123</Text>
        </View>
      );
    },
    // headerTitle: () => <LogoTitle />,
    headerRight: () => {
      return (
        <Button
          title="info"
          color="red"
          onPress={() => Alert.alert('this is a button')}
        />
      );
    },
  };
  render() {
    return (
      <View>
        <Text>Page2</Text>
      </View>
    );
  }
}

export default App;
