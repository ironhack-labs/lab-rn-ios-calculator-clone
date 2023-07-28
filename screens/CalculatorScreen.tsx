/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';
import {CalculatorContainer} from '../components/CalculatorContainer';

import {styles} from '../theme/CalculatorScreen.styles';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {expression, number, handleClick} = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.previousText}>{expression}</Text>
        <Text style={styles.resultText}>{number}</Text>
      </View>
      <CalculatorContainer>
        <View style={styles.row}>
          <CalculatorButton
            size={32}
            children="C"
            color="#D4D4D2"
            colorText="black"
            onPress={() => handleClick('C')}
          />
          <CalculatorButton
            size={32}
            children="+/-"
            color="#D4D4D2"
            colorText="black"
            onPress={() => handleClick('negative')}
          />
          <CalculatorButton
            size={32}
            children="del"
            color="#D4D4D2"
            colorText="black"
            onPress={() => handleClick('del')}
          />
          <CalculatorButton
            size={32}
            children="/"
            color="#FF9500"
            colorText="white"
            onPress={() => handleClick('/')}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            size={32}
            children="7"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('7')}
          />
          <CalculatorButton
            size={32}
            children="8"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('8')}
          />
          <CalculatorButton
            size={32}
            children="9"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('9')}
          />
          <CalculatorButton
            size={32}
            children="X"
            color="#FF9500"
            colorText="white"
            onPress={() => handleClick('*')}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            size={32}
            children="5"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('5')}
          />
          <CalculatorButton
            size={32}
            children="6"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('6')}
          />
          <CalculatorButton
            size={32}
            children="7"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('7')}
          />
          <CalculatorButton
            size={32}
            children="-"
            color="#FF9500"
            colorText="white"
            onPress={() => handleClick('-')}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            size={32}
            children="1"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('1')}
          />
          <CalculatorButton
            size={32}
            children="2"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('2')}
          />
          <CalculatorButton
            size={32}
            children="3"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('3')}
          />
          <CalculatorButton
            size={32}
            children="+"
            color="#FF9500"
            colorText="white"
            onPress={() => handleClick('+')}
          />
        </View>
        <View style={styles.row}>
          <CalculatorButton
            size={32}
            children="0"
            color="#505050"
            colorText="white"
            onPress={() => handleClick('0')}
          />
          <CalculatorButton
            size={32}
            children="."
            color="#505050"
            colorText="white"
            onPress={() => handleClick('.')}
          />
          <CalculatorButton
            size={32}
            children="="
            color="#FF9500"
            colorText="white"
            onPress={() => handleClick('=')}
          />
        </View>
      </CalculatorContainer>
    </View>
  );
};
