import React from 'react';
import {View, Text, Button} from 'react-native';

class DetailPage extends React.Component {
  handleBtnClick = () => {
    this.props.navigation.navigate('MessagePage');
  };

  render() {
    return (
      <View>
        <Text>DetailPage</Text>
        <Button title="go to message" onPress={this.handleBtnClick} />
      </View>
    );
  }
}

export default DetailPage;
