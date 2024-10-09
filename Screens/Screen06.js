import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
const Screen06 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.ten}>REGISTER</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Name'
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Phone'
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Password'
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Birthday'
                />
            </View>
            <View style={{flexDirection: 'row', gap:10}}>
                <Text><input type='radio' name='male'/> Male</Text>
                <Text><input type='radio' name='female'/> Female</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen07")}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{marginTop:20}}>When you agree to terms and conditions</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgb(216,239,222)', // Màu nền xanh dương
    },
    ten:{
        fontSize: 30,
        fontWeight: '600',
        marginTop: 30,
    },
    inputContainer: {
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: '90%',
        backgroundColor: '#C4C4C4',
    },
    
    buttonContainer: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        
        backgroundColor: 'red', // Yellow
        paddingVertical: 10,
        paddingHorizontal: 143,
    
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    
});
export default Screen06
