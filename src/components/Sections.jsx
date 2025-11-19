import React from 'react'
import { motion } from 'framer-motion'
import { useI18n } from './i18n'

function Section({ id, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
        {title}
      </motion.h2>
      {children}
    </section>
  )
}

export function About() {
  const { t } = useI18n()
  return (
    <Section id="about" title={t.about.title}>
      <div className="grid md:grid-cols-3 gap-6">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-2 text-black/70 dark:text-white/70 leading-relaxed">
          {t.about.body}
        </motion.p>
        <ul className="space-y-2">
          {t.about.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500"></span>{h}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Experience() {
  const { t } = useI18n()
  return (
    <Section id="experience" title={t.experience.title}>
      <div className="space-y-6">
        {t.experience.items.map((item) => (
          <motion.div key={item.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="font-semibold">{item.role} · {item.company}</h3>
              <span className="text-sm text-black/60 dark:text-white/60">{item.period}</span>
            </div>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-black/70 dark:text-white/70">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  const { t } = useI18n()
  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid md:grid-cols-3 gap-4">
        {t.skills.groups.map((g) => (
          <motion.div key={g.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5">
            <h4 className="font-medium mb-2">{g.name}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="px-2.5 py-1.5 rounded-full text-xs bg-gradient-to-r from-blue-500/10 to-fuchsia-500/10 border border-blue-500/20">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  const { t } = useI18n()
  return (
    <Section id="projects" title={t.projects.title}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.projects.cards.map((p) => (
          <motion.a key={p.name} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="h-40 rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 border border-black/10 dark:border-white/10 mb-4" />
            <h4 className="font-semibold group-hover:underline underline-offset-4">{p.name}</h4>
            <p className="text-sm text-black/70 dark:text-white/70 mt-1">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-md text-xs bg-black/5 dark:bg-white/10">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

export function Contact() {
  const { t } = useI18n()
  const email = 'alex.dev@example.com'

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      const el = document.getElementById('copy-label')
      if (el) {
        el.innerText = t.contact.copied
        setTimeout(() => (el.innerText = t.contact.copy), 1200)
      }
    } catch {}
  }

  return (
    <Section id="contact" title={t.contact.title}>
      <p className="text-black/70 dark:text-white/70 mb-6">{t.contact.subtitle}</p>
      <div className="flex flex-wrap items-center gap-3">
        <span className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 font-mono text-sm">
          {t.contact.email}: {email}
        </span>
        <button onClick={copy} className="px-3 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black text-sm">
          <span id="copy-label">{t.contact.copy}</span>
        </button>
        <a href={`mailto:${email}`} className="px-3 py-2 rounded-md border border-black/10 dark:border-white/10 text-sm">{t.contact.send}</a>
      </div>
    </Section>
  )
}
