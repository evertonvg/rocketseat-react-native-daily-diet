import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Home }  from "@screens/Home";
import { ViewStatistics } from "@screens/ViewStatistics";
import { CreateFood } from "@screens/CreateFood";
import { navigationRef } from "./NavigationService";
import { Feedback } from "@screens/Feedback";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  CreateFood: undefined;
  Feedback: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={ViewStatistics} />
          <Stack.Screen name="CreateFood" component={CreateFood} />
          <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}