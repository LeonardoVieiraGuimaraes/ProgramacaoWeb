# 🧭 Aula 4: window.navigator - Informações do Navegador e Detecção de Recursos

## 📚 Objetivos da Aula

Ao final desta aula, você será capaz de:
- Obter informações detalhadas sobre o navegador e sistema operacional
- Detectar recursos e APIs disponíveis no navegador
- Implementar progressive enhancement baseado em capacidades
- Usar APIs modernas como geolocalização e permissões

---

## 📝 1. Conceitos Fundamentais

### O que é window.navigator?

O objeto `window.navigator` contém informações sobre o navegador do usuário, incluindo nome, versão, sistema operacional, idioma e capacidades. É essencial para adaptar aplicações web às características específicas do ambiente do usuário.

### Propriedades Principais

```javascript
// Informações básicas
navigator.userAgent      // String do user agent
navigator.appName        // Nome da aplicação (geralmente "Netscape")
navigator.appVersion     // Versão da aplicação
navigator.platform       // Plataforma do sistema
navigator.language       // Idioma preferido do usuário
navigator.languages      // Array de idiomas aceitos

// Estado e capacidades
navigator.cookieEnabled  // Se cookies estão habilitados
navigator.onLine         // Se está conectado à internet
navigator.hardwareConcurrency // Número de cores do processador

// APIs modernas
navigator.geolocation    // API de geolocalização
navigator.serviceWorker  // Service Workers
navigator.mediaDevices   // Dispositivos de mídia
```

---

## 🎯 2. Informações Básicas do Navegador

### Analisando User Agent

```javascript
class AnalisadorUserAgent {
    constructor() {
        this.userAgent = navigator.userAgent;
        this.analisar();
    }
    
    analisar() {
        this.navegador = this.detectarNavegador();
        this.sistema = this.detectarSistema();
        this.dispositivo = this.detectarDispositivo();
        this.motor = this.detectarMotor();
    }
    
    detectarNavegador() {
        const ua = this.userAgent;
        
        // Chrome (deve vir antes de Safari)
        if (ua.includes('Chrome') && !ua.includes('Edg')) {
            const versao = ua.match(/Chrome\/([0-9.]+)/)?.[1];
            return { nome: 'Chrome', versao };
        }
        
        // Firefox
        if (ua.includes('Firefox')) {
            const versao = ua.match(/Firefox\/([0-9.]+)/)?.[1];
            return { nome: 'Firefox', versao };
        }
        
        // Safari (deve vir depois de Chrome)
        if (ua.includes('Safari') && !ua.includes('Chrome')) {
            const versao = ua.match(/Version\/([0-9.]+)/)?.[1];
            return { nome: 'Safari', versao };
        }
        
        // Edge
        if (ua.includes('Edg')) {
            const versao = ua.match(/Edg\/([0-9.]+)/)?.[1];
            return { nome: 'Edge', versao };
        }
        
        // Opera
        if (ua.includes('Opera') || ua.includes('OPR')) {
            const versao = ua.match(/(Opera|OPR)\/([0-9.]+)/)?.[2];
            return { nome: 'Opera', versao };
        }
        
        return { nome: 'Desconhecido', versao: 'N/A' };
    }
    
    detectarSistema() {
        const ua = this.userAgent.toLowerCase();
        const platform = navigator.platform.toLowerCase();
        
        // Windows
        if (platform.includes('win') || ua.includes('windows')) {
            if (ua.includes('windows nt 10')) return { nome: 'Windows', versao: '10/11' };
            if (ua.includes('windows nt 6.3')) return { nome: 'Windows', versao: '8.1' };
            if (ua.includes('windows nt 6.2')) return { nome: 'Windows', versao: '8' };
            if (ua.includes('windows nt 6.1')) return { nome: 'Windows', versao: '7' };
            return { nome: 'Windows', versao: 'Desconhecida' };
        }
        
        // macOS
        if (platform.includes('mac') || ua.includes('mac os')) {
            return { nome: 'macOS', versao: 'N/A' };
        }
        
        // Linux
        if (platform.includes('linux') || ua.includes('linux')) {
            return { nome: 'Linux', versao: 'N/A' };
        }
        
        // Mobile
        if (ua.includes('android')) {
            const versao = ua.match(/android ([0-9.]+)/)?.[1];
            return { nome: 'Android', versao };
        }
        
        if (ua.includes('iphone') || ua.includes('ipad')) {
            const versao = ua.match(/os ([0-9_]+)/)?.[1]?.replace(/_/g, '.');
            return { nome: 'iOS', versao };
        }
        
        return { nome: 'Desconhecido', versao: 'N/A' };
    }
    
    detectarDispositivo() {
        const ua = this.userAgent.toLowerCase();
        
        // Mobile
        if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(ua)) {
            if (ua.includes('iphone') || ua.includes('ipod')) return 'iPhone';
            if (ua.includes('android')) return 'Android Phone';
            return 'Mobile';
        }
        
        // Tablet
        if (/tablet|ipad/i.test(ua)) {
            if (ua.includes('ipad')) return 'iPad';
            return 'Tablet';
        }
        
        return 'Desktop';
    }
    
    detectarMotor() {
        const ua = this.userAgent;
        
        if (ua.includes('WebKit')) {
            if (ua.includes('Blink')) return 'Blink';
            return 'WebKit';
        }
        
        if (ua.includes('Gecko')) {
            return 'Gecko';
        }
        
        if (ua.includes('Trident') || ua.includes('MSIE')) {
            return 'Trident';
        }
        
        return 'Desconhecido';
    }
    
    obterResumo() {
        return {
            navegador: this.navegador,
            sistema: this.sistema,
            dispositivo: this.dispositivo,
            motor: this.motor,
            userAgent: this.userAgent
        };
    }
}

// Exemplo de uso
const analisador = new AnalisadorUserAgent();
console.log('Informações do navegador:', analisador.obterResumo());
```

