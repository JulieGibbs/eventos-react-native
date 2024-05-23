import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';

interface MoreProps {
    title: string,
    day: Number,
    month: string,
    address: string,
    price: string,
    image: string
}

const Event_Item: React.FC<MoreProps> = ({ title, day, month, address, price, image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.event_left}>
                <ImageBackground
                    source={require('../assests/img/event_tile_1.png')} imageStyle={{borderRadius:20}} style={styles.imageBackground}>
                    <View style={styles.event_month}>
                        <Text style={styles.day_text}>{day.toString()}</Text>
                        <Text style={styles.month_text}>{month}</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.event_right}>
                <Text style={styles.event_title}>{title}</Text>
                <View style={styles.event_content_footer}>
                    <View style={{flexDirection:'row'}}>
                    <Image style={styles.place_image} source={require('../assests/img/place.png')}></Image>
                    <Text style={styles.event_country}>{address}</Text>
                    </View>
                    
                    <View style={styles.event_price}>
                        <Text style={styles.price_text}>${price}</Text>
                    </View>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#666666',
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        marginVertical:10
    },
    event_left: {
        flex:1

    },
    imageBackground: {
        width: 70,
        height: 70
    },
    place_image:{
        width:20,
        height:20
    },
    event_content: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text_welcome: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#ffffff'
    },
    event_month: {
        flexDirection: 'column',
        position: 'absolute',
        top: 10,
        left: 0,
        backgroundColor: '#333333',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    month_text: {
        fontFamily: 'Montserrat',
        fontSize: 5,
        color: '#e2fc49',
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    day_text: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        color: '#e2fc49'
    },
    event_right:{
        flex:4,
        flexDirection:'column',
        marginLeft:10
    },
    event_title: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        color: '#ffffff',
        flex:1
    },
    event_content_footer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    event_country: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        color: '#ffffff'
    },
    event_price: {
        backgroundColor: '#333333',
        width: 56,
        height: 28,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    price_text: {
        color: '#e2fc49',
        fontFamily: 'Montserrat',
        fontSize: 12,
    }
})
export default Event_Item;