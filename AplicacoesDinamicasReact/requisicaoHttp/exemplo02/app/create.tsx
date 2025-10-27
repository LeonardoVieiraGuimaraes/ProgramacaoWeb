/**
 * Tela de Criação de Produto
 * 
 * Esta tela permite criar um novo produto.
 * Utiliza um formulário com validação antes de enviar para a API.
 * 
 * Conceitos de React Native:
 * - TextInput: campo de entrada de texto (como <input> no HTML)
 * - KeyboardAvoidingView: ajusta a view quando o teclado aparece
 * - ScrollView: permite scroll quando o conteúdo é maior que a tela
 */

import { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, HelperText, Snackbar } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { criarProduto } from '../services/produtoService';

/**
 * Componente da Tela de Criação
 */
export default function CriarProduto() {
  const router = useRouter();
  
  // Estados do formulário
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Estados de validação (erros)
  const [erroNome, setErroNome] = useState('');
  const [erroPreco, setErroPreco] = useState('');
  
  // Estados de feedback
  const [mensagem, setMensagem] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  /**
   * Valida os dados do formulário
   * Retorna true se tudo estiver válido, false caso contrário
   */
  const validarFormulario = (): boolean => {
    let valido = true;
    
    // Limpa erros anteriores
    setErroNome('');
    setErroPreco('');

    // Valida nome (obrigatório e mínimo 3 caracteres)
    if (!nome.trim()) {
      setErroNome('O nome é obrigatório');
      valido = false;
    } else if (nome.trim().length < 3) {
      setErroNome('O nome deve ter no mínimo 3 caracteres');
      valido = false;
    }

    // Valida preço (obrigatório e maior que zero)
    const precoNumerico = parseFloat(preco);
    if (!preco.trim()) {
      setErroPreco('O preço é obrigatório');
      valido = false;
    } else if (isNaN(precoNumerico)) {
      setErroPreco('Digite um preço válido');
      valido = false;
    } else if (precoNumerico <= 0) {
      setErroPreco('O preço deve ser maior que zero');
      valido = false;
    }

    return valido;
  };

  /**
   * Manipula o envio do formulário
   * Valida os dados e envia para a API
   */
  const handleSubmit = async () => {
    // Valida antes de enviar
    if (!validarFormulario()) {
      return;
    }

    try {
      setLoading(true);
      
      // Cria o objeto do produto
      const novoProduto = {
        nome: nome.trim(),
        preco: parseFloat(preco)
      };

      // Envia para a API
      await criarProduto(novoProduto);
      
      // Mostra mensagem de sucesso
      setMensagem('Produto criado com sucesso!');
      setShowSnackbar(true);
      
      // Aguarda 1 segundo e volta para a lista
      setTimeout(() => {
        router.back(); // Volta para a tela anterior
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      setMensagem('Erro ao criar produto. Tente novamente.');
      setShowSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    // KeyboardAvoidingView: ajusta a view quando o teclado aparece
    // behavior="padding" no iOS evita que o teclado cubra os campos
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* ScrollView: permite scroll se o conteúdo for maior que a tela */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* 
          TextInput do React Native Paper
          - Similar ao <input> do HTML
          - mode="outlined": estilo com borda
          - label: texto que aparece acima/dentro do campo
          - error: marca o campo como inválido (borda vermelha)
        */}
        <TextInput
          label="Nome do Produto *"
          value={nome}
          onChangeText={setNome}
          mode="outlined"
          error={!!erroNome} // !! converte string para boolean
          style={styles.input}
          disabled={loading}
        />
        
        {/* 
          HelperText: texto de ajuda/erro abaixo do campo
          - type="error": texto vermelho
          - visible: controla se aparece ou não
        */}
        <HelperText type="error" visible={!!erroNome}>
          {erroNome}
        </HelperText>

        {/* Campo de Preço */}
        <TextInput
          label="Preço *"
          value={preco}
          onChangeText={setPreco}
          mode="outlined"
          error={!!erroPreco}
          style={styles.input}
          keyboardType="decimal-pad" // Teclado numérico com vírgula
          disabled={loading}
          left={<TextInput.Affix text="R$" />} // Prefixo R$ no campo
        />
        
        <HelperText type="error" visible={!!erroPreco}>
          {erroPreco}
        </HelperText>

        {/* Botões de ação */}
        <View style={styles.botoesContainer}>
          {/* 
            Button do React Native Paper
            - mode="contained": botão preenchido
            - mode="outlined": botão com borda
            - loading: mostra indicador de carregamento
            - disabled: desabilita o botão
          */}
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
            style={styles.botao}
            buttonColor="#6200ee"
          >
            Criar Produto
          </Button>

          <Button
            mode="outlined"
            onPress={() => router.back()}
            disabled={loading}
            style={styles.botao}
          >
            Cancelar
          </Button>
        </View>
      </ScrollView>

      {/* Snackbar para mensagens de feedback */}
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setShowSnackbar(false)}
        duration={3000}
      >
        {mensagem}
      </Snackbar>
    </KeyboardAvoidingView>
  );
}

/**
 * Estilos do componente
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  input: {
    marginBottom: 4,
  },
  botoesContainer: {
    marginTop: 24,
    gap: 12,
  },
  botao: {
    paddingVertical: 4,
  },
});
