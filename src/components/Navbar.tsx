import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

import type { Theme } from '../types'
import { useI18n } from '../context/I18nContext'
import { translations } from '../data/translations'
import flagBr from '../assets/flag-br.png'
import flagUs from '../assets/flag-us.png'

const navItems = [
  { id: 'about' },
  { id: 'stack' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'contact' },
]

interface NavbarProps {
  activeSection: string
  theme: Theme
  onToggleTheme: () => void
}

function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const { language, setLanguage } = useI18n()
  const t = translations[language].nav

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
                {t[item.id as keyof typeof t]}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--border-hard)] text-[var(--color-heading)] transition-all hover:border-[var(--color-orange)] hover:bg-[var(--color-orange)] hover:text-white"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === 'light' ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>

          <button
            aria-label="Switch language"
            className="flex h-9 w-9 items-center justify-center border-2 border-[var(--border-hard)] p-1.5 transition-all hover:border-[var(--color-orange)] hover:shadow-[0_0_12px_var(--color-orange-glow)]"
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            type="button"
          >
            <img 
              alt={language === 'en' ? 'US Flag' : 'BR Flag'}
              className="h-full w-full object-contain"
              src={language === 'en' ? flagUs : flagBr} 
            />
          </button>

          <a
            className="hidden items-center gap-2 bg-[var(--color-orange)] px-5 py-2.5 text-[0.65rem] font-extrabold uppercase tracking-[0.16em] text-white transition-all duration-200 hover:bg-[var(--color-orange-fire)] hover:shadow-[0_0_20px_var(--color-orange-glow)] sm:inline-flex"
            href="#contact"
          >
            {t.getInTouch}
          </a>
        </div>
      </div>
    </motion.header>
  )
}

export default Navbar
