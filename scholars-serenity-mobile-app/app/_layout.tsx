import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: '#036da4',
        headerStyle: {
          backgroundColor: '#fdfce8',
        },
      }}>
      {/*<Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="guide" options={{ title: 'Guide' }} />*/}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );

}