### Sistema de Informações Completo

```javascript
class InfoSistema {
    constructor() {
        this.coletarInformacoes();
    }
    
    coletarInformacoes() {
        this.navegador = this.obterInfoNavegador();
        this.sistema = this.obterInfoSistema();
        this.hardware = this.obterInfoHardware();
        this.rede = this.obterInfoRede();
        this.idioma = this.obterInfoIdioma();
    }
    
    obterInfoNavegador() {
        return {
            nome: navigator.appName,
            versao: navigator.appVersion,
            userAgent: navigator.userAgent,
            vendor: navigator.vendor,
            produto: navigator.product,
            cookiesHabilitados: navigator.cookieEnabled,
            javaHabilitado: navigator.javaEnabled(),
            doNotTrack: navigator.doNotTrack
        };
    }
    
    obterInfoSistema() {
        return {
            plataforma: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints,
            pdfViewerEnabled: navigator.pdfViewerEnabled,
            webdriver: navigator.webdriver
        };
    }
    
    obterInfoHardware() {
        const info = {
            nucleosProcessador: navigator.hardwareConcurrency,
            memoriaDispositivo: null,
            pixelRatio: window.devicePixelRatio
        };
        
        // Informações de memória (se disponível)
        if ('memory' in performance) {
            info.memoriaJS = {
                limite: performance.memory.jsHeapSizeLimit,
                total: performance.memory.totalJSHeapSize,
                usado: performance.memory.usedJSHeapSize
            };
        }
        
        return info;
    }
    
    obterInfoRede() {
        const info = {
            online: navigator.onLine,
            conexao: null
        };
        
        // Network Information API (se disponível)
        if ('connection' in navigator) {
            const conn = navigator.connection;
            info.conexao = {
                tipoEfetivo: conn.effectiveType,
                velocidadeDownlink: conn.downlink,
                rtt: conn.rtt,
                economiaDados: conn.saveData
            };
        }
        
        return info;
    }
    
    obterInfoIdioma() {
        return {
            idiomaPrincipal: navigator.language,
            idiomasAceitos: navigator.languages,
            fusoHorario: Intl.DateTimeFormat().resolvedOptions().timeZone,
            formatoData: new Intl.DateTimeFormat().format(new Date()),
            formatoNumero: new Intl.NumberFormat().format(1234.56)
        };
    }
    
    gerarRelatorio() {
        return {
            timestamp: new Date().toISOString(),
            navegador: this.navegador,
            sistema: this.sistema,
            hardware: this.hardware,
            rede: this.rede,
            idioma: this.idioma
        };
    }
    
    exibirRelatorio() {
        const relatorio = this.gerarRelatorio();
        console.group('📊 Relatório do Sistema');
        
        Object.entries(relatorio).forEach(([categoria, dados]) => {
            console.group(`📋 ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`);
            console.table(dados);
            console.groupEnd();
        });
        
        console.groupEnd();
    }
}

// Exemplo de uso
const infoSistema = new InfoSistema();
infoSistema.exibirRelatorio();
```

