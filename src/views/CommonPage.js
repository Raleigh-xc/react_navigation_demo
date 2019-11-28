import React from 'react';
import {View, Text, Button} from 'react-native';

class CommonPage extends React.Component {
  render() {
    return (
      <View>
        <Text>CommonPage</Text>
        <Button title="go to message" />
      </View>
    );
  }
}

export default CommonPage;
