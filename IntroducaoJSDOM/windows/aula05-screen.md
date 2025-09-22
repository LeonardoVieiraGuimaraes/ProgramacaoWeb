# 🖥️ Aula 5: window.screen - Informações da Tela e Design Responsivo

## 📚 Objetivos da Aula

Ao final desta aula, você será capaz de:
- Obter informações detalhadas sobre a tela do usuário
- Implementar layouts responsivos baseados em características da tela
- Criar aplicações que se adaptam a diferentes dispositivos
- Utilizar APIs modernas de tela e orientação

---

## 📝 1. Conceitos Fundamentais

### O que é window.screen?

O objeto `window.screen` contém informações sobre a tela do usuário, incluindo dimensões, resolução, profundidade de cor e orientação. É fundamental para criar interfaces responsivas e experiências adaptadas ao dispositivo.

### Propriedades Principais

```javascript
// Dimensões da tela
screen.width          // Largura total da tela em pixels
screen.height         // Altura total da tela em pixels
screen.availWidth     // Largura disponível (excluindo barras do sistema)
screen.availHeight    // Altura disponível (excluindo barras do sistema)

// Informações de cor
screen.colorDepth     // Profundidade de cor em bits
screen.pixelDepth     // Profundidade de pixel em bits

// Orientação (em dispositivos que suportam)
screen.orientation    // Objeto com informações de orientação
```

---

## 📐 2. Análise Detalhada da Tela

### Sistema de Informações da Tela