---

## 🔍 3. Detecção de Recursos e APIs

### Sistema de Detecção de Features

```javascript
class DetectorRecursos {
    constructor() {
        this.recursos = new Map();
        this.detectarRecursos();
    }
    
    detectarRecursos() {
        // APIs básicas
        this.testar('localStorage', () => 'localStorage' in window);
        this.testar('sessionStorage', () => 'sessionStorage' in window);
        this.testar('indexedDB', () => 'indexedDB' in window);
        this.testar('webSQL', () => 'openDatabase' in window);
        
        // Web Workers
        this.testar('webWorkers', () => 'Worker' in window);
        this.testar('sharedWorkers', () => 'SharedWorker' in window);
        this.testar('serviceWorkers', () => 'serviceWorker' in navigator);
        
        // APIs de mídia
        this.testar('getUserMedia', () => 'mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices);
        this.testar('webRTC', () => 'RTCPeerConnection' in window);
        this.testar('webAudio', () => 'AudioContext' in window || 'webkitAudioContext' in window);
        
        // APIs de sistema
        this.testar('geolocation', () => 'geolocation' in navigator);
        this.testar('notification', () => 'Notification' in window);
        this.testar('pushManager', () => 'PushManager' in window);
        this.testar('permissions', () => 'permissions' in navigator);
        
        // APIs de pagamento e autenticação
        this.testar('paymentRequest', () => 'PaymentRequest' in window);
        this.testar('webAuthentication', () => 'credentials' in navigator);
        
        // APIs gráficas
        this.testar('canvas2D', () => {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext && canvas.getContext('2d'));
        });
        this.testar('webGL', () => {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        });
        this.testar('webGL2', () => {
            const canvas = document.createElement('canvas');
            return !!(canvas.getContext && canvas.getContext('webgl2'));
        });
        
        // Outras APIs
        this.testar('fullscreen', () => 'requestFullscreen' in document.documentElement);
        this.testar('pointerLock', () => 'requestPointerLock' in document.documentElement);
        this.testar('gamepad', () => 'getGamepads' in navigator);
        this.testar('webAssembly', () => 'WebAssembly' in window);
        this.testar('offscreenCanvas', () => 'OffscreenCanvas' in window);
        
        // APIs experimentais
        this.testar('webXR', () => 'xr' in navigator);
        this.testar('webBluetooth', () => 'bluetooth' in navigator);
        this.testar('webUSB', () => 'usb' in navigator);
        this.testar('webNFC', () => 'nfc' in navigator);
    }
    
    testar(nome, teste) {
        try {
            const resultado = teste();
            this.recursos.set(nome, resultado);
        } catch (error) {
            this.recursos.set(nome, false);
        }
    }
    
    suporta(recurso) {
        return this.recursos.get(recurso) || false;
    }
    
    obterRecursosSuportados() {
        const suportados = [];
        for (const [recurso, suportado] of this.recursos) {
            if (suportado) {
                suportados.push(recurso);
            }
        }
        return suportados;
    }
    
    obterRecursosNaoSuportados() {
        const naoSuportados = [];
        for (const [recurso, suportado] of this.recursos) {
            if (!suportado) {
                naoSuportados.push(recurso);
            }
        }
        return naoSuportados;
    }
    
    gerarRelatorioRecursos() {
        const relatorio = {
            suportados: this.obterRecursosSuportados(),
            naoSuportados: this.obterRecursosNaoSuportados(),
            total: this.recursos.size,
            percentualSuporte: (this.obterRecursosSuportados().length / this.recursos.size) * 100
        };
        
        return relatorio;
    }
    
    exibirRelatorio() {
        const relatorio = this.gerarRelatorioRecursos();
        
        console.group('🔍 Detecção de Recursos');
        console.log(`📊 ${relatorio.suportados.length}/${relatorio.total} recursos suportados (${relatorio.percentualSuporte.toFixed(1)}%)`);
        
        console.group('✅ Suportados');
        relatorio.suportados.forEach(recurso => console.log(`✓ ${recurso}`));
        console.groupEnd();
        
        console.group('❌ Não Suportados');
        relatorio.naoSuportados.forEach(recurso => console.log(`✗ ${recurso}`));
        console.groupEnd();
        
        console.groupEnd();
        
        return relatorio;
    }
}

// Sistema de Progressive Enhancement
class ProgressiveEnhancement {
    constructor() {
        this.detector = new DetectorRecursos();
        this.recursos = this.detector.recursos;
        this.implementarFallbacks();
    }
    
    implementarFallbacks() {
        // Local Storage fallback
        if (!this.recursos.get('localStorage')) {
            this.implementarLocalStorageFallback();
        }
        
        // Geolocation fallback
        if (!this.recursos.get('geolocation')) {
            this.implementarGeolocationFallback();
        }
        
        // Notification fallback
        if (!this.recursos.get('notification')) {
            this.implementarNotificationFallback();
        }
    }
    
    implementarLocalStorageFallback() {
        window.localStorage = {
            getItem: (key) => this.getCookie(key),
            setItem: (key, value) => this.setCookie(key, value),
            removeItem: (key) => this.deleteCookie(key),
            clear: () => this.clearCookies()
        };
    }
    
    implementarGeolocationFallback() {
        navigator.geolocation = {
            getCurrentPosition: (success, error) => {
                // Usar IP-based geolocation ou solicitar entrada manual
                this.obterLocalizacaoPorIP()
                    .then(pos => success(pos))
                    .catch(err => error(err));
            }
        };
    }
    
    implementarNotificationFallback() {
        window.Notification = class {
            constructor(title, options) {
                this.mostrarNotificacaoFallback(title, options);
            }
            
            static requestPermission() {
                return Promise.resolve('granted');
            }
        };
    }
    
    // Métodos auxiliares para fallbacks
    setCookie(name, value, days = 7) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    
    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    async obterLocalizacaoPorIP() {
        // Implementar API de geolocalização por IP
        throw new Error('Geolocalização não disponível');
    }
    
    mostrarNotificacaoFallback(title, options) {
        // Criar notificação visual na página
        const notif = document.createElement('div');
        notif.className = 'notification-fallback';
        notif.innerHTML = `<strong>${title}</strong><br>${options.body || ''}`;
        document.body.appendChild(notif);
        
        setTimeout(() => notif.remove(), 5000);
    }
}
```

