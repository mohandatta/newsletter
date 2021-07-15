import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Horoscope extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop:90 , color:'#ff0000' , padding:20}}> Don't be so nosy about others' affairs today, Aries. If you were meant to be included in the conversation, you'd have been invited. Suspicion of other people's actions and motives will only cause them to lose their trust in you. Keep any abrasive and critical thoughts to yourself. Perfection is a hot topic in your mind. Realize that the only person you can control in that department is you.</Text>
      </View>
    );
  }
}
