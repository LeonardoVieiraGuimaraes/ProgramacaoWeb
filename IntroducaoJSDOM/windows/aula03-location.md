# 🌐 Aula 3: window.location - Manipulação de URLs e Redirecionamento

## 📚 Objetivos da Aula

Ao final desta aula, você será capaz de:
- Compreender todos os componentes de uma URL
- Manipular e analisar URLs com JavaScript
- Implementar diferentes tipos de redirecionamento
- Trabalhar com query strings e parâmetros de URL

---

## 📝 1. Conceitos Fundamentais

### O que é window.location?

O objeto `window.location` representa a URL atual da página e fornece métodos para navegar para outras URLs. É uma interface para ler e modificar a localização (URL) do documento.

### Anatomia de uma URL

```
https://www.exemplo.com:8080/caminho/pagina.html?param=valor&id=123#secao

├── protocol: "https:"
├── hostname: "www.exemplo.com"
├── port: "8080"
├── pathname: "/caminho/pagina.html"
├── search: "?param=valor&id=123"
├── hash: "#secao"
└── href: URL completa
```

### Propriedades do window.location

```javascript
// Propriedades de leitura e escrita
location.href       // URL completa
location.protocol   // Protocolo (http:, https:)
location.hostname   // Nome do host
location.port       // Porta
location.pathname   // Caminho
location.search     // Query string
location.hash       // Hash/fragmento

// Propriedades somente leitura
location.origin     // Protocolo + hostname + porta
location.host       // Hostname + porta (se não padrão)
```

---

## 🎯 2. Lendo Informações da URL

### Acessando Componentes da URL

```javascript
function analisarURL() {
    console.log('=== Análise da URL Atual ===');
    console.log('URL completa:', location.href);
    console.log('Protocolo:', location.protocol);
    console.log('Hostname:', location.hostname);
    console.log('Porta:', location.port || 'padrão');
    console.log('Caminho:', location.pathname);
    console.log('Query string:', location.search);
    console.log('Hash:', location.hash);
    console.log('Origem:', location.origin);
    console.log('Host:', location.host);
}

// Exemplo de uso
analisarURL();
```

### Classe para Análise de URL

```javascript
class AnalisadorURL {
    constructor(url = window.location.href) {
        this.url = new URL(url);
    }
    
    // Obter todos os componentes
    obterComponentes() {
        return {
            href: this.url.href,
            protocol: this.url.protocol,
            hostname: this.url.hostname,
            port: this.url.port,
            pathname: this.url.pathname,
            search: this.url.search,
            hash: this.url.hash,
            origin: this.url.origin,
            host: this.url.host
        };
    }
    
    // Obter parâmetros de query
    obterParametros() {
        const params = {};
        this.url.searchParams.forEach((valor, chave) => {
            // Suporte a múltiplos valores para a mesma chave
            if (params[chave]) {
                if (Array.isArray(params[chave])) {
                    params[chave].push(valor);
                } else {
                    params[chave] = [params[chave], valor];
                }
            } else {
                params[chave] = valor;
            }
        });
        return params;
    }
    
    // Verificar se é HTTPS
    isHTTPS() {
        return this.url.protocol === 'https:';
    }
    
    // Verificar se é localhost
    isLocalhost() {
        return ['localhost', '127.0.0.1', '::1'].includes(this.url.hostname);
    }
    
    // Obter domínio principal
    obterDominioPrincipal() {
        const partes = this.url.hostname.split('.');
        if (partes.length >= 2) {
            return partes.slice(-2).join('.');
        }
        return this.url.hostname;
    }
    
    // Verificar se é subdomínio
    isSubdominio() {
        const partes = this.url.hostname.split('.');
        return partes.length > 2;
    }
}

// Exemplo de uso
const analisador = new AnalisadorURL();
console.log('Componentes:', analisador.obterComponentes());
console.log('Parâmetros:', analisador.obterParametros());
console.log('É HTTPS:', analisador.isHTTPS());
console.log('É localhost:', analisador.isLocalhost());
```

---

## 🔄 3. Manipulando a URL

### Modificando Componentes