---

## 📍 4. API de Geolocalização

### Sistema Completo de Geolocalização

```javascript
class GerenciadorGeolocalizacao {
    constructor() {
        this.suportado = 'geolocation' in navigator;
        this.posicaoAtual = null;
        this.observandoPosicao = false;
        this.watchId = null;
    }
    
    // Verificar se geolocalização é suportada
    isSuportado() {
        return this.suportado;
    }
    
    // Obter posição atual
    async obterPosicaoAtual(opcoes = {}) {
        if (!this.suportado) {
            throw new Error('Geolocalização não suportada');
        }
        
        const opcoesDefault = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 5 * 60 * 1000 // 5 minutos
        };
        
        const opcoesFinais = { ...opcoesDefault, ...opcoes };
        
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.posicaoAtual = this.processarPosicao(position);
                    resolve(this.posicaoAtual);
                },
                (error) => {
                    reject(this.processarErro(error));
                },
                opcoesFinais
            );
        });
    }
    
    // Observar mudanças de posição
    iniciarObservacao(callback, opcoes = {}) {
        if (!this.suportado) {
            throw new Error('Geolocalização não suportada');
        }
        
        if (this.observandoPosicao) {
            this.pararObservacao();
        }
        
        const opcoesDefault = {
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 1000
        };
        
        const opcoesFinais = { ...opcoesDefault, ...opcoes };
        
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.posicaoAtual = this.processarPosicao(position);
                callback(null, this.posicaoAtual);
            },
            (error) => {
                callback(this.processarErro(error), null);
            },
            opcoesFinais
        );
        
        this.observandoPosicao = true;
        return this.watchId;
    }
    
    // Parar observação
    pararObservacao() {
        if (this.watchId !== null) {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
            this.observandoPosicao = false;
        }
    }
    
    // Processar posição recebida
    processarPosicao(position) {
        const coords = position.coords;
        
        return {
            latitude: coords.latitude,
            longitude: coords.longitude,
            altitude: coords.altitude,
            precisao: coords.accuracy,
            precisaoAltitude: coords.altitudeAccuracy,
            direcao: coords.heading,
            velocidade: coords.speed,
            timestamp: position.timestamp,
            timestampFormatado: new Date(position.timestamp).toLocaleString()
        };
    }
    
    // Processar erros
    processarErro(error) {
        const erros = {
            1: 'Permissão negada pelo usuário',
            2: 'Posição indisponível',
            3: 'Timeout na requisição'
        };
        
        return {
            codigo: error.code,
            mensagem: erros[error.code] || 'Erro desconhecido',
            detalhes: error.message
        };
    }
    
    // Calcular distância entre duas coordenadas
    calcularDistancia(lat1, lon1, lat2, lon2) {
        const R = 6371; // Raio da Terra em km
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
    
    toRad(graus) {
        return graus * (Math.PI/180);
    }
    
    // Obter endereço por coordenadas (geocoding reverso)
    async obterEndereco(lat, lon) {
        // Implementar com serviço de geocoding
        // Esta é uma implementação de exemplo
        try {
            const response = await fetch(
                `https://api.exemplo.com/geocode?lat=${lat}&lon=${lon}`
            );
            return await response.json();
        } catch (error) {
            throw new Error('Erro ao obter endereço');
        }
    }
    
    // Solicitar permissão explicitamente
    async solicitarPermissao() {
        if (!this.suportado) {
            return 'unsupported';
        }
        
        try {
            await this.obterPosicaoAtual({ timeout: 1000 });
            return 'granted';
        } catch (error) {
            if (error.codigo === 1) {
                return 'denied';
            }
            return 'error';
        }
    }
}

