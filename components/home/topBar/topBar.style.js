import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 30,
    width: windowWidth,
    backgroundColor: '#fff',
    
  },

  icons: {
    flexDirection: 'row',
  },

  icon: {
    width: 25,
    height: 25,
    marginLeft: 20,
  },

  img: {
    width: 140,
    height: 50
  }

});

export default styles
