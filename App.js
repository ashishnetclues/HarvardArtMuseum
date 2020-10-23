import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/src/store/Store'
import colors from './app/src/styles/Colors';
import { sizeWidth } from './app/src/util/Size';
import { SplashScreen } from 'expo';
import AppRouter from './app/src/routers/AppRouter';
import NavigationActions from "./app/src/routers/NavigationActions";

const store = configureStore();

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>
      <AppRouter ref={ref => NavigationActions.setTopLevelNavigator(ref)} />
    </Provider>
    );
  }
}