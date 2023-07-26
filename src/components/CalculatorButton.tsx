import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { CalculatorButtonProps } from '../interfaces/CalculatorButtonProps'
import { colors } from '../theme/colors'
import CalculatorButtonStyles, { buttonArea } from '../theme/CalculatorButton.styles'

const CalculatorButton = ({ rowSize = 1, color = colors.darkGray, children = 0, onPress, colorText = colors.white, size = 20 }: CalculatorButtonProps) => {
    return (
        <TouchableOpacity
            style={[CalculatorButtonStyles.calculatorButton, { width: rowSize * buttonArea, backgroundColor: color }]}
            onPress={onPress}
        >
            <Text style={{ fontSize: size, color: colorText }}>{children}</Text>
        </TouchableOpacity>
    )
}

export default CalculatorButton