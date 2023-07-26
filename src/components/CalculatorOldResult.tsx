import React from "react"
import { Text, View } from "react-native"
import { style } from "../theme/CalculatorOldResult.styles";


interface CalculatorOldResultProps {
    sign: string;
}

const CalculatorOldResult: React.FC<CalculatorOldResultProps> = ({ sign }) => {
    return <View style={style.container}>
        <Text style={style.number}>{sign}</Text>
    </View>
}

export default CalculatorOldResult

