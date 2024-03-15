import {StyleSheet, View, TextInput, Button} from 'react-native';
import React from 'react';

function ToDoForm({addTask, setTaskText, taskText, tasks}) {
  const handleAddTask = () => {
    // console.log(tasks);
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];
    setTaskText(randomTask);
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={text => setTaskText(text)}
          value={taskText}
        />

        <Button title="Generate Random Task" onPress={handleAddTask} />
      </View>
      <View style={{marginTop: 15, marginBottom: 15}}>
        <Button title="Add Task" onPress={() => addTask(taskText)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
