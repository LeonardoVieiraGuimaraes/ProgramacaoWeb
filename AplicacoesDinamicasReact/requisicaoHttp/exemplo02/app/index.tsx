/**
 * Tela Principal - Lista de Produtos
 * 
 * Esta é a tela inicial do app que mostra todos os produtos cadastrados.
 * Permite visualizar, editar e excluir produtos, além de adicionar novos.
 * 
 * Conceitos importantes de React Native:
 * - View: equivalente a <div> no HTML
 * - Text: equivalente a <p> ou <span>
 * - FlatList: lista otimizada para renderizar muitos itens
 * - Alert: exibe diálogos nativos (como window.confirm no navegador)
 */

import { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, RefreshControl } from 'react-native';
import { Text, FAB, Card, IconButton, Snackbar, ActivityIndicator } from 'react-native-paper';
import { FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { listarProdutos, excluirProduto, Produto } from '../services/produtoService';

/**
 * Componente da Tela de Lista de Produtos
 */
export default function ListaProdutos() {
  // Hook do Expo Router para navegação programática
  const router = useRouter();
  
  // Estados da aplicação
  const [produtos, setProdutos] = useState<Produto[]>([]);        // Lista de produtos
  const [loading, setLoading] = useState(false);                  // Indicador de carregamento
  const [refreshing, setRefreshing] = useState(false);            // Pull-to-refresh
  const [mensagem, setMensagem] = useState('');                   // Mensagem de feedback
  const [showSnackbar, setShowSnackbar] = useState(false);        // Controla visibilidade da Snackbar

  /**
   * Carrega os produtos quando o componente é montado
   * useEffect com [] executa apenas uma vez, ao montar
   */
  useEffect(() => {
    carregarProdutos();
  }, []);

  /**
   * Função para carregar produtos da API
   * Pode ser chamada ao montar o componente ou ao fazer pull-to-refresh
   */
  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const dados = await listarProdutos(); // Chama o serviço
      setProdutos(dados);
    } catch (error) {
      mostrarMensagem('Erro ao carregar produtos');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Função para recarregar produtos (Pull-to-Refresh)
   * No React Native, pull-to-refresh tem seu próprio estado
   */
  const onRefresh = async () => {
    setRefreshing(true);
    await carregarProdutos();
    setRefreshing(false);
  };

  /**
   * Função para excluir um produto
   * Mostra um Alert nativo antes de excluir (confirmação)
   * 
   * @param produto - Produto a ser excluído
   */
  const handleExcluir = (produto: Produto) => {
    // Alert.alert mostra um diálogo nativo (iOS/Android)
    Alert.alert(
      'Confirmar Exclusão',
      `Deseja realmente excluir "${produto.nome}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive', // Estilo vermelho no iOS
          onPress: async () => {
            try {
              await excluirProduto(produto.id!); // ! diz ao TypeScript que id existe
              mostrarMensagem('Produto excluído com sucesso!');
              carregarProdutos(); // Recarrega a lista
            } catch (error) {
              mostrarMensagem('Erro ao excluir produto');
              console.error(error);
            }
          }
        }
      ]
    );
  };

  /**
   * Navega para a tela de edição do produto
   * 
   * @param produto - Produto a ser editado
   */
  const handleEditar = (produto: Produto) => {
    // router.push navega para a rota especificada
    router.push(`/edit/${produto.id}`);
  };

  /**
   * Exibe uma mensagem de feedback ao usuário
   * 
   * @param msg - Texto da mensagem
   */
  const mostrarMensagem = (msg: string) => {
    setMensagem(msg);
    setShowSnackbar(true);
  };

  /**
   * Formata o preço para exibição (R$ 1.234,56)
   * 
   * @param preco - Valor numérico do preço
   * @returns String formatada
   */
  const formatarPreco = (preco: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  /**
   * Renderiza um item da lista (chamado para cada produto)
   * 
   * @param item - Objeto do produto
   * @returns Componente Card do produto
   */
  const renderItem = ({ item }: { item: Produto }) => (
    <Card style={styles.card}>
      {/* Card.Content: área de conteúdo do card */}
      <Card.Content>
        <View style={styles.cardHeader}>
          {/* Informações do produto */}
          <View style={styles.produtoInfo}>
            <Text variant="titleLarge" style={styles.produtoNome}>
              {item.nome}
            </Text>
            <Text variant="headlineSmall" style={styles.produtoPreco}>
              {formatarPreco(item.preco)}
            </Text>
          </View>
          
          {/* Botões de ação */}
          <View style={styles.acoes}>
            {/* Botão Editar */}
            <IconButton
              icon="pencil"
              iconColor="#2196F3"
              size={24}
              onPress={() => handleEditar(item)}
            />
            
            {/* Botão Excluir */}
            <IconButton
              icon="delete"
              iconColor="#f44336"
              size={24}
              onPress={() => handleExcluir(item)}
            />
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      {/* Indicador de carregamento inicial */}
      {loading && produtos.length === 0 ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#6200ee" />
          <Text style={styles.loadingText}>Carregando produtos...</Text>
        </View>
      ) : (
        <>
          {/* 
            FlatList: componente otimizado para listas
            - data: array de dados
            - renderItem: função que renderiza cada item
            - keyExtractor: função que retorna chave única de cada item
            - refreshControl: componente de pull-to-refresh
          */}
          <FlatList
            data={produtos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id!.toString()}
            contentContainerStyle={styles.listContent}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text variant="titleMedium" style={styles.emptyText}>
                  Nenhum produto cadastrado
                </Text>
                <Text variant="bodyMedium" style={styles.emptySubtext}>
                  Toque no botão + para adicionar
                </Text>
              </View>
            }
          />
          
          {/* 
            FAB: Floating Action Button (botão flutuante)
            - Padrão do Material Design para ação principal
            - Fica fixo no canto inferior direito
          */}
          <FAB
            icon="plus"
            style={styles.fab}
            onPress={() => router.push('/create')}
            label="Novo"
          />
        </>
      )}
      
      {/* 
        Snackbar: notificação toast do Material Design
        - Aparece na parte inferior da tela
        - Desaparece automaticamente após alguns segundos
      */}
      <Snackbar
        visible={showSnackbar}
        onDismiss={() => setShowSnackbar(false)}
        duration={3000}
        action={{
          label: 'OK',
          onPress: () => setShowSnackbar(false),
        }}
      >
        {mensagem}
      </Snackbar>
    </View>
  );
}

/**
 * Estilos do componente
 * StyleSheet.create otimiza os estilos para React Native
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    color: '#666',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80, // Espaço para o FAB
  },
  card: {
    marginBottom: 12,
    elevation: 2, // Sombra no Android
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  produtoInfo: {
    flex: 1,
  },
  produtoNome: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  produtoPreco: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  acoes: {
    flexDirection: 'row',
    gap: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 32,
  },
  emptyText: {
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    color: '#999',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200ee',
  },
});
