// ============================================
// PANEL CONFIGURATIONS
// Dynamic panel definitions for Geek-Style Personal Page
// ============================================

const panelConfigs = {
    // Personal Panels
    profile: {
        title: 'Profile',
        width: 380,
        height: 280,
        content: `
            <div class="profile-info">
                <div class="profile-avatar">XY</div>
                <div class="profile-details">
                    <div class="profile-name">Xiong Yu</div>
                    <div class="profile-title">Software Engineer</div>
                    <div class="profile-desc">Full-Stack Developer | Algorithm Expert | System Architect</div>
                    <div class="profile-bio">Passionate about building high-performance systems and exploring cutting-edge technologies. Focus on distributed systems, real-time data processing, and algorithmic trading.</div>
                </div>
            </div>
        `
    },
    
    skills: {
        title: 'Skills',
        width: 360,
        height: 400,
        content: `
            <div class="skills-container">
                <div class="skills-list">
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">JavaScript / TypeScript</span>
                            <span class="skill-percent">95%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 95%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Python</span>
                            <span class="skill-percent">92%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 92%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Rust / C++</span>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">System Architecture</span>
                            <span class="skill-percent">88%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 88%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Machine Learning</span>
                            <span class="skill-percent">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">DevOps / Cloud</span>
                            <span class="skill-percent">82%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 82%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    
    contact: {
        title: 'Contact',
        width: 320,
        height: 280,
        content: `
            <div class="contact-list">
                <div class="contact-item" onclick="window.copyToClipboard('xiong.yu@example.com')">
                    <div class="contact-icon">@</div>
                    <div class="contact-details">
                        <div class="contact-label">Email</div>
                        <div class="contact-value">xiong.yu@example.com</div>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">GH</div>
                    <div class="contact-details">
                        <div class="contact-label">GitHub</div>
                        <div class="contact-value">github.com/xiongyu</div>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">LI</div>
                    <div class="contact-details">
                        <div class="contact-label">LinkedIn</div>
                        <div class="contact-value">linkedin.com/in/xiongyu</div>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">TW</div>
                    <div class="contact-details">
                        <div class="contact-label">Twitter</div>
                        <div class="contact-value">@xiongyu_dev</div>
                    </div>
                </div>
            </div>
        `
    },
    
    // Project Panels
    projects: {
        title: 'Projects',
        width: 400,
        height: 350,
        content: `
            <div class="projects-list">
                <div class="project-item">
                    <div class="project-header">
                        <span class="project-name">HFT Trading Engine</span>
                        <span class="project-status active">Active</span>
                    </div>
                    <div class="project-desc">High-frequency trading system with sub-microsecond latency, built in Rust with FPGA acceleration.</div>
                    <div class="project-tech">
                        <span class="tech-tag">Rust</span>
                        <span class="tech-tag">FPGA</span>
                        <span class="tech-tag">ZeroMQ</span>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-header">
                        <span class="project-name">Distributed KV Store</span>
                        <span class="project-status active">Active</span>
                    </div>
                    <div class="project-desc">Distributed key-value storage system with Raft consensus, supporting millions of QPS.</div>
                    <div class="project-tech">
                        <span class="tech-tag">Go</span>
                        <span class="tech-tag">Raft</span>
                        <span class="tech-tag">gRPC</span>
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-header">
                        <span class="project-name">AI Quant Platform</span>
                        <span class="project-status beta">Beta</span>
                    </div>
                    <div class="project-desc">Machine learning platform for quantitative trading strategies with real-time backtesting.</div>
                    <div class="project-tech">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">PyTorch</span>
                        <span class="tech-tag">CUDA</span>
                    </div>
                </div>
            </div>
        `
    },
    
    experience: {
        title: 'Experience',
        width: 380,
        height: 400,
        content: `
            <div class="experience-list">
                <div class="experience-item">
                    <div class="experience-company">Tech Innovations Inc.</div>
                    <div class="experience-position">Senior Software Engineer</div>
                    <div class="experience-period">2020 - Present</div>
                    <div class="experience-desc">Leading the development of high-frequency trading systems and distributed data platforms.</div>
                </div>
                <div class="experience-item">
                    <div class="experience-company">Quantitative Research Lab</div>
                    <div class="experience-position">Algorithm Engineer</div>
                    <div class="experience-period">2018 - 2020</div>
                    <div class="experience-desc">Developed algorithmic trading strategies and real-time risk management systems.</div>
                </div>
                <div class="experience-item">
                    <div class="experience-company">Cloud Systems Co.</div>
                    <div class="experience-position">Full-Stack Developer</div>
                    <div class="experience-period">2016 - 2018</div>
                    <div class="experience-desc">Built scalable web applications and microservices architecture.</div>
                </div>
            </div>
        `
    },
    
    // Trading Panels
    latency: {
        title: 'Network Latency',
        width: 320,
        height: 280,
        content: `
            <div class="latency-grid">
                <div class="latency-item">
                    <div class="latency-label">Cloudflare</div>
                    <div class="latency-value" id="latency-a">--</div>
                </div>
                <div class="latency-item">
                    <div class="latency-label">Google DNS</div>
                    <div class="latency-value" id="latency-b">--</div>
                </div>
                <div class="latency-item">
                    <div class="latency-label">Local</div>
                    <div class="latency-value" id="latency-c">--</div>
                </div>
                <div class="latency-item">
                    <div class="latency-label">GitHub</div>
                    <div class="latency-value" id="latency-d">--</div>
                </div>
            </div>
        `
    },
    
    orderbook: {
        title: 'Order Book',
        width: 340,
        height: 400,
        content: `
            <div class="orderbook-container">
                <div class="orderbook-header-info">
                    <span class="orderbook-symbol">BTC/USDT</span>
                    <span class="orderbook-spread">Spread: 0.12</span>
                </div>
                <div class="orderbook-rows" id="asks-rows">
                    <div class="orderbook-row ask">
                        <span class="price">43250.50</span>
                        <span class="size">0.4500</span>
                        <span class="total">19462.73</span>
                    </div>
                    <div class="orderbook-row ask">
                        <span class="price">43251.00</span>
                        <span class="size">1.2000</span>
                        <span class="total">51901.20</span>
                    </div>
                    <div class="orderbook-row ask">
                        <span class="price">43251.50</span>
                        <span class="size">0.8000</span>
                        <span class="total">34601.20</span>
                    </div>
                    <div class="orderbook-row ask">
                        <span class="price">43252.00</span>
                        <span class="size">2.5000</span>
                        <span class="total">108130.00</span>
                    </div>
                    <div class="orderbook-row ask">
                        <span class="price">43252.50</span>
                        <span class="size">1.8000</span>
                        <span class="total">77854.50</span>
                    </div>
                </div>
                <div class="orderbook-rows" id="bids-rows">
                    <div class="orderbook-row bid">
                        <span class="price">43250.38</span>
                        <span class="size">0.6000</span>
                        <span class="total">25950.23</span>
                    </div>
                    <div class="orderbook-row bid">
                        <span class="price">43249.88</span>
                        <span class="size">1.5000</span>
                        <span class="total">64874.82</span>
                    </div>
                    <div class="orderbook-row bid">
                        <span class="price">43249.38</span>
                        <span class="size">0.9000</span>
                        <span class="total">38924.44</span>
                    </div>
                    <div class="orderbook-row bid">
                        <span class="price">43248.88</span>
                        <span class="size">3.2000</span>
                        <span class="total">138396.42</span>
                    </div>
                    <div class="orderbook-row bid">
                        <span class="price">43248.38</span>
                        <span class="size">2.1000</span>
                        <span class="total">90821.60</span>
                    </div>
                </div>
            </div>
        `
    },
    
    trades: {
        title: 'Live Trades',
        width: 360,
        height: 380,
        content: `
            <div class="trades-list" id="trades-list">
                <div class="trade-item">
                    <span class="trade-time">14:32:15</span>
                    <span class="trade-side buy">BUY</span>
                    <span class="trade-price">43250.45</span>
                    <span class="trade-amount">0.2500</span>
                </div>
                <div class="trade-item">
                    <span class="trade-time">14:32:14</span>
                    <span class="trade-side sell">SELL</span>
                    <span class="trade-price">43250.42</span>
                    <span class="trade-amount">0.1800</span>
                </div>
                <div class="trade-item">
                    <span class="trade-time">14:32:12</span>
                    <span class="trade-side buy">BUY</span>
                    <span class="trade-price">43250.40</span>
                    <span class="trade-amount">0.4500</span>
                </div>
                <div class="trade-item">
                    <span class="trade-time">14:32:10</span>
                    <span class="trade-side buy">BUY</span>
                    <span class="trade-price">43250.38</span>
                    <span class="trade-amount">0.3000</span>
                </div>
                <div class="trade-item">
                    <span class="trade-time">14:32:08</span>
                    <span class="trade-side sell">SELL</span>
                    <span class="trade-price">43250.35</span>
                    <span class="trade-amount">0.2200</span>
                </div>
            </div>
        `
    },
    
    // System Panels
    performance: {
        title: 'System Performance',
        width: 340,
        height: 320,
        content: `
            <div class="perf-grid">
                <div class="perf-item">
                    <div class="perf-label">CPU Usage</div>
                    <div class="perf-value" id="perf-cpu">12%</div>
                </div>
                <div class="perf-item">
                    <div class="perf-label">Memory</div>
                    <div class="perf-value" id="perf-mem">45%</div>
                </div>
                <div class="perf-item">
                    <div class="perf-label">Network</div>
                    <div class="perf-value" id="perf-net">1.2 MB/s</div>
                </div>
                <div class="perf-item">
                    <div class="perf-label">Disk I/O</div>
                    <div class="perf-value" id="perf-disk">0.8 MB/s</div>
                </div>
            </div>
        `
    },
    
    strategy: {
        title: 'Strategy Status',
        width: 320,
        height: 300,
        content: `
            <div class="strategy-list">
                <div class="strategy-item">
                    <span class="strategy-name">Market Making</span>
                    <span class="strategy-status running">Running</span>
                </div>
                <div class="strategy-item">
                    <span class="strategy-name">Arbitrage</span>
                    <span class="strategy-status running">Running</span>
                </div>
                <div class="strategy-item">
                    <span class="strategy-name">Trend Following</span>
                    <span class="strategy-status paused">Paused</span>
                </div>
                <div class="strategy-item">
                    <span class="strategy-name">Mean Reversion</span>
                    <span class="strategy-status running">Running</span>
                </div>
                <div class="strategy-item">
                    <span class="strategy-name">Scalping</span>
                    <span class="strategy-status stopped">Stopped</span>
                </div>
            </div>
        `
    },
    
    terminal: {
        title: 'Terminal',
        width: 500,
        height: 350,
        content: `
            <div class="terminal-container">
                <div class="terminal-output">
                    <div class="terminal-line">Geek-Style Personal Terminal v2.0</div>
                    <div class="terminal-line">Type 'help' for available commands</div>
                    <div class="terminal-line"></div>
                </div>
                <div class="terminal-input-line">
                    <span class="terminal-prompt">></span>
                    <input type="text" class="terminal-input" placeholder="Enter command..." autocomplete="off" spellcheck="false">
                </div>
            </div>
        `
    },
    
    help: {
        title: 'Keyboard Shortcuts',
        width: 380,
        height: 320,
        content: `
            <div class="terminal-container">
                <div class="terminal-output" style="height: 250px;">
                    <div class="terminal-line">Keyboard Shortcuts:</div>
                    <div class="terminal-line"></div>
                    <div class="terminal-line">Ctrl + H    Show this help</div>
                    <div class="terminal-line">Ctrl + T    Open terminal</div>
                    <div class="terminal-line">Ctrl + P    Open profile</div>
                    <div class="terminal-line">Ctrl + A    Arrange panels</div>
                    <div class="terminal-line">Ctrl + X    Close all panels</div>
                    <div class="terminal-line">ESC         Minimize all panels</div>
                    <div class="terminal-line"></div>
                    <div class="terminal-line">Right-click on desktop for context menu</div>
                    <div class="terminal-line">Drag panels by header to move</div>
                    <div class="terminal-line">Drag corner handle to resize</div>
                </div>
            </div>
        `
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = panelConfigs;
} else if (typeof window !== 'undefined') {
    window.panelConfigs = panelConfigs;
}
