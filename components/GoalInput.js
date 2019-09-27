import React, { useState } from 'React';
import { View, TextInput, StyleSheet, Button } from 'react-native'

const  GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)}/>
    </View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  input: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
