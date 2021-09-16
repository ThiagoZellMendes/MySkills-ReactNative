import React from 'react';
import {View , Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export function Home(){
  return (
    <View style={styles.container}>
     <Text style={styles.title}>Welcome, Thiago</Text>
    
    <TextInput 
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#555" 
    />

    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
    >
      <Text style={styles.textButton}>Add</Text>
    </TouchableOpacity>

    <Text style={[styles.title, {marginTop: 50 }]}>
      My Skills
    </Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,  
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 10
  },
  button:{
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
})
