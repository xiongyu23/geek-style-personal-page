// ============================================
// PROFESSIONAL HFT INTERFACE
// Quantitative Research & Trading Terminal
// ============================================

'use strict';

// ============================================
// RENDER ENGINE
// ============================================
class RenderEngine {
    constructor(data) {
        this.data = data;
    }

    // Render menu bar
    renderMenu() {
        const menuBar = document.querySelector('.menu-bar');
        if (!menuBar || !this.data.menu) return;

        menuBar.innerHTML = this.data.menu.groups.map(group => `
            <div class="menu-group">
                <span class="menu-label">${group.label}</span>
                ${group.items.map(item => `
                    <div class="menu-item" data-panel="${item.panel}">${item.label}</div>
                `).join('')}
            </div>
        `).join('');
    }

    // Render profile panel
    renderProfile(container) {
        const profile = this.data.profile;
        container.innerHTML = `
            <div class="profile-header">
                <div class="profile-avatar">${profile.initials}</div>
                <div class="profile-info">
                    <h1>${profile.name}</h1>
                    <div class="title">${profile.title}</div>
                    <div class="desc">${profile.credentials}</div>
                    ${profile.availability ? `
                    <div class="availability">${profile.availability}</div>
                    ` : ''}
                </div>
            </div>
            <div class="profile-section">
                <h3>About</h3>
                <p>${profile.about}</p>
            </div>
            ${profile.biography ? `
            <div class="profile-section">
                <h3>Biography</h3>
                <p>${profile.biography}</p>
            </div>
            ` : ''}
        `;
    }

    // Render skills panel
    renderSkills(container) {
        const skills = this.data.skills || [];
        container.innerHTML = skills.map(skill => `
            <div class="skill-bar">
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-value">${skill.level}%</span>
                </div>
                <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `).join('');
    }

