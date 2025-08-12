import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* BACKGROUND ELLIPSE - Único elemento com position: absolute */}
      <LinearGradient
        colors={['#17ABF8', '#378CEE']}
        start={{ x: 0.28, y: 0.45 }}
        style={styles.backgroundEllipse}
      />
      
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerIconContainer}>
          <Ionicons name="menu" size={30} color="white" style={{ marginLeft: 15 }} />
        </View>
      </View>

      {/* CONTEÚDO CENTRAL (Formulário) */}
      <View style={styles.content}>
        {/* Título com a fonte Poppins-Bold */}
        <Text style={{ ...styles.title, fontFamily: 'InriaSans' }}>Login</Text>
        
        {/* Input de usuário com a fonte Poppins */}
        <TextInput
          placeholder="Nome de Usuario ou Email"
          style={{ ...styles.input, fontFamily: 'Poppins' }}
          placeholderTextColor="#919191"
        />
        
        {/* Input de senha com a fonte Poppins */}
        <TextInput
          placeholder="Senha"
          style={{ ...styles.input, fontFamily: 'Poppins' }}
          secureTextEntry
          placeholderTextColor="#919191"
        />
        
        {/* Botão principal com a fonte InriaSans-Bold */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={{ ...styles.mainButtonText, fontFamily: 'InriaSans-Bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        {/* Texto do rodapé com a fonte Poppins */}
        <Text style={{ ...styles.footerText, fontFamily: 'Poppins' }}>Não está cadastrado?</Text>
        
        {/* Botão secundário com a fonte Poppins-Bold */}
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ ...styles.secondaryButtonText, fontFamily: 'Poppins-Bold' }}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}