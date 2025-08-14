import React, { useRef, useState, useEffect } from 'react'; // Imports necessários
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Pressable, // Usado para os eventos de hover e toque
  Animated  // Para as animações
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/RegisterScreenStyles'; // Usando os estilos de cadastro

export default function RegisterScreen({ navigation }) {
  // Animação de escala
  const scaleValue = useRef(new Animated.Value(1)).current;
  
  // Animação de cor para o hover
  const colorAnimation = useRef(new Animated.Value(0)).current;

  // Estado para controlar o hover
  const [isHovered, setIsHovered] = useState(false);

  // Efeito que dispara a animação de cor quando o estado de hover muda
  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: isHovered ? 1 : 0,
      duration: 200,
      useNativeDriver: false, // Animação de cor não suporta o Native Driver
    }).start();
  }, [isHovered]);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  
  // Interpolação para mapear o valor da animação (0 a 1) para as cores
  const animatedBackgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#17ABF8', '#118ACB'] // Cor normal e cor escura do hover
  });

  // Estilo final que combina a animação de escala e a de cor
  const animatedButtonStyle = {
    transform: [{ scale: scaleValue }],
    backgroundColor: animatedBackgroundColor,
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* BACKGROUND ELLIPSE */}
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

      {/* CONTEÚDO CENTRAL */}
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro</Text>
        
        <TextInput
          placeholder="Nome de Usuario"
          style={styles.input}
          placeholderTextColor="#919191"
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          placeholderTextColor="#919191"
        />
        
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#919191"
        />
        
        {/* Botão de Cadastro com as animações aplicadas */}
        <Animated.View style={[styles.mainButton, animatedButtonStyle]}>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            onPress={() => console.log('Botão de Cadastro Pressionado!')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.mainButtonText}>CADASTRAR</Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta?</Text>
        
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.secondaryButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}