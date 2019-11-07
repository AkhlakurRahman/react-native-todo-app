import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const InputField = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const textChangeHandler = todoInput => {
    setValue(todoInput);
  };

  const handleSubmit = () => {
    if (value !== '') {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder='Add Todo'
        onChangeText={todoInput => textChangeHandler(todoInput)}
        value={value}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    marginTop: 10
  },
  input: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    // borderWidth: 2,
    // borderColor: '#5580A6',
    fontSize: 18,
    padding: 5,
    height: 50
  },
  addButton: {
    width: 70,
    backgroundColor: '#5580A6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  }
});

export default InputField;
