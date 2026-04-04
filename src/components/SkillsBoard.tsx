interface SkillsBoardProps {
  title: string
  description: string
  languages: readonly string[]
}

const devices = ['MacBook', 'iMac', 'Macintosh', 'iPhone', 'iPad', 'Apple Watch']

function SkillsBoard({ title, description, languages }: SkillsBoardProps) {
  return (
    <section className="skills-board">
      <div>
        <span className="section-kicker">Skills</span>
        <h2 className="skills-board-title">{title}</h2>
        <p className="skills-board-description">{description}</p>
      </div>

      <div className="skills-language-list">
        {languages.map((language) => (
          <span key={language} className="skills-language-pill">
            {language}
          </span>
        ))}
      </div>

      <div className="apple-device-grid" aria-label="Apple devices">
        {devices.map((device) => (
          <div key={device} className="apple-device-card">
            <div className="apple-device-icon">
              <span>{device.slice(0, 2)}</span>
            </div>
            <span className="apple-device-label">{device}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsBoard
