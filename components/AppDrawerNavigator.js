import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import DonateScreen from '../screens/DonateScreen'
import CustomSideBarMenu from './CustomSideBarMenu'; 


export const AppDrawerNavigator= createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },
    Donate: {
        screen: DonateScreen
    }
},
{
    contentComponent: CustomSideBarMenu
},
{ 
    initialRouteName: 'Home'

})
