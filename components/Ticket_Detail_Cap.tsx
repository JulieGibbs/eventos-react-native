import { Image, View, Text, StyleSheet, ImageBackground } from 'react-native';

interface MoreProps {
    title: string,
    date: string,
    country: string,
    image: string
}

const Ticket_Detail_Cap: React.FC<MoreProps> = ({ title, date, country, image }) => {
    return (
        <View style={styles.container}>
            <View style={styles.event_left}>
                <Image style={styles.image_cap} source={require('../assests/img/event_tile_1.png')}></Image>
            </View>
            <View style={styles.event_right}>
                <Text style={styles.event_title}>{title}</Text>
                <View style={styles.event_footer}>
                    <Image style={styles.content_footer_icon} source={require('../assests/img/clock_icon.png')}></Image>
                    <Text style={styles.event_country}>{country}</Text>
                </View>
                <View style={styles.event_footer}>
                <Image style={styles.content_footer_icon} source={require('../assests/img/calendar_icon.png')}></Image>
                <Text style={styles.event_country}>{date}</Text>
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
        padding: 10,
    },
    event_left: {

    },
    image_cap: {
        width: 90,
        height: 60,
        borderRadius: 20
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
    event_right: {
        flexDirection: 'column',
        marginLeft: 10
    },
    event_footer:{
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    event_title: {
        fontFamily: 'Montserrat',
        fontSize: 20,
        color: '#ffffff'
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
    },
    content_footer_icon:{
        height:15,
        width:15
    }
})
export default Ticket_Detail_Cap;