```javascript
// Modificar diferentes partes da URL
function modificarURL() {
    // ⚠️ Todas essas operações recarregam a página
    
    // Mudar protocolo
    location.protocol = 'https:';
    
    // Mudar hostname
    location.hostname = 'novo-site.com';
    
    // Mudar porta
    location.port = '8080';
    
    // Mudar caminho
    location.pathname = '/nova-pagina';
    
    // Mudar query string
    location.search = '?novo=parametro';
    
    // Mudar hash (NÃO recarrega a página)
    location.hash = '#nova-secao';
    
    // Mudar URL completa
    location.href = 'https://exemplo.com/pagina';
}
```

### Modificação Sem Recarregar

```javascript
// Para modificar a URL sem recarregar, use History API
function modificarURLSemRecarregar(novaURL) {
    // Usar pushState para manter histórico
    history.pushState({}, document.title, novaURL);
    
    // Ou replaceState para substituir entrada atual
    // history.replaceState({}, document.title, novaURL);
}

// Exemplo: Adicionar parâmetro sem recarregar
function adicionarParametro(chave, valor) {
    const url = new URL(window.location);
    url.searchParams.set(chave, valor);
    history.pushState({}, '', url.toString());
}

// Exemplo: Remover parâmetro sem recarregar
function removerParametro(chave) {
    const url = new URL(window.location);
    url.searchParams.delete(chave);
    history.pushState({}, '', url.toString());
}
```

---

## 🚀 4. Métodos de Navegação

### Tipos de Redirecionamento

```javascript
// 1. assign() - Navega para nova URL (adiciona ao histórico)
function redirecionarComHistorico(url) {
    location.assign(url);
    // Equivale a: location.href = url;
}

// 2. replace() - Substitui URL atual (não adiciona ao histórico)
function redirecionarSemHistorico(url) {
    location.replace(url);
    // Usuário não consegue voltar com botão "Voltar"
}

// 3. reload() - Recarrega a página atual
function recarregar(forcar = false) {
    location.reload(forcar);
    // forcar = true: ignora cache
    // forcar = false: usa cache se disponível
}
```

### Sistema de Redirecionamento Inteligente

```javascript
class Redirecionador {
    constructor() {
        this.tentativas = 0;
        this.maxTentativas = 3;
    }
    
    // Redirecionamento com fallback
    async redirecionarComFallback(urls) {
        for (const url of urls) {
            try {
                await this.testarURL(url);
                this.redirecionar(url);
                return true;
            } catch (error) {
                console.warn(`URL inacessível: ${url}`);
                continue;
            }
        }
        
        console.error('Nenhuma URL de redirecionamento funcionou');
        return false;
    }
    
    // Testar se URL está acessível
    async testarURL(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => reject(false);
            img.src = url + '/favicon.ico?' + Date.now();
        });
    }
    
    // Redirecionamento com delay
    redirecionarComDelay(url, delay = 3000) {
        console.log(`Redirecionando em ${delay/1000} segundos...`);
        
        let countdown = delay / 1000;
        const interval = setInterval(() => {
            countdown--;
            console.log(`Redirecionando em ${countdown} segundos...`);
            
            if (countdown <= 0) {
                clearInterval(interval);
                this.redirecionar(url);
            }
        }, 1000);
        
        return interval; // Para poder cancelar se necessário
    }
    
    // Redirecionamento condicional
    redirecionarSeCondicao(condicao, url, urlAlternativa) {
        if (typeof condicao === 'function') {
            condicao = condicao();
        }
        
        if (condicao) {
            this.redirecionar(url);
        } else if (urlAlternativa) {
            this.redirecionar(urlAlternativa);
        }
    }
    
    // Método principal de redirecionamento
    redirecionar(url, manterHistorico = true) {
        this.tentativas++;
        
        if (this.tentativas > this.maxTentativas) {
            console.error('Muitas tentativas de redirecionamento');
            return;
        }
        
        try {
            if (manterHistorico) {
                location.assign(url);
            } else {
                location.replace(url);
            }
        } catch (error) {
            console.error('Erro no redirecionamento:', error);
        }
    }
    
    // Cancelar redirecionamento com delay
    cancelarRedirecionamento(intervalId) {
        clearInterval(intervalId);
        console.log('Redirecionamento cancelado');
    }
}

// Exemplo de uso
const redirector = new Redirecionador();

// Redirecionamento com fallback
redirector.redirecionarComFallback([
    'https://site-principal.com',
    'https://site-backup.com',
    'https://site-emergencia.com'
]);

// Redirecionamento com delay
const redirectId = redirector.redirecionarComDelay('https://exemplo.com', 5000);

// Cancelar se necessário
// redirector.cancelarRedirecionamento(redirectId);
```

