import React from 'react';
import {View, Text, Button} from 'react-native';

class HomePage extends React.Component {
  handleBtnClick = () => {
    this.props.navigation.navigate('MessagePage');
  };

  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button title="go to message" onPress={this.handleBtnClick} />
      </View>
    );
  }
}

export default HomePage;
