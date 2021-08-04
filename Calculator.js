import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Screen from './Screen';
import Button from './Button'
 class Calculator extends Component{
  render(){
    return(
      <View style ={styles.calculatorComponent}> <Screen />
       <Button /> 
      </View>
    );
  }
}


 const styles = StyleSheet.create({
calculatorComponent:{
flex :1,borderColor:'black',borderWidth:1
}
});
export default Calculator;