// Exemplo de uso da geolocalização
class AppLocalizacao {
    constructor() {
        this.geo = new GerenciadorGeolocalizacao();
        this.inicializar();
    }
    
    async inicializar() {
        if (!this.geo.isSuportado()) {
            console.error('Geolocalização não suportada');
            return;
        }
        
        try {
            const posicao = await this.geo.obterPosicaoAtual();
            console.log('Posição atual:', posicao);
            
            // Iniciar monitoramento
            this.geo.iniciarObservacao((erro, pos) => {
                if (erro) {
                    console.error('Erro na observação:', erro);
                } else {
                    console.log('Nova posição:', pos);
                    this.atualizarMapa(pos);
                }
            });
            
        } catch (error) {
            console.error('Erro ao obter posição:', error);
        }
    }
    
    atualizarMapa(posicao) {
        // Implementar atualização do mapa
        console.log(`Mapa atualizado: ${posicao.latitude}, ${posicao.longitude}`);
    }
}
```

---

## 🔐 5. API de Permissões

### Gerenciador de Permissões

```javascript
class GerenciadorPermissoes {
    constructor() {
        this.suportado = 'permissions' in navigator;
        this.permissoes = new Map();
    }
    
    // Verificar se API de permissões é suportada
    isSuportado() {
        return this.suportado;
    }
    
