import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/RegisterScreenStyles';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    // Lógica para cadastro
    Alert.alert('Sucesso', `Usuário "${nome}" cadastrado com sucesso.`);
    // Navegar de volta para a tela de login
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#378CEE', '#17ABF8']}
        start={{ x: 0.28, y: 0.45 }}
        style={styles.backgroundEllipse}
      />
      
      <Text style={styles.title}>Cadastro</Text>
      
      <TextInput
        placeholder="Nome Completo"
        style={styles.input}
        placeholderTextColor="#919191"
        value={nome}
        onChangeText={setNome}
      />
      
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor="#919191"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        placeholder="Senha"
        style={styles.input}
        placeholderTextColor="#919191"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      
      <TouchableOpacity style={styles.mainButton} onPress={handleRegister}>
        <Text style={styles.mainButtonText}>CADASTRAR</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        <Text style={styles.linkText}>FAZER LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}