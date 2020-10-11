import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';


export default function Form(props) {

    const {setMonths, setCapital, setInterest} = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInput}>
                <TextInput style={styles.input} onChange={e => setCapital(e.nativeEvent.text)} keyboardType="numeric" placeholder="Cantidad a pedir"/>
                <TextInput placeholder="Interés %" onChange={e => setInterest(e.nativeEvent.text)} keyboardType="numeric" style={[styles.input, styles.inputPercentage]}/>
            </View>

            <RNPickerSelect
            style={picketSelectStyles}
            placeholder={{label: "Selecciona los plazos", value: null}}
            onValueChange={(value) => setMonths(value)}
            items={[
                { label: '3 meses', value: 3 },
                { label: '6 meses', value: 6 },
                { label: '12 meses', value: 12 },
                { label: '24 meses', value: 24 },
            ]}
        />

        </View>
        
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 0,
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

const picketSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff',
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#fff'
    }
})