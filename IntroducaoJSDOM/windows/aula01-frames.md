# 🖼️ Aula 1: window.frames[] - Trabalhando com Frames e iFrames

## 📚 Objetivos da Aula

Ao final desta aula, você será capaz de:
- Compreender o conceito de frames e iframes
- Acessar e manipular frames usando JavaScript
- Implementar comunicação entre frames
- Criar e gerenciar frames dinamicamente

---

## 📝 1. Conceitos Fundamentais

### O que são Frames?

**Frames** são subdivisões de uma página web que permitem exibir múltiplos documentos HTML dentro de uma única janela do navegador. Atualmente, usamos principalmente **iframes** (inline frames).

### window.frames[]

O array `window.frames[]` contém referências para todos os frames presentes na página atual. Cada elemento do array é uma referência para o objeto `window` do frame correspondente.

```javascript
// Sintaxe básica
window.frames[índice]          // Acesso por índice
window.frames["nome"]          // Acesso por nome
window.frames.length           // Número total de frames
```

---

## 🎯 2. Estrutura Básica de um iFrame

### HTML Básico

```html
<iframe 
    id="meuFrame" 
    name="meuFrame" 
    src="pagina.html" 
    width="400" 
    height="300">
</iframe>
```

### Atributos Importantes

- **src**: URL do documento a ser carregado
- **name**: Nome do frame (usado para referência)
- **id**: Identificador único
- **width/height**: Dimensões do frame
- **sandbox**: Restrições de segurança
- **loading**: Controle de carregamento (lazy/eager)

---

## 💻 3. Acessando Frames com JavaScript

### Métodos de Acesso

```javascript
// 1. Por índice
const primeiroFrame = window.frames[0];

// 2. Por nome
const frameNomeado = window.frames["meuFrame"];

// 3. Via document
const frameElemento = document.getElementById("meuFrame");
const frameWindow = frameElemento.contentWindow;

// 4. Contando frames
const totalFrames = window.frames.length;
console.log(`Total de frames: ${totalFrames}`);
```

### Verificando se um Frame Existe

```javascript
function frameExiste(nome) {
    return window.frames[nome] !== undefined;
}

if (frameExiste("meuFrame")) {
    console.log("Frame encontrado!");
} else {
    console.log("Frame não existe");
}
```

---

## 🔄 4. Manipulando Conteúdo de Frames

### Acessando o Documento do Frame

```javascript
// Obter referência do frame
const frame = window.frames["meuFrame"];

try {
    // Acessar documento do frame
    const frameDoc = frame.document;
    
    // Manipular conteúdo
    frameDoc.body.innerHTML = "<h1>Novo conteúdo!</h1>";
    
    // Acessar elementos específicos
    const titulo = frameDoc.getElementById("titulo");
    titulo.textContent = "Título modificado";
    
} catch (error) {
    console.error("Erro de acesso:", error.message);
    // Pode ocorrer devido a políticas de same-origin
}
```

### Executando JavaScript no Frame

```javascript
// Executar código no contexto do frame
function executarNoFrame(nomeFrame, codigo) {
    try {
        const frame = window.frames[nomeFrame];
        frame.eval(codigo);
    } catch (error) {
        console.error("Erro na execução:", error);
    }
}

// Exemplo de uso
executarNoFrame("meuFrame", "alert('Olá do frame!');");
```

---

## 💬 5. Comunicação Entre Frames

### Do Frame Pai para o Frame Filho

```javascript
// Frame pai enviando dados para frame filho
function enviarParaFrame(dados) {
    const frame = window.frames["meuFrame"];
    
    // Usando postMessage (método seguro)
    frame.postMessage(dados, "*");
}

// Exemplo
enviarParaFrame({
    tipo: "comando",
    acao: "atualizar",
    dados: ["item1", "item2", "item3"]
});
```

### Do Frame Filho para o Frame Pai

