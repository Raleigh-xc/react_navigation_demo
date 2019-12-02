import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';

const counter = (state, action) => {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    default:
      return state;
  }
};

const reducers = combineReducers({
  counter,
});

const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Text>counter is: {this.props.counter}</Text>
          <Button title="+" onPress={() => this.props.dispatch({type: '+'})} />
          <Button title="-" onPress={() => this.props.dispatch({type: '-'})} />
        </View>
      </Provider>
    );
  }
}

const AppContainer = connect(state => ({counter: state.counter}))(App);

class AppProvider extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default AppProvider;
