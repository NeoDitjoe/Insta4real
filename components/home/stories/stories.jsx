import { Text, View } from "react-native"
import styles from "./stories.style"

export default function Stories(props) {

  const { name, img } = props
  return (
    <View style={styles.imgContainer}>

      <View style={styles.border}>
        {img}
      </View>

      <View>
        <Text>{name}</Text>
      </View>

    </View>
  )
}