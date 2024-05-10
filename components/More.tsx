import { View, Text, Image, StyleSheet } from 'react-native'

interface MoreProps {
    title: string;
  }

const More: React.FC<MoreProps> = ({ title }) => {
    return (
        <View style={styles.upcoming}>
            <Text style={styles.upcoming_text}>{title}</Text>
            <View style={styles.upcoming_right}>
                <Text style={styles.upcoming_text}>SEE MORE</Text>
                <Image style={styles.more_img} source={require('../assests/img/more_btn.png')}></Image>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    upcoming: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    upcoming_text: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        color: '#CCCCCC',
        textTransform: 'uppercase'
    },
    upcoming_right: {
        flexDirection: 'row'
    },
    more_img: {
        width: 20,
        height: 20
    }
})

export default More;