import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding";
import CameraScreen from "../screens/CameraScreen";
import Assessment from "../screens/Assessment";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Assessment"
        component={Assessment}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
