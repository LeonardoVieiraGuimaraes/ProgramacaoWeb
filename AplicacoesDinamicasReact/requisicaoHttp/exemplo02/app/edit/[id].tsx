/**
 * Tela de Edição de Produto
 * 
 * Esta tela carrega os dados de um produto existente e permite editá-los.
 * É acessada pela rota /edit/[id], onde [id] é o ID do produto.
 * 
 * Conceitos importantes:
 * - useLocalSearchParams: hook para pegar parâmetros da URL
 * - Carregamento de dados inicial (ao montar o componente)
 * - Atualização via PUT na API
 */

import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, HelperText, Snackbar, ActivityIndicator, Text } from 'react-native-paper';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { obterProduto, atualizarProduto } from '../../services/produtoService';

/**
 * Componente da Tela de Edição
 */
export default function EditarProduto() {
  const router = useRouter();
  
  // useLocalSearchParams: pega os parâmetros da URL
  // No caso, pega o [id] da rota /edit/[id]
  const { id } = useLocalSearchParams<{ id: string }>();
  
  // Estados do formulário
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [loading, setLoading] = useState(false);
  const [carregando, setCarregando] = useState(true); // Carregamento inicial dos dados
  
  // Estados de validação
  const [erroNome, setErroNome] = useState('');
  const [erroPreco, setErroPreco] = useState('');
  
  // Estados de feedback
  const [mensagem, setMensagem] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  /**
   * Carrega os dados do produto ao montar o componente
   * useEffect com [id] executa quando o componente monta ou quando o id muda
   */
  useEffect(() => {
    carregarProduto();
  }, [id]);

  /**
   * Busca os dados do produto na API
   */
  const carregarProduto = async () => {
    try {
      setCarregando(true);
      
      // Converte o id (string da URL) para número
      const produtoId = parseInt(id);
      
      // Busca o produto na API
      const produto = await obterProduto(produtoId);
      
      // Preenche os campos do formulário com os dados do produto
      setNome(produto.nome);
      setPreco(produto.preco.toString());
      
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
      setMensagem('Erro ao carregar produto');
      setShowSnackbar(true);
    } finally {
      setCarregando(false);
    }
  };

  /**
   * Valida os dados do formulário
   */
  const validarFormulario = (): boolean => {
    let valido = true;
    
    setErroNome('');
    setErroPreco('');

    // Valida nome
    if (!nome.trim()) {
      setErroNome('O nome é obrigatório');
      valido = false;
    } else if (nome.trim().length < 3) {
      setErroNome('O nome deve ter no mínimo 3 caracteres');
      valido = false;
    }

    // Valida preço
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
   * Manipula o envio do formulário de edição
   * Envia PUT para a API com os dados atualizados
   */
  const handleSubmit = async () => {
    if (!validarFormulario()) {
      return;
    }

    try {
      setLoading(true);
      
      // Converte o id para número
      const produtoId = parseInt(id);
      
      // Cria o objeto com os dados atualizados
      const produtoAtualizado = {
        nome: nome.trim(),
        preco: parseFloat(preco)
      };

      // Envia PUT para a API
      await atualizarProduto(produtoId, produtoAtualizado);
      
      setMensagem('Produto atualizado com sucesso!');
      setShowSnackbar(true);
      
      // Volta para a lista após 1 segundo
      setTimeout(() => {
        router.back();
      }, 1000);
      
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      setMensagem('Erro ao atualizar produto. Tente novamente.');
      setShowSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  // Mostra indicador de carregamento enquanto busca os dados
  if (carregando) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={styles.loadingText}>Carregando produto...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* Campo Nome */}
        <TextInput
          label="Nome do Produto *"
          value={nome}
          onChangeText={setNome}
          mode="outlined"
          error={!!erroNome}
          style={styles.input}
          disabled={loading}
        />
        
        <HelperText type="error" visible={!!erroNome}>
          {erroNome}
        </HelperText>

        {/* Campo Preço */}
        <TextInput
          label="Preço *"
          value={preco}
          onChangeText={setPreco}
          mode="outlined"
          error={!!erroPreco}
          style={styles.input}
          keyboardType="decimal-pad"
          disabled={loading}
          left={<TextInput.Affix text="R$" />}
        />
        
        <HelperText type="error" visible={!!erroPreco}>
          {erroPreco}
        </HelperText>

        {/* Botões de ação */}
        <View style={styles.botoesContainer}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            loading={loading}
            disabled={loading}
            style={styles.botao}
            buttonColor="#6200ee"
          >
            Salvar Alterações
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    color: '#666',
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
