import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 0, todo: 'Walk the dog', done: false },
    { id: 1, todo: 'Learn React Native', done: false }
  ]);

  const addTodo = todo => {
    const newTodo = { id: todos.length + 1, todo, done: false };
    const modifiedTodo = [...todos, newTodo];
    setTodos(modifiedTodo);
  };

  toggleDone = item => {
    let newTodos = [...todos];
    newTodos = todos.map(todo => {
      if (todo.id === item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const statusbar =
    Platform.OS === 'android' ? (
      <View style={styles.statusbar}></View>
    ) : (
      <View></View>
    );
  return (
    <View style={styles.container}>
      {statusbar}
      <Header title='Todo App' />
      <InputField addTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoList todo={item} toggleDone={() => toggleDone(item)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusbar: {
    backgroundColor: '#5580A6',
    height: 20
  }
});
