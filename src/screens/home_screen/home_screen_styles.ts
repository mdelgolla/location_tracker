import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: "absolute",
    left: 0,
    top: Platform.OS === 'ios' ? 50 : 0,
    right: 0,
  },
  titleContainer:{
    width: "100%",
    backgroundColor: "beige",
    flexDirection: "column",
  },
  titleText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    margin: 10,
  },
});
export default styles;
