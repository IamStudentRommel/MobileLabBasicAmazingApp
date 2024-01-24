/**
 * My To Do List App
 *
 * @format
 */
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import React from 'react';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
