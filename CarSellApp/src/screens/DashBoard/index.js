import React, { useState } from "react";
import { View, Text, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Header from "../../components/Header";
import styles from "./styles";
import CustomTab from "./CustomTab";
import Carousel from "react-native-reanimated-carousel";
import Images from "../../themes/Images";
import Colors from "../../themes/Colors";

var { height, width } = Dimensions.get('window')

const data = [
    {
        id: 0,
        title: "STANDARD"
    },
    {
        id: 1,
        title: "HEAVY DUTY"
    },
    {
        id: 2,
        title: "SUPER DUTY"
    }
]

const dataContent = [
    {},
    {},
    {}
]

export default function DashBoard({navigation}) {

    const [selected, setSelected] = useState(0)
    const [indexSelected, setIndexSelected] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Header 
                    onPress={()=>navigation.openDrawer()}
                />
                <CustomTab
                    data={data}
                    selected={selected}
                    setSelected={(index) => setSelected(index)}
                />
            </View>

            <View style={styles.content_container}>
                <Carousel
                    width={width}
                    height={height * 0.8}
                    data={dataContent}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setIndexSelected(index)}
                    defaultIndex={indexSelected}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Text style={styles.title}>Ford F-150 Raptor</Text>
                            <Text style={styles.subtitle}>$75 per day  |  Seats 4</Text>
                            <Image style={styles.img} source={Images.ford} />
                        </View>
                    )}
                />
            </View>
            <View style={styles.dot_container}>
                {dataContent.map((item, index) => {
                    return (
                        <View key={index} style={[styles.dot, {
                            backgroundColor: indexSelected === index ? Colors.purple : Colors.white
                        }]} />
                    )
                })}
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Reserve It Now</Text>
            </TouchableOpacity>
            <Text style={styles.bottom_text}>Luxury class reservations have a $0 deposit.</Text>
        </View>
    )
}