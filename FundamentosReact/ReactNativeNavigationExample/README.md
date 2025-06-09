# React Native Navigation Example

Este é um exemplo de projeto React Native que demonstra como implementar navegação entre telas usando o React Navigation.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (para inicializar e executar o projeto)
- Um emulador Android/iOS ou um dispositivo físico com o aplicativo Expo Go instalado.

## Passos para iniciar o projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd Aula12/ReactNativeNavigationExample
   ```

2. **Inicialize o projeto com Expo**:
   ```bash
   npx expo init ReactNativeNavigationExample
   ```

   Escolha a opção `blank` para um projeto básico.

3. **Instale as dependências do React Navigation**:
   Execute os seguintes comandos para instalar o React Navigation e suas dependências:
   ```bash
   npm install @react-navigation/native
   npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
   npm install @react-navigation/native-stack
   ```

4. **Configure o projeto**:
   Certifique-se de seguir as instruções de configuração do React Navigation para o React Native:
   - [Documentação oficial do React Navigation](https://reactnavigation.org/docs/getting-started)

5. **Execute o projeto**:
   Inicie o servidor de desenvolvimento com:
   ```bash
   npx expo start
   ```

   Escaneie o QR Code com o aplicativo Expo Go ou execute no emulador.

## Estrutura do Projeto

A estrutura inicial do projeto será:

```
ReactNativeNavigationExample/
├── App.js
├── screens/
│   ├── HomeScreen.js
│   ├── FirstScreen.js
│   ├── SecondScreen.js
│   └── ThirdScreen.js
├── navigation/
│   └── StackNavigator.js
├── assets/
│   └── (imagens e outros recursos)
└── README.md
```

## Próximos Passos

- Implemente as telas no diretório `screens/`.
- Configure a navegação no arquivo `navigation/StackNavigator.js`.
- Teste a navegação entre as telas.

## Recursos

- [Documentação do React Navigation](https://reactnavigation.org/)
- [Documentação do Expo](https://docs.expo.dev/)