---

## 🔍 5. Trabalhando com Query Strings

### Classe para Manipular Parâmetros

```javascript
class GerenciadorParametros {
    constructor() {
        this.params = new URLSearchParams(window.location.search);
    }
    
    // Obter valor de parâmetro
    obter(chave) {
        return this.params.get(chave);
    }
    
    // Obter todos os valores de uma chave (array)
    obterTodos(chave) {
        return this.params.getAll(chave);
    }
    
    // Definir parâmetro
    definir(chave, valor) {
        this.params.set(chave, valor);
        this.atualizarURL();
    }
    
    // Adicionar parâmetro (permite múltiplos valores)
    adicionar(chave, valor) {
        this.params.append(chave, valor);
        this.atualizarURL();
    }
    
    // Remover parâmetro
    remover(chave) {
        this.params.delete(chave);
        this.atualizarURL();
    }
    
    // Verificar se parâmetro existe
    existe(chave) {
        return this.params.has(chave);
    }
    
    // Obter todos os parâmetros como objeto
    obterTodos() {
        const obj = {};
        for (const [chave, valor] of this.params) {
            if (obj[chave]) {
                if (Array.isArray(obj[chave])) {
                    obj[chave].push(valor);
                } else {
                    obj[chave] = [obj[chave], valor];
                }
            } else {
                obj[chave] = valor;
            }
        }
        return obj;
    }
    
    // Limpar todos os parâmetros
    limpar() {
        this.params = new URLSearchParams();
        this.atualizarURL();
    }
    
    // Atualizar URL na barra de endereços
    atualizarURL() {
        const novaURL = `${window.location.pathname}?${this.params.toString()}${window.location.hash}`;
        history.replaceState({}, '', novaURL);
    }
    
    // Construir URL com parâmetros
    construirURL(baseURL = window.location.pathname) {
        return `${baseURL}?${this.params.toString()}`;
    }
    
    // Serializar para string
    toString() {
        return this.params.toString();
    }
    
    // Clonar gerenciador
    clonar() {
        const clone = new GerenciadorParametros();
        clone.params = new URLSearchParams(this.params);
        return clone;
    }
}

// Exemplo de uso
const params = new GerenciadorParametros();

// Adicionar parâmetros
params.definir('categoria', 'tecnologia');
params.definir('ordenacao', 'data');
params.adicionar('tags', 'javascript');
params.adicionar('tags', 'frontend');

// Ler parâmetros
console.log('Categoria:', params.obter('categoria'));
console.log('Tags:', params.obterTodos('tags'));
console.log('Todos os parâmetros:', params.obterTodos());

// Construir URL
console.log('URL com parâmetros:', params.construirURL('/produtos'));
```

### Sistema de Filtros com URL

