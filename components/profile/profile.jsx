import { Button, Text, View } from "react-native";
import { firebaseAuth } from "../../util/database/firebase-config";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Profile(){

  const storeUser = async () => {
    try {
      const userString = JSON.stringify('');
      await AsyncStorage.setItem('user', userString);
    } catch (error) {
      console.log('Error storing user in storage:', error);
    }
  };

  const navigation = useNavigation()
  return(
    <View>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={() => {
        firebaseAuth.signOut()
        storeUser()
      }} />
    </View>
  )
}