```javascript
class AnalisadorTela {
    constructor() {
        this.informacoes = this.coletarInformacoes();
        this.mediaQueries = this.configurarMediaQueries();
        this.configurarListeners();
    }
    
    coletarInformacoes() {
        const info = {
            // Dimensões básicas
            larguraTotal: screen.width,
            alturaTotal: screen.height,
            larguraDisponivel: screen.availWidth,
            alturaDisponivel: screen.availHeight,
            
            // Viewport atual
            larguraViewport: window.innerWidth,
            alturaViewport: window.innerHeight,
            
            // Informações de cor
            profundidadeCor: screen.colorDepth,
            profundidadePixel: screen.pixelDepth,
            
            // Densidade de pixels
            devicePixelRatio: window.devicePixelRatio,
            
            // Orientação
            orientacao: this.obterOrientacao(),
            
            // Tipo de dispositivo estimado
            tipoDispositivo: this.detectarTipoDispositivo(),
            
            // Tamanho físico estimado
            tamanhoFisico: this.calcularTamanhoFisico()
        };
        
        return info;
    }
    
    obterOrientacao() {
        // Screen Orientation API
        if (screen.orientation) {
            return {
                angulo: screen.orientation.angle,
                tipo: screen.orientation.type,
                suportado: true
            };
        }
        
        // Fallback baseado em dimensões
        const isPortrait = window.innerHeight > window.innerWidth;
        return {
            angulo: isPortrait ? 0 : 90,
            tipo: isPortrait ? 'portrait-primary' : 'landscape-primary',
            suportado: false
        };
    }
    
    detectarTipoDispositivo() {
        const largura = window.innerWidth;
        const altura = window.innerHeight;
        const diagonal = Math.sqrt(largura * largura + altura * altura);
        const pixelRatio = window.devicePixelRatio;
        
        // Estimativas baseadas em tamanho e densidade
        if (largura <= 480) {
            return 'mobile';
        } else if (largura <= 768) {
            return 'tablet-small';
        } else if (largura <= 1024) {
            return diagonal > 1400 ? 'tablet-large' : 'laptop-small';
        } else if (largura <= 1440) {
            return 'laptop';
        } else if (largura <= 1920) {
            return 'desktop';
        } else {
            return 'large-display';
        }
    }
    
    calcularTamanhoFisico() {
        // Estimativa do tamanho físico da tela
        const larguraPixels = screen.width;
        const alturaPixels = screen.height;
        const pixelRatio = window.devicePixelRatio;
        
        // DPI estimado (pode não ser preciso)
        const dpiEstimado = 96 * pixelRatio;
        
        // Tamanho em polegadas
        const larguraPolegadas = larguraPixels / dpiEstimado;
        const alturaPolegadas = alturaPixels / dpiEstimado;
        const diagonalPolegadas = Math.sqrt(
            larguraPolegadas * larguraPolegadas + 
            alturaPolegadas * alturaPolegadas
        );
        
        return {
            larguraPolegadas: larguraPolegadas.toFixed(1),
            alturaPolegadas: alturaPolegadas.toFixed(1),
            diagonalPolegadas: diagonalPolegadas.toFixed(1),
            dpiEstimado: Math.round(dpiEstimado)
        };
    }
    
    configurarMediaQueries() {
        const queries = {
            mobile: window.matchMedia('(max-width: 767px)'),
            tablet: window.matchMedia('(min-width: 768px) and (max-width: 1023px)'),
            desktop: window.matchMedia('(min-width: 1024px)'),
            retina: window.matchMedia('(-webkit-min-device-pixel-ratio: 2)'),
            portrait: window.matchMedia('(orientation: portrait)'),
            landscape: window.matchMedia('(orientation: landscape)'),
            darkMode: window.matchMedia('(prefers-color-scheme: dark)'),
            reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)')
        };
        
        return queries;
    }
    
    configurarListeners() {
        // Listener para redimensionamento
        window.addEventListener('resize', () => {
            this.atualizarInformacoes();
        });
        
        // Listener para mudança de orientação
        if (screen.orientation) {
            screen.orientation.addEventListener('change', () => {
                this.onMudancaOrientacao();
            });
        } else {
            window.addEventListener('orientationchange', () => {
                setTimeout(() => this.onMudancaOrientacao(), 100);
            });
        }
        
        // Listeners para media queries
        Object.entries(this.mediaQueries).forEach(([nome, query]) => {
            query.addEventListener('change', (e) => {
                this.onMudancaMediaQuery(nome, e.matches);
            });
        });
    }
    
    atualizarInformacoes() {
        const novasInfo = this.coletarInformacoes();
        const mudancas = this.compararInformacoes(this.informacoes, novasInfo);
        
        this.informacoes = novasInfo;
        
        if (Object.keys(mudancas).length > 0) {
            this.onMudancaTela(mudancas);
        }
    }
    
    compararInformacoes(antigas, novas) {
        const mudancas = {};
        
        Object.keys(novas).forEach(chave => {
            if (JSON.stringify(antigas[chave]) !== JSON.stringify(novas[chave])) {
                mudancas[chave] = {
                    anterior: antigas[chave],
                    atual: novas[chave]
                };
            }
        });
        
        return mudancas;
    }
    
    onMudancaTela(mudancas) {
        console.log('Mudanças na tela detectadas:', mudancas);
        
        // Disparar evento customizado
        window.dispatchEvent(new CustomEvent('telaMudou', {
            detail: { mudancas, informacoes: this.informacoes }
        }));
    }
    
    onMudancaOrientacao() {
        const novaOrientacao = this.obterOrientacao();
        console.log('Orientação mudou:', novaOrientacao);
        
        window.dispatchEvent(new CustomEvent('orientacaoMudou', {
            detail: { orientacao: novaOrientacao }
        }));
    }
    
    onMudancaMediaQuery(nome, matches) {
        console.log(`Media query '${nome}' ${matches ? 'ativada' : 'desativada'}`);
        
        window.dispatchEvent(new CustomEvent('mediaQueryMudou', {
            detail: { nome, ativo: matches }
        }));
    }
    
    // Métodos de consulta
    isMobile() {
        return this.mediaQueries.mobile.matches;
    }
    
    isTablet() {
        return this.mediaQueries.tablet.matches;
    }
    
    isDesktop() {
        return this.mediaQueries.desktop.matches;
    }
    
    isRetina() {
        return this.mediaQueries.retina.matches;
    }
    
    isPortrait() {
        return this.mediaQueries.portrait.matches;
    }
    
    isLandscape() {
        return this.mediaQueries.landscape.matches;
    }
    
    prefereDarkMode() {
        return this.mediaQueries.darkMode.matches;
    }
    
    prefereMovimentoReduzido() {
        return this.mediaQueries.reducedMotion.matches;
    }
    
    // Relatório completo
    gerarRelatorio() {
        const relatorio = {
            timestamp: new Date().toISOString(),
            informacoesTela: this.informacoes,
            mediaQueries: {},
            capacidades: this.avaliarCapacidades()
        };
        
        // Estado atual das media queries
        Object.entries(this.mediaQueries).forEach(([nome, query]) => {
            relatorio.mediaQueries[nome] = query.matches;
        });
        
        return relatorio;
    }
    
    avaliarCapacidades() {
        return {
            suportaOrientacao: 'orientation' in screen,
            suportaFullscreen: 'requestFullscreen' in document.documentElement,
            suportaTouch: 'ontouchstart' in window,
            densidadeAlta: window.devicePixelRatio > 1,
            telaGrande: this.informacoes.larguraTotal >= 1920,
            coresRicas: this.informacoes.profundidadeCor >= 24
        };
    }
    
    exibirRelatorio() {
        const relatorio = this.gerarRelatorio();
        
        console.group('🖥️ Análise da Tela');
        
        console.group('📊 Informações Básicas');
        console.table(relatorio.informacoesTela);
        console.groupEnd();
        
        console.group('📱 Media Queries');
        console.table(relatorio.mediaQueries);
        console.groupEnd();
        
        console.group('⚡ Capacidades');
        console.table(relatorio.capacidades);
        console.groupEnd();
        
        console.groupEnd();
        
        return relatorio;
    }
}

// Exemplo de uso
const analisadorTela = new AnalisadorTela();
analisadorTela.exibirRelatorio();
```

