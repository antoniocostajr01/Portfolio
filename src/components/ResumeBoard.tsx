interface ResumeBoardProps {
  title: string
  description: string
  resumeUrl: string
}

function ResumeBoard({ title, description, resumeUrl }: ResumeBoardProps) {
  return (
    <section className="resume-board">
      <div className="resume-board-copy">
        <span className="section-kicker">Resume</span>
        <h2 className="resume-board-title">{title}</h2>
        <p className="resume-board-description">{description}</p>
      </div>

      <div className="resume-frame">
        <iframe className="resume-preview" src={resumeUrl} title="Resume preview" />
      </div>

      <a className="resume-open-button" href={resumeUrl} rel="noreferrer" target="_blank">
        Open PDF
      </a>
    </section>
  )
}

export default ResumeBoard
