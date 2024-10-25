import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerStyle: {
          backgroundColor: 'fff'
        },
        headerShadowVisible: false,
        headerTintColor: '#000',
        tabBarStyle: {
          backgroundColor: '#fff'
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guide',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'menu' : 'menu-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: "Mindfulness",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="journal"
        options={{
          title: "Journal",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'mail-open' : 'mail-open-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
