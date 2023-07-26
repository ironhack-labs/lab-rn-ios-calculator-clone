import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    number: {
        color: '#ffffff',
        marginBottom: 20,
        fontSize: (Dimensions.get('screen').height / 9),
        fontWeight: '300'
    }
})