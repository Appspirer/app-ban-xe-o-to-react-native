import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Header({ onPress, left_icon = 'ic_menu', shownTitle = true, leftText }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.left_item} onPress={onPress ? onPress : null}>
                <View style={styles.left_ic_container}>
                    {Icons.Icons({ name: left_icon, height: 11, width: 22 })}
                </View>
                <Text style={styles.left_text}>{leftText}</Text>
            </TouchableOpacity>
            {shownTitle ? Icons.Icons({ name: 'logo', height: 15.8, width: 120 }) : null}
            <View style={{ width: 44 }} />
        </View>
    )
}