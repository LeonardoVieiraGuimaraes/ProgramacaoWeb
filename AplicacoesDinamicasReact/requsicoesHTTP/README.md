# Exemplo de Requisições HTTP com Axios no React

Este exemplo mostra como realizar requisições HTTP em uma aplicação React utilizando a biblioteca **Axios**.

## Instalação

No terminal, execute:

```bash
npm install axios
```

## Exemplo de Código

```jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resposta => {
        setUsuarios(resposta.data);
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, []);

  if (carregando) return <p>Carregando...</p>;

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
      ))}
    </ul>
  );
}

export default ListaUsuarios;
```

## Funcionamento

- O componente faz uma requisição GET para uma API de exemplo ao ser montado.
- Enquanto os dados não chegam, exibe "Carregando...".
- Após o carregamento, exibe a lista de usuários com nome e e-mail.

---
