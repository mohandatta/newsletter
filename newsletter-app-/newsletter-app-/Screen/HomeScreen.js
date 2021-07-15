import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity , Image } from 'react-native';
import db from '../config'
var likes = 0 ;
var dislikes = 0 ;

class HomeScreen extends React.Component {

  constructor(){
    super();
    this.state ={
      like : likes ,
      dislike : dislikes
    }
  }
  increaseRating=()=>{
    this.setState({like:this.state.likes+1})
  }
    decreaseRating=()=>{
    this.setState({like:this.state.dislikes+1})
  }

  likePressed = () => {
    console.log('hello');
    var rating = db.ref('ratings/');
    likes = likes + 1;
    rating.update({
      likes: likes,
    });
  };
 dislikePressed = () => {
    console.log('bye');
    var rating = db.ref('ratings/');
    dislikes = dislikes + 1;
    
     rating.update({
      dislikes: dislikes,
    });

  };

 
  render() {
    return (
      <View style={{flex:1}}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('TopNews')}
            style={styles.toch} 
            >
            <Text style={styles.te}>Top news</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Joke')} 
            style={styles.toch} 
            >
            <Text style={styles.te}>Joke</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>this.props.navigation.navigate('Horoscope')}
            style={styles.toch} 
            >
            <Text style={styles.te}>Horoscope</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>this.props.navigation.navigate('Weather')}
            style={styles.toch} 
            >
            <Text style={styles.te}>Weather</Text>
          </TouchableOpacity>
          <Text style={{text : "bold",
            fontSize :19  ,
            color : "#0bf801",
            marginLeft:140,
            marginTop : 30}} >Rate us</Text>
            <TouchableOpacity onPress={()=>{
              this.increaseRating()
              this.likePressed()
         //     this.increment()
          
        }}
        style={{marginLeft: 90 }}>
            <Image
                style={{ width: 50, height: 50 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            <Text> {this.state.like} </Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              this.decreaseRating()
        //      this.decrese()
        this.dislikePressed()
          
        }} style={{ marginTop: -35,
                  marginLeft: 200}}>

          <Image
                style={{
                  width: 50,
                  height: 50
                 
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            <Text> {this.state.dislike} </Text>
            </TouchableOpacity>  
            
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  toch:{
    marginLeft : 100 ,
    marginTop:35 ,
    alignItems : "center",
    textAlign : "center",
    width : 150,
    height : 50,
    backgroundColor : "cyan",
    borderRadius : 500,
    border : 'solid ' ,
    borderColor : "blue"
  },
  te:{
    text : "bold",
    fontSize :20  ,
    padding : 9,
    color : "orange"
  }
})

export default HomeScreen ;