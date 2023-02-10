import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../themes/Colors'

var {height, width} = Dimensions.get('window')

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.white,
    },
    content_container:{
        marginHorizontal:'3%',
        marginTop:'3%'
    },
    title_content:{
        flexDirection:'row',
        marginTop:'10%',
        marginHorizontal:'2%',
        justifyContent:'space-between'
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    result:{
        fontSize:15
    },
    title_container:{
        width:'60%'
    },
    dropdown_container:{
        width:'37%'
    },
    list:{
        marginTop:'10%'
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    left_item:{
        flexDirection:'row'
    },
    img:{

    },
    info_item:{
        marginLeft:15,
        justifyContent:'center'
    },
    title_item:{
        fontSize:16
    },
    price_item:{
        fontSize:13,
        color: Colors.grayText,
        marginTop:5
    },
    text_view:{
        fontSize:16,
        color:Colors.purple
    },
    button:{
        borderWidth:1,
        borderRadius:6,
        paddingHorizontal:17,
        paddingVertical:4,
        borderColor:Colors.purple
    },
    line:{
        height:0.5,
        width:'100%',
        backgroundColor:Colors.grayText,
        marginVertical:'5%'
    }
})