import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
// import { LogInScreen } from "./src/screens/LogInScreen";
// import { SignUpScreen } from "./src/screens/SineUpScreen";
// import { MemoCreateScreen } from "./src/screens/MemoCreateScreen";
// import { MemoEditScreen } from "./src/screens/MemoEditScreen";
// import { MemoDetailScreen } from "./src/screens/MemoDetailScreen";
import { MemoListScreen } from "./src/screens/MemoListScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return <MemoListScreen />;
  // return <MemoDetailScreen />;
  // return <MemoEditScreen />;
  // return <MemoCreateScreen />;
  // return <LogInScreen />;
  // return <SignUpScreen />;
};

export default App;
