import React, { useState } from "react"

export const useCalculator = () => {

    const [oldResults, setOldResults] = useState<string[]>([])
    const [operation, setOperation] = useState<string[]>([]);
    const [displayedNumber, setDisplayedNumber] = useState<string>('')
    const [isNewNumber, setIsNewNumber] = useState<boolean>(false);
    const [isNewOperation, setIsNewOperation] = useState<boolean>(false);

    const clearCalculator = () => {
        setDisplayedNumber('0');
        setOperation([]);
    }

    const addValue = (value: string) => {
        isNewOperation && setDisplayedNumber('0')
        setIsNewOperation(false);
        if (parseInt(value) >= 0 && parseInt(value) <= 9) {
            if (displayedNumber == '0') {
                setDisplayedNumber(value)
            } else {
                if (isNewNumber) {
                    setDisplayedNumber(value)
                    setIsNewNumber(false)
                } else {
                    setDisplayedNumber(displayedNumber + value)
                }
            }

        } else {
            if ((operation[operation.length - 1] == '/' || operation[operation.length - 1] == '*'
                || operation[operation.length - 1] == '+' || operation[operation.length - 1] == '')
                && (value == '/' || value == '*' || value == '+' || value == '')) {
                const aux = operation.slice(0, -1);
                setOperation(aux)
            } else {
                switch (value) {
                    case 'del':
                        deleteLastNumber()
                        break;
                    case '+/-':
                        changeSign()
                        break
                    case 'AC':
                        clearCalculator()
                        break;
                    case '/': {
                        console.log('division')
                        setOperation([...operation, displayedNumber, '/'])
                        setIsNewNumber(true)
                    }
                        break;
                    case '.': {
                        if (!displayedNumber.includes('.')) {
                            setDisplayedNumber(displayedNumber + '.');
                        }
                    }
                        break;
                    case 'x': {
                        console.log('multiplication')
                        setOperation([...operation, displayedNumber, '*'])
                        setIsNewNumber(true)
                    }
                        break;
                    default: {
                        setOperation([...operation, displayedNumber, value])
                        setIsNewNumber(true)
                    }
                        break
                }
            }


        }
    }

    const changeSign = () => {
        const minuSign = '-';
        if (displayedNumber.charAt(0) === minuSign) {
            setDisplayedNumber(displayedNumber.substring(1))
        } else {
            setDisplayedNumber(minuSign.concat(displayedNumber))
        }

    }

    const deleteLastNumber = () => {
        setDisplayedNumber(displayedNumber.substring(0, displayedNumber.length - 1))
    }

    const performOperation = () => {
        const aux = [...operation, displayedNumber]
        const op = aux.join('');
        const result = eval(op);
        console.log(result)
        setDisplayedNumber(result);
        setOldResults([...oldResults, result])
        setOperation([])
        setIsNewOperation(true);
    }

    return {
        clearCalculator,
        changeSign,
        deleteLastNumber,
        performOperation,
        oldResults,
        addValue,
        displayedNumber
    }
}

/*Create a function to clear the calculator

Create a function to add a number or dot to the calculator

Create a function to change the calculator number's sign

Create a function to delete the calculator's last number

Create a function to perform an operation

Create a function to divide the calculator's number

Create a function to multiply the calculator's number

Create a function to subtract from the calculator's number

Create a function to add to the calculator's number*/