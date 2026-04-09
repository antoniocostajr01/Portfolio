import React from 'react'

const Education: React.FC = () => {
  return (
    <div className="mt-8 border-t-4 border-[var(--color-primary)] pt-8">
      <h3 className="font-heading text-4xl mb-8 uppercase">Education</h3>
      
      <div className="flex flex-col gap-8">
        
        {/* Timeline Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-[var(--color-text)]/20">
          <div className="md:col-span-1 font-body font-bold text-lg text-[var(--color-accent-orange)]">
            2021 — 2025
          </div>
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-body text-2xl font-bold uppercase tracking-wide mb-2">Systems Information</h4>
            <p className="font-body opacity-80 text-lg uppercase tracking-widest text-[var(--color-primary)]">Federal University of Ceará</p>
          </div>
        </div>

        {/* Timeline Row 2 (Optional/Extension if needed, omitted currently to keep minimal) */}
        
      </div>
    </div>
  )
}

export default Education
