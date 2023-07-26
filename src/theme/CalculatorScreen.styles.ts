import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'stretch',
        justifyContent: 'flex-end'
    },
    resultsContainer: {
        height: (Dimensions.get('screen').height / 8) * 2.5,
    },
    scrollView: {
        flexGrow: 1, 
        flexDirection: 'column'
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})