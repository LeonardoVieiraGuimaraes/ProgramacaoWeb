# Introdução ao HTML

HTML (HyperText Markup Language) é a linguagem responsável pela criação de documentos para a web, comumente conhecidos como páginas. Sua origem remonta a uma linguagem mais antiga denominada SGML (Standard Generalized Markup Language).

## Objetivos do HTML5
1. Adição de elementos, atributos e comportamentos.
2. Um conjunto maior de tecnologias que permite o desenvolvimento de aplicações e web sites mais diversos e poderosos.

## Características do HTML
- Independência de plataforma (hardware e software).
- Não é monopolizada por uma pessoa ou empresa.
- Arquivos resultantes são pequenos e vinculados por hiperlinks.
- Desenvolvida para ser utilizada na web.
- Não necessita de um editor especial.

## Estrutura Básica de um Documento HTML
```html
<!DOCTYPE html>
<!-- Declaração do tipo de documento, informando ao navegador que o documento está em HTML5 -->
<html>
  <!-- Tag raiz do documento HTML -->
  <head>
    <!-- Cabeçalho do documento, contém metadados e informações não visíveis diretamente no conteúdo -->
    <meta charset="UTF-8">
    <!-- Meta tag que define a codificação de caracteres do documento como UTF-8 -->
    <meta name="viewport" content="width=device-width">
    <!-- Meta tag que define como o conteúdo deve ser exibido em diferentes dispositivos -->
    <title>Exemplo de Documento HTML</title>
    <!-- Título da página, exibido na aba do navegador -->
  </head>
  <body>
    <!-- Corpo do documento, contém todo o conteúdo visível ao usuário -->
    <p>Conteúdo visível ao cliente.</p>
    <!-- Parágrafo de texto -->
  </body>
</html>
```

## Elementos HTML
- **Tags**: Delimitam ou agrupam partes do conteúdo.
- **Atributos**: Informações extras do elemento que podem alterar o desenho no navegador.
- **Elementos Aninhados**: Elementos dentro de elementos.
- **Elementos Vazios**: Não possuem conteúdo interno, como a tag `<img>`.

## Exemplo de Uso de Tags
```html
<p>Quem nunca errou nunca experimentou nada novo.</p>
<p>Albert Einstein</p>
```

## Exemplo de Elemento Vazio
```html
<img src="url_da_imagem.jpg" alt="Texto alternativo">
```

Para mais informações sobre HTML, consulte o livro "Desenvolvimento e Design de Sites, 1ª Edição, Capítulo 4 – Imagens e Vínculos".

## Prática
Experimente editar e visualizar o código HTML no seguinte endereço:
[Repl.it - Primeira Página](https://repl.it/@Fbricadede/primeira-pagina)
