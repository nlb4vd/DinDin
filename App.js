//nlb4vd

import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation'
import InviteCard from "./components/inviteCard.js"
import SplashScreen from "./components/splashScreen.js"
import HomePage from "./components/homeScreen.js"

const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    HomePage: {
      screen: HomePage,
    },
    InviteCard: {
      screen: InviteCard,
    },
  },
  {
    initialRouteName: 'SplashScreen',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
