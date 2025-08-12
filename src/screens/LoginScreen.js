import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* BACKGROUND ELLIPSE - Único elemento com position: absolute */}
      <LinearGradient
        colors={['#17ABF8','#378CEE']}
        start={{ x: 0.28, y: 0.45 }}
        style={styles.backgroundEllipse}
      />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          {/* Ícones do menu e da busca */}
          <Ionicons name="menu" size={30} color="white" style={{ marginLeft: 15 }} />
        </View>
      </View>

      {/* CONTEÚDO CENTRAL (Formulário) */}
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          placeholder="Nome de Usuario ou Email"
          style={styles.input}
          placeholderTextColor="#919191"
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#919191"
        />
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não está cadastrado?</Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.secondaryButtonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}