    // Render contact panel
    renderContact(container) {
        const contact = this.data.contact;
        const contacts = [];
        
        if (contact.email?.value) {
            contacts.push({
                icon: '@',
                label: 'Email',
                value: contact.email.display,
                copyValue: contact.email.value
            });
        }
        if (contact.twitter?.value) {
            contacts.push({
                icon: 'TW',
                label: 'Twitter',
                value: contact.twitter.display,
                url: contact.twitter.value
            });
        }
        if (contact.telegram?.value) {
            contacts.push({
                icon: 'TG',
                label: 'Telegram',
                value: contact.telegram.display,
                url: contact.telegram.value
            });
        }
        if (contact.github?.value) {
            contacts.push({
                icon: 'GH',
                label: 'GitHub',
                value: contact.github.display,
                url: contact.github.value
            });
        }
        if (contact.linkedin?.value) {
            contacts.push({
                icon: 'LI',
                label: 'LinkedIn',
                value: contact.linkedin.display,
                url: contact.linkedin.value
            });
        }

        container.innerHTML = `
            <div class="contact-list">
                ${contacts.map(c => `
                    <div class="contact-item" ${c.copyValue ? `onclick="navigator.clipboard.writeText('${c.copyValue}')"` : ''} 
                         ${c.url ? `onclick="window.open('${c.url}', '_blank')"` : ''}>
                        <div class="contact-icon">${c.icon}</div>
                        <div class="contact-details">
                            <div class="contact-label">${c.label}</div>
                            <div class="contact-value">${c.value}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render projects panel
    renderProjects(container) {
        const projects = this.data.projects || [];
        container.innerHTML = `
            <div class="project-list">
                ${projects.map(project => `
                    <div class="project-item">
                        <div class="project-header">
                            <span class="project-name">${project.name}</span>
                            <span class="project-status ${project.status}">${project.status}</span>
                        </div>
                        <div class="project-desc">${project.description}</div>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render experience panel
    renderExperience(container) {
        const experience = this.data.experience || [];
        container.innerHTML = `
            <div class="experience-list">
                ${experience.map(exp => `
                    <div class="experience-item">
                        <div class="experience-company">${exp.company}</div>
                        <div class="experience-role">${exp.role}</div>
                        <div class="experience-period">${exp.period}${exp.location ? ` | ${exp.location}` : ''}</div>
                        <div class="experience-desc">${exp.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render education panel
    renderEducation(container) {
        const education = this.data.education || [];
        container.innerHTML = `
            <div class="experience-list">
                ${education.map(edu => `
                    <div class="experience-item">
                        <div class="experience-company">${edu.institution}</div>
                        <div class="experience-role">${edu.degree}</div>
                        <div class="experience-period">${edu.period}</div>
                        <div class="experience-desc">${edu.field}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render latency panel
    renderLatency(container) {
        const endpoints = this.data.trading?.latencyEndpoints || [];
        container.innerHTML = `
            <div class="latency-grid">
                ${endpoints.map(ep => `
                    <div class="latency-item">
                        <div class="latency-label">${ep.name}</div>
                        <div class="latency-value" id="${ep.id}">--</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render order book panel
    renderOrderBook(container) {
        const symbol = this.data.trading?.symbol || 'BTC-PERP';
        container.innerHTML = `
            <div class="orderbook">
                <div class="orderbook-header">
                    <span class="orderbook-symbol">${symbol}</span>
                    <span class="orderbook-spread">0.12</span>
                </div>
                <div id="asks-rows"></div>
                <div id="bids-rows"></div>
            </div>
        `;
    }

    // Render strategy panel
    renderStrategy(container) {
        const strategies = this.data.trading?.strategies || [];
        container.innerHTML = strategies.map(strategy => `
            <div class="strategy-row">
                <span class="strategy-name">${strategy.name}</span>
                <span class="strategy-status ${strategy.status}">${strategy.status}</span>
            </div>
        `).join('');
    }

    // Render terminal panel
    renderTerminal(container) {
        const welcomeMsg = this.data.terminal?.welcomeMessage || [];
        container.innerHTML = `
            <div class="terminal">
                <div class="terminal-output">
                    ${welcomeMsg.map(line => `<div class="terminal-line">${line}</div>`).join('')}
                </div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">></span>
                    <input type="text" class="terminal-input" placeholder="Enter command..." autocomplete="off" spellcheck="false">
                </div>
            </div>
        `;
    }

    // Render performance panel
    renderPerformance(container) {
        const metrics = this.data.metrics || {};
        container.innerHTML = `
            <div class="metric-grid">
                ${Object.entries(metrics).map(([key, metric]) => `
                    <div class="metric-item">
                        <div class="metric-label">${metric.label}</div>
                        <div class="metric-value" id="metric-${key}">${metric.value}${metric.unit ? ` ${metric.unit}` : ''}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render trades panel
    renderTrades(container) {
        container.innerHTML = `
            <div id="trades-list"></div>
        `;
    }

    // Main render function
    renderPanel(panelId, container) {
        switch (panelId) {
            case 'profile':
                this.renderProfile(container);
                break;
            case 'skills':
                this.renderSkills(container);
                break;
            case 'contact':
                this.renderContact(container);
                break;
            case 'projects':
                this.renderProjects(container);
                break;
            case 'experience':
                this.renderExperience(container);
                break;
            case 'education':
                this.renderEducation(container);
                break;
            case 'latency':
                this.renderLatency(container);
                break;
            case 'orderbook':
                this.renderOrderBook(container);
                break;
            case 'strategy':
                this.renderStrategy(container);
                break;
            case 'terminal':
                this.renderTerminal(container);
                break;
            case 'performance':
                this.renderPerformance(container);
                break;
            case 'trades':
                this.renderTrades(container);
                break;
            default:
                container.innerHTML = '<div class="terminal-line">Panel not configured</div>';
        }
    }
}

// ============================================
// PANEL MANAGER
// ============================================
class PanelManager {
    constructor(container, renderEngine) {
        this.container = container;
        this.renderEngine = renderEngine;
        this.panels = new Map();
        this.zIndex = 100;
        this.activePanel = null;
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.isResizing = false;
        this.resizeStart = { x: 0, y: 0, width: 0, height: 0 };
        
        this.init();
    }
    
    init() {
        // Initialize existing panels
        this.container.querySelectorAll('.panel').forEach(panel => {
            this.registerPanel(panel);
        });
        
        // Global event listeners
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseup', () => this.onMouseUp());
        
        // Touch events for mobile
        document.addEventListener('touchmove', (e) => this.onTouchMove(e));
        document.addEventListener('touchend', () => this.onTouchEnd());
    }
    
    registerPanel(panel) {
        const id = panel.dataset.panelId;
        if (!id) return;
        
        const header = panel.querySelector('.panel-header');
        const resizeHandle = panel.querySelector('.panel-resize');
        const minimizeBtn = panel.querySelector('.panel-btn.minimize');
        const closeBtn = panel.querySelector('.panel-btn.close');
        
        // Render content if empty
        const content = panel.querySelector('.panel-content');
        if (content && content.children.length === 0) {
            this.renderEngine.renderPanel(id, content);
        }
        
        // Header drag
        if (header) {
            header.addEventListener('mousedown', (e) => this.startDrag(e, panel));
            header.addEventListener('touchstart', (e) => this.startTouchDrag(e, panel));
        }
        
        // Resize
        if (resizeHandle) {
            resizeHandle.addEventListener('mousedown', (e) => this.startResize(e, panel));
            resizeHandle.addEventListener('touchstart', (e) => this.startTouchResize(e, panel));
        }
        
        // Controls
        if (minimizeBtn) {
            minimizeBtn.addEventListener('click', () => this.minimizePanel(panel));
            minimizeBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.minimizePanel(panel);
            });
        }
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closePanel(panel));
            closeBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.closePanel(panel);
            });
        }
        
        // Focus on click
        panel.addEventListener('mousedown', () => this.focusPanel(panel));
        panel.addEventListener('touchstart', () => this.focusPanel(panel));
        
        this.panels.set(id, {
            element: panel,
            minimized: false,
            originalHeight: panel.offsetHeight
        });
    }
    
    startDrag(e, panel) {
        if (e.target.closest('.panel-btn')) return;
        
        e.preventDefault();
        this.isDragging = true;
        this.activePanel = panel;
        
        const rect = panel.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();
        
        this.dragOffset.x = e.clientX - rect.left;
        this.dragOffset.y = e.clientY - rect.top;
        
        this.focusPanel(panel);
    }
    
    startTouchDrag(e, panel) {
        if (e.target.closest('.panel-btn')) return;
        
        e.preventDefault();
        const touch = e.touches[0];
        this.isDragging = true;
        this.activePanel = panel;
        
        const rect = panel.getBoundingClientRect();
        const containerRect = this.container.getBoundingClientRect();
        
        this.dragOffset.x = touch.clientX - rect.left;
        this.dragOffset.y = touch.clientY - rect.top;
        
        this.focusPanel(panel);
    }
    
    startResize(e, panel) {
        e.preventDefault();
        e.stopPropagation();
        
        this.isResizing = true;
        this.activePanel = panel;
        
        this.resizeStart.x = e.clientX;
        this.resizeStart.y = e.clientY;
        this.resizeStart.width = panel.offsetWidth;
        this.resizeStart.height = panel.offsetHeight;
    }
    
    startTouchResize(e, panel) {
        e.preventDefault();
        e.stopPropagation();
        
        const touch = e.touches[0];
        this.isResizing = true;
        this.activePanel = panel;
        
        this.resizeStart.x = touch.clientX;
        this.resizeStart.y = touch.clientY;
        this.resizeStart.width = panel.offsetWidth;
        this.resizeStart.height = panel.offsetHeight;
    }
    
    onMouseMove(e) {
        if (!this.activePanel) return;
        
        if (this.isDragging) {
            const containerRect = this.container.getBoundingClientRect();
            
            let x = e.clientX - containerRect.left - this.dragOffset.x;
            let y = e.clientY - containerRect.top - this.dragOffset.y;
            
            // Constrain to container
            x = Math.max(0, Math.min(x, containerRect.width - this.activePanel.offsetWidth));
            y = Math.max(0, Math.min(y, containerRect.height - this.activePanel.offsetHeight));
            
            this.activePanel.style.left = `${x}px`;
            this.activePanel.style.top = `${y}px`;
        }
        
        if (this.isResizing) {
            const deltaX = e.clientX - this.resizeStart.x;
            const deltaY = e.clientY - this.resizeStart.y;
            
            const newWidth = Math.max(280, this.resizeStart.width + deltaX);
            const newHeight = Math.max(180, this.resizeStart.height + deltaY);
            
            this.activePanel.style.width = `${newWidth}px`;
            this.activePanel.style.height = `${newHeight}px`;
        }
    }
    
    onTouchMove(e) {
        if (!this.activePanel) return;
        
        e.preventDefault();
        const touch = e.touches[0];
        
        if (this.isDragging) {
            const containerRect = this.container.getBoundingClientRect();
            
            let x = touch.clientX - containerRect.left - this.dragOffset.x;
            let y = touch.clientY - containerRect.top - this.dragOffset.y;
            
            // Constrain to container
            x = Math.max(0, Math.min(x, containerRect.width - this.activePanel.offsetWidth));
            y = Math.max(0, Math.min(y, containerRect.height - this.activePanel.offsetHeight));
            
            this.activePanel.style.left = `${x}px`;
            this.activePanel.style.top = `${y}px`;
        }
        
        if (this.isResizing) {
            const deltaX = touch.clientX - this.resizeStart.x;
            const deltaY = touch.clientY - this.resizeStart.y;
            
            const newWidth = Math.max(280, this.resizeStart.width + deltaX);
            const newHeight = Math.max(180, this.resizeStart.height + deltaY);
            
            this.activePanel.style.width = `${newWidth}px`;
            this.activePanel.style.height = `${newHeight}px`;
        }
    }
    
    onMouseUp() {
        this.isDragging = false;
        this.isResizing = false;
        this.activePanel = null;
    }
    
    onTouchEnd() {
        this.isDragging = false;
        this.isResizing = false;
        this.activePanel = null;
    }
    
    focusPanel(panel) {
        this.zIndex++;
        panel.style.zIndex = this.zIndex;
        
        this.panels.forEach(p => p.element.classList.remove('active'));
        panel.classList.add('active');
        
        // Update menu item active state
        const panelId = panel.dataset.panelId;
        document.querySelectorAll('.menu-item').forEach(item => {
            if (item.dataset.panel === panelId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    minimizePanel(panel) {
        const panelData = this.panels.get(panel.dataset.panelId);
        if (!panelData) return;
        
        if (panelData.minimized) {
            panel.style.height = `${panelData.originalHeight}px`;
            panelData.minimized = false;
        } else {
            panelData.originalHeight = panel.offsetHeight;
            panel.style.height = '26px';
            panelData.minimized = true;
        }
    }
    
    closePanel(panel) {
        panel.style.display = 'none';
        
        // Remove active state from menu
        const panelId = panel.dataset.panelId;
        document.querySelectorAll('.menu-item').forEach(item => {
            if (item.dataset.panel === panelId) {
                item.classList.remove('active');
            }
        });
    }
    
    createPanel(config) {
        const panel = document.createElement('div');
        panel.className = 'panel';
        panel.dataset.panelId = config.id;
        
        // Use responsive position based on screen size
        const containerRect = this.container.getBoundingClientRect();
        const isMobile = containerRect.width < 768;
        
        let x, y;
        if (isMobile) {
            // For mobile, stack panels vertically
            const existingPanels = Array.from(this.panels.values());
            if (existingPanels.length === 0) {
                x = 10;
                y = 10;
            } else {
                const lastPanel = existingPanels[existingPanels.length - 1].element;
                const lastRect = lastPanel.getBoundingClientRect();
                x = 10;
                y = lastRect.bottom - containerRect.top + 10;
            }
        } else {
            // For desktop, use config position or random
            x = config.x || (50 + Math.random() * (containerRect.width - 500));
            y = config.y || (50 + Math.random() * (containerRect.height - 400));
        }
        
        panel.style.cssText = `
            width: ${isMobile ? (containerRect.width - 20) : (config.width || 350)}px;
            height: ${config.height || 280}px;
            left: ${x}px;
            top: ${y}px;
        `;
        
        panel.innerHTML = `
            <div class="panel-header">
                <div class="panel-title">${config.title}</div>
                <div class="panel-controls">
                    <button class="panel-btn minimize">−</button>
                    <button class="panel-btn close">×</button>
                </div>
            </div>
            <div class="panel-content"></div>
            <div class="panel-resize"></div>
        `;
        
        this.container.appendChild(panel);
        
        // Render content
        const content = panel.querySelector('.panel-content');
        this.renderEngine.renderPanel(config.id, content);
        
        this.registerPanel(panel);
        this.focusPanel(panel);
        
        // Re-initialize terminal events after panel creation
        if (config.id === 'terminal') {
            window.app?.initTerminal();
        }
        
        return panel;
    }
    
    openPanel(panelId) {
        // Check if already exists
        const existing = document.querySelector(`.panel[data-panel-id="${panelId}"]`);
        if (existing) {
            existing.style.display = 'flex';
            this.focusPanel(existing);
            
            // Re-initialize terminal events if terminal panel
            if (panelId === 'terminal') {
                window.app?.initTerminal();
            }
            
            return existing;
        }
        
        // Find panel config from data
        const panelConfig = this.findPanelConfig(panelId);
        if (panelConfig) {
            return this.createPanel(panelConfig);
        }
        
        return null;
    }
    
    findPanelConfig(panelId) {
        const defaults = this.renderEngine.data.panels?.defaults;
        if (!defaults || !defaults[panelId]) return null;
        
        const config = defaults[panelId];
        return {
            id: panelId,
            title: panelId.charAt(0).toUpperCase() + panelId.slice(1),
            width: config.width,
            height: config.height,
            x: config.x,
            y: config.y
        };
    }
    
    // Open all panels by default
    openAllPanels() {
        const defaults = this.renderEngine.data.panels?.defaults;
        if (!defaults) return;
        
        Object.keys(defaults).forEach(panelId => {
            this.openPanel(panelId);
        });
    }
    
    // Adjust panels for mobile
    adjustForMobile() {
        const containerRect = this.container.getBoundingClientRect();
        const isMobile = containerRect.width < 768;
        
        if (isMobile) {
            // Stack panels vertically on mobile
            let y = 10;
            this.panels.forEach((panelData, panelId) => {
                const panel = panelData.element;
                panel.style.width = `${containerRect.width - 20}px`;
                panel.style.left = '10px';
                panel.style.top = `${y}px`;
                
                y += panel.offsetHeight + 10;
            });
        }
    }
}

// ============================================
// CONTEXT MENU
// ============================================
class ContextMenu {
    constructor(renderEngine) {
        this.renderEngine = renderEngine;
        this.menu = null;
        this.init();
    }
    
    init() {
        document.addEventListener('contextmenu', (e) => this.onContextMenu(e));
        document.addEventListener('click', () => this.hide());
    }
    
    onContextMenu(e) {
        // Don't show on panels
        if (e.target.closest('.panel')) return;
        
        e.preventDefault();
        this.show(e.clientX, e.clientY);
    }
    
    show(x, y) {
        this.hide();
        
        this.menu = document.createElement('div');
        this.menu.className = 'context-menu';
        this.menu.style.left = `${x}px`;
        this.menu.style.top = `${y}px`;
        
        // Build menu from data
        const groups = this.renderEngine.data.menu?.groups || [];
        let menuHTML = '';
        
        groups.forEach((group, index) => {
            if (index > 0) {
                menuHTML += '<div class="context-divider"></div>';
            }
            group.items.forEach(item => {
                menuHTML += `<div class="context-item" data-panel="${item.panel}">${item.label}</div>`;
            });
        });
        
        this.menu.innerHTML = menuHTML;
        
        this.menu.addEventListener('click', (e) => {
            const item = e.target.closest('.context-item');
            if (item) {
                const panel = item.dataset.panel;
                window.app?.openPanel(panel);
            }
        });
        
        document.body.appendChild(this.menu);
    }
    
    hide() {
        if (this.menu) {
            this.menu.remove();
            this.menu = null;
        }
    }
}

// ============================================
// TRADING DATA FEED
// ============================================
class TradingFeed {
    constructor(data) {
        this.data = data;
        this.orderBook = { asks: [], bids: [] };
        this.trades = [];
        this.running = false;
        this.basePrice = 43250.50;
    }
    
    start() {
        this.running = true;
        this.fetchRealData();
        this.updateOrderBook();
        this.updateTrades();
        this.updateLatency();
    }
    
    // Fetch real trading data from API
    async fetchRealData() {
        try {
            // Try to fetch real Bitcoin price from CoinGecko API
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
            if (response.ok) {
                const data = await response.json();
                if (data.bitcoin?.usd) {
                    this.basePrice = data.bitcoin.usd;
                    console.log('Real BTC price fetched:', this.basePrice);
                }
            }
        } catch (error) {
            console.log('Error fetching real data, using simulated data:', error.message);
        }
        
        // Fetch again in 1 minute
        setTimeout(() => this.fetchRealData(), 60000);
    }
    
    updateOrderBook() {
        if (!this.running) return;
        
        // Generate asks
        this.orderBook.asks = [];
        for (let i = 0; i < 5; i++) {
            this.orderBook.asks.push({
                price: this.basePrice + (i * 0.50) + (Math.random() - 0.5) * 0.10,
                size: (Math.random() * 2 + 0.1).toFixed(4)
            });
        }
        
        // Generate bids
        this.orderBook.bids = [];
        for (let i = 0; i < 5; i++) {
            this.orderBook.bids.push({
                price: this.basePrice - ((i + 1) * 0.50) + (Math.random() - 0.5) * 0.10,
                size: (Math.random() * 2 + 0.1).toFixed(4)
            });
        }
        
        // Update UI
        const asksContainer = document.getElementById('asks-rows');
        const bidsContainer = document.getElementById('bids-rows');
        
        if (asksContainer) {
            asksContainer.innerHTML = this.orderBook.asks.map(ask => `
                <div class="orderbook-row ask">
                    <span class="price">${ask.price.toFixed(2)}</span>
                    <span class="size">${ask.size}</span>
                    <span class="total">${(ask.price * parseFloat(ask.size)).toFixed(2)}</span>
                </div>
            `).join('');
        }
        
        if (bidsContainer) {
            bidsContainer.innerHTML = this.orderBook.bids.map(bid => `
                <div class="orderbook-row bid">
                    <span class="price">${bid.price.toFixed(2)}</span>
                    <span class="size">${bid.size}</span>
                    <span class="total">${(bid.price * parseFloat(bid.size)).toFixed(2)}</span>
                </div>
            `).join('');
        }
        
        // Update spread
        const spreadEl = document.querySelector('.orderbook-spread');
        if (spreadEl && this.orderBook.asks.length > 0 && this.orderBook.bids.length > 0) {
            const spread = (this.orderBook.asks[0].price - this.orderBook.bids[0].price).toFixed(2);
            spreadEl.textContent = spread;
        }
        
        setTimeout(() => this.updateOrderBook(), 500);
    }
    
    updateTrades() {
        if (!this.running) return;
        
        const now = new Date();
        const timeStr = now.toTimeString().split(' ')[0];
        const side = Math.random() > 0.5 ? 'BUY' : 'SELL';
        const price = (this.basePrice + (Math.random() - 0.5) * 10).toFixed(2);
        const size = (Math.random() * 0.5 + 0.05).toFixed(4);
        
        this.trades.unshift({ time: timeStr, side, price, size });
        if (this.trades.length > 20) this.trades.pop();
        
        const container = document.getElementById('trades-list');
        if (container) {
            container.innerHTML = this.trades.map(trade => `
                <div class="trade-row">
                    <span class="trade-time">${trade.time}</span>
                    <span class="trade-side ${trade.side.toLowerCase()}">${trade.side}</span>
                    <span class="trade-price">${trade.price}</span>
                    <span class="trade-size">${trade.size}</span>
                </div>
            `).join('');
        }
        
        setTimeout(() => this.updateTrades(), 800 + Math.random() * 400);
    }
    
    updateLatency() {
        if (!this.running) return;
        
        const endpoints = this.data.trading?.latencyEndpoints || [];
        
        endpoints.forEach(ep => {
            const el = document.getElementById(ep.id);
            if (el) {
                const latency = Math.random() * 80 + 10;
                el.textContent = `${latency.toFixed(1)} ms`;
                el.className = 'latency-value ' + (latency < 30 ? 'good' : latency < 60 ? 'medium' : 'bad');
            }
        });
        
        // Update top bar latency
        const topBarLatency = document.querySelector('.top-bar .status-item:nth-child(2) .status-value');
        if (topBarLatency) {
            const latency = (Math.random() * 50 + 5).toFixed(1);
            topBarLatency.textContent = `${latency} ms`;
            topBarLatency.className = 'status-value ' + (latency < 20 ? 'active' : latency < 40 ? 'warning' : 'error');
        }
        
        setTimeout(() => this.updateLatency(), 2000);
    }
}

// ============================================
// SYSTEM MONITOR
// ============================================
class SystemMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        this.updateMemory();
        this.updateClock();
        this.updateCPU();
        this.updateNetwork();
    }
    
    updateMemory() {
        // Try to get real memory usage if available
        if (navigator.deviceMemory) {
            const totalMemory = navigator.deviceMemory;
            const usedMemory = (totalMemory * 0.4 + Math.random() * totalMemory * 0.3).toFixed(1);
            const memoryPercent = Math.round((usedMemory / totalMemory) * 100);
            
            const memoryEl = document.querySelector('.top-bar .status-item:nth-child(3) .status-value');
            if (memoryEl) {
                memoryEl.textContent = `${memoryPercent}%`;
                memoryEl.className = 'status-value ' + (memoryPercent < 50 ? 'active' : memoryPercent < 75 ? 'warning' : 'error');
            }
        } else {
            // Fallback to simulated data
            const memory = Math.floor(Math.random() * 30) + 30;
            const memoryEl = document.querySelector('.top-bar .status-item:nth-child(3) .status-value');
            if (memoryEl) {
                memoryEl.textContent = `${memory}%`;
                memoryEl.className = 'status-value ' + (memory < 50 ? 'active' : memory < 75 ? 'warning' : 'error');
            }
        }
        
        setTimeout(() => this.updateMemory(), 3000);
    }
    
    updateCPU() {
        // Try to get real CPU usage if available
        if (navigator.hardwareConcurrency) {
            const cpuCores = navigator.hardwareConcurrency;
            const cpuUsage = Math.floor(Math.random() * 50) + 5;
            
            const cpuEl = document.getElementById('metric-cpu');
            if (cpuEl) {
                cpuEl.textContent = `${cpuUsage}%`;
            }
        }
        
        setTimeout(() => this.updateCPU(), 2000);
    }
    
    updateNetwork() {
        // Try to get real network information
        if (navigator.connection) {
            const connection = navigator.connection;
            const networkSpeed = (connection.downlink || 10) + Math.random() * 5;
            
            const networkEl = document.getElementById('metric-network');
            if (networkEl) {
                networkEl.textContent = `${networkSpeed.toFixed(1)} MB/s`;
            }
        } else {
            // Fallback to simulated data
            const networkSpeed = (Math.random() * 5 + 0.5).toFixed(1);
            const networkEl = document.getElementById('metric-network');
            if (networkEl) {
                networkEl.textContent = `${networkSpeed} MB/s`;
            }
        }
        
        setTimeout(() => this.updateNetwork(), 5000);
    }
    
    updateClock() {
        const update = () => {
            const clock = document.getElementById('clock');
            if (clock) {
                const now = new Date();
                clock.textContent = now.toLocaleTimeString();
            }
        };
        update();
        setInterval(update, 1000);
    }
}

// ============================================
// TERMINAL
// ============================================
class Terminal {
    constructor(data) {
        this.data = data;
        this.commands = new Map();
        this.init();
    }
    
    init() {
        this.registerCommand('help', () => this.help());
        this.registerCommand('clear', () => this.clear());
        this.registerCommand('open', (args) => this.open(args));
        this.registerCommand('close', (args) => this.close(args));
        this.registerCommand('status', () => this.status());
        this.registerCommand('system', () => this.system());
        this.registerCommand('mobile', () => this.mobile());
        this.registerCommand('trading', () => this.trading());
        this.registerCommand('profile', () => this.profile());
        
        // Register custom commands from data
        const customCommands = this.data.terminal?.customCommands || {};
        Object.entries(customCommands).forEach(([name, handler]) => {
            this.registerCommand(name, handler);
        });
    }
    
    registerCommand(name, handler) {
        this.commands.set(name, handler);
    }
    
    execute(input) {
        const trimmed = input.trim();
        if (!trimmed) return null;
        
        const parts = trimmed.split(' ');
        const cmd = parts[0].toLowerCase();
        const args = parts.slice(1);
        
        if (this.commands.has(cmd)) {
            try {
                return this.commands.get(cmd)(args);
            } catch (e) {
                return { type: 'error', text: e.message };
            }
        }
        
        return { type: 'error', text: `Unknown command: ${cmd}` };
    }
    
    help() {
        return {
            type: 'output',
            text: `Available commands:
  help              Show this help
  clear             Clear terminal
  open <panel>      Open a panel
  close <panel>     Close a panel
  status            System status
  system            System information
  mobile            Mobile status
  trading           Trading information
  profile           Personal profile`
        };
    }
    
    clear() {
        return { type: 'clear' };
    }
    
    open(args) {
        const panel = args[0];
        if (!panel) return { type: 'error', text: 'Usage: open <panel>' };
        
        window.app?.openPanel(panel);
        return { type: 'output', text: `Opening ${panel}...` };
    }
    
    close(args) {
        const panel = args[0];
        if (!panel) return { type: 'error', text: 'Usage: close <panel>' };
        
        const el = document.querySelector(`.panel[data-panel-id="${panel}"]`);
        if (el) el.style.display = 'none';
        
        return { type: 'output', text: `Closing ${panel}...` };
    }
    
    status() {
        const panels = document.querySelectorAll('.panel').length;
        return {
            type: 'output',
            text: `System Status:
  Panels: ${panels}
  Uptime: ${Math.floor(performance.now() / 1000)}s
  Mobile: ${window.innerWidth < 768 ? 'Yes' : 'No'}`
        };
    }
    
    system() {
        const info = [
            `Browser: ${navigator.userAgent}`,
            `Platform: ${navigator.platform}`,
            `Language: ${navigator.language}`,
            `Cores: ${navigator.hardwareConcurrency || 'Unknown'}`,
            `Memory: ${navigator.deviceMemory ? navigator.deviceMemory + 'GB' : 'Unknown'}`
        ];
        return {
            type: 'output',
            text: `System Information:
${info.map(i => `  ${i}`).join('\n')}`
        };
    }
    
    mobile() {
        const isMobile = window.innerWidth < 768;
        const touch = 'ontouchstart' in window;
        return {
            type: 'output',
            text: `Mobile Status:
  Screen Width: ${window.innerWidth}px
  Mobile: ${isMobile ? 'Yes' : 'No'}
  Touch: ${touch ? 'Yes' : 'No'}`
        };
    }
    
    trading() {
        const symbol = this.data.trading?.symbol || 'BTC-PERP';
        return {
            type: 'output',
            text: `Trading Information:
  Symbol: ${symbol}
  Strategies: ${this.data.trading?.strategies?.length || 0}
  Endpoints: ${this.data.trading?.latencyEndpoints?.length || 0}`
        };
    }
    
    profile() {
        const profile = this.data.profile || {};
        return {
            type: 'output',
            text: `Personal Profile:
  Name: ${profile.name || 'N/A'}
  Title: ${profile.title || 'N/A'}
  Availability: ${profile.availability || 'N/A'}`
        };
    }
}

// ============================================
// MAIN APPLICATION
// ============================================
class App {
    constructor(data) {
        this.data = data;
        this.renderEngine = new RenderEngine(data);
        this.panelManager = null;
        this.contextMenu = null;
        this.tradingFeed = null;
        this.systemMonitor = null;
        this.terminal = new Terminal(data);
    }
    
    init() {
        // Render menu
        this.renderEngine.renderMenu();
        
        // Initialize panel manager
        const workspace = document.querySelector('.workspace');
        if (workspace) {
            this.panelManager = new PanelManager(workspace, this.renderEngine);
        }
        
        // Initialize context menu
        this.contextMenu = new ContextMenu(this.renderEngine);
        
        // Initialize trading feed
        this.tradingFeed = new TradingFeed(this.data);
        this.tradingFeed.start();
        
        // Initialize system monitor
        this.systemMonitor = new SystemMonitor();
        
        // Initialize UI
        this.initMenuBar();
        this.initTerminal();
        this.initResizeListener();
        
        // Open all panels by default
        setTimeout(() => {
            this.panelManager?.openAllPanels();
        }, 500);
        
        window.app = this;
    }
    
    initMenuBar() {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const panel = item.dataset.panel;
                if (panel) this.openPanel(panel);
            });
            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const panel = item.dataset.panel;
                if (panel) this.openPanel(panel);
            });
        });
    }
    
    initTerminal() {
        // Remove existing event listeners to avoid duplicates
        document.querySelectorAll('.terminal-input').forEach(input => {
            // Remove any existing event listeners
            const newInput = input.cloneNode(true);
            input.parentNode.replaceChild(newInput, input);
            
            // Add new event listener
            newInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const command = newInput.value;
                    newInput.value = '';
                    
                    const output = newInput.closest('.terminal').querySelector('.terminal-output');
                    if (output) {
                        // Add command line
                        const cmdLine = document.createElement('div');
                        cmdLine.className = 'terminal-line prompt';
                        cmdLine.textContent = `> ${command}`;
                        output.appendChild(cmdLine);
                        
                        // Execute
                        const result = this.terminal.execute(command);
                        if (result) {
                            if (result.type === 'clear') {
                                output.innerHTML = '';
                            } else {
                                const resultLine = document.createElement('div');
                                resultLine.className = `terminal-line ${result.type}`;
                                resultLine.textContent = result.text;
                                output.appendChild(resultLine);
                            }
                        }
                        
                        output.scrollTop = output.scrollHeight;
                    }
                }
            });
        });
    }
    
    initResizeListener() {
        window.addEventListener('resize', () => {
            this.panelManager?.adjustForMobile();
        });
    }
    
    openPanel(panelId) {
        return this.panelManager?.openPanel(panelId);
    }
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Use PERSONAL_DATA from data.js
    const data = window.PERSONAL_DATA || {};
    const app = new App(data);
    app.init();
});
