import { Text, View } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorContainer from '../components/CalculatorContainer';
import UseCalculator from '../hooks/UseCalculator';
import { styles } from '../theme/CalculatorScreen.styles';

const CalculatorScreen = () => {
  const {
    previousValue,
    currentValue,
    clear,
    deleteNumber,
    changeSign,
    addNumber,
    addDot,
    add,
    subtract,
    multiply,
    divide,
    calculateResult,
  } = UseCalculator();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{previousValue}</Text>
      <Text style={styles.displayText}>{currentValue}</Text>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(165, 165, 165)"
          colorText="#000000"
          onPress={clear}
          size={24}>
          <Text>AC</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(165, 165, 165)"
          colorText="#000000"
          onPress={changeSign}
          size={24}>
          <Text>+/-</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(165, 165, 165)"
          colorText="#000000"
          onPress={deleteNumber}
          size={24}>
          <Text>del</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)"
          colorText="#ffffff"
          onPress={divide}
          size={40}>
          <Text>÷</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('7')}
          size={24}>
          <Text>7</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('8')}
          size={24}>
          <Text>8</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('9')}
          size={24}>
          <Text>9</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)"
          colorText="#ffffff"
          onPress={multiply}
          size={40}>
          <Text>×</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('4')}
          size={24}>
          <Text>4</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('5')}
          size={24}>
          <Text>5</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('6')}
          size={24}>
          <Text>6</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)"
          colorText="#ffffff"
          onPress={subtract}
          size={40}>
          <Text>–</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('1')}
          size={24}>
          <Text>1</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('2')}
          size={24}>
          <Text>2</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={() => addNumber('3')}
          size={24}>
          <Text>3</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)"
          colorText="#ffffff"
          onPress={add}
          size={40}>
          <Text>+</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          sizeBtn="double"
          onPress={() => addNumber('0')}
          size={24}>
          <Text>0</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)"
          colorText="#ffffff"
          onPress={addDot}
          size={40}>
          <Text>.</Text>
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)"
          colorText="#ffffff"
          onPress={calculateResult}
          size={40}>
          <Text>=</Text>
        </CalculatorButton>
      </CalculatorContainer>
    </View>
  );
};

export default CalculatorScreen;
