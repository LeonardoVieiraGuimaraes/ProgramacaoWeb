// Importa todos os componentes (scenes)
import MyComponent01 from "./MyComponent01";
import MyComponent02 from "./MyComponent02";
import MyComponent03 from "./MyComponent03";
import MyComponent04 from "./MyComponent04";
import MyComponent05 from "./MyComponent05";
import MyComponent06 from "./MyComponent06";
import MyComponent07 from "./MyComponent07";
import FirstScene from "./scenes/FirstScene";
import SecondScene from "./scenes/SecondScene";
import ThirdScene from "./scenes/ThirdScene";

// Exporta o array de rotas (route stack)
export default [
  {
    path: "/componente01",
    element: <MyComponent01 />,
  },
  {
    path: "/componente02",
    element: <MyComponent02 />,
  },
  {
    path: "/componente03",
    element: <MyComponent03 />,
  },
  {
    path: "/componente04",
    element: <MyComponent04 />,
  },
  {
    path: "/componente05",
    element: <MyComponent05 />,
  },
  {
    path: "/componente06",
    element: <MyComponent06 />,
  },
  {
    path: "/componente07",
    element: <MyComponent07 />,
  },
  {
    path: "/scenes/first",
    element: <FirstScene />,
  },
  {
    path: "/scenes/second",
    element: <SecondScene />,
  },
  {
    path: "/scenes/third",
    element: <ThirdScene />,
  },
];
