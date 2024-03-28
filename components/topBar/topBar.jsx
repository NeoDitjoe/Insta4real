import { Text, View } from "react-native";
import styles from './topBarCSS'
import { AntDesign, Feather } from '@expo/vector-icons';

export default function TopBar() {

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>instagram</Text>
      <View style={styles.icons}>
        
        <AntDesign style={styles.icon} name="hearto" size={24} color="black" />
        <Feather style={styles.icon} name="send" size={24} color="black" />

      </View>
    </View>
  )
}