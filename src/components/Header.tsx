import { useState } from 'react'
import flagBr from '../assets/flag-br.png'
import flagUs from '../assets/flag-us.png'
import type {
  HeaderControlsCopy,
  Language,
  SocialLink,
  Theme,
} from '../types'

interface HeaderProps {
  name: string
  controls: HeaderControlsCopy
  socialLinks: SocialLink[]
  onHomeClick: () => void
  selectedTheme: Theme
  selectedLanguage: Language
  onThemeChange: (theme: Theme) => void
  onLanguageChange: (language: Language) => void
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.535 2.865 8.382 6.839 9.74.5.095.682-.222.682-.494 0-.244-.009-.89-.014-1.748-2.782.62-3.369-1.387-3.369-1.387-.455-1.192-1.11-1.51-1.11-1.51-.908-.638.069-.625.069-.625 1.004.072 1.532 1.06 1.532 1.06.892 1.576 2.341 1.12 2.91.856.091-.664.349-1.12.635-1.377-2.22-.26-4.555-1.14-4.555-5.074 0-1.121.389-2.037 1.029-2.755-.103-.261-.446-1.31.098-2.73 0 0 .84-.277 2.75 1.053A9.303 9.303 0 0 1 12 6.83c.85.004 1.705.117 2.504.343 1.909-1.33 2.748-1.053 2.748-1.053.546 1.42.203 2.469.1 2.73.641.718 1.028 1.634 1.028 2.755 0 3.944-2.338 4.81-4.566 5.065.359.319.678.949.678 1.913 0 1.381-.012 2.495-.012 2.834 0 .274.18.594.688.493C19.138 20.644 22 16.8 22 12.266 22 6.596 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55C7.16 3.87 6.31 3 5.25 3S3.34 3.87 3.34 4.95c0 1.07.85 1.94 1.91 1.94s1.91-.87 1.91-1.94ZM20.66 13.03c0-3.47-1.84-5.08-4.3-5.08-1.98 0-2.87 1.11-3.37 1.9V8.5H9.61c.05.89 0 11.5 0 11.5H13v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.05 1.88 2.6V20h3.39v-6.97Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <path
        d="M12 2.5V5.2M12 18.8v2.7M21.5 12h-2.7M5.2 12H2.5M18.72 5.28l-1.9 1.9M7.18 16.82l-1.9 1.9M18.72 18.72l-1.9-1.9M7.18 7.18l-1.9-1.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 19.9414 19.7349" fill="none">
      <path
        d="M10.2344 19.7161C14.4922 19.7161 17.9395 17.1477 19.4727 13.8762C19.8047 13.1926 19.3652 12.7336 18.7109 12.9387C17.9883 13.1829 16.7969 13.4172 15.6934 13.4172C9.83398 13.4172 6.47461 10.0579 6.47461 4.18873C6.47461 3.08521 6.71875 1.84498 7.07031 0.956304C7.35352 0.233648 6.85547-0.205805 6.16211 0.0969294C2.65625 1.62037 0 5.20435 0 9.48169C0 15.136 4.58984 19.7161 10.2344 19.7161Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 21.9531 21.3011" fill="none">
      <path
        d="M10.791 19.9816C11.0352 19.9816 11.2695 19.9718 11.5039 19.9523L12.041 20.9582C12.168 21.2121 12.3926 21.3097 12.666 21.2804C12.9492 21.2316 13.1152 21.0461 13.1445 20.7726L13.3105 19.6398C13.7793 19.5129 14.2188 19.3468 14.6484 19.1515L15.4883 19.9132C15.6934 20.1086 15.9473 20.1183 16.1914 19.9914C16.4355 19.8546 16.5332 19.6203 16.4746 19.3468L16.2305 18.2336C16.6211 17.9601 16.9824 17.6476 17.3242 17.3254L18.3691 17.755C18.6328 17.8527 18.877 17.7941 19.0625 17.5793C19.248 17.3644 19.2676 17.1203 19.1113 16.8761L18.5059 15.9191C18.7695 15.5187 19.0039 15.1086 19.2188 14.6886L20.3418 14.7277C20.625 14.7375 20.8398 14.6007 20.9375 14.3273C21.0352 14.0734 20.9668 13.8293 20.7422 13.6632L19.834 12.9699C19.9609 12.5109 20.0391 12.0421 20.0879 11.5539L21.1621 11.2121C21.4355 11.1242 21.5918 10.9289 21.5918 10.6457C21.5918 10.3625 21.4355 10.1574 21.1621 10.0793L20.0879 9.73746C20.0391 9.24918 19.9609 8.78043 19.834 8.32145L20.7324 7.62809C20.9668 7.46207 21.0254 7.21793 20.9375 6.95426C20.8398 6.68082 20.625 6.55387 20.3418 6.56363L19.2188 6.59293C19.0039 6.17301 18.7695 5.75309 18.5059 5.36246L19.1016 4.4152C19.2578 4.17105 19.2383 3.91715 19.0723 3.7023C18.877 3.48746 18.6328 3.43863 18.3789 3.53629L17.3242 3.96598C16.9824 3.62418 16.6113 3.32145 16.2305 3.04801L16.4746 1.94449C16.5332 1.66129 16.4355 1.43668 16.2012 1.29996C15.9473 1.15348 15.6934 1.19254 15.4883 1.37809L14.6387 2.13004C14.2188 1.93473 13.7695 1.77848 13.3008 1.64176L13.1445 0.518711C13.1152 0.245273 12.9395 0.0694922 12.6758 0.0108985C12.3926-0.0379296 12.168 0.0792579 12.041 0.323398L11.5039 1.32926C11.2695 1.31949 11.0352 1.30973 10.791 1.30973C10.5566 1.30973 10.3223 1.31949 10.0781 1.32926L9.55078 0.333164C9.41406 0.0792579 9.18945-0.028164 8.92578 0.0108985C8.64258 0.0597266 8.47656 0.245273 8.4375 0.518711L8.27148 1.64176C7.8125 1.77848 7.36328 1.94449 6.93359 2.1398L6.10352 1.37809C5.89844 1.18277 5.64453 1.16324 5.39062 1.29996C5.14648 1.43668 5.05859 1.67105 5.11719 1.94449L5.35156 3.05777C4.96094 3.33121 4.59961 3.63395 4.25781 3.96598L3.21289 3.53629C2.95898 3.42887 2.70508 3.49723 2.51953 3.71207C2.33398 3.91715 2.32422 4.17105 2.48047 4.4152L3.08594 5.37223C2.8125 5.76285 2.57812 6.18277 2.37305 6.6027L1.25 6.56363C0.957031 6.5441 0.751953 6.69059 0.654297 6.95426C0.546875 7.21793 0.625 7.46207 0.849609 7.62809L1.74805 8.32145C1.63086 8.78043 1.54297 9.24918 1.50391 9.73746L0.419922 10.0793C0.146484 10.1574 0 10.3625 0 10.6457C0 10.9289 0.146484 11.1242 0.419922 11.2121L1.50391 11.5539C1.54297 12.0421 1.63086 12.5109 1.74805 12.9699L0.849609 13.6632C0.625 13.8293 0.566406 14.0734 0.644531 14.3371C0.751953 14.6105 0.957031 14.7375 1.24023 14.7277L2.37305 14.6886C2.57812 15.1183 2.8125 15.5285 3.08594 15.9289L2.48047 16.8761C2.32422 17.1203 2.35352 17.3742 2.51953 17.5793C2.71484 17.8039 2.95898 17.8527 3.21289 17.755L4.25781 17.3156C4.59961 17.6574 4.9707 17.9601 5.35156 18.2433L5.11719 19.3468C5.05859 19.6203 5.15625 19.8546 5.39062 19.9914C5.64453 20.1379 5.89844 20.1086 6.09375 19.9132L6.94336 19.1515C7.37305 19.3566 7.82227 19.5129 8.28125 19.6398L8.4375 20.7629C8.47656 21.0461 8.65234 21.2218 8.91602 21.2804C9.19922 21.3293 9.41406 21.2121 9.55078 20.9582L10.0781 19.9523C10.3223 19.9718 10.5566 19.9816 10.791 19.9816ZM10.791 18.3605C6.5332 18.3605 3.07617 14.9035 3.07617 10.6457C3.07617 6.37809 6.5332 2.93082 10.791 2.93082C15.0586 2.93082 18.5059 6.37809 18.5059 10.6457C18.5059 14.9035 15.0586 18.3605 10.791 18.3605ZM9.0918 9.15152L10.2441 8.4191L6.98242 2.8234L5.78125 3.49723ZM12.9688 11.3097L19.4629 11.3097L19.4629 9.96207L12.9688 9.96207ZM10.2637 12.9015L9.12109 12.1593L5.68359 17.7648L6.875 18.4679ZM10.8008 13.2043C12.2168 13.2043 13.3594 12.0617 13.3594 10.6457C13.3594 9.22965 12.2168 8.08707 10.8008 8.08707C9.38477 8.08707 8.24219 9.22965 8.24219 10.6457C8.24219 12.0617 9.38477 13.2043 10.8008 13.2043ZM10.8008 11.7394C10.1953 11.7394 9.70703 11.2511 9.70703 10.6457C9.70703 10.0402 10.1953 9.55191 10.8008 9.55191C11.4062 9.55191 11.8945 10.0402 11.8945 10.6457C11.8945 11.2511 11.4062 11.7394 10.8008 11.7394Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Header({
  name,
  controls,
  socialLinks,
  onHomeClick,
  selectedTheme,
  selectedLanguage,
  onThemeChange,
  onLanguageChange,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const iconButtonClass =
    'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--control-surface)] text-[var(--color-muted)] outline-none transition hover:text-[var(--color-heading)] hover:bg-[var(--control-hover)] focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-[1.2rem] border border-[var(--glass-border)] bg-[var(--header-surface)] px-4 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-5">
        <button
          className="truncate text-left text-sm font-semibold text-[var(--color-heading)]"
          onClick={onHomeClick}
          type="button"
        >
          {name}
        </button>

