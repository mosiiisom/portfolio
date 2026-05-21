export const works = [
  {
    id: "01",
    title: "Job Intelligence Engine",
    description: "Automated job intelligence system with CI/CD-powered scraping pipeline and Streamlit dashboard.",
    longDescription: `
# Project Overview

A lightweight yet powerful automated job intelligence system that scrapes remote job opportunities every hour, stores them in a structured SQLite database, and visualizes everything through an interactive Streamlit dashboard.

## Key Features

- Fully automated scraping pipeline using **Playwright**
- CI/CD integration with **GitHub Actions**
- Persistent data storage with **SQLite**
- Advanced search, filtering, and tagging system
- Clean, interactive **Streamlit** dashboard

## Technical Highlights

- Modular and maintainable architecture
- Docker support for consistent deployment
- Smart duplicate detection and data cleaning
- Scheduled hourly updates

> This project strengthened my skills in web scraping, automation, data pipelines, and building production-ready internal tools.
    `,
    stacks: ["Python", "Playwright", "Streamlit", "SQLite", "GitHub Actions", "Docker"],
    link: "/works/01",
    github: "https://github.com/mosiiisom/job-intelligence-engine",
    live: "https://job-intelligence.streamlit.app/",
    image: "/images/works/job-intelligence-engine.png",
    color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: "02",
    title: "RSI Heatmap Crypto",
    description: "Real-time Relative Strength Index (RSI) heatmap and analytics dashboard for top 100 cryptocurrencies.",
    longDescription: `
# Project Overview

A beautiful and practical **real-time crypto analytics dashboard** that tracks the Relative Strength Index (RSI) of the top 100 cryptocurrencies and visualizes market sentiment through color-coded heatmaps and interactive charts.

## Key Features

- Live RSI tracking for Top 100 coins
- Smart color-coded heatmap (Oversold → Overbought)
- Interactive Plotly scatter visualization
- RSI trend comparison (current vs previous)
- Automatic data updates every 30 minutes
- SQLite-backed storage

## RSI Logic

- **🟢 ≤ 30** → Oversold (potential buy zone)
- **🟡 30–45** → Weak momentum
- **⚪ 45–55** → Neutral
- **🟠 55–70** → Strong momentum
- **🔴 ≥ 70** → Overbought (potential sell zone)

## Technical Stack

- **Streamlit** for the dashboard
- **Plotly** for interactive charts
- **TradingView** data via unofficial API
- SQLite for local persistence
- Automated background updates

> Built to quickly scan market conditions and identify potential trading opportunities.
    `,
    stacks: ["Python", "Streamlit", "Plotly", "SQLite", "Pandas", "TradingView API"],
    link: "/works/02",
    github: "https://github.com/mosiiisom/rsi-heatmap-crypto",
    live: "https://rsi-heatmap-crypto.streamlit.app/",
    image: "/images/works/rsi_heat_map.png",
    color: "from-emerald-500/20 via-cyan-500/20 to-teal-500/20",
  },
  {
    id: "03",
    title: "JForex Ticker Downloader",
    description: "Automated high-frequency tick data downloader from Dukascopy (JForex) with Parquet storage and Docker support.",
    longDescription: `
# Project Overview

A robust and efficient automated downloader that fetches **tick-level historical data** (bid & ask) from Dukascopy’s public JForex feed and stores it in highly optimized **Parquet** files.

Ideal for quantitative traders, backtesters, and anyone needing clean, reliable tick data.

## Key Features

- High-precision tick data (bid & ask)
- Incremental updates — only downloads missing data
- Hourly Parquet storage (excellent compression & query speed)
- Configurable retention (keeps last N days fresh)
- Smart scheduling with intelligent sleep logic
- Full **Docker + docker-compose** support
- Centralized logging system

## Technical Highlights

- Built with **Python** + **Pandas**
- Efficient Parquet format for large time-series data
- Robust error handling and retry logic
- Supports multiple major forex pairs and metals
- Production-ready with Docker

> This tool powers reliable data infrastructure for trading systems and algorithmic research.
    `,
    stacks: ["Python", "Pandas", "Scaping", "Parquet", "Docker", "Dukascopy API", "Requests"],
    link: "/works/03",
    github: "https://github.com/mosiiisom/jforex-ticker-downloader",
    live: "",
    image: "/images/works/jforex-ticker-downloader.png",
    color: "from-amber-500/20 via-orange-500/20 to-red-500/20",
  },
  {
    id: "04",
    title: "Mosi Portfolio",
    description: "This very portfolio — a modern, minimal, and highly interactive Next.js template with smooth animations.",
    longDescription: `
# Project Overview

This is **my current portfolio website** — a premium, dark-first, minimal design built to showcase my work in the best possible way.

## Key Features

- Fully responsive modern design
- Smooth scroll animations and micro-interactions
- Floating project preview on hover (Works section)
- Markdown-supported project pages
- Fast performance with Next.js App Router
- Contact form with server actions + Resend
- Premium typography and visual hierarchy

## Technologies Used

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **React Markdown** for rich project content
- Deployed on Vercel

## Goal

Create a portfolio that feels **alive**, loads instantly, and leaves a strong impression within the first 5–10 seconds — exactly what hiring managers and clients want to see.
    `,
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Markdown", "Vercel"],
    link: "/works/04",
    github: "https://github.com/mosiiisom/portfolio",
    live: "https://mosi.my",
    image: "/images/works/portfolio.png",
    color: "from-[#72ebfa]/20 via-blue-500/20 to-indigo-500/20",
  },
];