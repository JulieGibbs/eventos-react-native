import {View, Image,Text, StyleSheet} from 'react-native';

interface MoreProps{
    title:string
}
const Header:React.FC<MoreProps>=({title})=>{
    return(
        <View style={styles.container}>
            <View style={styles.header_left}>
                <Image style={styles.header_icon}source={require('../assests/img/left_icon.png')}></Image>
                <Text style={styles.header_text}>{title}</Text>
            </View>
            <Image source={require('../assests/img/setting.png')} style={styles.header_icon}></Image>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:30,
        marginVertical:20
    },
    header_text:{
        fontSize:20,
        color:'#CCCCCC',
    },
    header_left:{
        flexDirection:'row', 
        alignItems:'center'
    },
    header_icon: {
        width: 20,
        height: 20
    },
})
export default Header;