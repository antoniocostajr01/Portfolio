import { motion } from 'framer-motion'

import ThemeToggle from './ThemeToggle'
import type { Theme } from '../types'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

interface NavbarProps {
  activeSection: string
  theme: Theme
  onToggleTheme: () => void
}

function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  return (
    <motion.header
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-10"
      initial={{ y: -24, opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-full max-w-[1380px] items-center justify-between rounded-full border border-[var(--border-soft)] bg-[var(--nav-surface)] px-4 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.14)] backdrop-blur-2xl sm:px-6">
        <a
          className="font-heading text-lg tracking-[0.08em] text-[var(--color-heading)] sm:text-xl"
          href="#hero"
        >
          antonio
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-[0.16em] transition-colors duration-200 ${
                  isActive
                    ? 'bg-[var(--nav-pill-active)] text-[var(--color-heading)]'
                    : 'text-[var(--color-muted)] hover:text-[var(--color-heading)]'
                }`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <a
            className="hidden rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-contrast)] shadow-[0_10px_24px_rgba(246,170,61,0.28)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
            href="#contact"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