    // Verificar estado de uma permissão
    async verificarPermissao(nome) {
        if (!this.suportado) {
            return 'unsupported';
        }
        
        try {
            const resultado = await navigator.permissions.query({ name: nome });
            this.permissoes.set(nome, resultado.state);
            
            // Monitorar mudanças
            resultado.addEventListener('change', () => {
                this.permissoes.set(nome, resultado.state);
                this.onMudancaPermissao(nome, resultado.state);
            });
            
            return resultado.state;
        } catch (error) {
            console.warn(`Permissão '${nome}' não suportada:`, error);
            return 'unsupported';
        }
    }
    
    // Verificar múltiplas permissões
    async verificarPermissoes(nomes) {
        const resultados = {};
        
        for (const nome of nomes) {
            resultados[nome] = await this.verificarPermissao(nome);
        }
        
        return resultados;
    }
    
    // Solicitar permissão (para APIs que suportam)
    async solicitarPermissao(tipo) {
        switch (tipo) {
            case 'notifications':
                return await this.solicitarNotificacoes();
            case 'geolocation':
                return await this.solicitarGeolocalizacao();
            case 'camera':
            case 'microphone':
                return await this.solicitarMidia(tipo);
            default:
                throw new Error(`Tipo de permissão '${tipo}' não suportado`);
        }
    }
    
    async solicitarNotificacoes() {
        if ('Notification' in window) {
            const permissao = await Notification.requestPermission();
            return permissao;
        }
        return 'unsupported';
    }
    
    async solicitarGeolocalizacao() {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                () => resolve('granted'),
                (error) => {
                    if (error.code === 1) resolve('denied');
                    else resolve('error');
                }
            );
        });
    }
    
    async solicitarMidia(tipo) {
        try {
            const constraints = {};
            constraints[tipo === 'camera' ? 'video' : 'audio'] = true;
            
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            stream.getTracks().forEach(track => track.stop());
            return 'granted';
        } catch (error) {
            if (error.name === 'NotAllowedError') return 'denied';
            return 'error';
        }
    }
    
    // Callback para mudanças de permissão
    onMudancaPermissao(nome, novoEstado) {
        console.log(`Permissão '${nome}' mudou para: ${novoEstado}`);
        
        // Disparar evento customizado
        window.dispatchEvent(new CustomEvent('permissaoMudou', {
            detail: { nome, estado: novoEstado }
        }));
    }
    
    // Obter relatório de todas as permissões
    async obterRelatorioPermissoes() {
        const permissoesComuns = [
            'geolocation',
            'notifications',
            'camera',
            'microphone',
            'persistent-storage',
            'push',
            'midi',
            'clipboard-read',
            'clipboard-write'
        ];
        
        const resultados = await this.verificarPermissoes(permissoesComuns);
        
        return {
            timestamp: new Date().toISOString(),
            navegadorSuporta: this.suportado,
            permissoes: resultados,
            resumo: {
                concedidas: Object.values(resultados).filter(p => p === 'granted').length,
                negadas: Object.values(resultados).filter(p => p === 'denied').length,
                pendentes: Object.values(resultados).filter(p => p === 'prompt').length,
                naoSuportadas: Object.values(resultados).filter(p => p === 'unsupported').length
            }
        };
    }
}

// Sistema de gerenciamento de recursos baseado em permissões
class GerenciadorRecursosComPermissoes {
    constructor() {
        this.permissoes = new GerenciadorPermissoes();
        this.recursosDisponiveis = new Map();
    }
    
