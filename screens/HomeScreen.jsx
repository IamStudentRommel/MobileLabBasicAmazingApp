import React, {useState, useEffect} from 'react';
import {View, Alert, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';
import RawTask from '../src/data/tasks.json';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    setTasks(RawTask.tasks);
  }, []);

  const addTask = task => {
    //console.log(task);
    if (task.trim().length === 0) {
      Alert.alert('Task cannot be empty!');
      return;
    }

    // if (tasks.includes(task)) {
    //   Alert.alert('Task already exists!');
    //   return;
    // }

    setTasks([...tasks, task]);
    setTaskText('');
  };
  return (
    <MainLayout>
      <View>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
        <ToDoForm
          addTask={addTask}
          setTaskText={setTaskText}
          taskText={taskText}
          tasks={tasks}
        />
        <ToDoList tasks={tasks} />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