---

## 📱 3. Sistema de Breakpoints Inteligente

### Gerenciador de Breakpoints Dinâmico

```javascript
class GerenciadorBreakpoints {
    constructor() {
        this.breakpoints = this.definirBreakpoints();
        this.breakpointAtual = null;
        this.configurarListeners();
        this.atualizarBreakpointAtual();
    }
    
    definirBreakpoints() {
        return {
            'xs': { min: 0, max: 575 },
            'sm': { min: 576, max: 767 },
            'md': { min: 768, max: 991 },
            'lg': { min: 992, max: 1199 },
            'xl': { min: 1200, max: 1399 },
            'xxl': { min: 1400, max: Infinity }
        };
    }
    
    obterBreakpointAtual() {
        const largura = window.innerWidth;
        
        for (const [nome, config] of Object.entries(this.breakpoints)) {
            if (largura >= config.min && largura <= config.max) {
                return nome;
            }
        }
        
        return 'unknown';
    }
    
    atualizarBreakpointAtual() {
        const novoBreakpoint = this.obterBreakpointAtual();
        
        if (novoBreakpoint !== this.breakpointAtual) {
            const anterior = this.breakpointAtual;
            this.breakpointAtual = novoBreakpoint;
            
            this.onMudancaBreakpoint(anterior, novoBreakpoint);
        }
    }
    
    configurarListeners() {
        window.addEventListener('resize', () => {
            this.atualizarBreakpointAtual();
        });
    }
    
    onMudancaBreakpoint(anterior, atual) {
        console.log(`Breakpoint mudou: ${anterior} → ${atual}`);
        
        // Atualizar classes CSS
        document.body.className = document.body.className
            .replace(/breakpoint-\w+/g, '')
            .trim();
        document.body.classList.add(`breakpoint-${atual}`);
        
        // Disparar evento
        window.dispatchEvent(new CustomEvent('breakpointMudou', {
            detail: { anterior, atual, largura: window.innerWidth }
        }));
    }
    
    // Métodos de consulta
    isBreakpoint(nome) {
        return this.breakpointAtual === nome;
    }
    
    isMobile() {
        return ['xs', 'sm'].includes(this.breakpointAtual);
    }
    
    isTablet() {
        return this.breakpointAtual === 'md';
    }
    
    isDesktop() {
        return ['lg', 'xl', 'xxl'].includes(this.breakpointAtual);
    }
    
    // Sistema de colunas responsivo
    calcularColunas(configuracao) {
        const config = configuracao[this.breakpointAtual] || 
                      configuracao.default || 
                      12;
        
        return config;
    }
    
    // Gerador de classes CSS responsivas
    gerarClassesResponsivas(base, valores) {
        const classes = [base];
        
        Object.entries(valores).forEach(([breakpoint, valor]) => {
            if (breakpoint === this.breakpointAtual) {
                classes.push(`${base}-${breakpoint}-${valor}`);
            }
        });
        
        return classes.join(' ');
    }
}

// Sistema de layout adaptativo
class LayoutAdaptativo {
    constructor() {
        this.breakpoints = new GerenciadorBreakpoints();
        this.configurarEventos();
    }
    
    configurarEventos() {
        window.addEventListener('breakpointMudou', (e) => {
            this.adaptarLayout(e.detail);
        });
        
        window.addEventListener('orientacaoMudou', (e) => {
            this.adaptarOrientacao(e.detail.orientacao);
        });
    }
    
    adaptarLayout(detalhes) {
        const { atual } = detalhes;
        
        // Adaptar grid system
        this.adaptarGrid(atual);
        
        // Adaptar navegação
        this.adaptarNavegacao(atual);
        
        // Adaptar conteúdo
        this.adaptarConteudo(atual);
        
        // Adaptar formulários
        this.adaptarFormularios(atual);
    }
    
    adaptarGrid(breakpoint) {
        const containers = document.querySelectorAll('.container-adaptativo');
        
        containers.forEach(container => {
            // Remover classes antigas
            container.className = container.className
                .replace(/cols-\w+-\d+/g, '')
                .trim();
            
            // Adicionar nova configuração
            const configuracao = {
                'xs': 1,
                'sm': 2,
                'md': 3,
                'lg': 4,
                'xl': 5,
                'xxl': 6
            };
            
            const colunas = configuracao[breakpoint] || 1;
            container.classList.add(`cols-${breakpoint}-${colunas}`);
            
            // Aplicar CSS Grid
            container.style.gridTemplateColumns = `repeat(${colunas}, 1fr)`;
        });
    }
    
    adaptarNavegacao(breakpoint) {
        const nav = document.querySelector('.navegacao-adaptativa');
        if (!nav) return;
        
        if (this.breakpoints.isMobile()) {
            // Navegação mobile (hambúrguer)
            nav.classList.add('nav-mobile');
            nav.classList.remove('nav-desktop');
            this.criarMenuHamburguer();
        } else {
            // Navegação desktop
            nav.classList.add('nav-desktop');
            nav.classList.remove('nav-mobile');
            this.removerMenuHamburguer();
        }
    }
    
    adaptarConteudo(breakpoint) {
        const imagens = document.querySelectorAll('img[data-responsive]');
        
        imagens.forEach(img => {
            const config = JSON.parse(img.dataset.responsive);
            const novoSrc = config[breakpoint] || config.default;
            
            if (novoSrc && img.src !== novoSrc) {
                img.src = novoSrc;
            }
        });
        
        // Adaptar tipografia
        this.adaptarTipografia(breakpoint);
    }
    
    adaptarTipografia(breakpoint) {
        const escalas = {
            'xs': 0.8,
            'sm': 0.9,
            'md': 1.0,
            'lg': 1.1,
            'xl': 1.2,
            'xxl': 1.3
        };
        
        const escala = escalas[breakpoint] || 1;
        document.documentElement.style.fontSize = `${16 * escala}px`;
    }
    
    adaptarFormularios(breakpoint) {
        const formularios = document.querySelectorAll('.formulario-adaptativo');
        
        formularios.forEach(form => {
            if (this.breakpoints.isMobile()) {
                // Layout vertical para mobile
                form.classList.add('layout-vertical');
                form.classList.remove('layout-horizontal');
            } else {
                // Layout horizontal para desktop
                form.classList.add('layout-horizontal');
                form.classList.remove('layout-vertical');
            }
        });
    }
    
    adaptarOrientacao(orientacao) {
        document.body.classList.remove('portrait', 'landscape');
        
        if (orientacao.tipo.includes('portrait')) {
            document.body.classList.add('portrait');
        } else {
            document.body.classList.add('landscape');
        }
        
        // Reajustar layout se necessário
        if (this.breakpoints.isMobile()) {
            this.otimizarParaOrientacao(orientacao);
        }
    }
    
    otimizarParaOrientacao(orientacao) {
        const isPortrait = orientacao.tipo.includes('portrait');
        
        // Ajustar altura de elementos
        const elementosAltura = document.querySelectorAll('.altura-orientacao');
        elementosAltura.forEach(el => {
            if (isPortrait) {
                el.style.height = '70vh';
            } else {
                el.style.height = '50vh';
            }
        });
    }
    
    criarMenuHamburguer() {
        if (document.querySelector('.menu-hamburguer')) return;
        
        const button = document.createElement('button');
        button.className = 'menu-hamburguer';
        button.innerHTML = '☰';
        
        button.addEventListener('click', this.toggleMenuMobile);
        
        const nav = document.querySelector('.navegacao-adaptativa');
        nav.insertBefore(button, nav.firstChild);
    }
    
    removerMenuHamburguer() {
        const button = document.querySelector('.menu-hamburguer');
        if (button) {
            button.remove();
        }
    }
    
    toggleMenuMobile() {
        const nav = document.querySelector('.navegacao-adaptativa');
        nav.classList.toggle('menu-aberto');
    }
}

// Inicializar sistema
const layoutAdaptativo = new LayoutAdaptativo();
```

