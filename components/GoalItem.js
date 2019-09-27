import React from 'React';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const  GoalItem = ({ itemId, itemTitle, onDelete }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(itemId)}>
      <View style={styles.listItem}>
        <Text>{itemTitle}</Text>
      </View>
    </TouchableOpacity>
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