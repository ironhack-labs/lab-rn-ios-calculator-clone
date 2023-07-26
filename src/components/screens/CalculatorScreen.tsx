import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CalculatorScreen: React.FC = () => {
  const [input, setInput] = useState<string>('0');
  const [result, setResult] = useState<string>('0');

  const handleButtonPress = (value: string) => {
    if (input === '0' && value !== '.') {
      setInput(value);
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('0');
    setResult('0');
  };

  const handlePlusMinus = () => {
    setInput(prevInput => {
      if (prevInput.startsWith('-')) {
        return prevInput.slice(1);
      } else {
        return `-${prevInput}`;
      }
    });
  };

  const handlePercentage = () => {
    setInput(prevInput => {
      const value = parseFloat(prevInput);
      return (value / 100).toString();
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonSoftGrey} onPress={handleClear}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSoftGrey} onPress={handlePlusMinus}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSoftGrey}
            onPress={handlePercentage}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleButtonPress('0')}>
            <Text style={[styles.buttonText, styles.zeroButtonText]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operationButton}
            onPress={handleCalculate}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Updated background color to black
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  resultText: {
    fontSize: 50,
    color: '#fff', // Updated text color to white
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  inputText: {
    fontSize: 30,
    color: '#fff', // Updated text color to white
  },
  buttonContainer: {
    flex: 3,
    backgroundColor: '#000', // Updated background color to black
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222', // Updated background color to gray
    height: '100%',
    borderRadius: 100, // Added borderRadius to make the buttons circular
    margin: 10, // Added margin to make the buttons spaced out
  },
  buttonSoftGrey: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777', // Updated background color to gray
    height: '100%',
    borderRadius: 100, // Added borderRadius to make the buttons circular
    margin: 10, // Added margin to make the buttons spaced out
  },
  operationButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777', // Updated background color to gray
    height: '100%',
    borderRadius: 100, // Added borderRadius to make the buttons circular
    backgroundColor: '#F69220', // Added different background color for operation buttons
    margin: 10, // Added margin to make the buttons spaced out
  },
  zeroButton: {
    flex: 2,
  },
  zeroButtonText: {
    textAlign: 'left',
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff', // Updated text color to white
  },
});

export default CalculatorScreen;
