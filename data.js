// ============================================
// PERSONAL DATA CONFIGURATION
// Modify this file to update your information
// ============================================

const PERSONAL_DATA = {
    // ============================================
    // PROFILE SECTION
    // ============================================
    profile: {
        name: "Xiong Yu",
        initials: "XY",
        title: "Quantitative Researcher & HFT Developer",
        credentials: "PhD Mathematics | Rust Expert | Systems Engineer | HFT Market Maker",
        about: "Expert in high-frequency trading systems and low-latency optimization. Specializes in Rust systems programming, kernel bypass networking, and algorithmic trading strategies.",
        
        // Detailed biography
        biography: `
            As a seasoned quantitative researcher and systems engineer, I have dedicated my career to building ultra-low latency trading systems and high-performance software. My expertise spans from operating system development to high-frequency trading infrastructure, with a deep focus on Rust programming and kernel bypass networking.
            
            With over 8 years of experience in the financial technology sector, I have designed and implemented complete HFT market making systems, including custom network stacks, real-time risk management, and execution engines. My work has consistently delivered sub-microsecond latency improvements and significant performance gains.
            
            Beyond trading systems, I am passionate about open-source development and have contributed to various projects in the Rust ecosystem. I believe in the power of systems programming to solve complex performance challenges and drive innovation in financial markets.
        `,
        
        // Location
        location: {
            city: "New York",
            country: "USA",
            timezone: "EST"
        },
        
        // Availability status
        availability: "Open to job opportunities, investment, venture capital, and consulting",
        
        // Links (hidden for now)
        links: {
            cv: "",
            blog: "",
            papers: ""
        }
    },

    // ============================================
    // SKILLS SECTION
    // ============================================
    skills: [
        { name: "Rust", level: 95, category: "languages" },
        { name: "C/C++", level: 90, category: "languages" },
        { name: "Python", level: 85, category: "languages" },
        { name: "Go", level: 80, category: "languages" },
        { name: "TypeScript", level: 75, category: "languages" },
        { name: "Kernel Bypass", level: 92, category: "systems" },
        { name: "DPDK", level: 88, category: "systems" },
        { name: "HFT Systems", level: 95, category: "quant" },
        { name: "Algorithm Design", level: 90, category: "quant" },
        { name: "Networking", level: 85, category: "systems" },
        { name: "Operating Systems", level: 88, category: "systems" }
    ],

    // ============================================
    // CONTACT INFORMATION
    // ============================================
    contact: {
        email: {
            value: "me@xiongyu.org",
            display: "me@xiongyu.org"
        },
        twitter: {
            value: "https://x.com/yuxiong_hft",
            display: "@yuxiong_hft"
        },
        telegram: {
            value: "https://t.me/yuxiong_hft",
            display: "@yuxiong_hft"
        },
        github: {
            value: "https://github.com/xiongyu23",
            display: "github.com/xiongyu23"
        },
        linkedin: {
            value: "https://www.linkedin.com/in/yu-xiong-27aa4421a/",
            display: "linkedin.com/in/yu-xiong"
        }
    },

    // ============================================
    // PROJECTS
    // ============================================
    projects: [
        {
            id: "rust-os",
            name: "Rust Operating System",
            status: "completed",
            description: "Custom operating system kernel written entirely in Rust, featuring preemptive multitasking, memory management, and a minimal network stack.",
            tags: ["Rust", "Operating Systems", "Kernel", "Systems Programming"],
            highlights: [
                "Preemptive multitasking kernel",
                "Memory management with paging",
                "Minimal network stack implementation"
            ]
        },
        {
            id: "hft-engine",
            name: "HFT Market Making Engine",
            status: "active",
            description: "Complete high-frequency trading system with kernel bypass networking, real-time risk management, and execution optimization.",
            tags: ["Rust", "DPDK", "Kernel Bypass", "HFT", "Market Making"],
            highlights: [
                "Sub-microsecond latency",
                "Kernel bypass networking",
                "Real-time risk management"
            ]
        },
        {
            id: "quant-strategies",
            name: "Quantitative Strategies",
            status: "active",
            description: "Collection of algorithmic trading strategies including statistical arbitrage, mean reversion, and trend following.",
            tags: ["Python", "Rust", "Quantitative Finance", "Trading Strategies"],
            highlights: [
                "Statistical arbitrage models",
                "Mean reversion strategies",
                "Machine learning integration"
            ]
        },
        {
            id: "network-stack",
            name: "Low-Latency Network Stack",
            status: "completed",
            description: "Custom network stack optimized for trading applications, featuring zero-copy design and minimal overhead.",
            tags: ["C", "Rust", "Networking", "DPDK"],
            highlights: [
                "Zero-copy design",
                "Minimal packet processing overhead",
                "Optimized for trading applications"
            ]
        }
    ],

    // ============================================
    // WORK EXPERIENCE
    // ============================================
    experience: [
        {
            company: "Quantitative Trading Firm",
            role: "Lead Systems Engineer",
            period: "2022 - Present",
            location: "New York, NY",
            description: "Lead the development of ultra-low latency trading systems and infrastructure. Responsible for system architecture, performance optimization, and team leadership.",
            achievements: [
                "Reduced trading latency by 60% through kernel bypass implementation",
                "Designed and implemented complete HFT market making system",
                "Led team of 5 engineers in developing next-generation trading infrastructure"
            ],
            technologies: ["Rust", "C++", "DPDK", "Kernel Bypass", "Linux"]
        },
        {
            company: "Hedge Fund",
            role: "Quantitative Developer",
            period: "2020 - 2022",
            location: "Chicago, IL",
            description: "Developed algorithmic trading strategies and execution systems. Focus on performance optimization and risk management.",
            achievements: [
                "Implemented real-time risk monitoring system",
                "Developed statistical arbitrage strategies with Sharpe ratio > 2.5",
                "Optimized order execution algorithms"
            ],
            technologies: ["Python", "C++", "Rust", "CUDA"]
        },
        {
            company: "Technology Startup",
            role: "Systems Programmer",
            period: "2018 - 2020",
            location: "San Francisco, CA",
            description: "Worked on high-performance distributed systems and real-time data processing pipelines.",
            achievements: [
                "Built scalable microservices architecture",
                "Implemented real-time stream processing system",
                "Optimized system performance by 5x"
            ],
            technologies: ["Go", "Rust", "Kafka", "Cassandra"]
        }
    ],

    // ============================================
    // EDUCATION
    // ============================================
    education: [
        {
            institution: "The Graduate Center, City University of New York",
            degree: "PhD in Mathematics",
            field: "Applied Mathematics / Financial Mathematics",
            period: "2018 - 2023",
            highlights: [
                "Dissertation: 'Low-Latency Trading Systems: Mathematical Foundations and Implementation'",
                "Focus on stochastic calculus and market microstructure",
                "Teaching Assistant for Advanced Calculus and Linear Algebra"
            ]
        },
        {
            institution: "University of Portland",
            degree: "Bachelor of Science",
            field: "Mathematics",
            period: "2014 - 2018",
            highlights: [
                "GPA: 3.9/4.0",
                "Specialization in Applied Mathematics",
                "Relevant coursework: Algorithms, Data Structures, Computer Systems"
            ]
        }
    ],

    // ============================================
    // TRADING CONFIGURATION (Real-time data)
    // ============================================
    trading: {
        // Symbol to display in order book
        symbol: "BTC-PERP",
        
        // Latency monitoring endpoints
        latencyEndpoints: [
            { id: "exchange-a", name: "Exchange A", target: "" },
            { id: "exchange-b", name: "Exchange B", target: "" },
            { id: "colo", name: "Colo", target: "" },
            { id: "backup", name: "Backup", target: "" }
        ],
        
        // Strategy configurations
        strategies: [
            { name: "Market Making", status: "running" },
            { name: "Arbitrage", status: "running" },
            { name: "Trend Following", status: "paused" },
            { name: "Mean Reversion", status: "running" },
            { name: "Scalping", status: "stopped" }
        ]
    },

    // ============================================
    // SYSTEM METRICS
    // ============================================
    metrics: {
        // These can be updated in real-time via JavaScript
        cpu: { label: "CPU Usage", value: "12%", unit: "" },
        memory: { label: "Memory", value: "45%", unit: "" },
        network: { label: "Network", value: "1.2", unit: "MB/s" },
        disk: { label: "Disk I/O", value: "0.8", unit: "MB/s" }
    },

    // ============================================
    // TERMINAL COMMANDS
    // ============================================
    terminal: {
        welcomeMessage: [
            "Quantitative Research Terminal v2.0",
            "Type 'help' for available commands",
            ""
        ],
        
        customCommands: {
            // Add custom commands here
            // name: (args) => ({ type: 'output', text: 'result' })
        }
    },

    // ============================================
    // MENU CONFIGURATION
    // ============================================
    menu: {
        groups: [
            {
                label: "View",
                items: [
                    { label: "Profile", panel: "profile" },
                    { label: "Skills", panel: "skills" },
                    { label: "Contact", panel: "contact" }
                ]
            },
            {
                label: "Research",
                items: [
                    { label: "Projects", panel: "projects" },
                    { label: "Experience", panel: "experience" },
                    { label: "Education", panel: "education" }
                ]
            },
            {
                label: "Trading",
                items: [
                    { label: "Latency", panel: "latency" },
                    { label: "Order Book", panel: "orderbook" },
                    { label: "Trades", panel: "trades" }
                ]
            },
            {
                label: "Tools",
                items: [
                    { label: "Metrics", panel: "performance" },
                    { label: "Strategies", panel: "strategy" },
                    { label: "Terminal", panel: "terminal" }
                ]
            }
        ]
    },

    // ============================================
    // PANEL CONFIGURATION
    // ============================================
    panels: {
        // Default panel positions and sizes (non-overlapping)
        defaults: {
            profile: { width: 400, height: 360, x: 40, y: 40 },
            skills: { width: 380, height: 400, x: 460, y: 40 },
            contact: { width: 320, height: 280, x: 40, y: 420 },
            projects: { width: 420, height: 400, x: 860, y: 40 },
            experience: { width: 400, height: 380, x: 1300, y: 40 },
            education: { width: 320, height: 240, x: 400, y: 420 },
            latency: { width: 300, height: 240, x: 1300, y: 440 },
            orderbook: { width: 320, height: 400, x: 1620, y: 40 },
            trades: { width: 320, height: 320, x: 1620, y: 460 },
            performance: { width: 300, height: 240, x: 1300, y: 700 },
            strategy: { width: 320, height: 280, x: 1620, y: 800 },
            terminal: { width: 500, height: 300, x: 740, y: 420 }
        }
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PERSONAL_DATA;
} else if (typeof window !== 'undefined') {
    window.PERSONAL_DATA = PERSONAL_DATA;
}
