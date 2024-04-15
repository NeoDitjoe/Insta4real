import { View, TextInput, Text, Button, KeyboardAvoidingView } from 'react-native'
import styles from './auth-form-style'
import { useRef, useState } from 'react'
import { firebaseAuth } from '../../util/database/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from "@react-navigation/core";
const auth = firebaseAuth

export default function SignInForm() {

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation();

  async function signIn() {

    setIsLoading(true)

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      alert(response)
    } catch (error) {
      alert('error')
    } finally{
      setIsLoading(false)
    }

  }

  return (
    <View>
      <KeyboardAvoidingView behavior='padding'>

      <TextInput style={styles.input} placeholder='email'
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput style={styles.input} placeholder='password'
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      {
        isLoading
          ? <Text>Loading...</Text>
          : <View>
            <Button title='Submit' onPress={signIn} />
            <Button title='Create Account' onPress={() =>  navigation.navigate('sign-up')} />
          </View>
      }

      </KeyboardAvoidingView>
    </View>
  )
}