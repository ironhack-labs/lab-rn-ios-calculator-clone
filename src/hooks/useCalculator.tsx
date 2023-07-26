import React, { useDeferredValue, useEffect, useState } from 'react'

type Operators = '+' | '-' | '/' | 'x' | ''

export const useCalculator = () => {
    const [currentNumber, setCurrentNumber] = useState('0')
    const [qeuedNumber, setQueuedNumber] = useState('')
    const [result, setResult] = useState('')
    const [currentOperator, setCurrentOperator] = useState<Operators>('')

    const operatorFunction = {
        "+": parseFloat(qeuedNumber) + parseFloat(currentNumber),
        "-": parseFloat(qeuedNumber) - parseFloat(currentNumber),
        "x": parseFloat(qeuedNumber) * parseFloat(currentNumber),
        "/": (qeuedNumber != '0' && currentNumber != '0') ? parseFloat(qeuedNumber) / parseFloat(currentNumber) : '0',
        "": '0'
    }

    useEffect(() => {
        if (result != '')
            setCurrentNumber('')
    }, [result])

    useEffect(() => {
        if (currentNumber != '')
            setResult('')
    }, [currentNumber])

    const clean = () => {
        setCurrentNumber('0')
        setResult('')
    }

    const queueNumbers = (number: string) => {
        setCurrentNumber((prevNumber) => {
            if (prevNumber == '0') return number
            return prevNumber += number
        })
    }

    const popNumbers = () => {
        setCurrentNumber((prevNumber) => {
            if (prevNumber.length == 1) return '0'
            if (result != '') return result.slice(0, -1)
            return prevNumber.slice(0, -1)
        })
    }

    const addOperator = (operador: Operators) => {
        setCurrentNumber((prevCurrentNumber) => {

            setQueuedNumber(() => {
                if (result != '') return result
                return prevCurrentNumber
            })
            setCurrentOperator(operador)
            return '0'
        })
    }

    const plusMinusOperator = () => {
        setCurrentNumber((prev) => {
            let temp = 0
            if (prev == '' && result != '') temp = parseFloat(result) * -1
            else temp = parseFloat(prev) * -1
            return temp.toString()
        })
    }

    const resolveOperation = () => {
        const result = operatorFunction[currentOperator]

        setQueuedNumber('')
        setCurrentOperator('')
        setResult(result?.toString())
    }

    return { currentNumber, result, qeuedNumber, queueNumbers, popNumbers, resolveOperation, addOperator, clean, plusMinusOperator }

}