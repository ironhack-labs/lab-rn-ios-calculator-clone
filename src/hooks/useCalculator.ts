import {useState} from 'react';

const useCalculator = () => {

  const [calculatorNumber, setCalculatorNumber] = useState<string>('0');
  const [prevNumber, setPrevNumber] = useState<string>('0');
  const [operator, setOperator] = useState<string>('');

  // Funcion para limpiar la calculadora
  const handleClear = () => {
    setCalculatorNumber('0');
    setPrevNumber('0');
    setOperator('');
  };

  //Funcion para agregar un numero
  const handleAddNumber = (newNumber: string) => {
    if (calculatorNumber === '0' && newNumber !== '.') {
      setCalculatorNumber(newNumber);
    } else if (calculatorNumber.includes('.') && newNumber === '.') {
      return;
    } else {
      setCalculatorNumber(prevNumber => prevNumber + newNumber);
    }
  };

//Funcion de pasar el numero de positivo a negativo y viceversa
  const handleToggleSign = () => {
    setCalculatorNumber(prevNumber => {
      const newNumber = parseFloat(prevNumber) * -1;
      return newNumber.toString();
    });
  };

  //Funcion para borrar el ultimo numero
  const handleDeleteLastNumber = () => {
    if (calculatorNumber.length > 1) {
      setCalculatorNumber(prevNumber => prevNumber.slice(0, -1));
    } else {
      setCalculatorNumber('0');
    }
  };

//Funcion para realizar suma, resta, multiplicacion o division segun el caso
const handleOperation = (operatorType: string) => {
  if (operatorType === '=') {
    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(calculatorNumber);

    switch (operator) {
      case '+':
        setCalculatorNumber((num1 + num2).toString());
        break;
      case '-':
        setCalculatorNumber((num1 - num2).toString());
        break;
      case '*':
        setCalculatorNumber((num1 * num2).toString());
        break;
      case '/':
        if (num2 !== 0) {
          setCalculatorNumber((num1 / num2).toString());
        } else {
          setCalculatorNumber('Error');
        }
        break;
      default:
        break;
    }

    setOperator('');
    setPrevNumber(calculatorNumber); 
  } else {
    if (operator) {
      
      const num1 = parseFloat(prevNumber);
      const num2 = parseFloat(calculatorNumber);

      switch (operator) {
        case '+':
          setCalculatorNumber((num1 + num2).toString());
          break;
        case '-':
          setCalculatorNumber((num1 - num2).toString());
          break;
        case '*':
          setCalculatorNumber((num1 * num2).toString());
          break;
        case '/':
          if (num2 !== 0) {
            setCalculatorNumber((num1 / num2).toString());
          } else {
            setCalculatorNumber('Error');
          }
          break;
        default:
          break;
      }
    }
    setOperator(operatorType);
    setPrevNumber(calculatorNumber);
    setCalculatorNumber('0');
  }
};

//Exportacion de las funciones del hook
  return {
    calculatorNumber,
    handleClear,
    handleAddNumber,
    handleToggleSign,
    handleDeleteLastNumber,
    handleOperation,
  };
};

export default useCalculator;
