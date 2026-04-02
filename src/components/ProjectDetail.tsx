import type { Language, Project, ProjectDetailCopy } from '../types'

interface ProjectDetailProps {
  project: Project
  language: Language
  copy: ProjectDetailCopy
  onBackHome: () => void
}

function ProjectDetail({
  project,
  language,
  copy,
  onBackHome,
}: ProjectDetailProps) {
  const content = project.content[language]

  const GitHubIcon = () => (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.535 2.865 8.382 6.839 9.74.5.095.682-.222.682-.494 0-.244-.009-.89-.014-1.748-2.782.62-3.369-1.387-3.369-1.387-.455-1.192-1.11-1.51-1.11-1.51-.908-.638.069-.625.069-.625 1.004.072 1.532 1.06 1.532 1.06.892 1.576 2.341 1.12 2.91.856.091-.664.349-1.12.635-1.377-2.22-.26-4.555-1.14-4.555-5.074 0-1.121.389-2.037 1.029-2.755-.103-.261-.446-1.31.098-2.73 0 0 .84-.277 2.75 1.053A9.303 9.303 0 0 1 12 6.83c.85.004 1.705.117 2.504.343 1.909-1.33 2.748-1.053 2.748-1.053.546 1.42.203 2.469.1 2.73.641.718 1.028 1.634 1.028 2.755 0 3.944-2.338 4.81-4.566 5.065.359.319.678.949.678 1.913 0 1.381-.012 2.495-.012 2.834 0 .274.18.594.688.493C19.138 20.644 22 16.8 22 12.266 22 6.596 17.523 2 12 2Z" />
    </svg>
  )

  const AppStoreIcon = () => (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 512 512" fill="none">
      <path
        d="M96.3785 0H415.46C418.532 0.827483 422.01 1.04854 425.165 1.62597C429.165 2.35863 433.182 3.26718 437.082 4.42473C462.485 12.1449 484.055 29.1308 497.517 52.0125C503.44 61.9923 507.617 72.9103 509.865 84.2958C510.64 88.4405 511.105 93.564 512 97.5238V414.895L511.935 415.17C511.552 416.833 511.23 418.792 511.022 420.497C507.385 450.715 489.26 479.058 463.545 495.318C453.075 502.06 441.505 506.92 429.36 509.672C426.585 510.282 418.393 511.105 416.345 512H96.331C93.347 511.072 86.882 510.448 83.3832 509.72C73.4162 507.648 64.6712 504.385 55.668 499.645C31.2587 486.54 12.9455 464.405 4.64505 437.973C2.8803 432.255 1.80219 426.445 0.961677 420.543C0.75088 419.06 0.472317 417.32 0 415.922V95.8995C0.762863 94.0012 1.64894 86.6552 2.17748 83.9985C4.3213 73.2827 8.17453 62.9812 13.5895 53.489C29.5655 26.107 54.456 7.7651 85.6283 1.83789C89.0298 1.19115 93.1158 0.916568 96.3785 0ZM407.345 481.943C411.943 481.715 415.47 481.565 420.033 480.763C436.345 477.825 451.235 469.59 462.392 457.33C472.185 446.635 478.638 433.305 480.95 418.99C482.138 411.742 482.013 404.55 482.015 397.237L482.013 375.505L482.01 299.915L482.008 168.981L482.015 126.692C482.018 118.826 482.25 109.801 481.87 102.073C481.055 81.7495 472.01 62.6307 456.815 49.1115C446.213 39.616 433.107 33.3627 419.057 31.0942C412.262 30.01 404.955 30.074 398.098 30.0718L377.953 30.0755L309.245 30.082L173.085 30.0793L128.186 30.079C120.777 30.0793 112.313 29.8752 104.998 30.1157C83.448 30.7877 65.317 37.8923 50.3042 53.798C40.2232 64.5188 33.5482 77.9882 31.1232 92.503C29.8517 100.076 30.0042 106.791 30.0085 114.409L30.01 133.852L30.015 203.023L30.0195 339.415L30.01 384.052C30.0065 392.077 29.8283 400.975 30.0823 408.927C30.6025 428.945 39.1207 447.922 53.7332 461.615C64.3867 471.665 77.7718 478.345 92.2085 480.818C99.498 482.068 106.84 482 114.202 482L133.635 481.995L199.379 481.99L337.35 481.992H382.895C390.83 481.992 399.473 482.163 407.345 481.943Z"
        fill="currentColor"
      />
      <path
        d="M229.342 105.113C231.773 105.028 234.204 105.276 236.567 105.85C247.106 108.461 250.9 115.391 255.995 123.92C256.655 123.027 258.19 120.333 258.805 119.266C262.675 112.541 267.46 107.745 275.225 105.855C281.788 104.223 288.73 105.271 294.518 108.769C300.203 112.223 304.253 117.823 305.758 124.301C306.923 129.279 306.525 134.495 304.618 139.238C302.858 143.622 296.935 153.241 294.278 157.835L274.188 192.624L236.586 257.742C230.506 268.272 223.696 280.845 217.368 290.953C234.805 291.505 252.625 290.513 270.093 291.068C271.358 291.108 272.153 292.235 272.76 293.225C274.648 296.308 276.42 299.473 278.225 302.605L293.08 328.365C295.113 331.902 298.1 337.905 300.535 340.93C293.325 341.2 285.523 341.078 278.273 341.078L242.375 341.082L149.533 341.08L123.316 341.103C112 341.108 101.968 342.425 93.1565 333.91C88.3608 329.305 85.6288 322.957 85.581 316.31C85.5148 309.615 88.1108 303.168 92.7978 298.385C95.8748 295.2 99.7958 292.955 104.102 291.918C109.67 290.535 119.866 291.035 126.018 290.983C137.187 290.888 148.467 291.125 159.65 290.967C164.651 281.887 170.455 272.29 175.685 263.233L208.224 206.848L220.792 185.108C222.211 182.654 225.953 176.542 226.983 174.128C225.803 171.686 223.524 167.99 222.112 165.551L212.903 149.646C211.036 146.427 208.71 142.67 207.372 139.26C206.464 136.952 205.899 134.523 205.693 132.052C205.148 125.331 207.304 118.671 211.685 113.546C216.309 108.113 222.377 105.684 229.342 105.113Z"
        fill="currentColor"
      />
      <path
        d="M296.35 194.636C297.66 195.202 346.035 281.09 352.348 290.847C354.105 291.01 355.885 291 357.65 291.002C371.437 291.015 385.223 290.955 399.008 290.995C402.383 291.005 405.803 291.275 409.04 292.28C412.98 293.502 416.63 295.787 419.49 298.752C424.092 303.55 426.567 309.997 426.36 316.642C426.217 323.305 423.38 329.627 418.497 334.162C410.857 341.297 403.985 341.075 394.328 341.1C389.925 341.145 385.525 341.117 381.125 341.02C383.91 344.902 387.285 351.377 389.7 355.707C396.34 367.617 403.262 374.72 399.927 389.047C399.4 390.572 398.937 391.797 398.207 393.247C395.102 399.305 389.7 403.867 383.205 405.91C372.72 409.31 360.415 404.522 354.812 395.21C352.402 391.21 350.083 387.232 347.753 383.187L335.47 361.865L296.413 294.202L276.68 260.037C275.04 257.202 268.632 246.555 267.927 244.318C268.512 242.051 272.21 236.035 273.585 233.646L282.332 218.475L290.967 203.528C292.512 200.857 294.608 197.022 296.35 194.636Z"
        fill="currentColor"
      />
      <path
        d="M119.556 361.062C121.921 360.945 124.408 360.962 126.784 360.985C143.487 361.152 160.291 360.722 176.982 361.09C175.598 363.09 173.787 366.51 172.511 368.727L162.849 385.49C160.914 388.842 158.688 392.957 156.466 396.042C151.228 403.025 144.36 407.152 135.431 406.907C128.705 406.732 122.325 403.885 117.705 398.992C113.218 394.177 110.844 387.767 111.112 381.192C111.342 375.077 113.357 371.24 116.27 366.022C117.154 364.44 118.247 362.272 119.556 361.062Z"
        fill="currentColor"
      />
    </svg>
  )

  return (
    <main className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 pb-10 pt-24 sm:px-8 lg:px-10">
      <section className="border-b border-[var(--line-color)] pb-8">
        <button
          className="text-sm text-[var(--color-subtle)] transition hover:text-[var(--color-heading)]"
          onClick={onBackHome}
          type="button"
        >
          {copy.backToHome}
        </button>

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-gradient-to-br ${project.accent} text-2xl font-semibold text-slate-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_12px_24px_rgba(0,0,0,0.16)]`}
            >
              {project.iconLabel}
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-[var(--color-heading)]">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              {content.overview}
            </p>
          </div>
          <p className="text-sm text-[var(--color-subtle)]">{project.period}</p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-heading)]">
              {copy.contributionHeading}
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
              {content.contribution.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-heading)]">
              {copy.screenshotsHeading}
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {project.screenshots.map((screenshot) => (
                <div
                  key={screenshot.id}
                  className="overflow-hidden rounded-[1.25rem] border border-[var(--glass-border)] bg-[var(--control-surface)]"
                >
                  {screenshot.imageSrc ? (
                    <img
                      alt={screenshot.title}
                      className="aspect-[9/18] w-full object-cover"
                      src={screenshot.imageSrc}
                    />
                  ) : (
                    <div className="flex aspect-[9/18] items-center justify-center px-5 text-center text-sm text-[var(--color-subtle)]">
                      {screenshot.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-[var(--color-heading)]">
              {copy.projectLinks}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {project.links.githubUrl ? (
                <a
                  className="secondary-chip justify-center gap-2"
                  href={project.links.githubUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHubIcon />
                  {copy.github}
                </a>
              ) : null}

              {project.links.appStoreUrl ? (
                <a
                  className="secondary-chip justify-center gap-2"
                  href={project.links.appStoreUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AppStoreIcon />
                  {copy.appStore}
                </a>
              ) : null}

              {!project.links.githubUrl && !project.links.appStoreUrl ? (
                <p className="text-sm text-[var(--color-subtle)]">{copy.noLinks}</p>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-heading)]">
              {copy.technologies}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--glass-border)] bg-[var(--control-surface)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-[var(--color-heading)]">
              {copy.membersHeading}
            </h2>
            <div className="mt-4 space-y-3">
              {project.members.map((member) => (
                <div
                  key={`${member.name}-${member.role}`}
                  className="rounded-[1rem] border border-[var(--glass-border)] bg-[var(--control-surface)] px-4 py-3"
                >
                  <p className="font-medium text-[var(--color-heading)]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-subtle)]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default ProjectDetail
