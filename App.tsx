import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Black: require("./assets/fonts/Montserrat-Black.ttf"),
    Bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    light: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
