import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white
    },
    background:{
        width: width,
        height:height*0.8
    },
    text_container:{
        marginTop:'15%',
        marginHorizontal:'15%'
    },
    title:{
        fontSize: 42,
        fontWeight:'bold',
        textAlign:'center'
    },
    subtitle:{
        fontSize:15,
        color: Colors.grayText,
        textAlign:'center',
        marginTop:"10%"
    },
    bottom_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:'10%'
    },
    dot_container:{
        flexDirection:'row',
        justifyContent:'center'
    },
    dot:{
        height:7,
        width:7,
        borderRadius:4,
        borderWidth:1,
        marginHorizontal:5
    },
    button:{
        flexDirection:'row',
        alignItems:'center'
    },
    next_text:{
        fontSize:13,
    }
})