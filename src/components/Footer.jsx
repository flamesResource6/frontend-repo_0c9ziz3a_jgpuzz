import React from 'react'
import { useI18n } from './i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 pb-10 text-center text-sm text-black/60 dark:text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>{t.footer.crafted} • © {year} · {t.footer.rights}</p>
      </div>
    </footer>
  )
}
