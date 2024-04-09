import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  storiesImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50, // Set to half of width/height for circle
  },


  stories: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginLeft: 5
  },

  postHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center'
  },

  border: {
    width: 37,
    height: 37,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1.5,
    margin: 5,
    marginRight: 8
  },

  post: {
    width: windowWidth,
    height: 400
  },

  likedby: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 5
  },

  likedbyText:{
    fontSize: 15
  },

  descritionLikes: {
    margin: 10
  },

  verified: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center'
  },

  verifiedIcon: { 
    width: 18,
    height: 18
  }
});

export default styles