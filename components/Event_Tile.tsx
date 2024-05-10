import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';

interface MoreProps {
    title: string,
    day: string,
    month: string,
    country: string,
    time: string,
    price: string,
    image: string
}

const Event_Tile: React.FC<MoreProps> = ({ title, day, month, country, time, price, image }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assests/img/event_tile_1.png')} style={styles.imageBackground}>
                <View style={styles.event_month}>
                    <Text style={styles.day_text}>{day}</Text>
                    <Text style={styles.month_text}>{month}</Text>
                </View>
                <View style={styles.event_content}>
                    <Text style={styles.event_title}>{title}</Text>
                    <View style={styles.event_content_footer}>
                        <Text style={styles.event_country}>{country} {time}</Text>
                        <View style={styles.event_price}>
                            <Text style={styles.price_text}>${price}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 30,
        marginRight:20
    },
    imageBackground: {
        width: 200,
        height: 180,

    },
    event_month: {
        flexDirection: 'column',
        position: 'absolute',
        top: 20,
        right: 0,
        backgroundColor: '#333333',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    month_text: {
        fontFamily: 'Montserrat',
        fontSize: 9,
        color: '#A3D977',
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    day_text: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        color: '#A3D977'
    },
    event_content: {
        backgroundColor: "#7C7C7C",
        opacity: 0.85,
        borderRadius: 15,
        margin: '5%',
        width: '90%',
        position: 'absolute',
        bottom: 10,
        justifyContent: 'center',
        padding: 20
    },
    event_title: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        color: '#ffffff'
    },
    event_content_footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    event_country: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#ffffff'
    },
    event_price: {
        backgroundColor: '#333333',
        width: 56,
        height: 20,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    price_text: {
        color: '#A3D977',
        fontFamily: 'Montserrat',
        fontSize: 12,
    }
})

export default Event_Tile;