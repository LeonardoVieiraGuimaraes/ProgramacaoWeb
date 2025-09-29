import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { Text } from "react-native-paper";
import produtoService, { Produto } from "../../script/produtoService";
import FormProduto from "../../components/FormProduto";

export default function EditarProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [produto, setProduto] = useState<Produto>({ nome: "", preco: 0 });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      setLoading(true);
      produtoService.obter(Number(id)).then((data) => {
        setProduto({ nome: data.nome, preco: data.preco });
        setLoading(false);
      });
    }
  }, [id]);

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
      await produtoService.atualizar(Number(id), { nome, preco });
      router.replace("/produtos");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text
        variant="titleLarge"
        style={{ textAlign: "center", marginBottom: 20 }}
      >
        Editar Produto
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
