import React, { ReactNode } from "react"

import { style } from "../theme/CalculatorContainer.styles";
import { View } from "react-native";

interface CalculatorContainerProps {
    children: ReactNode;
}

const CalculatorContainer: React.FC<CalculatorContainerProps> = ({children}) => {
    return (
        <View style={style.container}>
            {children}
        </View>
    )
}
export default CalculatorContainer;
