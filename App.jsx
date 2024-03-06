import React, {useState} from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import {View} from 'react-native';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = task => {
    setTasks(task);
  };

  return (
    <View>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
}

export default App;
