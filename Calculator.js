import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Screen from './Screen';
import Button from './Button';
class Calculator extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        expression: 'Calculator',
        result: '',
      };
    }
  }

  getButtonPressedValue = (buttonPressed) => {
    const { expression, actualExpression, result } = this.state;
    let newExpression = `${
      expression === 'Calculator' ? '' : expression
    }${buttonPressed}`;
    this.setState({ expression: newExpression });

    let actualCharacter = buttonPressed;
    if (buttonPressed === '÷') {
      actualCharacter = '/';
    } else if (buttonPressed === '×') {
      actualCharacter = '*';
    } else if (buttonPressed === '−') {
      actualCharacter = '-';
    } else {
    }
    let newActualExpression = `${actualExpression}${actualCharacter}`;
    this.setState({ actualExpression: newActualExpression });

    try {
      this.setState({
        result: eval(newActualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  allClear = () => {
    this.setState({
      expression: '',
      result: '',
      actualExpression: '',
    });
  };
  deleteLastCharacter = () => {
    const { expression,  actualExpression } = this.state;
    

     const slicedExpression = expression.slice(0, expression.length -1);
    const slicedActualExpression = actualExpression.slice(0, expression.length -1);
    this.setState({
      expression: slicedExpression,
      result: '',
      actualExpression: slicedActualExpression,
    });
    if(slicedActualExpression==''){
      this.setState({
        expression:'Calculator',
       // result:'',
      });
    }
    try {
      this.setState({
        result: eval(slicedActualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { expression, result } = this.state;
    return (
      <View style={styles.calculatorComponent}>
        {' '}
        <Screen expression={expression} result={result} />
        <Button
          buttonPressed={this.getButtonPressedValue}
          allClear={this.allClear}
         deleteLastCharacter={this.deleteLastCharacter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
});
export default Calculator;
