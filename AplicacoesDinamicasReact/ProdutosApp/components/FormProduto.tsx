import React, { useEffect } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput, Button } from "react-native-paper";
import { Produto } from "../script/produtoService";

interface Props {
  produto: Produto;
  loading: boolean;
  onChange: (name: keyof Produto, value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function FormProduto({
  produto,
  loading,
  onChange,
  onSubmit,
  onCancel,
}: Props) {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      nome: produto.nome,
      preco: produto.preco ? String(produto.preco) : "",
    },
  });

  useEffect(() => {
    setValue("nome", produto.nome);
    setValue("preco", produto.preco ? String(produto.preco) : "");
  }, [produto, setValue]);

  return (
    <View style={{ width: "100%" }}>
      <Controller
        control={control}
        name="nome"
        rules={{ required: "Nome obrigatório" }}
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            label="Nome"
            value={value}
            onChangeText={(text) => {
              onChangeField(text);
              onChange("nome", text);
            }}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#fff" }}
            autoFocus
            textColor="#222"
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            error={!!fieldState.error}
          />
        )}
      />
      <Controller
        control={control}
        name="preco"
        rules={{
          required: "Preço obrigatório",
          pattern: {
            value: /^\d+(\.\d{1,2})?$/,
            message: "Digite um valor válido",
          },
        }}
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            label="Preço"
            value={value}
            onChangeText={(text) => {
              let sanitized = text.replace(",", ".").replace(/[^0-9.]/g, "");
              onChangeField(sanitized);
              onChange("preco", sanitized);
            }}
            mode="outlined"
            keyboardType="decimal-pad"
            style={{ marginBottom: 16, backgroundColor: "#fff" }}
            inputMode="decimal"
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            textColor="#222"
            error={!!fieldState.error}
          />
        )}
      />
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        loading={loading}
        style={{ marginBottom: 10, backgroundColor: "#1976d2" }}
        labelStyle={{ color: "#fff" }}
      >
        Salvar
      </Button>
      <Button
        mode="outlined"
        onPress={onCancel}
        labelStyle={{ color: "#1976d2" }}
      >
        Cancelar
      </Button>
    </View>
  );
}
