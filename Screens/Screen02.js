import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Screen02 = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.circle}></View>


            <Text style={styles.title}>
                GROW

            </Text>
            <Text style={styles.title}>
                YOUR BUSINESS

            </Text>

            <Text style={styles.description}>
                We will help you to grow your business using online server
            </Text>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}
                    onPress={()=> navigation.navigate("Screen03")}
                
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={()=> navigation.navigate("Screen03")}
                
                >
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>


            <View>
                <Text style={styles.title1}>
                    How We Work?
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00CFFF', // Màu nền xanh dương
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: 'black', // Vòng tròn với viền đen
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title1: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:20
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 40,
        fontWeight: '600',
        paddingHorizontal: 20, // Để mô tả không sát cạnh màn hình
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#FFD700', // Màu vàng
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
});
export default Screen02
