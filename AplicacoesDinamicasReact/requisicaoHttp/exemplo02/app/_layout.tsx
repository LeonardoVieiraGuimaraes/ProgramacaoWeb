/**
 * Layout Raiz da Aplicação - Configuração do Stack Navigator
 * 
 * Este arquivo configura a navegação da aplicação usando Expo Router.
 * Definimos as telas (screens) que existem no app e suas configurações.
 * 
 * Stack Navigator = navegação em pilha (empilha telas e permite voltar)
 */

import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

/**
 * Componente de Layout Raiz
 * 
 * PaperProvider: Fornece o tema do Material Design para toda a aplicação
 * Stack: Gerencia a navegação em pilha entre as telas
 */
export default function RootLayout() {
  return (
    // PaperProvider deve envolver toda a aplicação para usar componentes do Paper
    <PaperProvider>
      {/* Stack define a estrutura de navegação */}
      <Stack>
        {/* 
          Tela de Lista de Produtos (rota raiz "/")
          - Esta é a primeira tela que o usuário vê
          - Mostra todos os produtos e permite adicionar novos
        */}
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'Produtos',
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff'
          }} 
        />
        
        {/* 
          Tela de Formulário para Criar Produto (rota "/create")
          - Acessada quando o usuário clica em "Novo Produto"
        */}
        <Stack.Screen 
          name="create" 
          options={{ 
            title: 'Novo Produto',
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff'
          }} 
        />
        
        {/* 
          Tela de Edição de Produto (rota "/edit/[id]")
          - Acessada quando o usuário clica em editar um produto
          - [id] é um parâmetro dinâmico da rota
        */}
        <Stack.Screen 
          name="edit/[id]" 
          options={{ 
            title: 'Editar Produto',
            headerStyle: { backgroundColor: '#6200ee' },
            headerTintColor: '#fff'
          }} 
        />
      </Stack>
    </PaperProvider>
  );
}
