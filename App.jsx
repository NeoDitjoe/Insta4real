import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Feed from './components/home/feed/feed';
import { Octicons } from '@expo/vector-icons';
import Search from './components/search/search';
import NewPost from './components/new-post/new-post';
import Reels from './components/reels/reels';
import Profile from './components/profile/profile';
import AuthForm from './components/auth/auth-form';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {

  const authorized = false

  if (!authorized) {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='auth' component={AuthForm} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {

    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Octicons name="home" size={24} color="black" />
              )
            }}
            name="Feed"
            component={Feed}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Octicons name="search" size={24} color="black" />
              )
            }}
            name="Search"
            component={Search}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Octicons name="diff-added" size={24} color="black" />
              )
            }}
            name="New Post"
            component={NewPost}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Octicons name="video" size={24} color="black" />
              )
            }}
            name="Reels"
            component={Reels}
          />

          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Octicons name="person" size={24} color="black" />
              )
            }}
            name="Profile"
            component={Profile}
          />

        </Tab.Navigator>

      </NavigationContainer>
    );
  }

}
