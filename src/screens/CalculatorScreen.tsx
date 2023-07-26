import React, { useEffect, useRef, useState } from "react"
import { Dimensions, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";
import { style } from "../theme/CalculatorScreen.styles";
import CalculatorContainer from "../components/CalculatorContainer";
import CalculatorNumber from "../components/CalculatorNumber";
import CalculatorButton from "../components/CalculatorButton";
import { useCalculator } from "../hooks/useCalculator";
import CalculatorOldResult from "../components/CalculatorOldResult";



const CalculatorScreen = () => {
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [buttonSize, setButtonSize] = useState(0);
    const calculator = useCalculator()
    useEffect(() => {
        setButtonSize(Dimensions.get('screen').width / 4.5)
    }, [])
    return (
        <SafeAreaView style={style.container}>
            <View style={style.resultsContainer}>
                <ScrollView style={style.scrollView} contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'flex-end',
                }}
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef!.current!.scrollToEnd({ animated: true })}
                >
                    <View style={style.scrollContainer}>
                        {calculator.oldResults.map((number) => <CalculatorOldResult sign={number} />)}
                    </View>
                </ScrollView>
                <CalculatorNumber sign={calculator.displayedNumber} />
            </View>
            <CalculatorContainer>
                <CalculatorButton text="AC" color={"#a5a5a5"} colorText={"#000"} size={buttonSize / 2} onPress={() => calculator.addValue('AC')} buttonSize={buttonSize} />
                <CalculatorButton text="+/-" color={"#a5a5a5"} colorText={"#000"} size={buttonSize / 2} onPress={() => calculator.addValue('+/-')} buttonSize={buttonSize} />
                <CalculatorButton text="del" color={"#a5a5a5"} colorText={"#000"} size={buttonSize / 2} onPress={() => calculator.addValue('del')} buttonSize={buttonSize} />
                <CalculatorButton text="÷" color={"#ffaa0c"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('/')} buttonSize={buttonSize} />
            </CalculatorContainer>
            <CalculatorContainer>
                <CalculatorButton text="7" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('7')} buttonSize={buttonSize} />
                <CalculatorButton text="8" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('8')} buttonSize={buttonSize} />
                <CalculatorButton text="9" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('9')} buttonSize={buttonSize} />
                <CalculatorButton text="x" color={"#ffaa0c"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('x')} buttonSize={buttonSize} />
            </CalculatorContainer>
            <CalculatorContainer>
                <CalculatorButton text="4" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('4')} buttonSize={buttonSize} />
                <CalculatorButton text="5" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('5')} buttonSize={buttonSize} />
                <CalculatorButton text="6" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('6')} buttonSize={buttonSize} />
                <CalculatorButton text="-" color={"#ffaa0c"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('-')} buttonSize={buttonSize} />
            </CalculatorContainer>
            <CalculatorContainer>
                <CalculatorButton text="1" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('1')} buttonSize={buttonSize} />
                <CalculatorButton text="2" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('2')} buttonSize={buttonSize} />
                <CalculatorButton text="3" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('3')} buttonSize={buttonSize} />
                <CalculatorButton text="+" color={"#ffaa0c"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('+')} buttonSize={buttonSize} />
            </CalculatorContainer>
            <CalculatorContainer>
                <CalculatorButton text="0" color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('0')} buttonSize={(buttonSize * 2) + buttonSize / 6} />
                <CalculatorButton text="." color={"#333333"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.addValue('.')} buttonSize={buttonSize} />
                <CalculatorButton text="=" color={"#ffaa0c"} colorText={"#fff"} size={buttonSize / 2} onPress={() => calculator.performOperation()} buttonSize={buttonSize} />
            </CalculatorContainer>

        </SafeAreaView >
    )
}
//<CalculatorButton text="8" color={"#333333"} colorText={"#000"} size={buttonSize/2} onPress={""} />
export default CalculatorScreen;
