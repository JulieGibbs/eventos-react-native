import { View, Text, Image, StyleSheet } from 'react-native'

interface MoreProps {
    start_text: string;
    end_text: string;
}

const Start_End_Text: React.FC<MoreProps> = ({ start_text, end_text }) => {
    return (
        <View style={styles.upcoming}>
            <Text style={styles.upcoming_text}>{start_text}</Text>
            <View style={styles.upcoming_right}>
                <Text style={styles.upcoming_text}>{end_text}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({

    upcoming: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop:10
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

export default Start_End_Text;