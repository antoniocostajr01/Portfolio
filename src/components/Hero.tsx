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
      className="grid items-center gap-5 border-b border-[var(--line-color)] pb-8 pt-2 sm:grid-cols-[0.85fr_1.15fr] sm:gap-6"
    >
      <div className="flex items-center justify-start">
        {imageSrc ? (
          <div className="flex h-[185px] w-[185px] items-center justify-center overflow-hidden sm:h-[195px] sm:w-[195px]">
            <img
              alt={imageAlt}
              className={`h-[170px] w-[170px] object-contain object-center sm:h-[180px] sm:w-[180px] ${imageScaleClass}`}
              src={imageSrc}
            />
          </div>
        ) : (
          <div className="flex min-h-[170px] w-full max-w-[185px] items-center justify-center rounded-[1rem] border border-dashed border-[var(--glass-border)] px-6 text-center text-sm text-[var(--color-muted)]">
          </div>
        )}
      </div>

      <div className="flex h-full items-center justify-center sm:justify-end">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="max-w-xl text-3xl leading-[1] font-semibold tracking-[-0.05em] text-[var(--color-heading)] sm:text-[2.6rem]">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-lg text-[0.98rem] leading-7 text-[var(--color-muted)] sm:text-base">
            {copy.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
