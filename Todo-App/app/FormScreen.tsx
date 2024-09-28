import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { Ionicons } from '@expo/vector-icons'; 
import * as Location from 'expo-location';  // Import Location API
import { submitFormData } from './api'; 

export default function FormScreen() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [business, setBusiness] = useState('');
  const [turnover, setTurnover] = useState('');
  const [location, setLocation] = useState('');

  // Function to fetch and set the device location
  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    const coords = `Lat: ${locationData.coords.latitude}, Long: ${locationData.coords.longitude}`;
    setLocation(coords);
    Alert.alert('Location fetched successfully', coords);
  };

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
      transition={{ type: 'timing', duration: 1000 }}
      style={styles.container}
    >
      <MotiText
        from={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={styles.heading}
      >
        Business Form
      </MotiText>

      {/* Input with icons */}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={fullname}
          onChangeText={setFullname}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#999"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="briefcase-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Business"
          placeholderTextColor="#999"
          value={business}
          onChangeText={setBusiness}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="cash-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Turnover"
          placeholderTextColor="#999"
          value={turnover}
          onChangeText={setTurnover}
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Ionicons name="location-outline" size={20} color="#1E90FF" />
        <TextInput
          style={styles.input}
          placeholder="Location"
          placeholderTextColor="#999"
          value={location}
          onChangeText={setLocation}
        />
        {/* Button to fetch the location */}
        <TouchableOpacity style={styles.locationButton} onPress={fetchLocation}>
          <Ionicons name="locate-outline" size={24} color="#1E90FF" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <MotiText
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'timing', duration: 500 }}
          style={styles.buttonText}
        >
          Submit
        </MotiText>
      </TouchableOpacity>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1E90FF',
    width: 330,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    marginLeft: 10,
  },
  locationButton: {
    marginLeft: 10,
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
