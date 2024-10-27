import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/*<Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="guide" options={{ title: 'Guide' }} />*/}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
