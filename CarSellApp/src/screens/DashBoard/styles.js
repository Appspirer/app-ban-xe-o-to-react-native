import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        marginTop:'3%'
    },
    top_container:{
        marginHorizontal:'3%',
    },
    item:{
        marginTop:'8%',
    },
    title:{
        fontSize:60,
        fontWeight:'bold',
        textAlign:'center',
        marginHorizontal:'10%'
    },
    subtitle:{
        fontSize:15,
        textAlign:'center',
        marginTop:'2%',
        marginHorizontal:'10%'
    },
    img:{
        width:width*0.9,
        alignSelf:'center'
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
    content_container:{
        height:height*0.55,
    },
    button:{
        width:'90%',
        backgroundColor:Colors.purple,
        alignItems:'center',
        alignSelf:'center',
        marginTop:'7%',
        borderRadius:6,
        padding:'5%'
    },
    text:{
        fontSize:17,
        color: Colors.white
    },
    bottom_text:{
        fontSize:13,
        color: Colors.grayText,
        alignSelf:'center',
        marginTop:'7%'
    }
})