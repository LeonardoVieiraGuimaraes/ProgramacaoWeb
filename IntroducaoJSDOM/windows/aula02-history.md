# 🕒 Aula 2: window.history - Navegação e Histórico do Navegador

## 📚 Objetivos da Aula

Ao final desta aula, você será capaz de:
- Compreender o funcionamento do histórico do navegador
- Implementar navegação programática
- Usar a HTML5 History API para SPAs
- Gerenciar estados de navegação

---

## 📝 1. Conceitos Fundamentais

### O que é window.history?

O objeto `window.history` representa o histórico de sessão do navegador para a aba atual. Ele permite navegar pelo histórico e, com a HTML5 History API, manipular o histórico sem recarregar a página.

### Propriedades Básicas

```javascript
// Propriedades principais
history.length    // Número de entradas no histórico
history.state     // Estado atual (HTML5)
```

### Diferença: História Antiga vs HTML5

```javascript
// ❌ Métodos antigos (limitados)
history.back();     // Volta uma página
history.forward();  // Avança uma página
history.go(-2);     // Vai 2 páginas para trás

// ✅ HTML5 History API (poderosa)
history.pushState(estado, título, url);    // Adiciona entrada
history.replaceState(estado, título, url); // Substitui entrada atual
```

---

## 🎯 2. Navegação Básica

### Métodos de Navegação

```javascript
// 1. Voltar uma página
function voltarPagina() {
    history.back();
    // Equivale a: history.go(-1)
}

// 2. Avançar uma página
function avancarPagina() {
    history.forward();
    // Equivale a: history.go(1)
}

// 3. Navegar N páginas
function navegarPaginas(numero) {
    history.go(numero);
    // numero positivo = avançar
    // numero negativo = voltar
    // 0 = recarregar página atual
}

// 4. Verificar se pode navegar
function podeVoltar() {
    return history.length > 1;
}
```

### Exemplo Prático: Botões de Navegação

```javascript
class NavegadorHistorico {
    constructor() {
        this.criarBotoes();
        this.atualizarEstado();
    }
    
    criarBotoes() {
        const container = document.getElementById('navegacao');
        
        // Botão Voltar
        const btnVoltar = document.createElement('button');
        btnVoltar.textContent = '← Voltar';
        btnVoltar.onclick = () => this.voltar();
        
        // Botão Avançar
        const btnAvancar = document.createElement('button');
        btnAvancar.textContent = 'Avançar →';
        btnAvancar.onclick = () => this.avancar();
        
        container.appendChild(btnVoltar);
        container.appendChild(btnAvancar);
        
        this.btnVoltar = btnVoltar;
        this.btnAvancar = btnAvancar;
    }
    
    voltar() {
        if (history.length > 1) {
            history.back();
        }
    }
    
    avancar() {
        history.forward();
    }
    
    atualizarEstado() {
        // Atualizar estado dos botões baseado no histórico
        this.btnVoltar.disabled = history.length <= 1;
        // Nota: Não há forma direta de saber se pode avançar
    }
}
```

---

## 🔄 3. HTML5 History API

### pushState() - Adicionar Nova Entrada

```javascript
// Sintaxe: history.pushState(estado, título, url)

function adicionarEstado(pagina, dados) {
    const estado = {
        pagina: pagina,
        dados: dados,
        timestamp: Date.now()
    };
    
    const titulo = `Página ${pagina}`;
    const url = `?pagina=${pagina}`;
    
    history.pushState(estado, titulo, url);
    
    // Atualizar conteúdo da página
    atualizarConteudo(pagina, dados);
}

// Exemplo de uso
adicionarEstado('sobre', { secao: 'empresa', ano: 2024 });
```

### replaceState() - Substituir Entrada Atual

```javascript
function substituirEstado(novoEstado) {
    const estado = {
        ...novoEstado,
        timestamp: Date.now()
    };
    
    history.replaceState(estado, document.title, window.location.href);
}

// Exemplo: Atualizar estado sem criar nova entrada
substituirEstado({ 
    filtros: ['ativo', 'recente'],
    ordenacao: 'data'
});
```

### popstate Event - Detectar Mudanças

```javascript
// Listener obrigatório para SPAs
window.addEventListener('popstate', function(event) {
    console.log('Estado mudou:', event.state);
    
    if (event.state) {
        // Restaurar estado da aplicação
        restaurarEstado(event.state);
    } else {
        // Estado inicial (página carregada normalmente)
        estadoInicial();
    }
});

function restaurarEstado(estado) {
    // Implementar lógica para restaurar a aplicação
    // baseada no estado salvo
    if (estado.pagina) {
        navegarPara(estado.pagina, estado.dados);
    }
}
```

