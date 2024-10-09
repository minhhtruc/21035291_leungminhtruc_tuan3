import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput,Image } from 'react-native'
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const Screen05 = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <View style={styles.ten}>Login</View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    
                    style={{ flex: 1 }}
                    
                />
            </View>
            <View style={styles.inputContainerr}>
                <TextInput
                    placeholder="Password"
                    
                    style={{ flex: 1 }}
                    
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Screen06")} >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{marginTop:15, color:'black' }}>When you agree to terms and conditions</Text>
            </View>
            <View>
                <Text style={{marginTop:15, color:'black' }}>For got your password?</Text>
            </View>
            <View>
                <Text style={{marginTop:15, color:'black' }}>Or login with</Text>
            </View>
            <View style={styles.socialLogin} >
                <button style={styles.socialButton1}>F</button>
                <button style={styles.socialButton2}>Z</button>
                <button style={styles.socialButton3}>
                    <Image source={require('../assets/Data/icogoogle 1.png')}></Image>
                </button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'rgb(216,239,222)', // Màu nền xanh 
        
        alignItems: 'center',
    },
    ten: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        marginTop: 30,
    },
    inputContainer: {
        marginTop:80,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: '90%',
        backgroundColor: '#C4C4C4',
    },
    inputContainerr:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: '90%',
        backgroundColor: '#C4C4C4',
    },
    buttonContainer: {
        marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        
        backgroundColor: 'red', 
        paddingVertical: 10,
        paddingHorizontal: 153,
    
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    socialLogin: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      socialButton1: {
        marginTop:40,
        backgroundColor: 'blue',
        padding: '10px',
        borderRadius: '5px',
        flex: 1,
        margin: '0 5px',
        color: 'white',
        width:100,
      },
      socialButton2: {
        marginTop:40,
        backgroundColor: '#0F8EE0',
        padding: '10px',
        borderRadius: '5px',
        flex: 1,
        margin: '0 5px',
        color: 'white',
        width:100,
      },
      socialButton3: {
        marginTop:40,
        backgroundColor: 'rgb(216,239,222)',
        padding: '10px',
        borderRadius: '5px',
        flex: 1,
        margin: '0 5px',
        color: 'white',
        width:100,
      },
    
});
export default Screen05
