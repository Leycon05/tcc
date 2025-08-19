import React, { useRef, useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Pressable,
  Animated 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/LoginScreenStyles';

export default function LoginScreen({ navigation }) {
  // Toda a sua lógica de animação continua igual
  const scaleValue = useRef(new Animated.Value(1)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: isHovered ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
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
  
  const animatedBackgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#17ABF8', '#118ACB']
  });

  const animatedButtonStyle = {
    transform: [{ scale: scaleValue }],
    backgroundColor: animatedBackgroundColor,
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <LinearGradient
        colors={['#17ABF8', '#378CEE']}
        start={{ x: 0.28, y: 0.45 }}
        style={styles.backgroundEllipse}
      />
      
      {/* ## MUDANÇA 1: HEADER COM BOTÃO FUNCIONAL ## */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={{ padding: 5, position: 'absolute', left: 15 }} // Posição e área de toque
          onPress={() => navigation.openDrawer()} // Ação para abrir o menu
        >
          <Ionicons name="menu" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* CONTEÚDO CENTRAL */}
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
        
        <Animated.View style={[styles.mainButton, animatedButtonStyle]}>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            // ## MUDANÇA 2: NAVEGAR PARA "INÍCIO" APÓS O LOGIN ##
            onPress={() => navigation.navigate('Início')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.mainButtonText}>LOGIN</Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* RODAPÉ */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não está cadastrado?</Text>
        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.secondaryButtonText}>CADASTRAR-SE</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}