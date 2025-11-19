import React, { useEffect, useRef, useState } from 'react'
import { I18nProvider, useI18n } from './components/i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Experience, Skills, Projects, Contact } from './components/Sections'

function Page() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  const { t } = useI18n()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const refs = {
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }

  const onNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white selection:bg-fuchsia-500/30">
      <Navbar theme={theme} setTheme={setTheme} onNav={onNav} />

      <main>
        <Hero onPrimary={() => onNav('projects')} onSecondary={() => onNav('contact')} />
        <div ref={refs.about}><About /></div>
        <div ref={refs.experience}><Experience /></div>
        <div ref={refs.skills}><Skills /></div>
        <div ref={refs.projects}><Projects /></div>
        <div ref={refs.contact}><Contact /></div>
      </main>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}