```javascript
class SistemaFiltros {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.params = new GerenciadorParametros();
        this.filtros = new Map();
        this.inicializar();
    }
    
    inicializar() {
        this.carregarFiltrosURL();
        this.renderizarFiltros();
        this.aplicarFiltros();
    }
    
    definirFiltro(nome, tipo, opcoes) {
        this.filtros.set(nome, { tipo, opcoes });
    }
    
    carregarFiltrosURL() {
        // Carregar filtros salvos na URL
        const parametros = this.params.obterTodos();
        
        for (const [chave, valor] of Object.entries(parametros)) {
            if (this.filtros.has(chave)) {
                this.aplicarFiltroURL(chave, valor);
            }
        }
    }
    
    aplicarFiltroURL(nome, valor) {
        const filtro = this.filtros.get(nome);
        
        switch (filtro.tipo) {
            case 'select':
                const select = document.getElementById(`filtro-${nome}`);
                if (select) select.value = valor;
                break;
                
            case 'checkbox':
                const valores = Array.isArray(valor) ? valor : [valor];
                valores.forEach(v => {
                    const checkbox = document.getElementById(`filtro-${nome}-${v}`);
                    if (checkbox) checkbox.checked = true;
                });
                break;
                
            case 'range':
                const range = document.getElementById(`filtro-${nome}`);
                if (range) range.value = valor;
                break;
        }
    }
    
    renderizarFiltros() {
        this.container.innerHTML = '';
        
        for (const [nome, config] of this.filtros) {
            const div = document.createElement('div');
            div.className = 'filtro-grupo';
            
            switch (config.tipo) {
                case 'select':
                    div.innerHTML = this.criarSelect(nome, config.opcoes);
                    break;
                case 'checkbox':
                    div.innerHTML = this.criarCheckboxes(nome, config.opcoes);
                    break;
                case 'range':
                    div.innerHTML = this.criarRange(nome, config.opcoes);
                    break;
            }
            
            this.container.appendChild(div);
        }
        
        // Adicionar listeners
        this.container.addEventListener('change', (event) => {
            this.aoMudarFiltro(event);
        });
    }
    
    criarSelect(nome, opcoes) {
        return `
            <label for="filtro-${nome}">${opcoes.label}:</label>
            <select id="filtro-${nome}" name="${nome}">
                <option value="">Todos</option>
                ${opcoes.valores.map(v => 
                    `<option value="${v.valor}">${v.texto}</option>`
                ).join('')}
            </select>
        `;
    }
    
    criarCheckboxes(nome, opcoes) {
        return `
            <fieldset>
                <legend>${opcoes.label}</legend>
                ${opcoes.valores.map(v => `
                    <label>
                        <input type="checkbox" id="filtro-${nome}-${v.valor}" 
                               name="${nome}" value="${v.valor}">
                        ${v.texto}
                    </label>
                `).join('')}
            </fieldset>
        `;
    }
    
    criarRange(nome, opcoes) {
        return `
            <label for="filtro-${nome}">${opcoes.label}:</label>
            <input type="range" id="filtro-${nome}" name="${nome}"
                   min="${opcoes.min}" max="${opcoes.max}" 
                   step="${opcoes.step || 1}">
            <span id="valor-${nome}"></span>
        `;
    }
    
    aoMudarFiltro(event) {
        const elemento = event.target;
        const nome = elemento.name;
        
        if (elemento.type === 'checkbox') {
            this.atualizarCheckboxes(nome);
        } else {
            this.atualizarFiltroSimples(nome, elemento.value);
        }
        
        this.aplicarFiltros();
    }
    
    atualizarCheckboxes(nome) {
        const checkboxes = document.querySelectorAll(`input[name="${nome}"]:checked`);
        const valores = Array.from(checkboxes).map(cb => cb.value);
        
        if (valores.length > 0) {
            // Remover valores antigos e adicionar novos
            this.params.remover(nome);
            valores.forEach(valor => this.params.adicionar(nome, valor));
        } else {
            this.params.remover(nome);
        }
    }
    
    atualizarFiltroSimples(nome, valor) {
        if (valor) {
            this.params.definir(nome, valor);
        } else {
            this.params.remover(nome);
        }
    }
    
    aplicarFiltros() {
        const filtrosAtivos = this.params.obterTodos();
        
        // Disparar evento customizado com os filtros
        const evento = new CustomEvent('filtrosAplicados', {
            detail: filtrosAtivos
        });
        
        window.dispatchEvent(evento);
    }
    
    limparFiltros() {
        this.params.limpar();
        this.renderizarFiltros();
        this.aplicarFiltros();
    }
}

// Exemplo de uso
const filtros = new SistemaFiltros('container-filtros');

filtros.definirFiltro('categoria', 'select', {
    label: 'Categoria',
    valores: [
        { valor: 'tecnologia', texto: 'Tecnologia' },
        { valor: 'esportes', texto: 'Esportes' },
        { valor: 'cultura', texto: 'Cultura' }
    ]
});

filtros.definirFiltro('tags', 'checkbox', {
    label: 'Tags',
    valores: [
        { valor: 'frontend', texto: 'Frontend' },
        { valor: 'backend', texto: 'Backend' },
        { valor: 'mobile', texto: 'Mobile' }
    ]
});

filtros.definirFiltro('preco', 'range', {
    label: 'Preço',
    min: 0,
    max: 1000,
    step: 10
});
```

---

## 🔗 6. Construção Dinâmica de URLs

### Construtor de URLs

