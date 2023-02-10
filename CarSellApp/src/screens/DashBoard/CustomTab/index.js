import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Colors from "../../../themes/Colors";
import styles from "./styles";

export default function CustomTab({ data, selected, setSelected }) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={[styles.item, {
                        borderWidth: selected === index ? 1 : 0
                    }]}
                        onPress={() => setSelected(item.id)}
                    >
                        <Text style={[styles.text_item,{
                            color: selected === index ? Colors.purple : Colors.coldPurple
                        }]}>{item.title}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}