import React, {ReactNode, createContext} from 'react';
import {useContextCalculator, ContextCalculator} from '../hooks';

export const CalculatorContext = createContext<ContextCalculator>({
  total: null,
  currentValue: '0',
  currentOperation: null,
  lastValue: null,
  operation: () => null,
  pressDigit: () => null,
});

export const CalculatorProvider = ({children}: {children: ReactNode}) => {
  const state = useContextCalculator();

  return (
    <CalculatorContext.Provider value={state}>
      {children}
    </CalculatorContext.Provider>
  );
};
