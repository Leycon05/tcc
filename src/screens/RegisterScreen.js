// screens/RegisterScreen.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/RegisterScreenStyles'; // Garanta que aponte para o novo arquivo

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* O resto do código do componente de registro, com os 4 campos */}
      <LinearGradient
        colors={['#17ABF8', '#378CEE']}
        start={{ x: 0.28, y: 0.45 }}
        style={styles.backgroundEllipse}
      />
      
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <Ionicons name="menu" size={30} color="white" style={{ marginLeft: 15 }} />
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Cadastrar-se</Text>
        
        <TextInput
          placeholder="Nome de Usuario"
          style={styles.input}
          placeholderTextColor="#919191"
        />
        <TextInput
          placeholder="E-mail"
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
          <Text style={styles.mainButtonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}