---

## 🏗️ 4. Implementando Single Page Application (SPA)

### Estrutura Básica de SPA

```javascript
class SPA {
    constructor() {
        this.rotas = new Map();
        this.inicializar();
    }
    
    inicializar() {
        // Configurar listener do popstate
        window.addEventListener('popstate', (event) => {
            this.gerenciarRota(event.state);
        });
        
        // Interceptar links internos
        this.interceptarLinks();
        
        // Carregar rota inicial
        this.carregarRotaInicial();
    }
    
    definirRota(caminho, handler) {
        this.rotas.set(caminho, handler);
    }
    
    navegarPara(caminho, dados = {}) {
        const estado = {
            caminho: caminho,
            dados: dados,
            timestamp: Date.now()
        };
        
        // Atualizar URL sem recarregar
        history.pushState(estado, '', caminho);
        
        // Executar handler da rota
        this.gerenciarRota(estado);
    }
    
    gerenciarRota(estado) {
        if (!estado) {
            // Primeira carga ou página recarregada
            estado = { caminho: window.location.pathname };
        }
        
        const handler = this.rotas.get(estado.caminho);
        if (handler) {
            handler(estado.dados);
        } else {
            this.paginaNaoEncontrada();
        }
    }
    
    interceptarLinks() {
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            
            if (link && this.isLinkInterno(link)) {
                event.preventDefault();
                this.navegarPara(link.pathname, { origem: 'link' });
            }
        });
    }
    
    isLinkInterno(link) {
        return link.hostname === window.location.hostname &&
               !link.hasAttribute('download') &&
               !link.hasAttribute('target');
    }
    
    carregarRotaInicial() {
        const estadoInicial = {
            caminho: window.location.pathname,
            dados: this.parseQueryString(),
            inicial: true
        };
        
        // Salvar estado inicial
        history.replaceState(estadoInicial, document.title, window.location.href);
        
        // Carregar rota
        this.gerenciarRota(estadoInicial);
    }
    
    parseQueryString() {
        const params = new URLSearchParams(window.location.search);
        const dados = {};
        for (const [key, value] of params) {
            dados[key] = value;
        }
        return dados;
    }
    
    paginaNaoEncontrada() {
        document.getElementById('conteudo').innerHTML = '<h1>Página não encontrada</h1>';
    }
}

// Exemplo de uso
const app = new SPA();

// Definir rotas
app.definirRota('/', () => {
    document.getElementById('conteudo').innerHTML = '<h1>Página Inicial</h1>';
});

app.definirRota('/sobre', (dados) => {
    document.getElementById('conteudo').innerHTML = `
        <h1>Sobre Nós</h1>
        <p>Dados: ${JSON.stringify(dados)}</p>
    `;
});

app.definirRota('/contato', () => {
    document.getElementById('conteudo').innerHTML = '<h1>Contato</h1>';
});
```

---

## 📊 5. Gerenciamento de Estado Avançado

### Sistema de Estado Complexo

```javascript
class GerenciadorEstado {
    constructor() {
        this.estado = {};
        this.historico = [];
        this.indiceAtual = -1;
    }
    
    salvarEstado(chave, valor, criarEntradaHistorico = true) {
        // Atualizar estado atual
        this.estado[chave] = valor;
        
        if (criarEntradaHistorico) {
            // Criar nova entrada no histórico
            const estadoCompleto = { ...this.estado };
            
            history.pushState(
                estadoCompleto,
                document.title,
                this.construirURL(estadoCompleto)
            );
            
            // Adicionar ao histórico interno
            this.historico.push(estadoCompleto);
            this.indiceAtual = this.historico.length - 1;
        } else {
            // Apenas substituir estado atual
            history.replaceState(
                this.estado,
                document.title,
                this.construirURL(this.estado)
            );
        }
    }
    
    obterEstado(chave) {
        return this.estado[chave];
    }
    
    construirURL(estado) {
        const params = new URLSearchParams();
        
        Object.entries(estado).forEach(([chave, valor]) => {
            if (valor !== null && valor !== undefined) {
                params.set(chave, JSON.stringify(valor));
            }
        });
        
        return `${window.location.pathname}?${params.toString()}`;
    }
    
    restaurarEstado(estadoSalvo) {
        this.estado = { ...estadoSalvo };
        this.notificarMudanca();
    }
    
    notificarMudanca() {
        // Disparar evento customizado
        window.dispatchEvent(new CustomEvent('estadoMudou', {
            detail: this.estado
        }));
    }
}
```

