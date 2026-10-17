import type { Locale } from "./i18n";

type WorkContent = {
  title: string;
  description: string;
  longDescription: string;
  role: string;
};

type Work = {
  id: string;
  year: string;
  stacks: string[];
  github: string;
  live: string;
  image: string;
  color: string;
  content: Record<Locale, WorkContent>;
};

export type LocalizedWork = Omit<Work, "content"> & WorkContent;

const works: Work[] = [
  {
    id: "01",
    year: "2026",
    stacks: ["Python", "Playwright", "Streamlit", "SQLite", "GitHub Actions", "Docker"],
    github: "https://github.com/mosiiisom/job-intelligence-engine",
    live: "https://job-intelligence.streamlit.app/",
    image: "/images/works/job-intelligence-engine.png",
    color: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
    content: {
      en: {
        title: "Job Intelligence Engine",
        description: "Automated job intelligence system with CI/CD-powered scraping pipeline and Streamlit dashboard.",
        role: "Design & Full Development",
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
      },
      fa: {
        title: "موتور هوشمند رصد فرصت‌های شغلی",
        description: "سامانه خودکار جمع‌آوری و تحلیل آگهی‌های شغلی با پایپ‌لاین CI/CD و داشبورد Streamlit.",
        role: "طراحی و توسعه کامل",
        longDescription: `
# معرفی پروژه

یک سامانه سبک اما قدرتمند که هر ساعت آگهی‌های شغلی دورکاری را به‌صورت خودکار جمع‌آوری می‌کند، آن‌ها را در یک پایگاه داده SQLite ساختاریافته نگه می‌دارد و همه‌چیز را در یک داشبورد تعاملی Streamlit نمایش می‌دهد.

## قابلیت‌های اصلی

- پایپ‌لاین کاملاً خودکار جمع‌آوری داده با **Playwright**
- اجرای زمان‌بندی‌شده و CI/CD با **GitHub Actions**
- ذخیره‌سازی ماندگار داده با **SQLite**
- جست‌وجو، فیلتر و برچسب‌گذاری پیشرفته
- داشبورد تمیز و تعاملی با **Streamlit**

## نکات فنی

- معماری ماژولار و قابل نگهداری
- پشتیبانی از Docker برای استقرار یکسان در هر محیط
- تشخیص هوشمند آگهی‌های تکراری و پاک‌سازی داده
- به‌روزرسانی خودکار در هر ساعت

> این پروژه مهارت‌هایم را در وب‌اسکرپینگ، اتوماسیون، پایپ‌لاین داده و ساخت ابزارهای داخلی آماده بهره‌برداری عمیق‌تر کرد.
`,
      },
    },
  },
  {
    id: "02",
    year: "2026",
    stacks: ["Python", "Streamlit", "Plotly", "SQLite", "Pandas", "TradingView API"],
    github: "https://github.com/mosiiisom/rsi-heatmap-crypto",
    live: "https://rsi-heatmap-crypto.streamlit.app/",
    image: "/images/works/rsi_heat_map.png",
    color: "from-emerald-500/20 via-cyan-500/20 to-teal-500/20",
    content: {
      en: {
        title: "RSI Heatmap Crypto",
        description: "Real-time Relative Strength Index (RSI) heatmap and analytics dashboard for top 100 cryptocurrencies.",
        role: "Design & Full Development",
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
      },
      fa: {
        title: "هیت‌مپ RSI ارزهای دیجیتال",
        description: "داشبورد لحظه‌ای شاخص قدرت نسبی (RSI) و هیت‌مپ تحلیلی برای ۱۰۰ ارز دیجیتال برتر.",
        role: "طراحی و توسعه کامل",
        longDescription: `
# معرفی پروژه

یک **داشبورد تحلیلی لحظه‌ای کریپتو**، هم زیبا و هم کاربردی، که شاخص قدرت نسبی (RSI) صد ارز دیجیتال برتر را دنبال می‌کند و حال‌وهوای بازار را با هیت‌مپ رنگی و نمودارهای تعاملی نشان می‌دهد.

## قابلیت‌های اصلی

- رصد لحظه‌ای RSI برای ۱۰۰ کوین برتر
- هیت‌مپ رنگی هوشمند (از اشباع فروش تا اشباع خرید)
- نمودار پراکندگی تعاملی با Plotly
- مقایسه روند RSI (مقدار فعلی در برابر قبلی)
- به‌روزرسانی خودکار داده هر ۳۰ دقیقه
- ذخیره‌سازی داده با SQLite

## منطق RSI

- **🟢 ۳۰ و کمتر** ← اشباع فروش (محدوده احتمالی خرید)
- **🟡 ۳۰ تا ۴۵** ← مومنتوم ضعیف
- **⚪ ۴۵ تا ۵۵** ← خنثی
- **🟠 ۵۵ تا ۷۰** ← مومنتوم قوی
- **🔴 ۷۰ و بیشتر** ← اشباع خرید (محدوده احتمالی فروش)

## استک فنی

- **Streamlit** برای داشبورد
- **Plotly** برای نمودارهای تعاملی
- داده‌های **TradingView** از طریق API غیررسمی
- SQLite برای ذخیره‌سازی محلی
- به‌روزرسانی خودکار در پس‌زمینه

> ساخته شده تا بتوان وضعیت بازار را در یک نگاه بررسی کرد و فرصت‌های معاملاتی احتمالی را زودتر دید.
`,
      },
    },
  },
  {
    id: "03",
    year: "2026",
    stacks: ["Python", "Pandas", "Scraping", "Parquet", "Docker", "Dukascopy API", "Requests"],
    github: "https://github.com/mosiiisom/jforex-ticker-downloader",
    live: "",
    image: "/images/works/jforex-ticker-downloader.png",
    color: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    content: {
      en: {
        title: "JForex Ticker Downloader",
        description: "Automated high-frequency tick data downloader from Dukascopy (JForex) with Parquet storage and Docker support.",
        role: "Design & Full Development",
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
      },
      fa: {
        title: "دانلودر داده تیک JForex",
        description: "دانلودر خودکار داده‌های تیک‌به‌تیک از Dukascopy (JForex) با ذخیره‌سازی Parquet و پشتیبانی Docker.",
        role: "طراحی و توسعه کامل",
        longDescription: `
# معرفی پروژه

یک دانلودر خودکار، مقاوم و بهینه که **داده‌های تاریخی در سطح تیک** (قیمت خرید و فروش) را از فید عمومی JForex شرکت Dukascopy دریافت می‌کند و در فایل‌های بسیار بهینه **Parquet** ذخیره می‌کند.

مناسب برای معامله‌گران کمّی، بک‌تست‌کننده‌ها و هر کسی که به داده تیک تمیز و قابل اعتماد نیاز دارد.

## قابلیت‌های اصلی

- داده تیک با دقت بالا (bid و ask)
- به‌روزرسانی افزایشی؛ فقط داده‌های جاافتاده دانلود می‌شوند
- ذخیره‌سازی ساعتی در Parquet (فشرده‌سازی عالی و کوئری سریع)
- نگهداری قابل تنظیم داده (فقط N روز اخیر)
- زمان‌بندی هوشمند با منطق توقف و ادامه
- پشتیبانی کامل از **Docker و docker-compose**
- سیستم لاگ متمرکز

## نکات فنی

- ساخته‌شده با **Python** و **Pandas**
- فرمت Parquet برای سری‌های زمانی حجیم
- مدیریت خطا و تلاش مجدد قابل اتکا
- پشتیبانی از جفت‌ارزهای اصلی فارکس و فلزات
- آماده استقرار با Docker

> این ابزار زیرساخت داده‌ای مطمئنی برای سیستم‌های معاملاتی و پژوهش‌های الگوریتمی فراهم می‌کند.
`,
      },
    },
  },
  {
    id: "04",
    year: "2026",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Markdown", "Vercel"],
    github: "https://github.com/mosiiisom/portfolio",
    live: "https://mosi.my",
    image: "/images/works/portfolio.png",
    color: "from-[#72ebfa]/20 via-blue-500/20 to-indigo-500/20",
    content: {
      en: {
        title: "Mosi Portfolio",
        description: "This very portfolio — a modern, minimal, bilingual Next.js site with smooth animations.",
        role: "Design & Full Development",
        longDescription: `
# Project Overview

This is **my current portfolio website** — a premium, dark-first, minimal design built to showcase my work in the best possible way, in both Persian and English.

## Key Features

- Fully responsive modern design
- Bilingual: Persian (RTL) and English, with per-language SEO
- Smooth scroll animations and micro-interactions
- Floating project preview on hover (Works section)
- Markdown-supported project pages
- Fast performance with Next.js App Router
- Contact form with server actions + Resend
- Premium typography and visual hierarchy

## Technologies Used

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- **React Markdown** for rich project content
- Deployed on Vercel

## Goal

Create a portfolio that feels **alive**, loads instantly, and leaves a strong impression within the first 5–10 seconds — exactly what hiring managers and clients want to see.
`,
      },
      fa: {
        title: "وب‌سایت شخصی Mosi",
        description: "همین سایتی که می‌بینید؛ یک پورتفولیوی مدرن، مینیمال و دوزبانه با Next.js و انیمیشن‌های نرم.",
        role: "طراحی و توسعه کامل",
        longDescription: `
# معرفی پروژه

این **وب‌سایت شخصی فعلی من** است؛ طراحی‌ای مینیمال، تیره و خوش‌ساخت که برای نمایش هرچه بهتر کارهایم، به دو زبان فارسی و انگلیسی ساخته شده است.

## قابلیت‌های اصلی

- طراحی مدرن و کاملاً واکنش‌گرا
- دوزبانه: فارسی (راست‌چین) و انگلیسی، با سئوی جداگانه برای هر زبان
- انیمیشن‌های اسکرول نرم و ریزتعامل‌ها
- پیش‌نمایش شناور پروژه‌ها هنگام هاور در بخش نمونه‌کارها
- صفحه پروژه با پشتیبانی از Markdown
- سرعت بالا با App Router نکست
- فرم تماس با Server Actions و Resend
- تایپوگرافی و سلسله‌مراتب بصری دقیق

## فناوری‌ها

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** برای انیمیشن‌ها
- **React Markdown** برای محتوای پروژه‌ها
- میزبانی روی Vercel

## هدف

ساختن پورتفولیویی که **زنده** به نظر برسد، فوری بالا بیاید و در همان ۵ تا ۱۰ ثانیه اول تأثیر خوبی بگذارد؛ همان چیزی که کارفرماها و مشتری‌ها دنبالش هستند.
`,
      },
    },
  },
  {
    id: "05",
    year: "2026",
    stacks: ["WordPress", "WooCommerce", "PHP", "Tailwind CSS", "JavaScript", "esbuild", "Swiper", "Rank Math"],
    github: "",
    live: "https://chinchili.com",
    image: "/images/works/chinchili-theme.png",
    color: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
    content: {
      en: {
        title: "Chinchili Store Theme",
        description: "A custom, mobile-first RTL WooCommerce theme built from scratch for Chinchili, an online women’s fashion boutique.",
        role: "UI/UX Design & Full Development",
        longDescription: `
# Project Overview

**Chinchili** is a Persian online boutique for women’s clothing. I designed and built its storefront as a fully custom WooCommerce theme instead of relying on a generic marketplace template. The goal was simple: a calm, minimal shop that loads fast on mobile, where almost all of the store’s traffic comes from, and that search engines can understand easily.

## Key Features

- **Mobile-first shopping**: every page was designed for the phone first, then expanded for desktop, including a dedicated mobile layout for product pages
- **Native Persian and RTL** with Toman pricing across the whole store
- **Passwordless sign-in**: customers log in or sign up with a one-time code sent by SMS, no password required
- **Redesigned purchase flow**: custom add-to-cart behavior plus rebuilt cart, checkout and account pages
- **Category landing pages** with their own headline, intro text, subcategories, FAQ and links to related magazine articles
- **Live product search** with instant results as you type
- **Wishlist**, color swatches and product carousels for best sellers and new arrivals
- **Homepage hero slider** that the store team manages from the dashboard
- **Order SMS notifications** that keep customers updated after purchase

## SEO & Performance

- Works hand in hand with the SEO plugin instead of duplicating tags, so every page has exactly one title, description and canonical
- Rich product structured data (price, availability, brand) for better search results
- One clear H1 per page and a clean heading hierarchy
- Filtered and sorted shop URLs are kept out of the index to avoid duplicate content
- Lightweight front end: utility-first CSS, a small bundled script and lazy-loaded images
- Security hardening such as hiding user enumeration endpoints

> A storefront built around the shopper: few distractions, fast pages, and a checkout that feels natural on a phone.
`,
      },
      fa: {
        title: "قالب فروشگاه چین چیلی",
        description: "قالب اختصاصی ووکامرس برای چین چیلی، فروشگاه اینترنتی پوشاک زنانه؛ موبایل‌محور، راست‌چین و سریع.",
        role: "طراحی رابط و تجربه کاربری، توسعه کامل",
        longDescription: `
# معرفی پروژه

**چین چیلی** یک فروشگاه اینترنتی پوشاک زنانه است. به‌جای استفاده از قالب‌های آماده و سنگین، ویترین فروشگاه را از صفر به‌صورت یک قالب اختصاصی ووکامرس طراحی و پیاده‌سازی کردم. هدف روشن بود: فروشگاهی آرام و مینیمال که روی موبایل (جایی که تقریباً همه بازدیدها از آن می‌آید) سریع باز شود و موتورهای جست‌وجو هم به‌راحتی آن را بفهمند.

## قابلیت‌های اصلی

- **خرید موبایل‌محور**: همه صفحه‌ها اول برای گوشی طراحی و بعد برای دسکتاپ گسترش داده شده‌اند؛ صفحه محصول هم چیدمان جداگانه موبایل دارد
- **کاملاً فارسی و راست‌چین**، با نمایش قیمت به تومان در کل فروشگاه
- **ورود بدون رمز عبور**: مشتری با کد یک‌بارمصرف پیامکی وارد می‌شود یا ثبت‌نام می‌کند
- **فرایند خرید بازطراحی‌شده**: رفتار اختصاصی افزودن به سبد و بازسازی صفحه‌های سبد خرید، تسویه‌حساب و حساب کاربری
- **لندینگ دسته‌بندی محصولات** با تیتر، متن معرفی، زیردسته‌ها، پرسش‌های متداول و لینک به مقاله‌های مرتبط مجله
- **جست‌وجوی زنده محصولات** با نمایش فوری نتایج هنگام تایپ
- **علاقه‌مندی‌ها**، انتخاب رنگ و اسلایدرهای محصول برای پرفروش‌ها و جدیدترین‌ها
- **اسلایدر صفحه اصلی** که تیم فروشگاه از پیشخوان مدیریتش می‌کند
- **اطلاع‌رسانی پیامکی سفارش** برای در جریان گذاشتن مشتری بعد از خرید

## سئو و سرعت

- هماهنگی کامل با افزونه سئو به‌جای تکرار تگ‌ها؛ هر صفحه دقیقاً یک عنوان، توضیحات و canonical دارد
- داده ساختاریافته کامل محصول (قیمت، موجودی، برند) برای نمایش بهتر در نتایج گوگل
- فقط یک H1 در هر صفحه و سلسله‌مراتب تیترهای منظم
- خارج کردن آدرس‌های فیلتر و مرتب‌سازی فروشگاه از ایندکس برای جلوگیری از محتوای تکراری
- فرانت‌اند سبک: CSS کاربردمحور، یک اسکریپت کوچک باندل‌شده و بارگذاری تنبل تصاویر
- مقاوم‌سازی امنیتی، مثل بستن راه‌های شناسایی کاربران سایت

> ویترینی که حول خریدار ساخته شده: حواس‌پرتی کم، صفحه‌های سریع و تسویه‌حسابی که روی گوشی طبیعی و راحت است.
`,
      },
    },
  },
  {
    id: "06",
    year: "2026",
    stacks: ["PHP 8", "WordPress", "WooCommerce", "MySQL", "WP-Cron", "REST API", "SMS API", "Telegram Bot API"],
    github: "",
    live: "https://chinchili.com",
    image: "/images/works/chinchili-plugin.png",
    color: "from-violet-500/20 via-fuchsia-500/20 to-rose-500/20",
    content: {
      en: {
        title: "Chinchili Growth & CRM Plugin",
        description: "A modular WooCommerce plugin that brings customer insights, loyalty, wallet and marketing automation into one lightweight engine.",
        role: "Architecture & Full Development",
        longDescription: `
# Project Overview

Online stores often end up with a pile of unrelated plugins for loyalty points, abandoned carts, SMS and reporting, each one slowing the site down. For Chinchili I built a single in-house plugin that covers these needs as **independent modules**. Each module can be switched on, changed or removed without touching the others, and the whole admin area is Persian-first.

## Key Features

- **Customer insights**: a customer dashboard showing order count, total spend and last purchase for every buyer (guest orders included), with automatic **RFM segmentation** to spot loyal, new and at-risk customers
- **Abandoned cart recovery**: carts are tracked in real time, flagged as abandoned after a period of inactivity, and followed up with timed SMS reminders that carry a **personal, single-use, time-limited discount code**
- **Loyalty points and gamification**: customers earn points for signing up, completing their profile, writing reviews and qualifying purchases, and can spend them on a **lucky wheel** game page
- **Review rewards**: a few days after delivery, customers get an SMS invitation to review what they bought; approved reviews earn store credit, limited to one reward per product and a monthly cap
- **Wallet and cashback**: a built-in store credit wallet that customers can use at checkout, with full transaction history, plus per-payment-method fees, discounts and cashback rules
- **Smart delivery messages**: checkout shows delivery-time messages based on the chosen shipping method and the current time of day
- **Notifications**: template-based SMS for store events, and a Telegram bot that alerts the team about new orders, including orders that come in from an external marketplace

## Technical Highlights

- Modular, service-oriented architecture with autoloaded PHP 8 classes and a shared module contract
- Custom database tables for carts, wallets and transactions, built for fast reporting
- Background jobs with WP-Cron for reminders, cart status updates and scheduled SMS
- Secured REST endpoints for incoming webhooks
- Admin tools to recalculate and backfill rewards safely
- Persian dates and Toman formatting throughout the dashboard

> One focused plugin replaced a stack of third-party add-ons and gave the store team the retention tools they actually use every day.
`,
      },
      fa: {
        title: "افزونه بازاریابی و CRM چین چیلی",
        description: "افزونه ماژولار ووکامرس که شناخت مشتری، باشگاه وفاداری، کیف پول و اتوماسیون بازاریابی را در یک موتور سبک جمع می‌کند.",
        role: "معماری و توسعه کامل",
        longDescription: `
# معرفی پروژه

فروشگاه‌های اینترنتی معمولاً برای امتیاز وفاداری، سبدهای رهاشده، پیامک و گزارش‌گیری سراغ چندین افزونه جدا می‌روند که هرکدام سایت را کندتر می‌کند. برای چین چیلی یک افزونه اختصاصی ساختم که همه این نیازها را به شکل **ماژول‌های مستقل** پوشش می‌دهد. هر ماژول را می‌شود روشن، خاموش یا عوض کرد بدون اینکه بقیه آسیبی ببینند، و کل بخش مدیریت از اول برای زبان فارسی طراحی شده است.

## قابلیت‌های اصلی

- **شناخت مشتری**: داشبوردی که تعداد سفارش، مجموع خرید و آخرین خرید هر مشتری (حتی سفارش‌های مهمان) را نشان می‌دهد و با **بخش‌بندی RFM** مشتریان وفادار، تازه‌وارد و در آستانه ریزش را مشخص می‌کند
- **بازگرداندن سبدهای رهاشده**: سبدها لحظه‌ای ثبت می‌شوند، بعد از مدتی بی‌فعالیتی رهاشده علامت می‌خورند و با پیامک‌های یادآوری زمان‌بندی‌شده همراه با **کد تخفیف شخصی، یک‌بارمصرف و محدود به زمان** پیگیری می‌شوند
- **امتیاز وفاداری و گیمیفیکیشن**: مشتری با ثبت‌نام، تکمیل پروفایل، نوشتن نظر و خریدهای واجد شرایط امتیاز می‌گیرد و می‌تواند آن را در صفحه بازی **گردونه شانس** خرج کند
- **پاداش ثبت نظر**: چند روز بعد از تحویل سفارش، پیامکی برای ثبت نظر درباره خرید ارسال می‌شود؛ نظرهای تأییدشده اعتبار خرید می‌گیرند، با سقف ماهانه و فقط یک پاداش برای هر محصول
- **کیف پول و بازگشت وجه**: کیف پول اعتباری داخلی که در تسویه‌حساب قابل استفاده است، همراه با تاریخچه کامل تراکنش‌ها و قوانین کارمزد، تخفیف و کش‌بک برای هر روش پرداخت
- **پیام‌های هوشمند ارسال**: در صفحه تسویه‌حساب، بسته به روش ارسال و ساعت روز، پیام مناسب درباره زمان تحویل نمایش داده می‌شود
- **اطلاع‌رسانی**: پیامک‌های قالب‌دار برای رویدادهای فروشگاه و ربات تلگرامی که سفارش‌های جدید، حتی سفارش‌های رسیده از یک مارکت‌پلیس بیرونی، را به تیم اطلاع می‌دهد

## نکات فنی

- معماری ماژولار و سرویس‌محور با کلاس‌های PHP 8، بارگذاری خودکار و قرارداد مشترک برای همه ماژول‌ها
- جدول‌های اختصاصی پایگاه داده برای سبدها، کیف پول و تراکنش‌ها، مناسب گزارش‌گیری سریع
- کارهای پس‌زمینه با WP-Cron برای یادآوری‌ها، به‌روزرسانی وضعیت سبدها و پیامک‌های زمان‌بندی‌شده
- endpointهای امن REST برای دریافت وب‌هوک‌ها
- ابزارهای مدیریتی برای محاسبه دوباره و جبران امتیازهای جاافتاده
- تاریخ شمسی و نمایش مبالغ به تومان در کل پیشخوان

> یک افزونه متمرکز جای چندین افزونه جانبی را گرفت و ابزارهایی برای نگه‌داشتن مشتری به تیم فروشگاه داد که هر روز واقعاً از آن‌ها استفاده می‌کنند.
`,
      },
    },
  },
];

function localize(work: Work, locale: Locale): LocalizedWork {
  const { content, ...rest } = work;
  return { ...rest, ...content[locale] };
}

export const workIds = works.map((w) => w.id);

export function getWorks(locale: Locale): LocalizedWork[] {
  return works.map((w) => localize(w, locale));
}

export function getWork(locale: Locale, id: string): LocalizedWork | undefined {
  const work = works.find((w) => w.id === id);
  return work ? localize(work, locale) : undefined;
}
