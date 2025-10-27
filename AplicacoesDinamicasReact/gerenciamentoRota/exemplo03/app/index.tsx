// Primeira tela/cena da aplicação (equivalente ao componente First do exemplo02 web).
// No Expo Router, este arquivo index.tsx é a rota inicial "/".
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>First</Text>
      <Text style={styles.description}>Esta é a primeira cena/tela.</Text>
      
      {/* 
        Navegação programática: router.push() adiciona a próxima tela na pilha.
        Similar ao conceito de "navigator" passado como prop na figura.
      */}
      <Pressable 
        style={styles.button}
        onPress={() => router.push("/second")}
      >
        <Text style={styles.buttonText}>Ir para Second →</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
