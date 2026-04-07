import type { HeroCopy } from '../types'

interface HeroProps {
  imageSrc: string
  imageAlt: string
  imageScaleClass?: string
  copy: HeroCopy
}

function Hero({ imageSrc, imageAlt, imageScaleClass = '', copy }: HeroProps) {
  return (
    <section
      id="top"
      className="grid items-center gap-8 border-b border-[var(--glass-border)] pb-12 pt-6 sm:grid-cols-[1.1fr_0.9fr] sm:gap-12 relative"
    >
      <div className="flex h-full items-center justify-center sm:justify-start order-2 sm:order-1">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="max-w-xl text-4xl leading-[1.1] font-bold tracking-tight text-[var(--color-heading)] sm:text-[3.4rem] drop-shadow-sm">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-lg text-[1.05rem] font-medium leading-relaxed text-[var(--color-text)] sm:text-[1.1rem] opacity-90 drop-shadow-sm">
            {copy.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center sm:justify-end order-1 sm:order-2">
        {imageSrc ? (
          <div className="vision-glass-strong flex h-[200px] w-[200px] items-center justify-center overflow-hidden sm:h-[250px] sm:w-[250px] rounded-[3rem] sm:rounded-[4rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.3)]">
            <img
              alt={imageAlt}
              className={`h-[180px] w-[180px] object-contain object-center sm:h-[220px] sm:w-[220px] ${imageScaleClass} drop-shadow-2xl opacity-95`}
              src={imageSrc}
            />
          </div>
        ) : (
          <div className="vision-glass-strong flex min-h-[200px] w-full max-w-[200px] items-center justify-center rounded-[3rem] sm:rounded-[4rem] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.3)] px-6 text-center text-sm font-medium text-[var(--color-text)]">
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
