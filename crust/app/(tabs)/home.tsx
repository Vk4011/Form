import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://www.example.com/background-image-url.jpg' }} // Replace with actual image URL
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Animated.View entering={FadeIn.duration(2000)}>

          {/* Welcome Section */}
          <View style={styles.welcomeSection}>
            <Text style={styles.heading}>Welcome to Crust Corporation</Text>
            <Text style={styles.subheading}>
              Your trusted partner for comprehensive financial services. We offer a range of financial solutions tailored to meet your needs, right at your doorstep.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Find out how!</Text>
            </TouchableOpacity>
          </View>

          {/* Services Section */}
          <View style={styles.servicesSection}>
            <Text style={styles.servicesHeading}>Services</Text>
            <Text style={styles.subheading}>How can we help you?</Text>

            <View style={styles.serviceGrid}>
              {['Personal Loans', 'Home Loans', 'Business Loans', 'Project Funding', 'Mortgage Loans', 'Business Loans'].map((service, index) => (
                <View key={index} style={styles.serviceCard}>
                  <Text style={styles.serviceTitle}>{service}</Text>
                  <Text style={styles.serviceDescription}>
                    {service === 'Business Loans' || service === 'Personal Loans'
                      ? 'Empower your business or personal finances with tailored loan solutions.'
                      : 'Find the best financial solution for your needs.'}
                  </Text>
                  <TouchableOpacity style={styles.getInTouchButton}>
                    <Text style={styles.getInTouchText}>Get In Touch</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  welcomeSection: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 30,
    borderRadius: 15,
    marginBottom: 30,
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 32, // Larger font size for more impact
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subheading: {
    color: 'white',
    fontSize: 18, // Slightly larger for better readability
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18, // Increased font size for button text
    fontWeight: 'bold',
  },
  servicesSection: {
    backgroundColor: '#1A1A1A',
    padding: 25,
    borderRadius: 15,
  },
  servicesHeading: {
    color: 'white',
    fontSize: 28, // Larger font for service heading
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: '#333333',
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  serviceTitle: {
    color: 'white',
    fontSize: 20, // Larger font for service titles
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceDescription: {
    color: '#CCCCCC',
    fontSize: 16, // Larger font for descriptions
    marginBottom: 15,
  },
  getInTouchButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  getInTouchText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
