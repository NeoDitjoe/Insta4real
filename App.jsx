import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Feed from './components/home/feed/feed';
import { Octicons } from '@expo/vector-icons';
import Search from './components/search/search';
import NewPost from './components/new-post/new-post';
import Reels from './components/reels/reels';
import Profile from './components/profile/profile';
import { createStackNavigator } from '@react-navigation/stack';
import SignInForm from './components/auth/sign-in-form';
import SignUpForm from './components/auth/sign-up-form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './util/database/firebase-config';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function App() {

  const [ user, setUser ] = useState(null)

  useEffect(() => {

    /**
     * {@link restoreUser} Get the user details from the token then set it a state
     * while {@link storeUser} stores the user details in an Async storage
     */
    const restoreUser = async () => {
      try {
        const userString = await AsyncStorage.getItem('user');
        const user = JSON.parse(userString);
        setUser(user);
      } catch (error) {
        console.log('Error retrieving user from storage:', error);
      }
    };
  
    restoreUser();
  
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      if (user) {
        storeUser(user); 
      }
    });
  }, []);
  
  /**
   * 
   * @param {Object} user 
   * stores the user details in an Async storage
   */
  const storeUser = async (user) => {
    try {
      const userString = JSON.stringify(user);
      await AsyncStorage.setItem('user', userString);
    } catch (error) {
      console.log('Error storing user in storage:', error);
    }
  };

  if (!user) {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='sign-in' component={SignInForm} options={{ headerShown: false }} />
          <Stack.Screen name='sign-up' component={SignUpForm} />
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
