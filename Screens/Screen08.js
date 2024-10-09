import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-web';
const Screen08 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Data/icon.png')} style={{marginTop:40}}/>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="gray" style={{ marginRight: 10 }} />    
                <TextInput 
                    placeholder='Please input your name' 
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="gray" style={{ marginRight: 10 }} />    
                <TextInput width='300%'
                    placeholder='Please input your password' 
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen05")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',gap:200,marginTop:20}}>
                <Text style={{fontSize:20}}>Register</Text>
                <Text style={{fontSize:20}}>Register</Text>
            </View>
            <View>
                <Text style={{fontSize:20, marginTop:20}}>Other Login Methods</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop:40, gap:50}}>
                <Image source={require('../assets/Data/user.png')} style={{marginTop:5}}/>
                <Image source={require('../assets/Data/wifi.png')} style={{}}/>
                <Image source={require('../assets/Data/fb.png')} style={{marginTop:5}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput:{
        borderBottom: 'black',
        backgroundColor:'red'
    },
    inputContainer: {
        alignItems: 'center',
        marginTop:30,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: '90%',
        borderBottomWidth:2,
        borderBottomColor: 'black',
        borderColor:'white',
    },
    buttonContainer: {
      
        marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: 'blue', 
        paddingVertical: 10,
        paddingHorizontal: 153,
        borderRadius: '5px',
        marginHorizontal: 10,
    },
    buttonText: {
       
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
export default Screen08
