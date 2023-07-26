import {useState} from 'react';

export enum Operators {
  add = 'ADD',
  subtract = 'SUBTRACT',
  multiply = 'MULTIPLY',
  divide = 'DIVIDE',
}

const formatValue = (value: string) => {
  const [_, decimal] = value.split('.');

  if (decimal) {
    return parseFloat(value).toLocaleString('en-US', {
      maximumFractionDigits: 8,
      minimumFractionDigits: 0,
    });
  }

  return parseInt(value)
    .toLocaleString('en-US', {
      maximumSignificantDigits: 8,
      minimumFractionDigits: 0,
    })
    .concat(value.includes('.') ? '.' : '');
};

export default () => {
  const [prevResult, setPrevResult] = useState('');
  const [value, setValue] = useState('0');
  const [selectedOperator, setSelectedOperator] = useState<Operators | null>(
    null
  );

  const input = (digit: string) => {
    if (digit === '.' && value.includes('.')) {
      return;
    }

    if (digit === '.' && value === '0') {
      setValue(currentValue => formatValue(`${currentValue}${digit}`));
      return;
    }

    const [integer, decimal] = value.split('.');

    if (
      integer.replace('-', '').length >= 8 ||
      (decimal && decimal.length >= 8)
    ) {
      return;
    }

    setValue(currentValue =>
      formatValue(`${currentValue !== '0' ? currentValue : ''}${digit}`)
    );
  };

  const pop = () => {
    if (value === '0') {
      return;
    }

    if (value.length === 1) {
      setValue(formatValue('0'));
      return;
    }

    setValue(currentValue => formatValue(currentValue.slice(0, -1)));
  };

  const handleOperator = (operator: Operators) => {
    if (!selectedOperator) {
      setPrevResult(value);
      setValue(formatValue('0'));
    }

    setSelectedOperator(operator);
  };

  const clear = () => {
    setSelectedOperator(null);
    setPrevResult('');
    setValue(formatValue('0'));
  };

  const switchSign = () => {
    if (value === '0') {
      return;
    }

    setValue(currentValue =>
      formatValue(
        currentValue.startsWith('-')
          ? currentValue.replace('-', '')
          : `-${currentValue}`
      )
    );
  };

  const calculate = () => {
    if (!selectedOperator) {
      return;
    }

    const [prev, current] = [parseFloat(prevResult), parseFloat(value)];

    switch (selectedOperator) {
      case Operators.add:
        setValue(formatValue((prev + current).toString()));
        break;
      case Operators.subtract:
        setValue(formatValue((prev - current).toString()));
        break;
      case Operators.multiply:
        setValue(formatValue((prev * current).toString()));
        break;
      case Operators.divide:
        setValue(formatValue((prev / current).toString()));
        break;
    }

    setSelectedOperator(null);
    setPrevResult('');
  };

  return {
    prevResult,
    value,
    input,
    pop,
    handleOperator,
    clear,
    switchSign,
    calculate,
  };
};
