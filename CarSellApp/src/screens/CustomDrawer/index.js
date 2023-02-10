import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import styles from "./styles";
import Images from "../../themes/Images";
import Header from "../../components/Header";
import Icons from "../../themes/Icons";

const data = [
    {
        id: 0,
        title: "Find A Truks",
        icon: 'home',
        navigate: 'DashBoard'
    },
    {
        id: 1,
        title: "Reservations",
        icon: 'reservations',
        navigate: "History"
    },
    {
        id: 2,
        title: "Buy Insurance",
        icon: 'insurance',
        navigate: ""
    },
    {
        id: 3,
        title: "Messages",
        icon: 'messages',
        navigate: ""
    }
]

const dataBottom = [
    {
        id: 0,
        title: "View Your Profile",
    },
    {
        id: 1,
        title: "List Your Truks",
    },
    {
        id: 2,
        title: "Contact Support",
    },
    {
        id: 3,
        title: "About Truks",
    }
]

export default function CustomDrawer({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.circle_menu} style={styles.bg_menu}>
                <View style={styles.content_container}>
                    <Header
                        left_icon='ic_close'
                        shownTitle={false}
                        leftText="CLOSE"
                        onPress={() => navigation.closeDrawer()}
                    />
                    <View style={styles.content}>
                        {data.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.item} onPress={() => item.navigate === "" ? {} : navigation.navigate(item.navigate)}>
                                    {Icons.Icons({ name: item.icon, height: 20, width: 32 })}
                                    <View style={styles.row_text}>
                                        <Text style={styles.text_item}>{item.title}</Text>
                                        {item.id === 3 ?
                                            <View style={styles.number_container}>
                                                <Text style={styles.text_number}>1</Text>
                                            </View>
                                            :
                                            <></>
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={styles.bottom_container}>
                        {dataBottom.map((item, index) => {
                            return (
                                <>
                                    <TouchableOpacity key={index} style={styles.bottom_item}>
                                        <Text style={styles.text_bottom}>{item.title}</Text>
                                        {item.id === 1 ?
                                            <Text style={styles.text_new}>NEW</Text> : <></>}
                                    </TouchableOpacity>
                                    <View style={styles.line} />
                                </>
                            )
                        })}
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.bottom_text}>
                <Text style={styles.text}>Made with ♥ in Ourtown — Version 1.21</Text>
            </View>
        </View>
    )
}