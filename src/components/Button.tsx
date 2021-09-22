import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

//tipagem para o componente "Button", usando todas as propriedades do "TouchableOpacityProps"
interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

//"...rest" significa que estou puxando todas as propriedades do "TouchableOpacityProps", exemplo "onPress"
export function Button({ title, ...rest } : ButtonProps ) {
  return(
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#FFFF00',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    color: '#1C1C1C',
    fontSize: 18,
    fontWeight: 'bold'
  },
})