```javascript
// No frame filho - enviando para o pai
function enviarParaPai(dados) {
    window.parent.postMessage(dados, "*");
}

// Exemplo de uso no frame filho
enviarParaPai({
    tipo: "notificacao",
    mensagem: "Operação concluída"
});
```

### Listener para Mensagens

```javascript
// No frame pai - escutando mensagens dos filhos
window.addEventListener("message", function(event) {
    console.log("Mensagem recebida:", event.data);
    console.log("Origem:", event.origin);
    
    // Processar diferentes tipos de mensagem
    switch(event.data.tipo) {
        case "notificacao":
            mostrarNotificacao(event.data.mensagem);
            break;
        case "erro":
            tratarErro(event.data.erro);
            break;
    }
});
```

---

## 🔧 6. Criando Frames Dinamicamente

### Criação com JavaScript

```javascript
function criarFrame(id, src, width = 400, height = 300) {
    // Criar elemento iframe
    const iframe = document.createElement("iframe");
    
    // Configurar atributos
    iframe.id = id;
    iframe.name = id;
    iframe.src = src;
    iframe.width = width;
    iframe.height = height;
    iframe.style.border = "1px solid #ccc";
    
    // Adicionar event listeners
    iframe.onload = function() {
        console.log(`Frame ${id} carregado com sucesso`);
    };
    
    iframe.onerror = function() {
        console.error(`Erro ao carregar frame ${id}`);
    };
    
    // Adicionar ao DOM
    document.body.appendChild(iframe);
    
    return iframe;
}

// Exemplo de uso
const novoFrame = criarFrame("frameDemo", "demo.html", 500, 400);
```

### Removendo Frames

```javascript
function removerFrame(id) {
    const frame = document.getElementById(id);
    if (frame) {
        frame.remove();
        console.log(`Frame ${id} removido`);
    } else {
        console.log(`Frame ${id} não encontrado`);
    }
}
```

---

## 🛡️ 7. Segurança e Restrições

### Same-Origin Policy

```javascript
// Verificar se o frame está na mesma origem
function mesmaOrigem(frame) {
    try {
        // Tentar acessar uma propriedade do frame
        const teste = frame.location.href;
        return true;
    } catch (error) {
        // Erro indica origens diferentes
        return false;
    }
}
```

### Sandbox e Segurança

```html
<!-- Frame com restrições de segurança -->
<iframe 
    src="conteudo-externo.html"
    sandbox="allow-scripts allow-same-origin">
</iframe>

<!-- Diferentes níveis de sandbox -->
<iframe sandbox="">                          <!-- Máxima restrição -->
<iframe sandbox="allow-scripts">             <!-- Permite JavaScript -->
<iframe sandbox="allow-forms allow-scripts"> <!-- Permite forms e JS -->
```

---

## 🎮 8. Exemplos Práticos

### Exemplo 1: Sistema de Abas com Frames

```javascript
class SistemaAbas {
    constructor() {
        this.abas = {};
        this.abaAtiva = null;
    }
    
    criarAba(id, titulo, src) {
        // Criar frame
        const frame = criarFrame(id, src);
        frame.style.display = "none";
        
        // Criar botão da aba
        const botao = document.createElement("button");
        botao.textContent = titulo;
        botao.onclick = () => this.ativarAba(id);
        
        this.abas[id] = { frame, botao };
        
        // Adicionar ao container de abas
        document.getElementById("abas").appendChild(botao);
    }
    
    ativarAba(id) {
        // Esconder aba ativa
        if (this.abaAtiva) {
            this.abas[this.abaAtiva].frame.style.display = "none";
            this.abas[this.abaAtiva].botao.classList.remove("ativa");
        }
        
        // Mostrar nova aba
        this.abas[id].frame.style.display = "block";
        this.abas[id].botao.classList.add("ativa");
        this.abaAtiva = id;
    }
}
```

### Exemplo 2: Chat entre Frames

