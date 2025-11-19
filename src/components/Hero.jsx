import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { useI18n } from './i18n'

export default function Hero({ onPrimary, onSecondary }) {
  const { t } = useI18n()
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/60 to-white dark:from-black/40 dark:via-black/60 dark:to-black"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-24 md:py-28 lg:py-32">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            {t.hero.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-4 text-lg md:text-xl text-black/70 dark:text-white/70">
            {t.hero.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-6 flex flex-wrap items-center gap-3">
            <button onClick={onPrimary} className="inline-flex items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-semibold shadow-lg shadow-black/10 dark:shadow-white/10">
              {t.hero.ctaPrimary}
            </button>
            <button onClick={onSecondary} className="inline-flex items-center justify-center rounded-lg border border-black/10 dark:border-white/10 px-5 py-2.5 text-sm font-semibold">
              {t.hero.ctaSecondary}
            </button>
            <span className="text-xs text-black/60 dark:text-white/60 ml-2">{t.hero.availability}</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
