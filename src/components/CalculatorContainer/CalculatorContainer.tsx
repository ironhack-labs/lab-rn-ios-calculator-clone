import React, {FC} from 'react'
import { View } from 'react-native'
import { styles } from '../../theme/CalculatorScreen.styles';

interface CalculatorContainerProps {
  children: JSX.Element[]
}

export const CalculatorContainer:FC<CalculatorContainerProps> = ({children}) => {
  return (
    <View style={styles.rowButton}>
      {children}
    </View>
  )
}