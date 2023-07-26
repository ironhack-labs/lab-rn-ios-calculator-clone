import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { style } from "../theme/CalculatorButton.styles";

interface CalculatorButtonProps {
    text: string;
    color: string;
    colorText: string;
    size: number;
    onPress: () => void;
    buttonSize: number;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ text, color, colorText, size, onPress, buttonSize }) => {
    const height = parseInt(text) != 0 ? buttonSize : size * 2

    return <TouchableOpacity style={[style.container, { backgroundColor: color, width: buttonSize, height: height }]} onPress={onPress} >
        <Text style={{ color: colorText, fontSize: size }}>{text}</Text>
    </TouchableOpacity >
}

export default CalculatorButton;