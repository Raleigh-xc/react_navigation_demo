import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import MessagePage from './MessagePage';
import IconWithBadge from '../components/IconWithBadge';

const TabNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: '首页',
      },
    },
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        title: '详情',
      },
    },
    MessagePage: {
      screen: MessagePage,
      navigationOptions: {
        title: '消息',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = 'home';
        if (routeName === 'DetailPage') {
          iconName = 'barschart';
        } else if (routeName === 'MessagePage') {
          iconName = 'message1';
          return (
            <IconWithBadge
              name={iconName}
              size={25}
              color={tintColor}
              count={10}
            />
          );
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
