import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const TodoList = ({ todo, toggleDone, removeTodo }) => {
  return (
    <TouchableOpacity
      onPress={toggleDone}
      style={todo.done ? styles.blurBackground : styles.todoList}
    >
      <Text style={styles.textStyle}>{todo.todo}</Text>
      <Button
        title='Remove'
        color={todo.done ? 'rgba(200, 0, 0, .5)' : 'rgba(255, 0, 0, 1)'}
        onPress={removeTodo}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoList: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#5580A6'
  },
  blurBackground: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#aaaaaa'
  },
  textStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff'
  }
});

export default TodoList;
