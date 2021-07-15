import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Joke extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop:90 , color:'#ff0000' , padding:20}}>Patient: Doctor, I have a pain in my eye whenever I drink tea.<br/>
Doctor: Take the spoon out of the mug before you drink.</Text>
      </View>
    );
  }
}
