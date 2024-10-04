import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

export default function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Settings Header */}
        <Text style={styles.header}>Crust Corporate Settings</Text>

        {/* Theme Toggle */}
        <View style={styles.themeToggleContainer}>
          <Text style={styles.themeToggleText}>Light Theme</Text>
          <Switch
            value={isDarkTheme}
            onValueChange={() => setIsDarkTheme(!isDarkTheme)}
            thumbColor={isDarkTheme ? "#5EEAD4" : "#4A90E2"}
            trackColor={{ false: "#4A90E2", true: "#5EEAD4" }}
          />
          <Text style={styles.themeToggleText}>Dark Theme</Text>
        </View>

        {/* Additional Settings can be added here */}
        <View style={styles.settingCard}>
          <Text style={styles.settingText}>Notification Preferences</Text>
        </View>
        <View style={styles.settingCard}>
          <Text style={styles.settingText}>Language Settings</Text>
        </View>
        <View style={styles.settingCard}>
          <Text style={styles.settingText}>Account Management</Text>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Crust Corporate</Text>
        <Text style={styles.footerText}>
          Crust Corporate Services Private Limited, your trusted partner in financial solutions. We offer personalized and professional financial services to help you achieve your goals.
        </Text>
        <Text style={styles.footerText}>© 2024 Crust Corporate. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    padding: 20,
    backgroundColor: '#000000',
  },
  header: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  themeToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  themeToggleText: {
    fontSize: 18,
    color: '#ffffff',
    marginHorizontal: 10,
  },
  settingCard: {
    backgroundColor: '#333333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  settingText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#1A1A1A',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  footerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerText: {
    color: '#cccccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
