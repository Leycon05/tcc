import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Esta tela recebe o nome da rota para mostrar o título correto
export default function PlaceholderScreen({ route, navigation }) {
  const { name } = route; // Pega o nome da rota (ex: "Início", "Contato")

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{name}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Tela de {name}</Text>
        <Text style={styles.subtitle}>Conteúdo a ser adicionado aqui.</Text>
      </View>
    </SafeAreaView>
  );
}
