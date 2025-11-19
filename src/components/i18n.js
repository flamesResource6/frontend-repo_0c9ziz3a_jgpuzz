import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'

export const LANGS = {
  en: 'EN',
  lv: 'LV',
  ru: 'RU',
}

const defaultLang = 'en'

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: "Hi, I'm Alex — Full‑Stack Developer",
      subtitle: 'I craft fast, accessible, modern web apps with a strong eye for detail and DX.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Contact Me',
      availability: 'Open to remote roles & freelance',
    },
    about: {
      title: 'About Me',
      body:
        "I build product‑grade web experiences using React, TypeScript and Python/FastAPI. I love shipping thoughtful UX, clean architecture, and smooth micro‑interactions. Based in EU; collaborating worldwide.",
      highlights: ['10+ years coding', 'UI/UX minded', 'Performance driven', 'Testing culture'],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Senior Full‑Stack Engineer',
          company: 'Tech Studio',
          period: '2022 — Present',
          bullets: [
            'Led delivery of multi‑tenant SaaS with React + FastAPI',
            'Cut TTFB by 40% via API caching and DB tuning',
            'Mentored 4 engineers and improved code review flow',
          ],
        },
        {
          role: 'Frontend Engineer',
          company: 'Creative Labs',
          period: '2019 — 2022',
          bullets: [
            'Built design‑system components with accessibility first',
            'Launched 12+ high‑impact features with A/B testing',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      groups: [
        { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'] },
        { name: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'REST', 'Auth'] },
        { name: 'Quality', items: ['Testing', 'CI/CD', 'Lighthouse', 'Accessibility'] },
      ],
    },
    projects: {
      title: 'Projects',
      cards: [
        {
          name: 'Realtime Dashboard',
          desc: 'Streaming analytics with websockets, theming and offline mode.',
          tags: ['React', 'FastAPI', 'WebSocket'],
          link: '#',
        },
        {
          name: 'Design System',
          desc: 'Composable components, tokens, and documentation site.',
          tags: ['TypeScript', 'Tailwind'],
          link: '#',
        },
        {
          name: '3D Landing',
          desc: 'Interactive 3D hero with Spline and motion choreography.',
          tags: ['Spline', 'Framer Motion'],
          link: '#',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have an idea, role, or collaboration? Let’s talk.',
      email: 'Email',
      copy: 'Copy',
      copied: 'Copied!',
      send: 'Open email app',
    },
    footer: {
      crafted: 'Crafted with care',
      rights: 'All rights reserved',
      theme: 'Theme',
      language: 'Language',
    },
  },
  lv: {
    nav: {
      about: 'Par mani',
      experience: 'Pieredze',
      skills: 'Prasmes',
      projects: 'Projekti',
      contact: 'Kontakti',
    },
    hero: {
      title: 'Sveiki, esmu Alekss — Pilna steka izstrādātājs',
      subtitle: 'Veidoju modernas un ātras tīmekļa lietotnes ar izcilu UX.',
      ctaPrimary: 'Apskatīt projektus',
      ctaSecondary: 'Sazināties',
      availability: 'Atvērts attālinātam darbam un freelance',
    },
    about: {
      title: 'Par mani',
      body:
        'Izstrādāju produktam gatvas tīmekļa pieredzes ar React, TypeScript un Python/FastAPI. Mani interesē UX, skaidra arhitektūra un mikro animācijas. Bāzēts ES, sadarbojos visā pasaulē.',
      highlights: ['10+ gadi programmēšanā', 'UI/UX domāšana', 'Veiktspēja', 'Testēšana'],
    },
    experience: {
      title: 'Pieredze',
      items: [
        {
          role: 'Vecākais pilna steka inženieris',
          company: 'Tech Studio',
          period: '2022 — Šobrīd',
          bullets: [
            'Vadīju daudzlietotāju SaaS ar React + FastAPI',
            'Samazināju TTFB par 40% ar kešošanu un DB optimizāciju',
            'Mentorēju 4 inženierus un uzlaboju kodpārbaudes',
          ],
        },
        {
          role: 'Frontend izstrādātājs',
          company: 'Creative Labs',
          period: '2019 — 2022',
          bullets: [
            'Veidoju komponentes ar pieejamību kā prioritāti',
            'Palaidu 12+ funkcijas ar A/B testiem',
          ],
        },
      ],
    },
    skills: {
      title: 'Prasmes',
      groups: [
        { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'] },
        { name: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'REST', 'Autentifikācija'] },
        { name: 'Kvalitāte', items: ['Testēšana', 'CI/CD', 'Lighthouse', 'Pieejamība'] },
      ],
    },
    projects: {
      title: 'Projekti',
      cards: [
        { name: 'Reāllaika panelis', desc: 'Straumējoša analītika ar theming un offline.', tags: ['React', 'FastAPI', 'WebSocket'], link: '#' },
        { name: 'Dizaina sistēma', desc: 'Komponējamas komponentes, tokeni un dokumentācija.', tags: ['TypeScript', 'Tailwind'], link: '#' },
        { name: '3D lapa', desc: 'Interaktīvs 3D hero ar Spline un animācijām.', tags: ['Spline', 'Framer Motion'], link: '#' },
      ],
    },
    contact: {
      title: 'Kontakti',
      subtitle: 'Ir ideja vai loma? Parunāsim.',
      email: 'E-pasts',
      copy: 'Kopēt',
      copied: 'Nokopēts!',
      send: 'Atvērt e-pasta lietotni',
    },
    footer: {
      crafted: 'Radīts ar rūpēm',
      rights: 'Visas tiesības aizsargātas',
      theme: 'Tēma',
      language: 'Valoda',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты',
    },
    hero: {
      title: 'Привет, я Алекс — Фулл‑стек разработчик',
      subtitle: 'Создаю современные быстрые веб‑приложения с вниманием к деталям.',
      ctaPrimary: 'Проекты',
      ctaSecondary: 'Связаться',
      availability: 'Открыт для удалённой работы и фриланса',
    },
    about: {
      title: 'Обо мне',
      body:
        'Создаю продуктовые веб‑решения на React, TypeScript и Python/FastAPI. Люблю чистую архитектуру, UX и плавные анимации. Базируюсь в ЕС, работаю по всему миру.',
      highlights: ['10+ лет кода', 'Мышление UX', 'Производительность', 'Тестирование'],
    },
    experience: {
      title: 'Опыт',
      items: [
        {
          role: 'Senior Full‑Stack инженер',
          company: 'Tech Studio',
          period: '2022 — Сейчас',
          bullets: [
            'Руководил разработкой SaaS на React + FastAPI',
            'Снизил TTFB на 40% с кэшем и оптимизацией БД',
            'Наставлял команду и улучшил code review',
          ],
        },
        {
          role: 'Frontend разработчик',
          company: 'Creative Labs',
          period: '2019 — 2022',
          bullets: [
            'Компоненты с приоритетом доступности',
            'Запущено 12+ фич с A/B тестами',
          ],
        },
      ],
    },
    skills: {
      title: 'Навыки',
      groups: [
        { name: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion'] },
        { name: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'REST', 'Авторизация'] },
        { name: 'Качество', items: ['Тесты', 'CI/CD', 'Lighthouse', 'Доступность'] },
      ],
    },
    projects: {
      title: 'Проекты',
      cards: [
        { name: 'Realtime Dashboard', desc: 'Потоковая аналитика, темы и офлайн.', tags: ['React', 'FastAPI', 'WebSocket'], link: '#' },
        { name: 'Дизайн‑система', desc: 'Компоненты, токены и документация.', tags: ['TypeScript', 'Tailwind'], link: '#' },
        { name: '3D Лендинг', desc: 'Интерактивный 3D‑герой с Spline.', tags: ['Spline', 'Framer Motion'], link: '#' },
      ],
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Есть идея или роль? Давайте обсудим.',
      email: 'Почта',
      copy: 'Копировать',
      copied: 'Скопировано!',
      send: 'Открыть почтовое приложение',
    },
    footer: {
      crafted: 'Сделано с заботой',
      rights: 'Все права защищены',
      theme: 'Тема',
      language: 'Язык',
    },
  },
}

const I18nContext = createContext({ t: translations[defaultLang], lang: defaultLang, setLang: () => {} })

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || defaultLang)

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo(() => ({ t: translations[lang] ?? translations[defaultLang], lang, setLang }), [lang])
  return React.createElement(I18nContext.Provider, { value }, children)
}

export function useI18n() {
  return useContext(I18nContext)
}
