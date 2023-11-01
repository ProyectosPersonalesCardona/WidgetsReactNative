import React from "react";
import { View,FlatList, Text, Image, StyleSheet, SafeAreaView } from "react-native";



const DATOS_API=[
    {
        id:'1',
        urlImagen:'https://picsum.photos/id/237/200/300',
        titulo:'Perrito'
    },
    {
        id:'2',
        urlImagen:'https://picsum.photos/id/100/200/300',
        titulo:'Perrito 2'
    },
    {
        id:'3',
        urlImagen:'https://picsum.photos/id/200/200/300',
        titulo:'Perrito 3'
    },
    {
        id:'4',
        urlImagen:'https://picsum.photos/id/120/200/300',
        titulo:'Perrito 4'
    },
    {
        id:'5',
        urlImagen:'https://picsum.photos/id/130/200/300',
        titulo:'Perrito 5'
    },
    {
        id:'6',
        urlImagen:'https://picsum.photos/id/140/200/300',
        titulo:'Perrito 6'
    },
    {
        id:'7',
        urlImagen:'https://picsum.photos/id/150/200/300',
        titulo:'Perrito 7'
    },
    {
        id:'8',
        urlImagen:'https://picsum.photos/id/170/200/300',
        titulo:'Perrito 8'
    },
];

const ElementoLista=(elemento)=>{
    return <View>
        <Image
        source={{uri:elemento.urlImagen}}
        style= {style.Image}
        />
        <Text>{elemento.titulo}</Text>
    </View>
}


const Listado =()=>{
    return(
        <SafeAreaView>
            <FlatList
                data={DATOS_API}
                renderItem={ElementoLista}
                keyExtractor={(elemento)}
            />
        </SafeAreaView>
    )
}

export default Listado;


const style= StyleSheet.create({
    container:{},
    item:{},
    imagen:{}
})