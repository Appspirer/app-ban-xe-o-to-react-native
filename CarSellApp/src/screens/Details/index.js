import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Images from "../../themes/Images";
import Header from "../../components/Header";

export default function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.circle_details} style={styles.bg}>
                <View style={styles.top_container}>
                    <Header
                        left_icon="ic_back"
                        onPress={() => navigation.goBack()}
                        shownTitle={false}
                    />
                    <Text style={styles.subtitle}>RESERVATION 0121-82</Text>
                    <Text style={styles.title}>Ford F-150 Raptor</Text>
                    <Image style={styles.img} source={Images.ford_details}/>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>Add to Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text_button}>View Receipt</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottom_container}>
                    <View style={styles.row_item}>
                        <Text style={styles.left_text} numberOfLines={1}>RENTAL RATE............................................................</Text>
                        <Text style={styles.right_text}>$69</Text>
                    </View>
                    <View style={styles.row_item}>
                        <Text style={styles.left_text} numberOfLines={1}>TRUKS FEES............................................................</Text>
                        <Text style={styles.right_text}>$15</Text>
                    </View>
                    <View style={styles.row_item}>
                        <Text style={styles.left_text} numberOfLines={1}>LOCAL TAX............................................................</Text>
                        <Text style={styles.right_text}>$10</Text>
                    </View>
                    <View style={styles.total_price}>
                        <Text style={styles.total_text}>$94</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button_bottom}>
                    <Text style={styles.button_text}>Reserve It Again</Text>
                </TouchableOpacity>
                <Text style={styles.bottom_text}>Pickup class reservations have a $0 deposit.</Text>
            </ImageBackground>
        </View>
    )
}