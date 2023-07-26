import {useState} from 'react';

import {formatNumber, CalculatorUtils} from '../utils';

type OperatorSymbol = '+' | '-' | '÷' | 'x';

const operatorKeys: {[key in OperatorSymbol]: string} = {
  '÷': '/',
  '-': '-',
  '+': '+',
  x: '*',
};

export type ContextCalculator = {
  total: string;
  currentValue: string;
  activeOperator: OperatorSymbol;
  lastValue: string;
  pressDigit: (digit: string) => void;
  deleteOperation: () => void;
  resetOperation: () => void;
  negateOperation: () => void;
  equalOperation: () => void;
  arithmeticOperation: (operatorSymbol: OperatorSymbol) => void;
};

const initialValues: Pick<
  ContextCalculator,
  'total' | 'currentValue' | 'activeOperator' | 'lastValue'
> = {
  total: '0',
  currentValue: '',
  lastValue: null,
  activeOperator: null,
};

export const useContextCalculator = function () {
  const [state, setState] = useState<ContextCalculator>({
    ...initialValues,
    pressDigit: (digit: string) => {
      setState(prevState => {
        const allowedDigit = CalculatorUtils.allowedDigit(
          prevState.currentValue,
          digit,
        );

        const hasMaxDigitsOnScreen = CalculatorUtils.hasMaxDigitsOnScreen(
          prevState.currentValue,
        );

        if (!allowedDigit || hasMaxDigitsOnScreen) {
          return prevState;
        }

        return {
          ...prevState,
          currentValue: formatNumber(`${prevState.currentValue}${digit}`),
        };
      });
    },
    deleteOperation: () => {
      setState(prevState => ({
        ...prevState,
        currentValue: formatNumber(prevState.currentValue.slice(0, -1)) || '0',
      }));
    },
    resetOperation: () => {
      setState(prevState => ({
        ...prevState,
        ...initialValues,
      }));
    },
    negateOperation: () => {
      setState(prevState => ({
        ...prevState,
        currentValue: CalculatorUtils.negate(prevState.currentValue),
      }));
    },
    equalOperation: () => {
      setState(prevState => {
        const prevTotalValue = CalculatorUtils.parseToNumber(prevState.total);
        if (
          !prevState.activeOperator ||
          !prevTotalValue ||
          (!prevState.currentValue && !prevState.lastValue)
        ) {
          return prevState;
        }

        const currentValue = CalculatorUtils.parseToNumber(
          prevState.currentValue,
        );

        if (currentValue) {
          const totalValue = CalculatorUtils.calculate(
            `${prevTotalValue} ${
              operatorKeys[prevState.activeOperator]
            } ${currentValue}`,
          );

          return {
            ...prevState,
            lastValue: prevState.currentValue,
            total: formatNumber(totalValue),
            currentValue: '',
          };
        }

        const lastValue = CalculatorUtils.parseToNumber(prevState.lastValue);
        if (lastValue) {
          const totalValue = CalculatorUtils.calculate(
            `${prevTotalValue} ${
              operatorKeys[prevState.activeOperator]
            } ${lastValue}`,
          );

          return {
            ...prevState,
            total: formatNumber(totalValue),
            currentValue: '',
          };
        }

        return prevState;
      });
    },
    arithmeticOperation: (operatorSymbol: OperatorSymbol) => {
      setState(prevState => {
        const currentValue = CalculatorUtils.parseToNumber(
          prevState.currentValue,
        );

        if (!currentValue) {
          return {
            ...prevState,
            activeOperator: operatorSymbol,
          };
        }

        const prevTotalValue = CalculatorUtils.parseToNumber(prevState.total);
        if (!prevTotalValue) {
          return {
            ...prevState,
            lastValue: prevState.currentValue,
            total: prevState.currentValue,
            currentValue: '',
            activeOperator: operatorSymbol,
          };
        }

        const totalValue = CalculatorUtils.calculate(
          `${prevTotalValue} ${
            operatorKeys[prevState.activeOperator]
          } ${currentValue}`,
        );

        const total = formatNumber(totalValue);

        return {
          ...prevState,
          lastValue: prevState.currentValue,
          total,
          currentValue: '',
          activeOperator: operatorSymbol,
        };
      });
    },
  });

  return state;
};
