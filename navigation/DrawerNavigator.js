import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importe TODAS as suas telas
import LoginScreen from '../src/screens/LoginScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import PlaceholderScreen from '../src/screens/PlaceholderScreen';

// 1. Importe o seu novo componente de menu personalizado
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Login"
      
      // 2. Adicione esta propriedade para usar o menu com a seta
      drawerContent={props => <CustomDrawerContent {...props} />}
      
      screenOptions={{
        headerShown: false // Vamos usar os cabeçalhos de cada tela
      }}
    >
      {/* Telas que aparecem no menu */}
      <Drawer.Screen name="Início" component={PlaceholderScreen} />
      <Drawer.Screen name="Contato" component={PlaceholderScreen} />
      <Drawer.Screen name="Sobre" component={PlaceholderScreen} />
      <Drawer.Screen name="Ajuda" component={PlaceholderScreen} />

      {/* Telas de autenticação (escondidas do menu) */}
      <Drawer.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ 
          drawerItemStyle: { display: 'none' },
          swipeEnabled: false 
        }} 
      />
      <Drawer.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{ 
          drawerItemStyle: { display: 'none' },
          swipeEnabled: false
        }} 
      />
    </Drawer.Navigator>
  );
}