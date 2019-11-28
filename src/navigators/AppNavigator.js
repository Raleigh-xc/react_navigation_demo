import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomePage from '../views/HomePage';
import Page1 from '../views/Page1';
import Page2 from '../views/Page2';

const StackNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: '首页', //这里优先级高
      },
    },
    Page1: {
      screen: Page1,
      // navigationOptions: {
      //   title: 'Page1',
      // },
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        // title: 'Page2',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
);

export default createAppContainer(StackNavigator);
