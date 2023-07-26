import React from "react"
import { Text, View } from "react-native"
import { styles } from "../theme/CalculatorNumber.styles";

interface CalculatorNumberProps {
    sign: string;
}

const CalculatorNumber: React.FC<CalculatorNumberProps> = ({ sign }) => {
    return <View style={styles.container}>
        <Text style={styles.number}>{sign}</Text>
    </View>
}

export default CalculatorNumber

