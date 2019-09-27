import React from 'React';
import { View, Text, StyleSheet } from 'react-native'

const  GoalItem = ({ itemTitle }) => {
  return (
  <View style={styles.listItem}>
    <Text>{itemTitle}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem;