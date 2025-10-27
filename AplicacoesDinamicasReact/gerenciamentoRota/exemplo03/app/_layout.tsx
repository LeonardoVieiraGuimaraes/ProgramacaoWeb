// Layout raiz da aplicação Expo com Expo Router.
// Este arquivo define a estrutura de navegação principal usando Stack Navigator.
// Conceito: similar ao <Navigator> da figura, mas usando file-based routing moderno.
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* 
        Stack Navigator: gerencia a pilha de telas (similar ao initialRouteStack da figura).
        Cada arquivo em app/ vira uma rota automaticamente (file-based routing).
      */}
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'First',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="second" 
        options={{ 
          title: 'Second',
          headerShown: true 
        }} 
      />
      <Stack.Screen 
        name="third" 
        options={{ 
          title: 'Third',
          headerShown: true 
        }} 
      />
    </Stack>
  );
}
