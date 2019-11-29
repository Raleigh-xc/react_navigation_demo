import React from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';

class HomePage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({tintColor}) => (
      <Icon name="home" size={24} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <Text>HomePage</Text>
        <Button
          title="go detail"
          onPress={() => {
            this.props.navigation.navigate('DetailPage');
          }}
        />
      </View>
    );
  }
}

class DetailPage extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Detail',
    drawerIcon: ({tintColor}) => (
      <Icon name="barschart" size={24} color={tintColor} />
    ),
  };

  render() {
    return (
      <View>
        <Text>DetailPage</Text>
        <Button
          title="go back"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const DrawerNavigator = createDrawerNavigator({
  HomePage,
  DetailPage,
});

export default createAppContainer(DrawerNavigator);
