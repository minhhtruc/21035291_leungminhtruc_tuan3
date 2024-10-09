import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Screen07 = () => {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>
            <View style={styles.ten}>Login</View>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />    
                <TextInput 
                    placeholder='Name'
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />    
                <TextInput 
                    placeholder='Password'
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen08")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{fontSize:25, fontWeight:600,marginTop:50}}>CREATE ACCOUNT</View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgb(242,195,1)', // Màu nền xanh  
        alignItems: 'center',
    },
    ten:{
        fontSize: 40,
        fontWeight: 600,
        color: 'black',
        marginRight:200,
        marginTop:60,
        marginBottom:30,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: '90%',
        backgroundColor: 'rgb(220,189,59)',
        borderColor:'white',
    },
    buttonContainer: {
        marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: 'black', // Yellow
        paddingVertical: 10,
        paddingHorizontal: 153,
    
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
   
});
export default Screen07
