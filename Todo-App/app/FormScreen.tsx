import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { MotiView, MotiText } from 'moti';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { submitFormData } from './api';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';

export default function FormScreen() {
  // State Variables
  const [rmName, setRmName] = useState('');
  const [customerFullName, setCustomerFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [typeOfIncome, setTypeOfIncome] = useState('Business Name');
  const [businessName, setBusinessName] = useState('');
  const [businessTurnover, setBusinessTurnover] = useState('');
  const [existingLoans, setExistingLoans] = useState('');
  const [loanRequirement, setLoanRequirement] = useState('');
  const [typeOfLoan, setTypeOfLoan] = useState('Personal Loan');
  const [otherLoanType, setOtherLoanType] = useState('');
  const [remarks, setRemarks] = useState('');
  const [followUpRequired, setFollowUpRequired] = useState('Yes');
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const [location, setLocation] = useState('');

  // Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/; // Adjust based on your requirements
    return phoneRegex.test(phone);
  };

  // Fetch Location
  const fetchLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Permission to access location was denied');
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    const coords = `Lat: ${locationData.coords.latitude}, Long: ${locationData.coords.longitude}`;
    setLocation(coords);
    Alert.alert('Location Fetched', coords);
  };

  // Document Picker
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ['image/*', 'application/pdf'],
    });

    if (result.type === 'success') {
      setUploadedDocument(result);
      Alert.alert('Document Selected', result.name);
    }
  };

  // Handle Form Submission
  const handleSubmit = async () => {
    // Validations
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit phone number.');
      return;
    }

    // Construct FormData
    const formData = new FormData();
    formData.append('rmName', rmName);
    formData.append('customerFullName', customerFullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('typeOfIncome', typeOfIncome);
    formData.append('businessName', businessName);
    formData.append('businessTurnover', businessTurnover);
    formData.append('existingLoans', existingLoans);
    formData.append('loanRequirement', loanRequirement);
    formData.append('typeOfLoan', typeOfLoan === 'Other' ? otherLoanType : typeOfLoan);
    formData.append('remarks', remarks);
    formData.append('followUpRequired', followUpRequired);
    formData.append('location', location);

    if (uploadedDocument) {
      const uriParts = uploadedDocument.uri.split('.');
      const fileType = uriParts[uriParts.length - 1];

      formData.append('uploadedDocument', {
        uri: uploadedDocument.uri,
        name: uploadedDocument.name,
        type: uploadedDocument.mimeType || `application/${fileType}`,
      });
    }

    // Submit Form Data
    try {
      const data = await submitFormData(formData);
      Alert.alert('Success', 'Form submitted successfully');
    } catch (error) {
      console.error('Network Error:', error);
      Alert.alert('Error', error.message || 'Unable to submit form');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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

        {/* RM Name */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="RM Name"
            placeholderTextColor="#999"
            value={rmName}
            onChangeText={setRmName}
          />
        </View>

        {/* Full Name of Customer */}
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Full Name of Customer"
            placeholderTextColor="#999"
            value={customerFullName}
            onChangeText={setCustomerFullName}
          />
        </View>

        {/* Email Address */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Phone Number */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#999"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        {/* Type of Income */}
        <Text style={styles.label}>Type of Income:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setTypeOfIncome('Business Name')}
          >
            <Ionicons
              name={typeOfIncome === 'Business Name' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1E90FF"
            />
            <Text style={styles.radioText}>Business Name</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setTypeOfIncome('Employee')}
          >
            <Ionicons
              name={typeOfIncome === 'Employee' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1E90FF"
            />
            <Text style={styles.radioText}>Employee</Text>
          </TouchableOpacity>
        </View>

        {/* Business Name */}
        {typeOfIncome === 'Business Name' && (
          <View style={styles.inputContainer}>
            <Ionicons name="briefcase-outline" size={20} color="#1E90FF" />
            <TextInput
              style={styles.input}
              placeholder="Business Name"
              placeholderTextColor="#999"
              value={businessName}
              onChangeText={setBusinessName}
            />
          </View>
        )}

        {/* Business Turnover */}
        <View style={styles.inputContainer}>
          <Ionicons name="cash-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Business Turnover"
            placeholderTextColor="#999"
            value={businessTurnover}
            onChangeText={setBusinessTurnover}
            keyboardType="numeric"
          />
        </View>

        {/* Existing Loans */}
        <View style={styles.inputContainer}>
          <Ionicons name="document-text-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Existing Loans"
            placeholderTextColor="#999"
            value={existingLoans}
            onChangeText={setExistingLoans}
          />
        </View>

        {/* Loan Requirement */}
        <View style={styles.inputContainer}>
          <Ionicons name="cash-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Loan Requirement"
            placeholderTextColor="#999"
            value={loanRequirement}
            onChangeText={setLoanRequirement}
            keyboardType="numeric"
          />
        </View>

        {/* Type of Loan */}
        <Text style={styles.label}>Type of Loan:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={typeOfLoan}
            style={styles.picker}
            onValueChange={(itemValue) => setTypeOfLoan(itemValue)}
            dropdownIconColor="#1E90FF"
          >
            <Picker.Item label="Personal Loan" value="Personal Loan" />
            <Picker.Item label="Business Loan" value="Business Loan" />
            <Picker.Item label="Mortgage" value="Mortgage" />
            <Picker.Item label="Auto Loan" value="Auto Loan" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Specify Other Loan Type */}
        {typeOfLoan === 'Other' && (
          <View style={styles.inputContainer}>
            <Ionicons name="create-outline" size={20} color="#1E90FF" />
            <TextInput
              style={styles.input}
              placeholder="Specify Loan Type"
              placeholderTextColor="#999"
              value={otherLoanType}
              onChangeText={setOtherLoanType}
            />
          </View>
        )}

        {/* Remarks */}
        <View style={styles.inputContainer}>
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Remarks"
            placeholderTextColor="#999"
            value={remarks}
            onChangeText={setRemarks}
          />
        </View>

        {/* Follow-up Required */}
        <Text style={styles.label}>Follow-up Required:</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFollowUpRequired('Yes')}
          >
            <Ionicons
              name={followUpRequired === 'Yes' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1E90FF"
            />
            <Text style={styles.radioText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setFollowUpRequired('No')}
          >
            <Ionicons
              name={followUpRequired === 'No' ? 'radio-button-on' : 'radio-button-off'}
              size={20}
              color="#1E90FF"
            />
            <Text style={styles.radioText}>No</Text>
          </TouchableOpacity>
        </View>

        {/* Upload Documents */}
        <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
          <Ionicons name="cloud-upload-outline" size={24} color="#1E90FF" />
          <Text style={styles.uploadButtonText}>
            {uploadedDocument ? uploadedDocument.name : 'Upload Document'}
          </Text>
        </TouchableOpacity>

        {/* Location Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="location-outline" size={20} color="#1E90FF" />
          <TextInput
            style={styles.input}
            placeholder="Location"
            placeholderTextColor="#999"
            value={location}
            onChangeText={setLocation}
          />
          <TouchableOpacity style={styles.locationButton} onPress={fetchLocation}>
            <Ionicons name="locate-outline" size={24} color="#1E90FF" />
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
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
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  container: {
    alignItems: 'center',
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
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
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
    width: 330, // Updated width
  },
  input: {
    flex: 1,
    height: 40,
    color: '#fff',
    marginLeft: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioText: {
    color: '#fff',
    marginLeft: 5,
  },
  pickerContainer: {
    backgroundColor: '#333',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E90FF',
    marginBottom: 20,
    overflow: 'hidden',
    width: 330, // Updated width
  },
  picker: {
    color: '#fff',
    height: 50,
    width: '100%',
  },
  locationButton: {
    marginLeft: 10,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#1E90FF',
    width: 330, // Updated width
  },
  uploadButtonText: {
    color: '#fff',
    marginLeft: 10,
  },
  submitButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 330, // Updated width (optional)
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
