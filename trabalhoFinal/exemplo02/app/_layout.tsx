import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect } from "react";
import { StatusBar } from "react-native";

// Tema global claro com azul
const lightBlueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f5fafd",
    surface: "#fff",
    primary: "#1976d2",
    text: "#222",
    onSurface: "#222",
    onBackground: "#222",
  },
};

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#1976d2");
  }, []);

  return (
    <PaperProvider theme={lightBlueTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#1976d2" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#f5fafd" },
        }}
      >
        <Stack.Screen
          name="produtos/index"
          options={{ title: "Lista de Produtos" }}
        />
        <Stack.Screen
          name="produtos/novo"
          options={{ title: "Novo Produto" }}
        />
        <Stack.Screen
          name="produtos/[id]"
          options={{ title: "Editar Produto" }}
        />
      </Stack>
    </PaperProvider>
  );
}
