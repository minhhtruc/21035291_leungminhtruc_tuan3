import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-web';

const Screen03 = ({ navigation }) => {
    const [email, setEmail] = useState('');

    const handleNextPress = () => {
        if (email.trim() === '') {
            // Show an alert if the email is empty
            alert('Nhập đầy đủ email');
        } else {
            // Navigate to Screen04 if email is provided
            navigation.navigate('Screen04');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/Data/lock-152879 1.png')}
                    style={{ width: '150px', height: '170px' }}
                />
            </View>

            <Text style={styles.title}>Forget</Text>
            <Text style={styles.title}>Password</Text>

            <Text style={styles.description}>
                Provide your account’s email for which you want to reset your password
            </Text>

            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={{ marginRight: 10 }} />
                <TextInput
                    placeholder="Email"
                    style={{ flex: 1 }}
                    value={email}
                    onChangeText={setEmail} // Update email on input change
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00CFFF', // Blue background
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        paddingHorizontal: 20, // Padding for text
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        width: 235,
        backgroundColor: '#C4C4C4',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#FFD700', // Yellow
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Screen03;