```javascript
// Sistema de chat entre frame pai e filho
class ChatFrames {
    constructor() {
        this.historico = [];
        this.inicializarListeners();
    }
    
    inicializarListeners() {
        window.addEventListener("message", (event) => {
            if (event.data.tipo === "mensagem") {
                this.receberMensagem(event.data);
            }
        });
    }
    
    enviarMensagem(frameDestino, mensagem) {
        const dados = {
            tipo: "mensagem",
            autor: "Frame Pai",
            conteudo: mensagem,
            timestamp: new Date().toISOString()
        };
        
        window.frames[frameDestino].postMessage(dados, "*");
        this.historico.push(dados);
    }
    
    receberMensagem(dados) {
        this.historico.push(dados);
        this.exibirMensagem(dados);
    }
    
    exibirMensagem(dados) {
        const chatDiv = document.getElementById("chat");
        const mensagemDiv = document.createElement("div");
        mensagemDiv.innerHTML = `
            <strong>${dados.autor}:</strong> ${dados.conteudo}
            <small>(${new Date(dados.timestamp).toLocaleTimeString()})</small>
        `;
        chatDiv.appendChild(mensagemDiv);
    }
}
```

---

## 📊 9. Monitoramento e Debug

### Monitorar Estado dos Frames

```javascript
function monitorarFrames() {
    console.log("=== Status dos Frames ===");
    
    for (let i = 0; i < window.frames.length; i++) {
        const frame = window.frames[i];
        const elemento = document.getElementsByTagName("iframe")[i];
        
        console.log(`Frame ${i}:`);
        console.log(`  - Name: ${elemento.name || "sem nome"}`);
        console.log(`  - Src: ${elemento.src}`);
        
        try {
            console.log(`  - URL atual: ${frame.location.href}`);
            console.log(`  - Título: ${frame.document.title}`);
        } catch (error) {
            console.log(`  - Acesso negado (cross-origin)`);
        }
    }
}

// Executar monitoramento a cada 5 segundos
setInterval(monitorarFrames, 5000);
```

---

## 🚨 10. Problemas Comuns e Soluções

### Problema 1: Cross-Origin Errors

```javascript
// ❌ Problemático
try {
    const conteudo = frame.document.body.innerHTML;
} catch (error) {
    console.error("Erro de cross-origin:", error);
}

// ✅ Solução com postMessage
frame.postMessage({ comando: "getContent" }, "*");
```

### Problema 2: Frame não Carregado

```javascript
// ✅ Aguardar carregamento do frame
function aguardarFrame(nomeFrame, callback) {
    const frame = document.querySelector(`iframe[name="${nomeFrame}"]`);
    
    if (frame.contentDocument?.readyState === "complete") {
        callback();
    } else {
        frame.onload = callback;
    }
}
```

---

## 🎯 11. Exercícios Práticos

### Exercício 1: Contador de Frames
Crie uma função que conta e lista todos os frames da página, mostrando suas propriedades básicas.

### Exercício 2: Comunicação Bidirecional
Implemente um sistema onde o frame pai pode enviar comandos para o frame filho e receber respostas.

### Exercício 3: Galeria de Imagens
Crie uma galeria onde as imagens são carregadas em frames separados e podem ser navegadas.

---

## 📚 12. Recursos Adicionais

### Documentação MDN
- [HTMLIFrameElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement)
- [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

### Boas Práticas
1. **Sempre use postMessage** para comunicação cross-origin
2. **Implemente tratamento de erros** para acessos negados
3. **Configure sandbox adequadamente** para segurança
4. **Use loading="lazy"** para otimizar performance
5. **Evite frames desnecessários** - considere alternativas modernas

---

## 🎯 Resumo da Aula

- **window.frames[]** é um array com referências para todos os frames
- **Comunicação segura** usa postMessage
- **Same-origin policy** restringe acesso cross-origin
- **Frames dinâmicos** podem ser criados com JavaScript
- **Sandbox** oferece controle de segurança
- **Debugging** requer técnicas específicas para frames

**Próxima aula**: window.history - Navegação e Histórico do Navegador