### Exemplo: Aplicação de Filtros

```javascript
class AppFiltros {
    constructor() {
        this.gerenciador = new GerenciadorEstado();
        this.inicializar();
    }
    
    inicializar() {
        // Listener para mudanças de estado
        window.addEventListener('estadoMudou', (event) => {
            this.aplicarFiltros(event.detail);
        });
        
        // Listener para popstate
        window.addEventListener('popstate', (event) => {
            if (event.state) {
                this.gerenciador.restaurarEstado(event.state);
            }
        });
        
        // Carregar estado inicial da URL
        this.carregarEstadoURL();
    }
    
    definirFiltro(tipo, valor) {
        this.gerenciador.salvarEstado(`filtro_${tipo}`, valor);
    }
    
    definirOrdenacao(campo, direcao) {
        this.gerenciador.salvarEstado('ordenacao', {
            campo: campo,
            direcao: direcao
        });
    }
    
    aplicarFiltros(estado) {
        console.log('Aplicando filtros:', estado);
        
        // Implementar lógica de filtros
        const dados = this.obterDados();
        const dadosFiltrados = this.filtrarDados(dados, estado);
        const dadosOrdenados = this.ordenarDados(dadosFiltrados, estado.ordenacao);
        
        this.exibirDados(dadosOrdenados);
    }
    
    carregarEstadoURL() {
        const params = new URLSearchParams(window.location.search);
        const estado = {};
        
        for (const [chave, valor] of params) {
            try {
                estado[chave] = JSON.parse(valor);
            } catch {
                estado[chave] = valor;
            }
        }
        
        if (Object.keys(estado).length > 0) {
            this.gerenciador.restaurarEstado(estado);
        }
    }
    
    // Métodos auxiliares
    obterDados() {
        // Simular dados
        return [
            { id: 1, nome: 'Item 1', categoria: 'A', data: '2024-01-01' },
            { id: 2, nome: 'Item 2', categoria: 'B', data: '2024-01-02' },
            // ... mais dados
        ];
    }
    
    filtrarDados(dados, estado) {
        return dados.filter(item => {
            // Aplicar filtros baseados no estado
            if (estado.filtro_categoria && item.categoria !== estado.filtro_categoria) {
                return false;
            }
            return true;
        });
    }
    
    ordenarDados(dados, ordenacao) {
        if (!ordenacao) return dados;
        
        return dados.sort((a, b) => {
            const valorA = a[ordenacao.campo];
            const valorB = b[ordenacao.campo];
            
            if (ordenacao.direcao === 'desc') {
                return valorB.localeCompare(valorA);
            }
            return valorA.localeCompare(valorB);
        });
    }
    
    exibirDados(dados) {
        const container = document.getElementById('resultados');
        container.innerHTML = dados.map(item => 
            `<div class="item">${item.nome} - ${item.categoria}</div>`
        ).join('');
    }
}
```

---

## 🛡️ 6. Tratamento de Erros e Edge Cases

### Validação de Estados

```javascript
function validarEstado(estado) {
    // Verificar se o estado é válido
    if (!estado || typeof estado !== 'object') {
        return false;
    }
    
    // Verificar propriedades obrigatórias
    const propriedadesObrigatorias = ['pagina', 'timestamp'];
    
    return propriedadesObrigatorias.every(prop => 
        estado.hasOwnProperty(prop)
    );
}

function estadoSeguro(estado) {
    if (validarEstado(estado)) {
        return estado;
    }
    
    // Retornar estado padrão
    return {
        pagina: 'inicio',
        timestamp: Date.now(),
        dados: {}
    };
}
```

### Limitações do Histórico

```javascript
class LimitadorHistorico {
    constructor(limite = 50) {
        this.limite = limite;
        this.contador = 0;
    }
    
    adicionarEstado(estado, titulo, url) {
        this.contador++;
        
        if (this.contador > this.limite) {
            // Limpar histórico antigo (simulado)
            console.warn('Limite de histórico atingido');
            this.contador = 1;
        }
        
        history.pushState(estado, titulo, url);
    }
}
```

---

## 🧪 7. Testes e Debug

### Debug do Histórico