    async inicializar() {
        const relatorio = await this.permissoes.obterRelatorioPermissoes();
        console.log('Relatório de permissões:', relatorio);
        
        // Configurar recursos baseado nas permissões
        await this.configurarRecursos(relatorio.permissoes);
    }
    
    async configurarRecursos(permissoes) {
        // Notificações
        if (permissoes.notifications === 'granted') {
            this.recursosDisponiveis.set('notificacoes', true);
        }
        
        // Geolocalização
        if (permissoes.geolocation === 'granted') {
            this.recursosDisponiveis.set('geolocalizacao', true);
        }
        
        // Câmera e microfone
        if (permissoes.camera === 'granted') {
            this.recursosDisponiveis.set('camera', true);
        }
        
        if (permissoes.microphone === 'granted') {
            this.recursosDisponiveis.set('microfone', true);
        }
    }
    
    podeUsar(recurso) {
        return this.recursosDisponiveis.get(recurso) || false;
    }
    
    async solicitarRecurso(recurso) {
        const mapeamento = {
            'notificacoes': 'notifications',
            'geolocalizacao': 'geolocation',
            'camera': 'camera',
            'microfone': 'microphone'
        };
        
        const tipoPermissao = mapeamento[recurso];
        if (!tipoPermissao) {
            throw new Error(`Recurso '${recurso}' não reconhecido`);
        }
        
        const resultado = await this.permissoes.solicitarPermissao(tipoPermissao);
        
        if (resultado === 'granted') {
            this.recursosDisponiveis.set(recurso, true);
        }
        
        return resultado;
    }
}
```

---

## 🔋 6. APIs de Sistema

### Informações de Bateria

```javascript
class MonitorBateria {
    constructor() {
        this.bateria = null;
        this.listeners = [];
        this.inicializar();
    }
    
    async inicializar() {
        if ('getBattery' in navigator) {
            try {
                this.bateria = await navigator.getBattery();
                this.configurarListeners();
            } catch (error) {
                console.warn('Erro ao acessar API de bateria:', error);
            }
        }
    }
    
    configurarListeners() {
        if (!this.bateria) return;
        
        const eventos = ['chargingchange', 'levelchange', 'chargingtimechange', 'dischargingtimechange'];
        
        eventos.forEach(evento => {
            this.bateria.addEventListener(evento, () => {
                this.notificarMudanca();
            });
        });
    }
    
    obterInformacoes() {
        if (!this.bateria) {
            return { suportado: false };
        }
        
        return {
            suportado: true,
            nivel: Math.round(this.bateria.level * 100),
            carregando: this.bateria.charging,
            tempoParaCarregar: this.formatarTempo(this.bateria.chargingTime),
            tempoDeUso: this.formatarTempo(this.bateria.dischargingTime)
        };
    }
    
    formatarTempo(segundos) {
        if (segundos === Infinity) return 'Indefinido';
        
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        
        return `${horas}h ${minutos}m`;
    }
    
    adicionarListener(callback) {
        this.listeners.push(callback);
    }
    
    notificarMudanca() {
        const info = this.obterInformacoes();
        this.listeners.forEach(callback => callback(info));
    }
    
    // Otimizações baseadas no nível da bateria
    otimizarPorBateria() {
        const info = this.obterInformacoes();
        
        if (!info.suportado) return;
        
        if (info.nivel < 20 && !info.carregando) {
            // Modo economia de energia
            this.ativarModoEconomia();
        } else if (info.nivel > 80 || info.carregando) {
            // Modo performance normal
            this.ativarModoNormal();
        }
    }
    
    ativarModoEconomia() {
        console.log('Ativando modo economia de energia');
        // Reduzir animações, desabilitar recursos não essenciais
        document.body.classList.add('modo-economia');
    }
    
