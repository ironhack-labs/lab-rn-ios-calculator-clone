import React from 'react'
import { Text, View } from 'react-native';
import { CalculatorButton, CalculatorContainer } from '../../components';
import { useCalculator } from '../../hooks/useCalculator';
import { styles } from '../../theme/CalculatorScreen.styles';

export const CalculatorScreen = () => {
  const {
    clean,
    constructNumber,
    removeLastDigit,
    posNegDispatch,
    btnOperationDivide,
    btnOperationMultiply,
    btnOperationSubstract,
    btnOperationPlus,
    calculate,
    history,
    digit
  } = useCalculator()

  return (
    <View style={styles.mainContainer}>
      {
        history !== '0' && <Text style={styles.resultHistory}>{history}</Text>
      }
      <Text 
      adjustsFontSizeToFit 
      numberOfLines={ 1 }
      style={styles.resultOperations}
      >
        {digit}
      </Text>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(165, 165, 165)" 
          size={20} 
          colorText="black" 
          onPress={clean}
        >
          AC
        </CalculatorButton>
        <CalculatorButton
          color="rgb(165, 165, 165)" 
          size={20} 
          colorText="black" 
          onPress={posNegDispatch}
        >
          +/-
        </CalculatorButton>
        <CalculatorButton
          color="rgb(165, 165, 165)" 
          size={20} 
          colorText="black" 
          onPress={removeLastDigit}
        >
          del
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={btnOperationDivide}
        >
        &divide;
        </CalculatorButton>
      </CalculatorContainer>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          7
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          8
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          9
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={btnOperationMultiply}
        >
          x
        </CalculatorButton>
      </CalculatorContainer>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          4
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          5
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          6
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={btnOperationSubstract}
        >
          -
        </CalculatorButton>
      </CalculatorContainer>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          1
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          2
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          3
        </CalculatorButton>
        <CalculatorButton
          color="rgb(255, 169, 12)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={btnOperationPlus}
        >
          +
        </CalculatorButton>
      </CalculatorContainer>
      <CalculatorContainer>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          0
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={constructNumber}
        >
          .
        </CalculatorButton>
        <CalculatorButton
          color="rgb(51, 51, 51)" 
          size={20} 
          colorText="#FEFEFE" 
          onPress={calculate}
        >
          =
        </CalculatorButton>
      </CalculatorContainer>
    </View>
  )
};