```javascript
class ConstrutorURL {
    constructor(base = window.location.origin) {
        this.base = base;
        this.segmentos = [];
        this.parametros = new URLSearchParams();
        this.fragmento = '';
    }
    
    // Adicionar segmento ao caminho
    caminho(...segmentos) {
        this.segmentos.push(...segmentos.map(s => encodeURIComponent(s)));
        return this;
    }
    
    // Definir parâmetro
    parametro(chave, valor) {
        this.parametros.set(chave, valor);
        return this;
    }
    
    // Adicionar múltiplos parâmetros
    parametros(obj) {
        Object.entries(obj).forEach(([chave, valor]) => {
            if (Array.isArray(valor)) {
                valor.forEach(v => this.parametros.append(chave, v));
            } else {
                this.parametros.set(chave, valor);
            }
        });
        return this;
    }
    
    // Definir fragmento (hash)
    hash(fragmento) {
        this.fragmento = fragmento;
        return this;
    }
    
    // Construir URL final
    construir() {
        let url = this.base;
        
        if (this.segmentos.length > 0) {
            url += '/' + this.segmentos.join('/');
        }
        
        if (this.parametros.toString()) {
            url += '?' + this.parametros.toString();
        }
        
        if (this.fragmento) {
            url += '#' + this.fragmento;
        }
        
        return url;
    }
    
    // Navegar para a URL construída
    navegar(manterHistorico = true) {
        const url = this.construir();
        
        if (manterHistorico) {
            location.assign(url);
        } else {
            location.replace(url);
        }
    }
    
    // Abrir em nova janela
    abrirNovaJanela(opcoes = 'width=800,height=600') {
        const url = this.construir();
        return window.open(url, '_blank', opcoes);
    }
    
    // Clonar construtor
    clonar() {
        const clone = new ConstrutorURL(this.base);
        clone.segmentos = [...this.segmentos];
        clone.parametros = new URLSearchParams(this.parametros);
        clone.fragmento = this.fragmento;
        return clone;
    }
}

// Exemplo de uso
const url = new ConstrutorURL('https://api.exemplo.com')
    .caminho('v1', 'produtos', 'categoria')
    .parametros({
        ordenacao: 'preco',
        limite: 20,
        tags: ['novo', 'promocao']
    })
    .hash('resultados')
    .construir();

console.log('URL construída:', url);
// https://api.exemplo.com/v1/produtos/categoria?ordenacao=preco&limite=20&tags=novo&tags=promocao#resultados
```

---

## 🛡️ 7. Segurança e Validação

### Validação de URLs

```javascript
class ValidadorURL {
    constructor() {
        this.protocolosPermitidos = ['http:', 'https:'];
        this.dominiosProibidos = ['malware.com', 'spam.net'];
    }
    
    // Validar URL básica
    isValida(url) {
        try {
            const urlObj = new URL(url);
            return this.validarProtocolo(urlObj) && 
                   this.validarDominio(urlObj) &&
                   this.validarCaracteres(url);
        } catch {
            return false;
        }
    }
    
    validarProtocolo(urlObj) {
        return this.protocolosPermitidos.includes(urlObj.protocol);
    }
    
    validarDominio(urlObj) {
        return !this.dominiosProibidos.includes(urlObj.hostname);
    }
    
    validarCaracteres(url) {
        // Verificar caracteres suspeitos
        const caracteresProibidos = ['<', '>', '"', '\''];
        return !caracteresProibidos.some(char => url.includes(char));
    }
    
    // Sanitizar URL
    sanitizar(url) {
        if (!this.isValida(url)) {
            throw new Error('URL inválida');
        }
        
        const urlObj = new URL(url);
        
        // Remover fragmentos potencialmente perigosos
        if (urlObj.hash.includes('<script')) {
            urlObj.hash = '';
        }
        
        return urlObj.toString();
    }
    
    // Verificar se é redirecionamento aberto
    isRedirecionamentoSeguro(url, dominiosPermitidos) {
        try {
            const urlObj = new URL(url);
            return dominiosPermitidos.includes(urlObj.hostname);
        } catch {
            return false;
        }
    }
}

// Sistema de redirecionamento seguro
class RedirecionadorSeguro {
    constructor() {
        this.validador = new ValidadorURL();
        this.dominiosPermitidos = [
            window.location.hostname,
            'confiavel.com',
            'parceiro.net'
        ];
    }
    
    redirecionarSeguro(url) {
        // Validar URL
        if (!this.validador.isValida(url)) {
            console.error('URL inválida:', url);
            return false;
        }
        
        // Verificar se é redirecionamento seguro
        if (!this.validador.isRedirecionamentoSeguro(url, this.dominiosPermitidos)) {
            // Mostrar confirmação para domínios externos
            if (!this.confirmarRedirecionamentoExterno(url)) {
                return false;
            }
        }
        
        try {
            const urlSanitizada = this.validador.sanitizar(url);
            location.assign(urlSanitizada);
            return true;
        } catch (error) {
            console.error('Erro no redirecionamento:', error);
            return false;
        }
    }
    
    confirmarRedirecionamentoExterno(url) {
        return confirm(
            `Você está sendo redirecionado para um site externo:\n${url}\n\nDeseja continuar?`
        );
    }
}
```

