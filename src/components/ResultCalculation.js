import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultCalculation(props) {
    
    const {capital, interest, months, total, errorMessage} = props;

    return (
        <View style={styles.container} >
            {total && (
                <View style={styles.boxResult} >
                    <Text style={styles.title}>RESUMEN</Text>
                    <View>
                        <Text>Cantidad solicitada:</Text>
                        <Text style={styles.value} >{capital}€</Text>
                        <Text>Interés%:</Text>
                        <Text style={styles.value} >{interest}%</Text>
                        <Text>Plazos:</Text>
                        <Text style={styles.value} >{months} meses</Text>
                        <Text>Pago mensual:</Text>
                        <Text style={styles.value} >{total.monthlyFee}€</Text>
                        <Text>Pago total:</Text>
                        <Text style={styles.value} >{total.totalPayable}€</Text>
                    </View>
                </View>
            )}
            <View>
                <Text style={styles.errorMessage} > {errorMessage} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: "#f00",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    container: {
        marginHorizontal: 40
    },
    boxResult: {
        padding: 30
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 15
    },
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15
    }
})
