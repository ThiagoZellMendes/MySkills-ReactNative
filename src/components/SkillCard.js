import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity key= "skill" style={styles.buttonSkill}>
     <Text style={styles.TextSkill}>
        { skill }
     </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  TextSkill:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 22,
  }
})