import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../utils/colors';

export default function Form() {
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad a pedir"/>
                <TextInput placeholder="Interés %" keyboardType="numeric" style={[styles.input, styles.inputPercentage]}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: -90,
        width: "85%",
        paddingHorizontal: 40,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInput: {
        flexDirection: "row"
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "65%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5
    }
})