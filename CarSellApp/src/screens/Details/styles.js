import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    top_container:{
        marginTop:'2%',
        marginHorizontal:'3%'
    }, 
    bg:{
        width: width,
        height: height*0.4
    },
    subtitle:{
        fontSize:11,
        color: Colors.purple,
        marginTop:'3%',
        textAlign:'center'
    },
    title:{
        fontSize:37,
        fontWeight:'bold',
        textAlign:'center',
        paddingHorizontal:'10%'
    },
    img:{
        alignSelf:'center',
        width:width*0.95
    },
    button_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:'10%',
        marginTop:'2%'
    },
    button:{
        borderWidth:0.5,
        borderColor: Colors.grayText,
        borderRadius:4
    },
    text_button:{
        paddingVertical:14,
        paddingHorizontal:27,
        color: Colors.purple
    },
    bottom_container:{
        marginTop:'10%',
        marginHorizontal:'15%'
    },
    row_item:{
        flexDirection:'row',
        marginVertical:'2%'
    },
    left_text:{
        width:'90%',
        fontSize:13,
        color: Colors.grayText
    },
    right_text:{
        fontSize:13,
        color: Colors.grayText
    },
    total_price:{
        fontSize:13,
        alignItems:'flex-end',
        marginTop:'2%'
    },
    button_bottom:{
        backgroundColor: Colors.purple,
        marginHorizontal:'8%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginTop:'5%'
    },
    button_text:{
        padding:20,
        color:Colors.white,
        fontSize:17
    },
    bottom_text:{
        marginTop:'5%',
        alignSelf:'center',
        color: Colors.grayText
    }
})