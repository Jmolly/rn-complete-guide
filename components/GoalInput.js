import React, { useState } from 'React';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const  GoalInput = ({ onAddGoal, onCancelGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const cancelGoalHandler = () => {
    onCancelGoal();
    setEnteredGoal('');
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color='red' onPress={cancelGoalHandler}/>
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}/>
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
