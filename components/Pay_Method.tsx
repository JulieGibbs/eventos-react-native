import React, { useMemo, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { View, Text, Image, StyleSheet } from 'react-native'


const Pay_Method= () => {

    const [checked, setChecked] = React.useState('Credit Card');
    const pay_methodds = ['Credit Card', 'PayPal', 'Bank Transfer', 'Smart Wristband']
    return (
        <View>
            {pay_methodds.map((item, index)=>(
            <View style={styles.upcoming}>
                <View style={styles.upcoming_left}>
                    <RadioButton
                        value={item}
                        status={checked === item ? 'checked' : 'unchecked'}
                        onPress={() => setChecked(item)}
                        color='#e2fc49'
                    />
                    <Text style={styles.upcoming_text}>{item}</Text>
                </View>

                <View style={styles.upcoming_right}>
                    <Image style={styles.more_img} source={require('../assests/img/visa.png')}></Image>
                </View>
            </View>
            ))}
        </View>

    )
}



const styles = StyleSheet.create({

    upcoming: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#BABABA'
    },
    upcoming_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    upcoming_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#818181',
    },
    upcoming_right: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    more_img: {
        width: 18,
        height: 18
    }
})

export default Pay_Method;