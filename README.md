# Programação Web

Material didático da disciplina de Programação Web, com os exercícios, práticas e
trabalhos aplicados em turmas de graduação.

![Estrelas](https://img.shields.io/github/stars/LeonardoVieiraGuimaraes/ProgramacaoWeb?style=flat)

## O que tem aqui

O repositório é organizado por **semestre** (`012025`, `022024`, …). Dentro de cada um:

| Pasta | Conteúdo |
| :--- | :--- |
| `AV1` / `AV2` | Avaliações — sites completos com HTML, CSS e páginas interligadas |
| `Trabalhos/Pratica` | Práticas de **manipulação do DOM**, com enunciado, template inicial e solução |
| `Trabalhos/EstudoCaso` | Projetos em **React + Vite** — jogo da velha e lista de compras |

## Destaque: as práticas de DOM

Em `Trabalhos/Pratica/Dom01` o material vem em três partes, e essa separação é
proposital:

- `EnunciadoPraticaDOM.md` — o problema
- `template-index.html`, `template-script.js`, `template-style.css` — o ponto de partida
- `index.html`, `js/produtos.js` — a solução

O aluno recebe o template e implementa. Assim o exercício isola o conceito de manipulação
do DOM, sem gastar aula montando estrutura de página.

## Como usar

Os arquivos HTML/CSS/JS abrem direto no navegador — não precisa de servidor.

Os projetos React exigem Node.js:

```bash
cd 012025/Trabalhos/EstudoCaso/Tic-Tac-Toe
npm install && npm run dev
```

## Sequência sugerida

1. HTML e CSS estáticos (`AV1`)
2. Manipulação de DOM (`Trabalhos/Pratica/Dom01` e `Dom02`)
3. Componentização com React (`Trabalhos/EstudoCaso`)

O caminho é o mesmo do curso: primeiro o documento, depois o comportamento, depois a
abstração em componentes.

---

## Autor

**Leonardo Vieira Guimarães** — desenvolvedor backend e Product Owner no IMA.
Mestre em Modelagem Computacional e Sistemas (UNIMONTES), doutorando em Modelagem
Matemática e Computacional (CEFET-MG).

[![Portfólio](https://img.shields.io/badge/Portf%C3%B3lio-leoproti.com.br-0A0A0A?style=flat)](https://leoproti.com.br)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0000--3118--4664-A6CE39?style=flat&logo=orcid&logoColor=white)](https://orcid.org/0009-0000-3118-4664)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-perfil-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonardo-vieira-guimaraes/)
