import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useRouter } from "expo-router";
import { useState } from "react";
import produtoService, { Produto } from "../../script/produtoService";
import FormProduto from "../../components/FormProduto";

export default function NovoProduto() {
  const [produto, setProduto] = useState<Produto>({ nome: "", preco: 0 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (name: keyof Produto, value: string) => {
    setProduto((prev) => ({
      ...prev,
      [name]: name === "preco" ? value : value,
    }));
  };

  const handleSubmit = async (data?: any) => {
    const nome = data?.nome ?? produto.nome;
    const precoStr = data?.preco ?? produto.preco;
    const preco =
      typeof precoStr === "string" ? parseFloat(precoStr) : precoStr;

    if (!nome || !preco) {
      alert("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      await produtoService.criar({ nome, preco });
      router.replace("/produtos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        variant="titleLarge"
        style={{ textAlign: "center", marginBottom: 20, color: "#fff" }}
      >
        Novo Produto
      </Text>
      <FormProduto
        produto={produto}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => {
          if (router.canGoBack?.()) {
            router.back();
          } else {
            router.replace("/produtos");
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f6fa" },
});
