import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { useCalculator } from '../hooks/useCalculator'
import CalculatorContainer from '../components/CalculatorContainer'
import { calculatorScreenStyles } from '../theme/CalculatorScreen.styles'
import { colors } from '../theme/colors'
import CalculatorButton from '../components/CalculatorButton'

const CalculatorScreen = () => {

    const { currentNumber, result, qeuedNumber, queueNumbers, popNumbers, resolveOperation, addOperator, clean, plusMinusOperator } = useCalculator()

    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={calculatorScreenStyles.calculatorDisplay}>
                <Text style={{ fontSize: 14, color: colors.white }}>{qeuedNumber}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 36, color: colors.white }}>{result != '' ? result : currentNumber}</Text>
            </View>
            <CalculatorContainer >
                <View>
                    <View style={calculatorScreenStyles.calculatorRow} >
                        <CalculatorButton color={colors.lightGray} colorText={colors.darkGray} onPress={clean} >AC</CalculatorButton>
                        <CalculatorButton color={colors.lightGray} colorText={colors.darkGray} onPress={plusMinusOperator} >+/-</CalculatorButton>
                        <CalculatorButton color={colors.lightGray} colorText={colors.darkGray} onPress={() => popNumbers()} >DEL</CalculatorButton>
                    </View>
                    <View style={calculatorScreenStyles.calculatorRow} >
                        <CalculatorButton onPress={() => queueNumbers('7')} >7</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('8')} >8</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('9')} >9</CalculatorButton>
                    </View>
                    <View style={calculatorScreenStyles.calculatorRow} >
                        <CalculatorButton onPress={() => queueNumbers('4')} >4</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('5')} >5</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('6')} >6</CalculatorButton>
                    </View>
                    <View style={calculatorScreenStyles.calculatorRow} >
                        <CalculatorButton onPress={() => queueNumbers('1')} >1</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('2')} >2</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('3')} >3</CalculatorButton>
                    </View>
                    <View style={calculatorScreenStyles.calculatorRow} >
                        <CalculatorButton rowSize={2} onPress={() => queueNumbers('0')} >0</CalculatorButton>
                        <CalculatorButton onPress={() => queueNumbers('.')} >.</CalculatorButton>
                    </View>
                </View>
                <View >
                    <CalculatorButton color={colors.orange} onPress={() => addOperator('/')} >/</CalculatorButton>
                    <CalculatorButton color={colors.orange} onPress={() => addOperator('x')} >x</CalculatorButton>
                    <CalculatorButton color={colors.orange} onPress={() => addOperator('-')} >-</CalculatorButton>
                    <CalculatorButton color={colors.orange} onPress={() => addOperator('+')} >+</CalculatorButton>
                    <CalculatorButton color={colors.orange} onPress={() => resolveOperation()} >=</CalculatorButton>
                </View>
            </CalculatorContainer>
        </View>
    )
}

export default CalculatorScreen