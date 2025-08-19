import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      {/* 1. O nosso novo cabeçalho azul */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={() => props.navigation.closeDrawer()}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        
        {/* Informações do Utilizador (Exemplo) */}
        <Image 
          source={{ uri: 'https://via.placeholder.com/60' }} // Pode substituir por uma imagem real
          style={styles.profileImage}
        />
      </View>

      {/* 2. O conteúdo padrão do menu (Início, Contato, etc.) */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#17ABF8', 
    padding: 10,
    paddingTop: 50,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
 
});