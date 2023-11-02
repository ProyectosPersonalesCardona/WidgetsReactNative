import React from 'react';
import {View} from 'react-native';

import estilos from './styles/styles';
import Formularios from './widgets/Form';
import { StatusBar } from 'expo-status-bar';


const listaPrincipal = () => {
  
  return (
    <View>
      <Formularios/>
      <StatusBar style='auto'/>
    </View>
  );
};

export default listaPrincipal;