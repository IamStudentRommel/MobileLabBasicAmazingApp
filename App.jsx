import React, {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import {Alert, View} from 'react-native';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [taskText, setTaskText] = useState('');
  const addTask = task => {
    if (task.trim().length === 0) {
      Alert.alert('Task cannot be empty!');
      return;
    }

    if (tasks.includes(task)) {
      Alert.alert('Task already exists!');
      return;
    }

    setTasks([...tasks, task]);
    setTaskText('');
  };

  return (
    <View>
      <ToDoForm
        addTask={addTask}
        setTaskText={setTaskText}
        taskText={taskText}
      />
      <ToDoList tasks={tasks} />
    </View>
  );
}

export default App;
