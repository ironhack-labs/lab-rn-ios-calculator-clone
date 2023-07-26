import React from 'react'
import { View } from 'react-native'
import { styles } from '../theme/CalculatorScreen.styles'

export const CalculatorContainer = ({children} : {children: JSX.Element | JSX.Element[]}) => {
  return (
    <View style={ styles.calculatorContainer }>
      {children}
    </View>

  )
}
