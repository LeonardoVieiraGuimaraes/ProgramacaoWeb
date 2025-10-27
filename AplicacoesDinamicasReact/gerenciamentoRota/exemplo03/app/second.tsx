// Segunda tela/cena da aplicação (rota "/second").
// Demonstra navegação em pilha: pode voltar para First ou avançar para Third.
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Second() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Second</Text>
      <Text style={styles.description}>Esta é a segunda cena/tela.</Text>
      
      {/* 
        Pilha de navegação (Stack):
        - router.push(): adiciona nova tela no topo da pilha
        - router.back(): remove tela atual e volta para a anterior
        - O botão "voltar" nativo do Android também funciona automaticamente
      */}
      <View style={styles.buttonContainer}>
        <Pressable 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>← Voltar para First</Text>
        </Pressable>

        <Pressable 
          style={styles.button}
          onPress={() => router.push('/third')}
        >
          <Text style={styles.buttonText}>Ir para Third →</Text>
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
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
