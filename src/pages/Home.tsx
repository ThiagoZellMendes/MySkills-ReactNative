import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TextInput, FlatList, Alert} from 'react-native';

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard';

export function Home(){
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillDate[]>([]);
  const [gretting, setGretting] = useState('');

  interface SkillDate {
    id: string;
    name: string;
  }
  
  //adiciona uma Skill
  function handleAddNewSkill(){
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    if(newSkill == ''){
      Alert.alert('Escreva uma Skill')
    }else{
      setMySkills(oldState =>[...oldState, data]);
    }
  }
  
  //remove uma skill ao clicar nela.
  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id != id
    ));

  }

  // useEffect faz com que aconteça novamente a rederização de "Home", sempre que 'gretting(State)' for alterado.
  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12 ){
      setGretting('Good Morning');
    }else if(currentHour >= 12 && currentHour < 18){
      setGretting('Good Efternoon');
    }else{
      setGretting('Good Night');
    }
  }, [gretting])


  return (
    <View style={styles.container}>

    <Text style={styles.title}>Welcome, Thiago</Text>
    
    <Text style={styles.gretting}>
      { gretting }
    </Text>
   
    <TextInput 
      style={styles.input}
      placeholder="New Skill"
      placeholderTextColor="#F0E68C"
      onChangeText={ setNewSkill } 
    />

    <Button 
      onPress={handleAddNewSkill}
      title= "Add"
     />
  
    <Text style={[styles.title, { marginTop: 50, textAlign: 'center' }]}>
      My Skills
    </Text>
    <Text style={styles.line}>
      _____________________________________________________
    </Text>
    <FlatList
      data={ mySkills }
      keyExtractor= { item => item.id }
      renderItem={( { item } ) => (
        <SkillCard 
        skill={ item.name }  
        onPress={() => handleRemoveSkill(item.id)}
        />
      )}
    />

    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 70,  
  },
  title: {
    color: '#FFFF00',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: 10,
    marginTop: 30,
    borderRadius: 10
  },
  gretting:{
    color: '#FFD700',
    marginLeft: 10,
  },
  line: {
    color: '#FFD700'
  }
})
