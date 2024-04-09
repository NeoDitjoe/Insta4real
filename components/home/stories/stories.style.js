import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  stories: {
     borderBottomWidth: 1, 
     borderBottomColor: 'gray'
  },

  border: {
    width: 87, 
    height: 87,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3, 
    margin: 5,
  },

  img: {
    width: '100%',
    height: '100%',
    borderRadius: 50, // Set to half of width/height for circle
  },

  imgContainer: {
    // flex:1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default styles