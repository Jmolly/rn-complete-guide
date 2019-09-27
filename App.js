import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler =(enteredGoal) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(), value: enteredGoal}
    ]) //better than setCourseGoals([...courseGoals, enteredGoal])
  };

  const removeGoalHandler = (goalID) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalID);
    })
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item) => item.id} //if key is is not in 'key' field
        data={courseGoals}
        renderItem={itemData => <GoalItem itemId ={itemData.item.id} itemTitle={itemData.item.value} onDelete={removeGoalHandler}/>} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
