import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

//  USER TYPE
type User = {
  id: string;
  name: string;
  email: string;
};

type ProfileNav = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNav>();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        const parsedUser: User = JSON.parse(userData);
        setUser(parsedUser);
        console.log('✅ USER LOADED:', parsedUser);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      Alert.alert('Success', 'Logged out successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.loadingText}>Loading Profile...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>👤 Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Picture */}
        <View style={styles.profileSection}>
          <View>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Text style={styles.editIconText}>✎</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>{user?.name || 'User'}</Text>
          <TouchableOpacity>
            <Text style={styles.editName}>Edit Name</Text>
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>📧 {user?.email || 'example@gmail.com'}</Text>
          <Text style={styles.infoText}>🆔 ID: {user?.id?.substring(0, 8)}...</Text>
        </View>

        {/* Menu Options */}
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Orders')}>
            <Text style={styles.menuText}>My Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.tabIcon}>🛒</Text>
          <Text style={styles.tabText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} style={styles.profileIcon} />
          <Text style={styles.activeTabText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  center: { 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  loadingText: { 
    fontSize: 18, 
    color: '#6e4343ff' 
  },
  // HEADER STYLES
  header: {
    backgroundColor: '#6e4343ff',
    height: 70,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 20,
  },
  headerText: { 
    color: '#fff', 
    fontSize: 22, 
    fontWeight: 'bold' 
  },
  //  PROFILE STYLES
  scrollContainer: { 
    alignItems: 'center', 
    padding: 20, 
    flexGrow: 1 
  },
  profileSection: { 
    alignItems: 'center', 
    marginTop: 40 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50 
  },
  editIcon: {
    backgroundColor: '#6e4343ff',
    borderRadius: 20,
    padding: 6,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  editIconText: { 
    color: '#fff', 
    fontSize: 16 
  },
  name: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginTop: 10, 
    color: '#0f172a' 
  },
  editName: {
    color: '#6e4343ff',
    textDecorationLine: 'underline',
    fontWeight: '600',
    marginTop: 5,
  },
  // INFO STYLES
  infoContainer: { 
    marginTop: 20, 
    alignItems: 'center' 
  },
  infoText: { 
    fontSize: 16, 
    color: '#475569', 
    marginBottom: 5 
  },
  // MENU STYLES
  menuBox: {
    width: '100%',
    marginTop: 25,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 3,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
  },
  menuIcon: { 
    fontSize: 20, 
    marginRight: 15 
  },
  menuText: { 
    fontSize: 16, 
    color: '#0f172a', 
    fontWeight: '500' 
  },
  // LOGOUT STYLES
  logoutButton: {
    backgroundColor: '#FEE2E2',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: { 
    color: '#B91C1C', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  //TAB BAR STYLES
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 4,
    borderColor: '#E2E8F0',
    backgroundColor: '#fff',
  },
  tabItem: { 
    alignItems: 'center' 
  },
  tabIcon: { 
    fontSize: 24 
  },
  tabText: { 
    fontSize: 12, 
    marginTop: 2 
  },
  profileIcon: { 
    width: 24, 
    height: 24, 
    marginTop: 7 
  },
  activeTabText: { 
    fontSize: 12, 
    marginTop: 2, 
    textDecorationLine: 'underline', 
    color: '#aa4848ff' 
  },
});