---

## 🔄 4. Gerenciamento de Orientação

### Sistema Completo de Orientação

```javascript
class GerenciadorOrientacao {
    constructor() {
        this.orientacaoAtual = this.obterOrientacaoAtual();
        this.suportaOrientacao = 'orientation' in screen;
        this.travaBloqueada = false;
        this.configurarListeners();
    }
    
    obterOrientacaoAtual() {
        if (this.suportaOrientacao && screen.orientation) {
            return {
                angulo: screen.orientation.angle,
                tipo: screen.orientation.type,
                isPortrait: screen.orientation.type.includes('portrait'),
                isLandscape: screen.orientation.type.includes('landscape')
            };
        }
        
        // Fallback
        const isPortrait = window.innerHeight > window.innerWidth;
        return {
            angulo: isPortrait ? 0 : 90,
            tipo: isPortrait ? 'portrait-primary' : 'landscape-primary',
            isPortrait,
            isLandscape: !isPortrait
        };
    }
    
    configurarListeners() {
        if (this.suportaOrientacao) {
            screen.orientation.addEventListener('change', () => {
                this.onMudancaOrientacao();
            });
        } else {
            window.addEventListener('orientationchange', () => {
                // Aguardar a mudança ser aplicada
                setTimeout(() => this.onMudancaOrientacao(), 100);
            });
        }
        
        // Listener para redimensionamento
        window.addEventListener('resize', () => {
            const novaOrientacao = this.obterOrientacaoAtual();
            if (this.mudouOrientacao(this.orientacaoAtual, novaOrientacao)) {
                this.orientacaoAtual = novaOrientacao;
                this.onMudancaOrientacao();
            }
        });
    }
    
    mudouOrientacao(antiga, nova) {
        return antiga.isPortrait !== nova.isPortrait;
    }
    
    onMudancaOrientacao() {
        const novaOrientacao = this.obterOrientacaoAtual();
        const orientacaoAnterior = this.orientacaoAtual;
        
        this.orientacaoAtual = novaOrientacao;
        
        console.log(`Orientação mudou: ${orientacaoAnterior.tipo} → ${novaOrientacao.tipo}`);
        
        // Atualizar CSS
        this.atualizarClassesCSS();
        
        // Disparar evento
        window.dispatchEvent(new CustomEvent('orientacaoAlterada', {
            detail: {
                anterior: orientacaoAnterior,
                atual: novaOrientacao,
                timestamp: Date.now()
            }
        }));
        
        // Aplicar adaptações
        this.aplicarAdaptacoes();
    }
    
    atualizarClassesCSS() {
        const body = document.body;
        
        // Remover classes antigas
        body.classList.remove('portrait', 'landscape', 'portrait-primary', 
                           'portrait-secondary', 'landscape-primary', 'landscape-secondary');
        
        // Adicionar novas classes
        body.classList.add(this.orientacaoAtual.isPortrait ? 'portrait' : 'landscape');
        body.classList.add(this.orientacaoAtual.tipo);
    }
    
    aplicarAdaptacoes() {
        // Redimensionar elementos baseado na orientação
        this.redimensionarElementos();
        
        // Reorganizar layout
        this.reorganizarLayout();
        
        // Ajustar formulários
        this.ajustarFormularios();
        
        // Notificar componentes
        this.notificarComponentes();
    }
    
    redimensionarElementos() {
        const elementosResponsivos = document.querySelectorAll('[data-orientacao-responsiva]');
        
        elementosResponsivos.forEach(elemento => {
            const config = JSON.parse(elemento.dataset.orientacaoResponsiva);
            const orientacao = this.orientacaoAtual.isPortrait ? 'portrait' : 'landscape';
            
            if (config[orientacao]) {
                Object.assign(elemento.style, config[orientacao]);
            }
        });
    }
    
    reorganizarLayout() {
        const containers = document.querySelectorAll('.container-orientacao');
        
        containers.forEach(container => {
            if (this.orientacaoAtual.isPortrait) {
                container.classList.add('layout-vertical');
                container.classList.remove('layout-horizontal');
            } else {
                container.classList.add('layout-horizontal');
                container.classList.remove('layout-vertical');
            }
        });
    }
    
    ajustarFormularios() {
        const formularios = document.querySelectorAll('.formulario-orientacao');
        
        formularios.forEach(form => {
            if (this.orientacaoAtual.isPortrait) {
                // Layout em coluna para portrait
                form.style.flexDirection = 'column';
                form.style.height = 'auto';
            } else {
                // Layout em linha para landscape
                form.style.flexDirection = 'row';
                form.style.height = '100vh';
            }
        });
    }
    
    notificarComponentes() {
        // Notificar componentes específicos sobre mudança de orientação
        const componentesOrientacao = window.componentesOrientacao || [];
        
        componentesOrientacao.forEach(componente => {
            if (typeof componente.onOrientacaoMudou === 'function') {
                componente.onOrientacaoMudou(this.orientacaoAtual);
            }
        });
    }
    
    // Métodos de controle de orientação
    async bloquearOrientacao(orientacao) {
        if (!this.suportaOrientacao || !screen.orientation.lock) {
            console.warn('Bloqueio de orientação não suportado');
            return false;
        }
        
        try {
            await screen.orientation.lock(orientacao);
            this.travaBloqueada = true;
            console.log(`Orientação bloqueada em: ${orientacao}`);
            return true;
        } catch (error) {
            console.error('Erro ao bloquear orientação:', error);
            return false;
        }
    }
    
    desbloquearOrientacao() {
        if (!this.suportaOrientacao || !screen.orientation.unlock) {
            console.warn('Desbloqueio de orientação não suportado');
            return false;
        }
        
        try {
            screen.orientation.unlock();
            this.travaBloqueada = false;
            console.log('Orientação desbloqueada');
            return true;
        } catch (error) {
            console.error('Erro ao desbloquear orientação:', error);
            return false;
        }
    }
    
    // Métodos de consulta
    isPortrait() {
        return this.orientacaoAtual.isPortrait;
    }
    
    isLandscape() {
        return this.orientacaoAtual.isLandscape;
    }
    
    getAngulo() {
        return this.orientacaoAtual.angulo;
    }
    
    getTipo() {
        return this.orientacaoAtual.tipo;
    }
    
    isBloqueada() {
        return this.travaBloqueada;
    }
    
    // Utilitários para diferentes orientações
    executarSePortrait(callback) {
        if (this.isPortrait()) {
            callback(this.orientacaoAtual);
        }
    }
    
    executarSeLandscape(callback) {
        if (this.isLandscape()) {
            callback(this.orientacaoAtual);
        }
    }
    
    // Relatório de orientação
    gerarRelatorio() {
        return {
            timestamp: new Date().toISOString(),
            orientacaoAtual: this.orientacaoAtual,
            suportaAPI: this.suportaOrientacao,
            travaBloqueada: this.travaBloqueada,
            dimensoesViewport: {
                largura: window.innerWidth,
                altura: window.innerHeight,
                ratio: (window.innerWidth / window.innerHeight).toFixed(2)
            }
        };
    }
}

// Sistema de adaptação baseado em orientação
class AdaptadorOrientacao {
    constructor() {
        this.orientacao = new GerenciadorOrientacao();
        this.configurarAdaptacoes();
    }
    
    configurarAdaptacoes() {
        window.addEventListener('orientacaoAlterada', (e) => {
            this.aplicarAdaptacoes(e.detail);
        });
    }
    
    aplicarAdaptacoes(detalhes) {
        const { atual } = detalhes;
        
        // Adaptar navegação
        this.adaptarNavegacao(atual);
        
        // Adaptar mídia
        this.adaptarMidia(atual);
        
        // Adaptar controles
        this.adaptarControles(atual);
        
        // Adaptar animações
        this.adaptarAnimacoes(atual);
    }
    
    adaptarNavegacao(orientacao) {
        const nav = document.querySelector('.navegacao-orientacao');
        if (!nav) return;
        
        if (orientacao.isPortrait) {
            nav.classList.add('nav-vertical');
            nav.classList.remove('nav-horizontal');
        } else {
            nav.classList.add('nav-horizontal');
            nav.classList.remove('nav-vertical');
        }
    }
    
    adaptarMidia(orientacao) {
        const videos = document.querySelectorAll('video[data-orientacao]');
        
        videos.forEach(video => {
            if (orientacao.isLandscape) {
                video.style.width = '100vw';
                video.style.height = '100vh';
                video.style.objectFit = 'cover';
            } else {
                video.style.width = '100%';
                video.style.height = 'auto';
                video.style.objectFit = 'contain';
            }
        });
    }
    
    adaptarControles(orientacao) {
        const controles = document.querySelectorAll('.controles-orientacao');
        
        controles.forEach(control => {
            if (orientacao.isLandscape) {
                control.style.flexDirection = 'row';
                control.style.justifyContent = 'space-between';
            } else {
                control.style.flexDirection = 'column';
                control.style.justifyContent = 'center';
            }
        });
    }
    
    adaptarAnimacoes(orientacao) {
        const animacoes = document.querySelectorAll('.animacao-orientacao');
        
        animacoes.forEach(elemento => {
            if (orientacao.isPortrait) {
                elemento.style.animationDirection = 'normal';
                elemento.style.animationDuration = '1s';
            } else {
                elemento.style.animationDirection = 'reverse';
                elemento.style.animationDuration = '0.5s';
            }
        });
    }
}

// Inicializar sistema de orientação
const gerenciadorOrientacao = new GerenciadorOrientacao();
const adaptadorOrientacao = new AdaptadorOrientacao();
```