        <div className="flex items-center self-center gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              aria-label={link.name}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--control-surface)] px-3 text-[0.82rem] text-[var(--color-muted)] outline-none transition hover:bg-[var(--control-hover)] hover:text-[var(--color-heading)] focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              {link.name === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />}
              <span>{link.name}</span>
            </a>
          ))}

          <div className="relative flex items-center">
            <button
              aria-expanded={isMenuOpen}
              aria-haspopup="dialog"
              aria-label={controls.preferences}
              className={`${iconButtonClass} ${isMenuOpen ? 'bg-[var(--control-hover)] text-[var(--color-heading)]' : ''}`}
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <GearIcon />
            </button>

            {isMenuOpen ? (
              <div
                aria-label={controls.preferences}
                className="absolute right-0 top-11 rounded-[0.7rem] border border-[var(--glass-border)] bg-[var(--header-surface)] p-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.14)] backdrop-blur-xl"
                role="dialog"
              >
                <div className="space-y-1.5">
                  <div>
                    <p className="mb-0.5 text-[0.56rem] font-semibold tracking-[0.14em] text-[var(--color-subtle)] uppercase">
                      {controls.theme}
                    </p>
                    <div className="theme-switch" role="group" aria-label={controls.theme}>
                      <button
                        aria-pressed={selectedTheme === 'light'}
                        className={`theme-switch-option ${selectedTheme === 'light' ? 'theme-switch-option-active' : ''}`}
                        onClick={() => onThemeChange('light')}
                        type="button"
                      >
                        <SunIcon />
                      </button>
                      <button
                        aria-pressed={selectedTheme === 'dark'}
                        className={`theme-switch-option ${selectedTheme === 'dark' ? 'theme-switch-option-active' : ''}`}
                        onClick={() => onThemeChange('dark')}
                        type="button"
                      >
                        <MoonIcon />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0.5 text-[0.56rem] font-semibold tracking-[0.14em] text-[var(--color-subtle)] uppercase">
                      {controls.language}
                    </p>
                    <div className="language-switch" role="group" aria-label={controls.language}>
                      <button
                        aria-pressed={selectedLanguage === 'pt'}
                        className={`language-switch-option ${selectedLanguage === 'pt' ? 'language-switch-option-active' : ''}`}
                        onClick={() => onLanguageChange('pt')}
                        type="button"
                      >
                        <img alt="" className="h-3 w-3 rounded-full object-cover" src={flagBr} />
                        <span>{controls.portuguese}</span>
                      </button>
                      <button
                        aria-pressed={selectedLanguage === 'en'}
                        className={`language-switch-option ${selectedLanguage === 'en' ? 'language-switch-option-active' : ''}`}
                        onClick={() => onLanguageChange('en')}
                        type="button"
                      >
                        <img alt="" className="h-3 w-3 rounded-full object-cover" src={flagUs} />
                        <span>{controls.english}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
