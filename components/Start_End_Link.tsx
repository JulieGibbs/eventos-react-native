import { View, Text, Image, StyleSheet } from 'react-native'

interface MoreProps {
    title: string;
    link:string
  }

const Start_End_Link: React.FC<MoreProps> = ({ title, link }) => {
    return (
        <View style={styles.upcoming}>
            <Text style={styles.upcoming_text}>{title}</Text>
            <View style={styles.upcoming_right}>
                <Text style={styles.upcoming_text}>{link}</Text>
                <Image style={styles.more_img} source={require('../assests/img/next_green_icon.png')}></Image>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    upcoming: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginVertical:10
    },
    upcoming_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#e2fc49',
    },
    upcoming_right: {
        flexDirection: 'row'
    },
    more_img: {
        width: 18,
        height: 18
    }
})

export default Start_End_Link;