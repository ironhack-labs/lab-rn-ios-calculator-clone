import {useState} from 'react';

export const useCalculator = () => {
  const [value, setValue] = useState({
    currentValue: '0',
    previousValue: '',
  });

  const [operation, setOperation] = useState('');

  const clear = () => {
    setValue({currentValue: '0', previousValue: ''});
    setOperation('');
  };

  const onChange = (txt: string) => {
    if (txt === '.' && value.currentValue.includes('.')) return;

    if(value.currentValue === '0' && txt !== '.'){
        return setValue({...value, currentValue: txt});
    };

    setValue({...value, currentValue: value.currentValue + txt});
  };

  const changeSign = () => {
    const numValue = value.currentValue.includes('.')
      ? parseFloat(value.currentValue)
      : parseInt(value.currentValue);

    const newValue = numValue * -1;
    setValue({...value, currentValue: newValue.toString()});
  };

  const del = () => {
    if (value.currentValue.length === 1) {
      return setValue({
        ...value,
        currentValue: '0',
      });
    }

    const newValue =  value.currentValue.substring(
        0,
        value.currentValue.length - 1,
      )

    setValue({
      ...value,
      currentValue: newValue === '-' ? '0' : newValue,
    });
  };

  const changeOperation = (newOperation: string) => {
    if (operation) {
      return makeOperation(newOperation);
    }
    setOperation(newOperation);
    setValue({previousValue: value.currentValue, currentValue: '0'});
  };

  const makeOperation = (newOperation?: string) => {
    if (value.previousValue && value.currentValue && operation) {
      const currentValue = value.currentValue.includes('.')
        ? parseFloat(value.currentValue)
        : parseInt(value.currentValue);

      const previousValue = value.previousValue.includes('.')
        ? parseFloat(value.previousValue)
        : parseInt(value.previousValue);

      let operationResult = '';

      switch (operation) {
        case '+':
          operationResult = (previousValue + currentValue).toString();
          setValue({
            previousValue: newOperation ? operationResult : '',
            currentValue: newOperation ? '0' : operationResult,
          });
          break;
        case '-':
          operationResult = (previousValue - currentValue).toString();
          setValue({
            previousValue: newOperation ? operationResult : '',
            currentValue: newOperation ? '0' : operationResult,
          });
          break;
        case '/':
          operationResult = (previousValue / currentValue).toString();
          if(operationResult === 'Infinity'){
            return clear();
          }
          setValue({
            previousValue: newOperation ? operationResult : '',
            currentValue: newOperation ? '0' : operationResult,
          });
          break;
        case '*':
          operationResult = (previousValue * currentValue).toString();
          setValue({
            previousValue: newOperation ? operationResult : '',
            currentValue: newOperation ? '0' : operationResult,
          });
          break;
        default:
          setValue({
            previousValue: '',
            currentValue: '0',
          });
          break;
      }
      setOperation(newOperation || '');
    }
  };

  return {
    currentValue: value.currentValue,
    previousValue: value.previousValue,
    clear,
    onChange,
    changeSign,
    del,
    changeOperation,
    makeOperation
  };
};
