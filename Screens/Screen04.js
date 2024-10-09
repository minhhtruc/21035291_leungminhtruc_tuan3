import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Screen04 = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // State for 6 digits

    // Handle OTP input
    const handleOtpChange = (value, index) => {
        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleVerifyCode = () => {
        const enteredOtp = otp.join(''); // Combine digits into a single string
        console.log('Entered OTP:', enteredOtp);
        // Add your verification logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CODE</Text>
            <Text style={styles.subTitle}>VERIFICATION</Text>
            <Text style={styles.infoText}>Enter ontime password sent on</Text>
            <Text style={styles.phoneNumber}>++849092605798</Text>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(value) => handleOtpChange(value, index)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
                <Text style={styles.buttonText}
                    onPress={() => navigation.navigate("Screen05")}

                >VERIFY CODE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
        marginVertical: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#000',
    },
    phoneNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 20,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    otpInput: {
        width: 40,
        height: 45,
        borderWidth: 1,
        borderColor: '#000',
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: '#ffc107',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    
});

export default Screen04;
