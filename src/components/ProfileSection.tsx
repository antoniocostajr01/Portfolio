import memojiPlaceholder from '../assets/memoji1.png'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ProfileSection() {
  return (
    <div className="vision-glass flex flex-col items-center justify-center p-8 rounded-[2.5rem] h-full w-full text-center relative overflow-hidden">
      {/* Decorative glow behind avatar */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[var(--color-accent-blue)] rounded-full blur-[60px] opacity-20 pointer-events-none"></div>
      
      <div className="w-48 h-48 mb-6 flex items-center justify-center relative z-10">
        <img 
          src={memojiPlaceholder} 
          alt="Antonio Costa Jr" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      
      <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Antonio Costa Jr</h1>
      <h2 className="text-lg font-medium text-[var(--color-accent-blue)] mb-8">iOS Developer</h2>
      
      <div className="flex gap-4">
        <a href="https://github.com/antoniocostajr01" target="_blank" rel="noreferrer" className="glass-button-icon">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/antoniocosta001" target="_blank" rel="noreferrer" className="glass-button-icon">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="mailto:contact@example.com" className="glass-button-icon">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
