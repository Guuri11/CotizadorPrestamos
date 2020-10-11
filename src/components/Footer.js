import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../utils/colors';

export default function Footer(props) {
    return (
        <View style={styles.viewFooter} >
            <TouchableOpacity onPress={props.calculate} style={styles.button} >
                <Text style={styles.text} >CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#fff",
        borderRadius: 50,
        textAlign: "center"
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius:20,
        width: "75%"
    }
})
