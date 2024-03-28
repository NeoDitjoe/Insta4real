import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 15,

    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },
});

export default styles
