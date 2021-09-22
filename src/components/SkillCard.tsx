import React from 'react';
import { Text, TouchableOpacity,TouchableOpacityProps, StyleSheet } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps{
  skill: string
}

export function SkillCard({ skill, ...rest } : SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}  
    >
    
     <Text style={styles.TextSkill}>
        { skill }
     </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#EEE8AA',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  TextSkill:{
    color: '#1C1C1C',
    fontWeight: 'bold',
    fontSize: 22,
  }
})