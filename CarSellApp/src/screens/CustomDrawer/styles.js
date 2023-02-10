import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.purple
    },
    bg_menu:{
        width: width,
        height: height * 0.85
    },
    content_container:{
        marginTop:'5%',
        marginHorizontal:'3%'
    },
    item:{
        flexDirection:'row',
        alignItems:'center'
    },
    row_text:{
        flexDirection:'row',
        marginVertical:'3%'
    },
    number_container:{
        backgroundColor:Colors.green,
        borderRadius:50,
        height:20,
        width:20,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginTop:'1%'
    },
    text_item:{
        fontSize:36,
        fontWeight:'bold',
        color: Colors.white,
        marginLeft:15
    },
    text_number:{
        fontSize:13,
        color:Colors.white
    },
    content:{
        marginHorizontal:'5%',
        marginTop:'15%'
    },
    line:{
        height:0.5,
        width:'100%',
        backgroundColor:Colors.coldPurple,
        marginVertical:'7%'
    },
    bottom_item:{
        flexDirection:'row',
    },
    text_bottom:{
        fontSize:16,
        color:Colors.coldPurple
    },
    bottom_container:{
        marginHorizontal:'18%',
        marginTop:'15%'
    },
    text_new:{
        fontSize:9,
        color: Colors.white,
        borderColor:Colors.white,
        borderWidth:1,
        borderRadius:10,
        marginLeft:10,
        paddingHorizontal:10,
        paddingVertical:4
    },
    text:{
        fontSize: 13,
        color: Colors.coldPurple
    },
    bottom_text:{
        alignSelf:'center'
    }
})