---

## 🎨 5. Aplicações Práticas

### Sistema de Dashboard Responsivo

```javascript
class DashboardResponsivo {
    constructor() {
        this.analisadorTela = new AnalisadorTela();
        this.breakpoints = new GerenciadorBreakpoints();
        this.orientacao = new GerenciadorOrientacao();
        
        this.configurarEventos();
        this.inicializarDashboard();
    }
    
    configurarEventos() {
        window.addEventListener('breakpointMudou', (e) => {
            this.reorganizarWidgets(e.detail.atual);
        });
        
        window.addEventListener('orientacaoAlterada', (e) => {
            this.ajustarLayoutOrientacao(e.detail.atual);
        });
    }
    
    inicializarDashboard() {
        this.criarContainerWidgets();
        this.configurarWidgets();
        this.aplicarLayoutInicial();
    }
    
    criarContainerWidgets() {
        const container = document.createElement('div');
        container.id = 'dashboard-responsivo';
        container.className = 'dashboard-container';
        
        // Adicionar widgets
        const widgets = [
            { id: 'widget-grafico', tipo: 'grafico', tamanho: 'large' },
            { id: 'widget-kpis', tipo: 'kpis', tamanho: 'medium' },
            { id: 'widget-tabela', tipo: 'tabela', tamanho: 'large' },
            { id: 'widget-mapa', tipo: 'mapa', tamanho: 'medium' },
            { id: 'widget-stats', tipo: 'stats', tamanho: 'small' },
            { id: 'widget-timeline', tipo: 'timeline', tamanho: 'medium' }
        ];
        
        widgets.forEach(widget => {
            const elemento = this.criarWidget(widget);
            container.appendChild(elemento);
        });
        
        document.body.appendChild(container);
    }
    
    criarWidget(config) {
        const widget = document.createElement('div');
        widget.id = config.id;
        widget.className = `widget widget-${config.tipo} tamanho-${config.tamanho}`;
        widget.innerHTML = `
            <div class="widget-header">
                <h3>${config.tipo.charAt(0).toUpperCase() + config.tipo.slice(1)}</h3>
                <button class="widget-toggle">⚙️</button>
            </div>
            <div class="widget-content">
                <p>Conteúdo do ${config.tipo}</p>
            </div>
        `;
        
        return widget;
    }
    
    reorganizarWidgets(breakpoint) {
        const container = document.getElementById('dashboard-responsivo');
        
        // Configurações de layout por breakpoint
        const layouts = {
            'xs': {
                colunas: 1,
                ordem: ['widget-kpis', 'widget-stats', 'widget-grafico', 'widget-tabela', 'widget-mapa', 'widget-timeline']
            },
            'sm': {
                colunas: 2,
                ordem: ['widget-kpis', 'widget-stats', 'widget-grafico', 'widget-mapa', 'widget-tabela', 'widget-timeline']
            },
            'md': {
                colunas: 3,
                ordem: ['widget-grafico', 'widget-kpis', 'widget-stats', 'widget-tabela', 'widget-mapa', 'widget-timeline']
            },
            'lg': {
                colunas: 4,
                ordem: ['widget-grafico', 'widget-kpis', 'widget-tabela', 'widget-mapa', 'widget-stats', 'widget-timeline']
            },
            'xl': {
                colunas: 4,
                ordem: ['widget-grafico', 'widget-kpis', 'widget-tabela', 'widget-mapa', 'widget-stats', 'widget-timeline']
            },
            'xxl': {
                colunas: 6,
                ordem: ['widget-grafico', 'widget-kpis', 'widget-tabela', 'widget-mapa', 'widget-stats', 'widget-timeline']
            }
        };
        
        const layout = layouts[breakpoint] || layouts['md'];
        
        // Aplicar grid
        container.style.gridTemplateColumns = `repeat(${layout.colunas}, 1fr)`;
        
        // Reordenar widgets
        layout.ordem.forEach((id, index) => {
            const widget = document.getElementById(id);
            if (widget) {
                widget.style.order = index;
            }
        });
        
        // Adaptar tamanho dos widgets
        this.adaptarTamanhoWidgets(breakpoint);
    }
    
    adaptarTamanhoWidgets(breakpoint) {
        const widgets = document.querySelectorAll('.widget');
        
        widgets.forEach(widget => {
            // Remover classes de tamanho antigas
            widget.classList.remove('col-span-1', 'col-span-2', 'col-span-3', 'col-span-4');
            
            // Determinar span baseado no tamanho do widget e breakpoint
            const tamanho = widget.classList.contains('tamanho-large') ? 'large' : 
                           widget.classList.contains('tamanho-medium') ? 'medium' : 'small';
            
            const spans = this.calcularSpan(tamanho, breakpoint);
            widget.style.gridColumn = `span ${spans}`;
        });
    }
    
    calcularSpan(tamanho, breakpoint) {
        const configuracoes = {
            'xs': { large: 1, medium: 1, small: 1 },
            'sm': { large: 2, medium: 1, small: 1 },
            'md': { large: 2, medium: 1, small: 1 },
            'lg': { large: 2, medium: 2, small: 1 },
            'xl': { large: 2, medium: 2, small: 1 },
            'xxl': { large: 3, medium: 2, small: 1 }
        };
        
        return configuracoes[breakpoint][tamanho] || 1;
    }
    
    ajustarLayoutOrientacao(orientacao) {
        const container = document.getElementById('dashboard-responsivo');
        
        if (orientacao.isLandscape && this.breakpoints.isMobile()) {
            // Em landscape mobile, usar layout horizontal
            container.style.flexDirection = 'row';
            container.style.overflowX = 'auto';
        } else {
            // Layout normal
            container.style.flexDirection = 'column';
            container.style.overflowX = 'visible';
        }
    }
    
    aplicarLayoutInicial() {
        const breakpointAtual = this.breakpoints.obterBreakpointAtual();
        this.reorganizarWidgets(breakpointAtual);
    }
}

// Inicializar dashboard
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new DashboardResponsivo();
});
```

