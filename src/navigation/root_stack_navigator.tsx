import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home_screen/home_screen";
import SearchHistory from "../components/search_history/search_history";

const Stack = createNativeStackNavigator();
interface IRootStackProps {
    initialRouteName?: string;
  }  

const RootStackNavigator: React.FC<IRootStackProps> = (props) =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name={HISTORY_SCREEN} component={SearchHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootStackNavigator;
