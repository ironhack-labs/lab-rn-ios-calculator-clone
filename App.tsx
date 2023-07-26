import React from 'react';
import { View } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import useCalculator from './src/hooks/useCalculator';
import styles from './App';

const App = () => {
  const {
    value,
    prevValue,
    clear,
    insertDot,
    deleteLast,
    handleNumber,
    handleResult,
    handleOperation,
    handleToggleNegative,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <CalculatorScreen
        value={value}
        clear={clear}
        del={deleteLast}
        prevValue={prevValue}
        insertDot={insertDot}
        handleResult={handleResult}
        handleNumber={handleNumber}
        handleOperation={handleOperation}
        handleToggleNegative={handleToggleNegative}
      />
    </View>
  );
};

export default App;
