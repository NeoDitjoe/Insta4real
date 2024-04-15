import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { Text, TextInput, View, Button, KeyboardAvoidingView } from 'react-native'
import { firebaseAuth } from '../../util/database/firebase-config'
import styles from './auth-form-style'
import { useNavigation } from '@react-navigation/native'

const auth = firebaseAuth

export default function SignUpForm() {

  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigation = useNavigation()

  async function signUpHandler() {

    setIsLoading(true)

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      alert(response)
    } catch (error) {
      alert('error')
    } finally {
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
              <Button title='Submit' onPress={signUpHandler} />
              <Text onPress={() => navigation.navigate('sign-in')} >already have an account?</Text>
            </View>
        }
      </KeyboardAvoidingView>
    </View>
  )
}
