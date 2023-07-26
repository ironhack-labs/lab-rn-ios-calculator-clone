import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../theme/Global/App.styles';
import {buttonStyles} from '../theme/Button/Button.styles';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {useOperator} from '../hooks/useOperator';

export const CalculatorScreen = () => {
  const {
    anotherNumbers,
    numbers,
    handlerCleanInput,
    handlerPositiveNegative,
    handlerPercentage,
    handlerDivide,
    handlerNumbers,
    handlerMultiply,
    handlerSubtract,
    handlerAdd,
    calculate,
  } = useOperator();

  console.log(numbers);
  return (
    <View style={styles.container}>
      {anotherNumbers !== '0' && (
        <Text style={styles.litleText}>
          {anotherNumbers.includes('Infinity') && numbers === 'NaN'
            ? '0'
            : anotherNumbers}
        </Text>
      )}
      <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit={true}>
        {numbers.includes('Infinity') && numbers === 'NaN' ? '0' : numbers}
      </Text>
      {/* Row */}
      <View style={buttonStyles.row}>
        <ButtonCalculator
          text="C"
          color="rgb(165, 165, 165)"
          action={handlerCleanInput}
        />
        <ButtonCalculator
          text="+/-"
          color="rgb(165, 165, 165)"
          action={handlerPositiveNegative}
        />
        <ButtonCalculator
          text="%"
          color="rgb(165, 165, 165)"
          action={handlerPercentage}
        />
        <ButtonCalculator
          text="/"
          color="rgb(255, 169, 12)"
          action={handlerDivide}
        />
      </View>
      {/* Row */}
      <View style={buttonStyles.row}>
        <ButtonCalculator
          text="7"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="8"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="9"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="*"
          color="rgb(255, 169, 12)"
          action={handlerMultiply}
        />
      </View>
      {/* Row */}
      <View style={buttonStyles.row}>
        <ButtonCalculator
          text="4"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="5"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="6"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="-"
          color="rgb(255, 169, 12)"
          action={handlerSubtract}
        />
      </View>
      {/* Row */}
      <View style={buttonStyles.row}>
        <ButtonCalculator
          text="1"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="2"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="3"
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="+"
          color="rgb(255, 169, 12)"
          action={handlerAdd}
        />
      </View>
      {/* Row */}
      <View style={buttonStyles.row}>
        <ButtonCalculator
          text="0"
          color="rgb(51, 51, 51)"
          width
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="."
          color="rgb(51, 51, 51)"
          action={handlerNumbers}
        />
        <ButtonCalculator
          text="="
          color="rgb(255, 169, 12)"
          action={calculate}
        />
      </View>
    </View>
  );
};
