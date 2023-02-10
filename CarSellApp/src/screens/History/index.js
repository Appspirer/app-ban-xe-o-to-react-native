import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import Header from "../../components/Header";
import styles from "./styles";
import DropDownPicker from 'react-native-dropdown-picker';
import Icons from "../../themes/Icons";
import Colors from "../../themes/Colors";
import Images from "../../themes/Images";

const listData = [
    {
        id: 0,
        name: "Ford F-150 Raptor",
        price: 75,
        date: "Jan 21, 2019",
        img: Images.ford_small
    },
    {
        id: 1,
        name: "Chevrolet Silverado",
        price: 70,
        date: "Dec 13, 2018",
        img: Images.chevy_small
    },
    {
        id: 2,
        name: "Toyota Tacoma TRD",
        price: 90,
        date: "Dec 4, 2018",
        img: Images.toyota_small
    },
    {
        id: 3,
        name: "Dodge Ram 1500",
        price: 75,
        date: "Nov 13, 2018",
        img: Images.dodge_small
    }
]

export default function History({ navigation }) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Pass year', value: 'PassYear' },
        { label: 'Pass month', value: 'PassMonth' }
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.content_container}>
                <Header
                    onPress={() => navigation.openDrawer()}
                />
                <View style={styles.title_content}>
                    <View style={styles.title_container}>
                        <Text style={styles.title}>Previous Reservations</Text>
                        <Text style={styles.result}>Showing 4 results</Text>
                    </View>
                    <View style={styles.dropdown_container}>
                        <DropDownPicker
                            placeholder="Pass year"
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            ArrowDownIconComponent={() => <>{Icons.Icons({ name: 'arrow_down', height: 7, width: 11 })}</>}
                            ArrowUpIconComponent={() => <>{Icons.Icons({ name: 'arrow_up', height: 7, width: 11 })}</>}
                            style={{ paddingRight: 20, borderRadius: 8, backgroundColor: Colors.purple, borderColor: Colors.purple }}
                            dropDownContainerStyle={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, backgroundColor: Colors.purple, borderColor: Colors.purple }}
                            textStyle={{ color: Colors.white, fontSize: 15 }}
                        />
                    </View>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={listData}
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <View style={styles.item}>
                                        <View style={styles.left_item}>
                                            <Image source={item.img} style={styles.img} />
                                            <View style={styles.info_item}>
                                                <Text style={styles.title_item}>{item.name}</Text>
                                                <Text style={styles.price_item}>${item.price} on {item.date}</Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Details")}>
                                            <Text style={styles.text_view}>View</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.line}/>
                                </>
                            )
                        }}
                    />
                </View>
            </View>
        </View>
    )
}