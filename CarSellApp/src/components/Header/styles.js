import {StyleSheet} from 'react-native'
import Colors from '../../themes/Colors'

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    left_ic_container:{
        backgroundColor:Colors.purple,
        borderRadius:50,
        height:44,
        width:44,
        justifyContent:'center',
        alignItems:'center',
    },
    left_item:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    left_text:{
        fontSize: 11,
        color: Colors.white,
        marginLeft:10
    }
})