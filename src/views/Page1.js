import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class App extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('name', 'no-name'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        //color: 'red', // 这里标题的颜色优先级高于headerTitleStyle
      },
    };
  };
  render() {
    return (
      <View>
        <Text>Page1</Text>
        <Text style={styles.mgt20}>
          name is {this.props.navigation.getParam('name', 'no-name')}
        </Text>
        <Button
          title="go to page1... again"
          onPress={() => this.props.navigation.navigate('Page1')}
        />
        <Button
          // style={{marginTop: 20}}
          style={styles.mgt20}
          title="go to page2"
          onPress={() => this.props.navigation.navigate('Page2')}
        />
        <Button
          title="update title"
          onPress={() => this.props.navigation.setParams({name: 'changed'})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mgt20: {
    marginTop: 20,
    color: 'red',
  },
});

export default App;
