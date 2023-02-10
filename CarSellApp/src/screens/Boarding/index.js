import * as React from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Colors from '../../themes/Colors';
import Icons from '../../themes/Icons';
import Images from '../../themes/Images';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const data = [
    {
        id: 0,
        title: 'Adipscing consecutor',
        subtitle: "Lorem ipsum dolor sit amet adipscing consecutor elito nonummy poremus ultricies vivendi bibendum ludovico.",
        img: Images.banner1
    },
    {
        id: 1,
        title: 'Lorem ipsum, sit amet',
        subtitle: "Lorem ipsum dolor sit amet adipscing consecutor elito nonummy poremus ultricies vivendi bibendum ludovico.",
        img: Images.banner2
    },
]

export default function Boarding({navigation}) {

    const [indexSelected, setIndexSelected] = React.useState(0)

    const changeIndex =()=>{
        if(indexSelected === 0){
            setIndexSelected(1)
        }else{
            navigation.navigate('DashBoard')
        }
    }

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={height * 0.8}
                data={data}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setIndexSelected(index)}
                defaultIndex={indexSelected}
                renderItem={({ item, index }) => (
                    <ImageBackground style={styles.background} source={item.img}>
                        <View style={styles.text_container}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                    </ImageBackground>
                )}
            />
            <View style={styles.bottom_container}>
                <View style={styles.dot_container}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.dot, {
                                backgroundColor: indexSelected === index ? Colors.purple : Colors.white
                            }]} />
                        )
                    })}
                </View>
                <TouchableOpacity style={styles.button} onPress={()=>changeIndex()}>
                    <Text style={styles.next_text}>NEXT</Text>
                    {Icons.Icons({name:'next_arrow', height:8.49, width:40.24})}
                </TouchableOpacity>
            </View>
        </View>
    );
}