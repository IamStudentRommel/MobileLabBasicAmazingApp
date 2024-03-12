import React, {useState} from 'react';
import {View, Alert, Button} from 'react-native';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);
  const [taskText, setTaskText] = useState('');
  const addTask = task => {
    //console.log(task);
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
        />
        <ToDoList tasks={tasks} />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
