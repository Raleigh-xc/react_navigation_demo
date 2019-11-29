import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import AuthLoading from './AuthLoading';
import SignIn from './SignIn';
import Main from './Main';
// import Page03 from './Page03';

/**
 * screen 可以使页面组件、可以使创建的navigator、也可以是包装过的navigator、
 */

const SwitchNavigator = createSwitchNavigator({
  AuthLoading,
  SignIn,
  Main,
});

export default createAppContainer(SwitchNavigator);
