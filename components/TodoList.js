import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const TodoList = ({ todo, toggleDone }) => {
  return (
    <TouchableOpacity
      onPress={toggleDone}
      style={todo.done ? styles.blurBackground : styles.todoList}
    >
      <Text style={{ color: '#fff' }}>{todo.todo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoList: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#5580A6'
  },
  blurBackground: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#aaaaaa'
  }
});

export default TodoList;
