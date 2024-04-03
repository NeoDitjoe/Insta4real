import { Text, View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import styles from './topBar.style'
import { AntDesign, Feather } from '@expo/vector-icons';
import instagram from '../../../assets/instagram.png'

export default function TopBar() {

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Image
          source={instagram}
          style={styles.img}
        />
      </View>

      <View style={styles.icons}>

        <TouchableOpacity>

          <AntDesign style={styles.icon} name="hearto" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather style={styles.icon} name="send" size={24} color="black" />

        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}