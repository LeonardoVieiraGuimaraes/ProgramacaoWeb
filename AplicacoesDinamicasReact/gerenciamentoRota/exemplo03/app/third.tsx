// Terceira tela/cena da aplicação (rota "/third").
// Última tela do exemplo, demonstra navegação completa da pilha.
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Third() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Third</Text>
      <Text style={styles.description}>Esta é a terceira cena/tela.</Text>
      
      {/* 
        Navegação na pilha:
        - router.back(): volta uma tela (Second)
        - router.replace('/'): substitui a tela atual por First (limpa histórico)
        
        Conceito didático: a pilha de rotas (initialRouteStack da figura) é
        gerenciada automaticamente pelo Stack Navigator do Expo Router.
      */}
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>← Voltar para Second</Text>
        </Pressable>

        <Pressable 
          style={[styles.button, styles.buttonDanger]}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.buttonText}>↻ Reiniciar (First)</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonSecondary: {
    backgroundColor: '#666',
  },
  buttonDanger: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
