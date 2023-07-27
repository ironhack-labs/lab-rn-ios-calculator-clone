export type CalculatorOperations =
  | 'Addition'
  | 'Subtraction'
  | 'Multiplication'
  | 'Division';

export interface useCalculatorActions {
  clearCalculator: () => void;
  addCalculatorValue: (newValue: string) => void;
  changeSignCalculatorValue: () => void;
  removeLastNumber: () => void;
  changeOperator: (operator: CalculatorOperations) => void;
  calculate: () => void;
}
