import React, { useRef, useState, useEffect } from 'react'; // 1. Importar o useEffect
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
  // Animação de escala (já existente)
  const scaleValue = useRef(new Animated.Value(1)).current;
  
  // 2. Novo valor animado para a cor
  const colorAnimation = useRef(new Animated.Value(0)).current;

  const [isHovered, setIsHovered] = useState(false);

  // 3. Efeito para disparar a animação de cor
  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: isHovered ? 1 : 0, // Anima para 1 se hover, 0 se não
      duration: 200, // Duração da animação em milissegundos
      useNativeDriver: false, // Animação de cor não suporta o Native Driver
    }).start();
  }, [isHovered]); // Roda o efeito sempre que 'isHovered' mudar

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
  
  // 4. Interpolar o valor animado para as cores reais
  const animatedBackgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#17ABF8', '#118ACB'] // Cor normal e cor escura do hover
  });

  const animatedButtonStyle = {
    transform: [{ scale: scaleValue }],
    backgroundColor: animatedBackgroundColor, // Aplicamos a cor animada aqui
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* ... (o resto do código do Header e Background) ... */}
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
        
        {/* 5. Aplicamos o novo estilo animado */}
        <Animated.View style={[styles.mainButton, animatedButtonStyle]}>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            onPress={() => console.log('Botão de Login Pressionado!')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={styles.mainButtonText}>LOGIN</Text>
          </Pressable>
        </Animated.View>
      </View>

      {/* ... (o resto do código do Footer) ... */}
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