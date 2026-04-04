import aboutMacbook from '../assets/about-macbook.png'

interface AboutBoardProps {
  title: string
  description: string
}

function AboutBoard({ title, description }: AboutBoardProps) {
  return (
    <section className="about-board">
      <div className="about-board-copy">
        <span className="section-kicker">About</span>
        <h2 className="about-board-title">{title}</h2>
        <p className="about-board-description">{description}</p>
      </div>

      <div className="about-device-illustration" aria-hidden="true">
        <img alt="" className="about-overflow-device" src={aboutMacbook} />
      </div>
    </section>
  )
}

export default AboutBoard
