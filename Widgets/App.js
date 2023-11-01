import React from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

import estilos from './styles/styles';
import Listado from './widgets/listado';
import { StatusBar } from 'expo-status-bar';


const listaPrincipal = () => {
  
  return (
    <View style={styles.estilos}>
      <Listado/>
      <StatusBar style='auto'/>
    </View>
  );
};

export default listaPrincipal;