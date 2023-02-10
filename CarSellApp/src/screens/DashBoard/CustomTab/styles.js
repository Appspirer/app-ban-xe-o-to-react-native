import {StyleSheet} from 'react-native'
import Colors from '../../../themes/Colors'


export default StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:'8%',
        justifyContent:'center'
    },
    item:{
        borderColor: Colors.purple,
        paddingHorizontal:10,
        paddingVertical:8,
        borderRadius:4
    },
    text_item:{
        fontSize:13,
    }
})