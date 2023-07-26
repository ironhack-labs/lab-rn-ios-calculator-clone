import React, {ReactNode} from 'react';

import {CalculatorButton} from './calculator-button';
import {CalculatorProvider} from './calculator-provider';
import {CalculatorPreview} from './calculator-preview';
import {CalculatorLastValue} from './calculator-last-value';

export const Calculator = ({children}: {children: ReactNode}) => {
  return <CalculatorProvider>{children}</CalculatorProvider>;
};

Calculator.Button = CalculatorButton;
Calculator.Preview = CalculatorPreview;
Calculator.LastValue = CalculatorLastValue;
