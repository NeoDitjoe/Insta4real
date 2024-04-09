import { Image, ScrollView, Text, View, TouchableOpacity, Pressable } from "react-native";
import TopBar from "../topBar/topBar";
import styles from './feed.style'
import Stories from "../stories/stories";
import { SimpleLineIcons } from '@expo/vector-icons';
import stories from "../../../util/dummyData/stories";
import ActionIcons from "../action-icons/icons";

export function ProfileImage(props) {

  const { children } = props
  return (
    <View>

      <Pressable style={styles.border}>
        {children}
      </Pressable>

    </View>
  )
}

export default function Feed() {

  return (
    <ScrollView style={styles.container} >
      <TopBar />

      <ScrollView horizontal style={styles.stories}>

        {
          stories.map((item, index) => {
            return (
              <View key={index}>
                <Stories
                  img={
                    <Image
                      style={styles.storiesImg}
                      source={{ uri: item?.stories.at(-1) }}
                    />
                  }

                  name={item.name}
                />
              </View>
            )
          })
        }

      </ScrollView>

      <View>

        <View style={styles.postHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ProfileImage>
              <Image
                /* profileImg */
                style={styles.storiesImg}
                source={require('../../../assets/profile.png')}
              />
            </ProfileImage>

            
            <View style={styles.verified}>
              {/* name */}
              <Text style={{ fontWeight: 'bold' }}>Neo Ditjoe</Text> 

              {/* isVerified */}
              <Image
                style={styles.verifiedIcon}
                source={require('../../../assets/verified.png')} 
              />
            </View>
          </View>

          <View style={{ paddingRight: 10 }}>
            <SimpleLineIcons name="options-vertical" size={20} color="black" />
          </View>
        </View>

        {/* post */}
        <View>
          <Image
            style={styles.post}
            source={require('../../../assets/neoPost.png')}
          />
        </View>

        <View>
          <ActionIcons />

          <View style={styles.descritionLikes}>

            {/* liked by */}
            <View style={styles.likedby}>
              <Text style={[styles.likedbyText]}>Liked by</Text>
              <Text style={[styles.likedbyText, { fontWeight: 'bold' }]}>This_Person</Text>
              <Text style={[styles.likedbyText]}>and</Text>
              <Text style={[styles.likedbyText, { fontWeight: 'bold' }]}>others</Text>
            </View>

            {/* caption */}
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