---

## 📱 8. Detecção de Ambiente

### Classe para Detectar Ambiente

```javascript
class DetectorAmbiente {
    constructor() {
        this.analisar();
    }
    
    analisar() {
        this.isHTTPS = location.protocol === 'https:';
        this.isLocalhost = this.detectarLocalhost();
        this.isProducao = this.detectarProducao();
        this.isDesenvolvimento = this.detectarDesenvolvimento();
        this.isMobile = this.detectarMobile();
    }
    
    detectarLocalhost() {
        const hosts = ['localhost', '127.0.0.1', '::1'];
        return hosts.includes(location.hostname);
    }
    
    detectarProducao() {
        const dominiosProducao = ['app.com', 'minhaapp.com.br'];
        return dominiosProducao.includes(location.hostname);
    }
    
    detectarDesenvolvimento() {
        return this.isLocalhost || 
               location.hostname.includes('dev') ||
               location.hostname.includes('staging');
    }
    
    detectarMobile() {
        return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
               .test(navigator.userAgent);
    }
    
    // Obter configuração baseada no ambiente
    obterConfig() {
        if (this.isProducao) {
            return {
                apiURL: 'https://api.app.com',
                debug: false,
                analytics: true
            };
        } else if (this.isDesenvolvimento) {
            return {
                apiURL: 'http://localhost:3001',
                debug: true,
                analytics: false
            };
        } else {
            return {
                apiURL: 'https://staging-api.app.com',
                debug: true,
                analytics: false
            };
        }
    }
    
    // Carregar scripts baseado no ambiente
    carregarScripts() {
        const config = this.obterConfig();
        
        if (config.analytics && this.isProducao) {
            this.carregarAnalytics();
        }
        
        if (config.debug) {
            this.carregarFerramentasDebug();
        }
    }
    
    carregarAnalytics() {
        // Carregar Google Analytics, etc.
        console.log('Carregando analytics...');
    }
    
    carregarFerramentasDebug() {
        // Carregar ferramentas de debug
        console.log('Carregando ferramentas de debug...');
    }
}

// Uso automático
const ambiente = new DetectorAmbiente();
console.log('Ambiente detectado:', {
    HTTPS: ambiente.isHTTPS,
    localhost: ambiente.isLocalhost,
    produção: ambiente.isProducao,
    desenvolvimento: ambiente.isDesenvolvimento,
    mobile: ambiente.isMobile
});
```

---

## 🎯 9. Exercícios Práticos

### Exercício 1: Sistema de Busca com URL
Crie um sistema de busca que salva os termos e filtros na URL.

### Exercício 2: Construtor de Links Dinâmicos
Implemente um sistema que gera links dinâmicos baseado em templates.

### Exercício 3: Redirecionador Inteligente
Crie um sistema que redireciona usuários baseado em localização, idioma ou dispositivo.

---

## 📚 10. Recursos Adicionais

### Documentação
- [Location - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location)
- [URL API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [URLSearchParams - MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)

### Bibliotecas Úteis
- **qs**: Parse e stringify de query strings
- **url-parse**: Parser de URL robusto
- **history**: Gerenciamento de histórico para SPAs

---

## 🎯 Resumo da Aula

- **window.location** fornece acesso completo à URL atual
- **Componentes da URL** podem ser lidos e modificados individualmente
- **Métodos de navegação** oferecem diferentes comportamentos
- **Query strings** são essenciais para filtros e estados
- **Segurança** deve ser considerada em redirecionamentos
- **Ambiente** pode ser detectado através da URL

**Próxima aula**: window.navigator - Informações do Navegador e APIs