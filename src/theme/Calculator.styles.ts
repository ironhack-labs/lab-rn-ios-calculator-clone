import { StyleSheet } from "react-native";

export const CalculatorStyles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    resultsContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 16,
        zIndex: 10,
    },
    currentValue:{
        color: 'white',
        fontSize: 48,
    },
    previousValue:{
        color: 'rgb(165, 165, 165)',
        fontSize: 24
    },
});