---

## 🎯 6. Exercícios Práticos

### Exercício 1: Detector de Tela Avançado
Crie um sistema que analisa detalhadamente a tela do usuário e fornece recomendações de layout.

### Exercício 2: Sistema de Orientação para Jogos
Implemente um sistema que adapta controles de jogo baseado na orientação do dispositivo.

### Exercício 3: Dashboard Adaptativo
Crie um dashboard que se reorganiza automaticamente baseado nas características da tela.

---

## 📚 7. Recursos Adicionais

### Documentação
- [Screen API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen)
- [Screen Orientation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API)
- [CSS Media Queries - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

### Ferramentas
- **Responsive Design Mode**: Ferramenta do navegador para testar diferentes tamanhos
- **Chrome DevTools Device Mode**: Simulação de diferentes dispositivos
- **Responsively App**: Ferramenta para testar múltiplas telas simultaneamente

---

## 🎯 Resumo da Aula

- **screen** fornece informações detalhadas sobre a tela do usuário
- **Breakpoints** permitem criar layouts verdadeiramente responsivos
- **Orientação** deve ser considerada especialmente em dispositivos móveis
- **Adaptação automática** melhora significativamente a experiência do usuário
- **Media queries** em JavaScript complementam as do CSS
- **Progressive enhancement** garante funcionamento em todos os dispositivos

**Próxima aula**: Revisão e Projeto Final - Integração de todos os conceitos de Window Objects