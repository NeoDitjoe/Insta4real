import { Image, ScrollView, Text, View } from "react-native";
import TopBar from "../topBar/topBar";
import styles from './feed.style'
import Stories from "../stories/stories";
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export function ProfileImage(props) {

  const { children } = props
  return (
    <View>

      <View style={styles.border}>
        {children}
      </View>

    </View>
  )
}

export default function Feed() {

  return (
    <ScrollView style={styles.container} >
      <TopBar />

      <ScrollView horizontal style={styles.stories}>
        <Stories
          img={
            <Image
              style={styles.storiesImg}
              source={{ uri: 'https://images.pexels.com/photos/20786737/pexels-photo-20786737/free-photo-of-portrait-of-a-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
            />
          }

          name={'Candice '}
        />

      </ScrollView>

      <View>

        <View style={styles.postHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ProfileImage>

            </ProfileImage>
            <Text style={{ fontWeight: 'bold' }}>Neo Ditjoe</Text>
          </View>

          <View style={{ paddingRight: 10 }}>
            <SimpleLineIcons name="options-vertical" size={20} color="black" />
          </View>
        </View>

        <View>
          <Image
            style={styles.post}
            source={require('../../../assets/neoPost.png')}
          />
        </View>

        <View>

          <View style={styles.actionIcons}>

            <View style={styles.actionIcons1stchild}>
              <View>
                <Ionicons name="heart-outline" size={27} color="black" />
              </View>

              <View>
                <Ionicons name="chatbubble-outline" size={24} color="black" />
              </View>

              <View>
                <Feather name="send" size={24} color="black" />
              </View>
            </View>

            <View>
              <Image
                style={styles.icons}
                source={require('../../../assets/collectionIcon.png')}
              />
            </View>

          </View>

          <View style={styles.descritionLikes}>

            <View style={styles.likedby}>
              <Text style={[ styles.likedbyText ]}>Liked by</Text>
              <Text style={[ styles.likedbyText, { fontWeight: 'bold'}]}>This_Person</Text>
              <Text style={[ styles.likedbyText ]}>and</Text>
              <Text style={[ styles.likedbyText, { fontWeight: 'bold'}]}>others</Text>
            </View>

            <View>
              <Text>
                This is the description section, I can add a caption too
              </Text>
            </View>

          </View>

        </View>

      </View>


    </ScrollView>
  )
}