import React, { ReactNode } from 'react'
import { useCalculator } from '../hooks/useCalculator'
import { colors } from '../theme/colors'
import { View } from 'react-native'

const CalculatorContainer = ({ children }: { children: ReactNode }) => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: "center" }}>
            {children}
        </View>
    )
}

export default CalculatorContainer