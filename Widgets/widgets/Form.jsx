import React from 'react';
import {View, TextInput, Button, Alert} from 'react-native';


import styles from '../styles/styles';


const TextInputExample = () => {
  const [nombre, onChangeText] = React.useState('');
  const [apellido, onChangeNumber] = React.useState('');
  const [edad, onChangeEdad] = React.useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={nombre}
        placeholder="Nombre De Usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={apellido}
        placeholder="Apellido De Usuario"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEdad}
        value={edad}
        placeholder="Edad De Usuario"
        keyboardType='numeric'
      />
      <Button
        onPress={
          ()=> {
            Alert.alert("Ingreso De Usuario", `Bienvenido Al Sistema ${nombre} ${apellido}`)
          }
        }
        title="Ingresar Usuario"
        color="#841584"
        accessibilityLabel='saludar'
      />
    </View>
  );
};



export default TextInputExample;