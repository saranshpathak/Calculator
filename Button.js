import React, { Component } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

class Button extends Component {
  render() {

    const{
      buttonPressed,
      deleteLastCharacter
    } = this.props;
    return (
      <View style={styles.buttonComponent}>
        <View style={styles.leftSideButtons}>
          <Pressable style={styles.leftSideButton}>
            <Text style={styles.leftSideButtonText}>AC</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
                onPress={deleteLastCharacter}>>
            <Text style={styles.leftSideButtonText}>DEL</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('%')}}>
            <Text style={styles.leftSideButtonText}>%</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
          onPress={()=>{ buttonPressed('7')}}>
            <Text style={styles.leftSideButtonText}>7</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('8')}}>
            <Text style={styles.leftSideButtonText}>8</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('9')}}>
            <Text style={styles.leftSideButtonText}>9</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('4')}}>
            <Text style={styles.leftSideButtonText}>4</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('5')}}>
            <Text style={styles.leftSideButtonText}>5</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('6')}}>
            <Text style={styles.leftSideButtonText}>6</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('1')}}>
            <Text style={styles.leftSideButtonText}>1</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('3')}}>
            <Text style={styles.leftSideButtonText}>2</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('3')}}>
            <Text style={styles.leftSideButtonText}>3</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}>
            <Text style={styles.leftSideButtonText}>H</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('0')}}>
            <Text style={styles.leftSideButtonText}>0</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           onPress={()=>{ buttonPressed('.')}}>
            <Text style={styles.leftSideButtonText}>.</Text>
          </Pressable>
        </View>

        <View style={styles.rightSideButtons}>
          <Pressable style={styles.rightSideButton}
          onPress={()=>{ buttonPressed('÷')}}>
            <Text style={styles.rightSideButtonText}>÷</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton}
          onPress={()=>{ buttonPressed('×')}}>
            <Text style={styles.rightSideButtonText}>×</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton}
          onPress={()=>{ buttonPressed('+')}}>
            <Text style={styles.rightSideButtonText}>+</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton}
          onPress={()=>{ buttonPressed('-')}}>
            <Text style={styles.rightSideButtonText}>-</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton}>
            <Text style={styles.equalbutton}>=</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonComponent: {
    flex: 7,
    //borderColor: 'black',
    //borderWidth: 1,
    flexDirection: 'row',
  },
  leftSideButtons: {
    flex: 8,
    //borderColor: 'red',
   // borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'lightGrey',
  },
  rightSideButtons: {
    flex: 2,
    //borderColor: 'green',
   // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',

    textAlignVertical: 'vertical',
  },
  leftSideButton: {
    width: '33.33%',
   
    textAlign: 'center',
  },
  rightSideButton: {
    height: '20%',
    paddingTop: 20,
  
    color: 'red',
    paddingBottom:18,

    justifyContent: 'center',
    textAlignVertical: 'center',
    //alignItems:"center"
  },
  rightSideButtonText: {
    backgroundColor: 'lightgrey',
    color: 'black',
    fontSize:30,
    borderRadius: 50,
    textAlign:"center",
    padding:10
    
  },
  leftSideButtonText:{
    fontSize:30
  },
  equalbutton :{
      
    backgroundColor: 'darkred',
    color: 'white',
    fontSize:30,
    borderRadius: 50,
    textAlign:"center",
    padding:10
    }
});
export default Button;
