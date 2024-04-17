import { Button, Text, View } from "react-native";
import { getDatabase, ref, set, push, get } from "firebase/database";

// Initialize the database instance
const database = getDatabase();

export default function NewPost() {
  function addPostHandler() {

    const dataRef = ref(database, 'data');

    push(dataRef, {
      name: 'Cozy4real',
      age: 23,
      date: new Date().toString()
    });

  }

  return (
    <View>
      <Text>Create new post</Text>
      <Button title="create post" onPress={addPostHandler} />
    </View>
  );
}

//how to retrive data
function retrieveDataHandler() {
  const databaseURL = "https://insta4real-1ef4e-default-rtdb.firebaseio.com/data.json";

  fetch(databaseURL)
    .then(res => res.json())
    .then(data => console.log(Object.values(data)))
}


retrieveDataHandler()