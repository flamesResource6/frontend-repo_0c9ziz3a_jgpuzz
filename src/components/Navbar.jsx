import React from 'react'
import { useI18n, LANGS } from './i18n'
import { Menu, Moon, Sun, Globe, Github } from 'lucide-react'

export default function Navbar({ theme, setTheme, onNav }) {
  const { t, lang, setLang } = useI18n()

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/5 dark:bg-white/10">
              <Menu className="h-4 w-4" />
            </button>
            <span className="font-semibold tracking-tight">Alex Dev</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => onNav('about')} className="hover:opacity-80">{t.nav.about}</button>
            <button onClick={() => onNav('experience')} className="hover:opacity-80">{t.nav.experience}</button>
            <button onClick={() => onNav('skills')} className="hover:opacity-80">{t.nav.skills}</button>
            <button onClick={() => onNav('projects')} className="hover:opacity-80">{t.nav.projects}</button>
            <button onClick={() => onNav('contact')} className="hover:opacity-80">{t.nav.contact}</button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-xs" aria-label={t.footer.language}>
                <Globe className="h-3.5 w-3.5" /> {LANGS[lang]}
              </button>
              <div className="absolute right-0 mt-2 hidden group-focus:block"></div>
            </div>
            <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent text-sm px-2 py-1 rounded-md border border-black/10 dark:border-white/10">
              {Object.keys(LANGS).map((k) => (
                <option key={k} value={k}>{LANGS[k]}</option>
              ))}
            </select>

            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.footer.theme} className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-black/5 dark:bg-white/10">
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex h-9 px-3 items-center gap-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-xs">
              <Github className="h-4 w-4" /> Star
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