    ativarModoNormal() {
        console.log('Modo normal de energia');
        document.body.classList.remove('modo-economia');
    }
}
```

### Informações de Conectividade

```javascript
class MonitorConexao {
    constructor() {
        this.conexao = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        this.configurarListeners();
    }
    
    configurarListeners() {
        // Listener para mudanças de status online/offline
        window.addEventListener('online', () => this.onMudancaStatus(true));
        window.addEventListener('offline', () => this.onMudancaStatus(false));
        
        // Listener para mudanças na conexão
        if (this.conexao) {
            this.conexao.addEventListener('change', () => this.onMudancaConexao());
        }
    }
    
    obterInformacoes() {
        const info = {
            online: navigator.onLine,
            timestamp: new Date().toISOString()
        };
        
        if (this.conexao) {
            info.tipoConexao = this.conexao.effectiveType;
            info.velocidadeDownlink = this.conexao.downlink;
            info.rtt = this.conexao.rtt;
            info.economiaDados = this.conexao.saveData;
            info.tipoRede = this.conexao.type;
        }
        
        return info;
    }
    
    onMudancaStatus(online) {
        console.log(online ? 'Conectado à internet' : 'Desconectado da internet');
        
        if (online) {
            this.sincronizarDados();
        } else {
            this.ativarModoOffline();
        }
    }
    
    onMudancaConexao() {
        const info = this.obterInformacoes();
        console.log('Conexão mudou:', info);
        
        this.otimizarPorConexao(info);
    }
    
    otimizarPorConexao(info) {
        if (!info.tipoConexao) return;
        
        switch (info.tipoConexao) {
            case 'slow-2g':
            case '2g':
                this.configurarParaConexaoLenta();
                break;
            case '3g':
                this.configurarParaConexaoMedia();
                break;
            case '4g':
                this.configurarParaConexaoRapida();
                break;
        }
        
        if (info.economiaDados) {
            this.ativarEconomiaDados();
        }
    }
    
    configurarParaConexaoLenta() {
        console.log('Configurando para conexão lenta');
        // Reduzir qualidade de imagens, desabilitar carregamento automático
    }
    
    configurarParaConexaoMedia() {
        console.log('Configurando para conexão média');
        // Configurações balanceadas
    }
    
    configurarParaConexaoRapida() {
        console.log('Configurando para conexão rápida');
        // Ativar todos os recursos
    }
    
    ativarEconomiaDados() {
        console.log('Modo economia de dados ativado');
        // Reduzir uso de dados ao mínimo
    }
    
    sincronizarDados() {
        console.log('Sincronizando dados pendentes...');
        // Implementar sincronização
    }
    
    ativarModoOffline() {
        console.log('Modo offline ativado');
        // Ativar cache offline, mostrar indicador
    }
}
```

---

## 🎯 7. Exercícios Práticos

### Exercício 1: Detector de Navegador Personalizado
Crie um sistema que detecta o navegador e adapta a interface baseado nas capacidades específicas.

### Exercício 2: App com Geolocalização
Implemente um aplicativo que usa geolocalização para mostrar informações baseadas na localização do usuário.

### Exercício 3: Sistema de Permissões
Crie um sistema que gerencia permissões de forma inteligente, solicitando apenas quando necessário.

---

## 📚 8. Recursos Adicionais

### Documentação
- [Navigator - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
- [Geolocation API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [Permissions API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API)

### Ferramentas
- **Can I Use**: Verificar suporte de APIs
- **Feature.js**: Biblioteca de detecção de recursos
- **Modernizr**: Framework de detecção de features

---

## 🎯 Resumo da Aula

- **navigator** fornece informações detalhadas sobre o navegador e sistema
- **User Agent** pode ser analisado para detectar navegador e dispositivo
- **APIs modernas** oferecem recursos avançados como geolocalização
- **Detecção de recursos** permite progressive enhancement
- **Permissões** devem ser gerenciadas adequadamente
- **Otimizações** podem ser feitas baseadas nas capacidades detectadas

**Próxima aula**: window.screen - Informações da Tela e Responsividade