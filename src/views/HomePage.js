import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class App extends Component {
  static navigationOptions = {
    title: 'inner title',
  };

  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button
          title="go to page1"
          onPress={() => this.props.navigation.navigate('Page1', {name: 'abc'})}
        />
      </View>
    );
  }
}

export default App;
