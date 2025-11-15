import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 12,
            borderBottomWidth: 1,
            borderBlockColor: "white",
        },
        tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold'
        },

    }}>
        <Tabs.Screen 
            name='index' 
            options={{
                title:"Whatsapp",
                tabBarIcon: ( {color , size }) => (
                    <Ionicons name='body' size={size} color={color}/>
                )
            }}
        />

        <Tabs.Screen 
            name='updates' 
            options={{
                title:"Updates",
                tabBarIcon: ( {color , size }) => (
                    <Ionicons name='videocam-outline' size={size} color={color}/>
                )
            }}
        />


        <Tabs.Screen 
            name='communities' 
            options={{
                title:"Communities",
                tabBarIcon: ( {color , size }) => (
                    <Ionicons name='people-sharp' size={size} color={color}/>
                )
            }}
        />

        <Tabs.Screen 
            name='calls' 
            options={{
                title:"Calls",
                tabBarIcon: ( {color , size }) => (
                    <Ionicons name='call' size={size} color={color}/>
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout