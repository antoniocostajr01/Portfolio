import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


import konohaImg from '../assets/konoha-skyline.png'

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antoniocosta001',
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/antoniocostajr01',
    icon: FaGithub,
  },
  {
    label: 'Email',
    href: 'mailto:antoniocostajr01@gmail.com',
    icon: Mail,
  },
]

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Konoha skyline */}
      <div className="konoha-backdrop">
        <img alt="" className="h-auto w-full object-contain" src={konohaImg} />
      </div>



      {/* Orange top line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-orange)] opacity-60" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="seal-badge">第五章 · Contact</span>

          <h2 className="mt-6 font-display text-[clamp(4rem,12vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.03em] text-[var(--color-heading)]">
            LET'S{' '}
            <span className="text-[var(--color-orange)]">TALK</span>
          </h2>

          <div className="mt-3 h-[3px] w-20 bg-[var(--color-orange)]" />

          <p className="mt-6 max-w-[30rem] text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Open to iOS roles, mobile opportunities, and collaborations where
            product quality, native performance, and thoughtful design matter.
          </p>

          {/* CTA */}
          <motion.a
            className="cta-button mt-8"
            href="mailto:antoniocostajr01@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Send an email
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          {/* Social cards */}
          <div className="mt-14 grid w-full max-w-[720px] gap-4 sm:grid-cols-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  className="manga-panel group flex items-center gap-4 !border-2 p-5 transition-all hover:!border-[var(--color-orange)] hover:shadow-[4px_4px_0_var(--color-orange)]"
                  href={link.href}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex h-11 w-11 items-center justify-center bg-[var(--color-orange)] text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      Connect
                    </p>
                    <p className="mt-1 text-lg font-bold text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-orange)]">
                      {link.label}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Footer */}
          <p className="mt-16 text-[0.6rem] font-extrabold uppercase tracking-[0.25em] text-[var(--color-muted)] opacity-40">
            Antonio Costa Jr · {new Date().getFullYear()} · 火の国
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