```javascript
class DebugHistorico {
    constructor() {
        this.logs = [];
        this.monitorar();
    }
    
    monitorar() {
        // Override dos métodos do history
        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;
        
        history.pushState = (...args) => {
            this.log('pushState', args);
            return originalPushState.apply(history, args);
        };
        
        history.replaceState = (...args) => {
            this.log('replaceState', args);
            return originalReplaceState.apply(history, args);
        };
        
        // Monitorar popstate
        window.addEventListener('popstate', (event) => {
            this.log('popstate', event.state);
        });
    }
    
    log(acao, dados) {
        const entrada = {
            timestamp: new Date().toISOString(),
            acao: acao,
            dados: dados,
            url: window.location.href,
            length: history.length
        };
        
        this.logs.push(entrada);
        console.log('History Debug:', entrada);
    }
    
    obterLogs() {
        return this.logs;
    }
    
    limparLogs() {
        this.logs = [];
    }
}

// Ativar debug
const debugHistory = new DebugHistorico();
```

---

## 📱 8. Responsividade e Acessibilidade

### Navegação Acessível

```javascript
class NavegacaoAcessivel {
    constructor() {
        this.anunciarMudancas = true;
        this.configurarAcessibilidade();
    }
    
    navegarPara(url, titulo) {
        history.pushState({}, titulo, url);
        
        // Atualizar título da página
        document.title = titulo;
        
        // Anunciar mudança para leitores de tela
        if (this.anunciarMudancas) {
            this.anunciarMudancaPagina(titulo);
        }
        
        // Focar no conteúdo principal
        this.focarConteudoPrincipal();
    }
    
    anunciarMudancaPagina(titulo) {
        const anunciador = document.getElementById('sr-announcer') || 
                          this.criarAnunciador();
        
        anunciador.textContent = `Navegou para: ${titulo}`;
    }
    
    criarAnunciador() {
        const div = document.createElement('div');
        div.id = 'sr-announcer';
        div.setAttribute('aria-live', 'polite');
        div.style.position = 'absolute';
        div.style.left = '-10000px';
        div.style.width = '1px';
        div.style.height = '1px';
        div.style.overflow = 'hidden';
        
        document.body.appendChild(div);
        return div;
    }
    
    focarConteudoPrincipal() {
        const main = document.querySelector('main, #main, .main');
        if (main && main.tabIndex < 0) {
            main.tabIndex = -1;
        }
        if (main) {
            main.focus();
        }
    }
    
    configurarAcessibilidade() {
        // Configurar skip links para navegação por teclado
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                // ESC para voltar
                if (history.length > 1) {
                    history.back();
                }
            }
        });
    }
}
```

---

## 🎯 9. Exercícios Práticos

### Exercício 1: Sistema de Abas
Crie um sistema de abas que mantém o estado no histórico do navegador.

```javascript
// Dica: Use pushState para cada aba
function criarSistemaAbas() {
    // Implementar aqui
}
```

### Exercício 2: Wizard com Navegação
Implemente um wizard (assistente) de múltiplas etapas com navegação pelo histórico.

### Exercício 3: Filtros Persistentes
Crie um sistema de filtros que persiste no histórico e pode ser compartilhado via URL.

---

## 📚 10. Recursos Adicionais

### Documentação Oficial
- [History API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [Working with the History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API)

### Bibliotecas Populares
- **React Router**: Roteamento para React
- **Vue Router**: Roteamento para Vue.js
- **Angular Router**: Sistema de roteamento do Angular

### Polyfills
Para navegadores antigos que não suportam History API:
- history.js
- HTML5-History-API

---

## ⚠️ 11. Limitações e Considerações

### Limitações da History API

1. **Mesmo origem**: Só funciona na mesma origem
2. **Limite de entradas**: Navegadores limitam o número de entradas
3. **Serialização**: Estados devem ser serializáveis
4. **Compatibilidade**: IE9+ suporta parcialmente

### Boas Práticas

```javascript
// ✅ Fazer
const estado = {
    dados: { simples: true },
    timestamp: Date.now()
};

// ❌ Evitar
const estado = {
    funcao: () => {},           // Não serializável
    elemento: document.body,    // Não serializável
    dadosGigantes: '...'.repeat(1000000) // Muito grande
};
```

---

## 🎯 Resumo da Aula

- **window.history** controla a navegação do navegador
- **HTML5 History API** permite SPAs modernas
- **pushState/replaceState** manipulam o histórico sem recarregar
- **popstate event** detecta mudanças de navegação
- **Estados** devem ser serializáveis e válidos
- **Acessibilidade** requer atenção especial em SPAs

**Próxima aula**: window.location - Manipulação de URLs e Redirecionamento