import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    },   
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    gesturesEnabled: false,
    defaultNavigationOptions: {
      cardOverlayEnabled: false,
      gestureEnabled: false,
    },
  },
);

export default createAppContainer(StackNavigator);
