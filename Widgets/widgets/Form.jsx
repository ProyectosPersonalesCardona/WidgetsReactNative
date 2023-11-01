import React from 'react';
import {View, TextInput, Button, Alert} from 'react-native';


import styles from '..styles/styles';


const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

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
        onChangeText={onChangeNumber}
        value={edad}
        placeholder="Edad De Usuario"
        keyboardType='numeric'
      />
      <Button
        onPress={
          ()=> {
            Alert,alert("Ingreso De Usuario", `Bienvenido Al Sistema ${nombre} ${apellido}`)
          }
        }
        tittle="Ingresar Usuario"
        color="#841584"
        accessibilityLabel='saludar'
      />
    </View>
  );
};



export default TextInputExample;