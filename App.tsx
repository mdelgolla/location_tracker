import { NavigationContainer } from "@react-navigation/native";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/reducers/root_reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import HomeScreen from "./src/screens/home_screen/home_screen";
import { ThemeProvider } from "@ant-design/react-native/lib/style";

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

// );
export default function App() {
  return (
    <ThemeProvider value={{primary_button_fill:"orange"}}>
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
