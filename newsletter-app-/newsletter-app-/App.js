import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import Horoscope from './Screen/Horoscope';
import TopNews from './Screen/TopNews';
import Weather from './Screen/Weather';
import Joke from './Screen/Joke';
import HomeScreen from './Screen/HomeScreen';
import AppHeader from './components/AppHeader';



export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Horoscope : Horoscope ,
  TopNews:TopNews ,
  Weather : Weather ,
  Joke:Joke

})

const AppContainer = createAppContainer(AppNavigator)
