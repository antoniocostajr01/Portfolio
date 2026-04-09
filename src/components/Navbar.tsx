import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

import type { Theme } from '../types'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'stack', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
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
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex w-full items-center justify-between border-b-2 border-[var(--border-hard)] bg-[var(--nav-bg)] px-6 py-3 backdrop-blur-xl sm:px-8 lg:px-12">
        {/* Logo — lowercase, with a decorative line */}
        <a
          className="group relative font-display text-xl font-black tracking-wide text-[var(--color-heading)]"
          href="#hero"
        >
          <span className="relative z-10">antonio</span>
          <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-[var(--color-orange)] transition-transform origin-left group-hover:scale-x-110" />
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-0 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                className={`relative border-x border-[var(--border-soft)] px-5 py-2 text-[0.65rem] font-extrabold uppercase tracking-[0.22em] transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--color-orange)] text-white'
                    : 'text-[var(--color-muted)] hover:bg-[var(--surface-ink)] hover:text-[var(--color-heading)]'
                }`}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--border-hard)] text-[var(--color-heading)] transition-all hover:border-[var(--color-orange)] hover:bg-[var(--color-orange)] hover:text-white"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>

          <a
            className="hidden items-center gap-2 bg-[var(--color-orange)] px-5 py-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[var(--color-orange-fire)] hover:shadow-[0_0_20px_var(--color-orange-glow)] sm:inline-flex"
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
