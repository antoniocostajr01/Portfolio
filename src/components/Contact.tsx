import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
    <section id="contact" className="relative px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1380px] gap-8 lg:grid-cols-[0.58fr_0.42fr]">
        <motion.div
          className="rounded-[2.25rem] bg-[var(--color-primary)] p-8 text-[var(--color-primary-contrast)] shadow-[0_24px_60px_rgba(16,26,56,0.18)]"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="section-badge-dark">Contact</span>
          <h2 className="mt-5 font-heading text-[3.6rem] leading-[0.9] tracking-[-0.05em] sm:text-[5rem]">
            Let&apos;s build something premium.
          </h2>
          <p className="mt-6 max-w-[34rem] text-lg leading-8 text-[var(--color-primary-muted)]">
            Open to iOS roles, mobile opportunities, and collaborations where
            product quality, native performance, and thoughtful design matter.
          </p>

          <motion.a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] shadow-[0_12px_30px_rgba(246,170,61,0.28)]"
            href="mailto:antoniocostajr01@gmail.com"
            whileHover={{ y: -3, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Send an email
          </motion.a>
        </motion.div>

        <div className="grid gap-5">
          {socialLinks.map((link, index) => {
            const Icon = link.icon

            return (
              <motion.a
                key={link.label}
                className="social-link-card"
                href={link.href}
                initial={{ opacity: 0, x: 24 }}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="social-icon-shell">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    Reach out
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-[var(--color-heading)]">
                    {link.label}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
