import { Image, TouchableOpacity, View } from 'react-native'
import styles from './icons-style'
import { Ionicons, Feather } from '@expo/vector-icons';

export default function ActionIcons() {

  return (
    <View style={styles.actionIcons}>

      <View style={styles.actionIcons1stchild}>
        <View>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={27} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Feather name="send" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity>
          <Image
            style={styles.icons}
            source={require('../../../assets/collectionIcon.png')}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}