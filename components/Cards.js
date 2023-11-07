import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card() {
    return (
        <View style={styles.container}>
            <View style={[styles.textContainer, { width: 200 }]}>
                <Text style={styles.text}>Mocha</Text>
            </View>
            <Image
                source={require('../assets/coffee1.jpeg')}
                style={{ width: 200, height: 200, resizeMode: 'contain', borderRadius: 10, position: 'relative' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textContainer: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 128, 0, 0.7)',
        bottom: 0,
        borderRadius: 10
    },
    text: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },
});
