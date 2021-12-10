import React from "react";
import { View, Text, Image, StyleSheet} from 'react-native';
import {gStyle} from "../styles/Style";


function FullInfo ({ route }) {
    return (
        <View style={gStyle.main}>
            <Image style={styles.image} source={{uri: route.params.img}} />
            <Text style={[gStyle.title, styles.haeder]}>{ route.params.name}</Text>
            <Text style={styles.full}>{ route.params.full }</Text>
        </View>
    );

}

const styles = StyleSheet.create ({
    full: {
        fontFamily: 'mt-light',
        textAlign: 'center',
    },
    haeder: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'mt-bold',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 200,
    }
})

export default FullInfo