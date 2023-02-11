import React, {useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from './components/Task';

function App() {
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);
const [counter, setCounter] = useState(0);

const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task]) 
  setTask(null)

  setCounter(counter + 1)
}

const complateTask = (index) => {
  let itemsCopy = [...taskItems]
  itemsCopy.splice(index, 1)
  setTaskItems(itemsCopy)
  setCounter(counter - 1)
}

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.taskwrapper}>

          <Text style={styles.sectionTitle}>Today's Task  ({counter})</Text>
          


          <View style={styles.items}>

            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => complateTask(index)}>
                    <Task key={index} text={item} />
                  </TouchableOpacity>
                );
              })
            }

          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
       
        <TextInput style={styles.input} placeholder={'Write a task...'} value={task} onChangeText={text => setTask(text)} />
        
        <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  container: {},
  taskwrapper: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c0c0c0'
  },
  addText: {
    fontSize: 25,

  },
  counter: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  counterView: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
})
