import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import MessagePage from './MessagePage';
import IconWithBadge from '../components/IconWithBadge';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: '首页',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let iconName = 'home';
          // iconName = 'barschart';
          // iconName = 'message1';
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      },
    },
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        title: '详情',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let iconName = 'barschart';
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
        tabBarBadge: 20,
      },
    },
    MessagePage: {
      screen: MessagePage,
      navigationOptions: {
        title: '消息',
        tabBarIcon: ({focused, horizontal, tintColor}) => {
          let iconName = 'message1';
          return (
            <IconWithBadge
              name={iconName}
              size={25}
              color={tintColor}
              count={10}
            />
          );
        },
      },
    },
  },
  {
    initialRouteName: 'HomePage',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
  },
);

export default createAppContainer(TabNavigator);
