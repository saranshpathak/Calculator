import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

class Screen extends Component{
  render(){
    return(
      <View style ={styles.screenComponent}> Screen</View>
    );
  }
}


const styles = StyleSheet.create({
screenComponent:{
flex:3,borderColor:'black',borderWidth:1
}
});
export default Screen;