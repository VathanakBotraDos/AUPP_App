import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles.js';

const MenuScreen = () => {
  return (
    <View style={globalStyles.menuContainer}>
      {/* User Profile */}
      <View style={globalStyles.profileContainer}>
        <Image source={{ uri: 'your_profile_picture_url' }} style={globalStyles.profileImage} />
        <View style={globalStyles.profileTextContainer}>
          <Text style={globalStyles.profileText}>Name</Text>
          <Text style={globalStyles.profileText}>email@gmail.com</Text>
        </View>
      </View>

      {/* Menu Options */}
      <TouchableOpacity style={globalStyles.menuOption}>
        <Text style={globalStyles.menuText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuOption}>
        <Text style={globalStyles.menuText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.menuOption}>
        <Text style={globalStyles.menuText}>Change User</Text>
      </TouchableOpacity>
      {/* Add more menu options as needed */}
    </View>
  );
};

export default MenuScreen;
