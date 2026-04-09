import { motion } from 'framer-motion'
import { Moon, SunMedium } from 'lucide-react'

import type { Theme } from '../types'

interface ThemeToggleProps {
  theme: Theme
  onToggleTheme: () => void
}

function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps) {
  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative inline-flex h-11 w-20 items-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-soft)] p-1 shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-colors duration-300"
      onClick={onToggleTheme}
      type="button"
    >
      <motion.span
        animate={{ x: theme === 'light' ? 0 : 36 }}
        className="absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-accent-contrast)]"
        transition={{ type: 'spring', stiffness: 340, damping: 24 }}
      >
        {theme === 'light' ? (
          <SunMedium className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </motion.span>

      <span className="ml-2 flex w-full items-center justify-between px-1 text-[var(--color-muted)]">
        <SunMedium className="h-4 w-4" />
        <Moon className="h-4 w-4" />
      </span>
    </button>
  )
}

export default ThemeToggle
