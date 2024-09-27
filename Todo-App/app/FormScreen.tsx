import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { submitFormData } from './api'; // Import the API function

export default function FormScreen() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [turnover, setTurnover] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async () => {
    const formData = {
      fullname,
      email,
      phone,
      business,
      turnover,
      location,
    };

    console.log('Submitting form:', formData);

    try {
      const data = await submitFormData(formData);
      Alert.alert('Success', 'Form submitted successfully');
    } catch (error) {
      console.error('Network Error:', error);
      Alert.alert('Error', error.message || 'Unable to submit form');
    }
  };

  return (
    <MotiView
      from={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 1500 }} // Slower animation (duration in milliseconds)
      style={styles.container}
    >
      <MotiText
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'timing', duration: 1500 }} // Slower animation for text as well
        style={styles.heading}
      >
        Business Form
      </MotiText>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999"
        value={fullname}
        onChangeText={setFullname}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#999"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Business"
        placeholderTextColor="#999"
        value={business}
        onChangeText={setBusiness}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Turnover"
        placeholderTextColor="#999"
        value={turnover}
        onChangeText={setTurnover}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Location"
        placeholderTextColor="#999"
        value={location}
        onChangeText={setLocation}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#1E90FF" />
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212', // Dark theme background
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1E90FF', // Blue accent for text
  },
  input: {
    height: 40,
    borderColor: '#1E90FF', // Blue border for input fields
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#fff', // White text color for input
    backgroundColor: '#333', // Darker background for inputs
    width: 340, // Fixed width for inputs
    alignSelf: 'center', // Center the input fields
  },
  buttonContainer: {
    marginTop: 20,
  },
});
