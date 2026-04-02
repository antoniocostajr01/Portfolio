# Adding New Projects

This file explains how to manually add future projects to the portfolio using the same structure you are using now: one folder per project inside `src/assets/`.

## Files you will use

- `src/data/projects.ts`
- `src/assets/your-project-name/`

Each project entry controls:

- the project row on the home page
- the clickable detail page
- the project icon
- screenshots
- technologies
- GitHub and App Store links
- team members
- your contribution

## 1. Create the project assets folder

Inside `src/assets/`, create a folder for the project.

Example:

```text
src/assets/lavanda/
```

Inside that folder, place:

- the app icon
- the screenshots you want to show on the detail page

Example:

```text
src/assets/lavanda/lavandaIcon.png
src/assets/lavanda/screenshoot1.png
src/assets/lavanda/screenshoot2.png
src/assets/lavanda/screenshoot3.png
```

You can use any naming pattern you want, but keeping `projectIcon` plus numbered screenshots makes it easier to maintain.

## 2. Import the icon and screenshots

Open `src/data/projects.ts` and import the images from the new folder.

Example:

```ts
import lavandaIcon from '../assets/lavanda/lavandaIcon.png'
import screenshot1 from '../assets/lavanda/screenshoot1.png'
import screenshot2 from '../assets/lavanda/screenshoot2.png'
```

## 3. Duplicate an existing project entry

Inside the `projects` array in `src/data/projects.ts`, copy an existing project object and update it.

Main fields:

- `id`: use a new number
- `slug`: unique route id, for example `my-new-app`
- `title`: project name
- `period`: year or date label
- `iconSrc`: imported icon image
- `technologies`: stack used in the project

## 4. Add the project links

Inside `links`, you can add:

- `githubUrl`
- `appStoreUrl`

Example:

```ts
links: {
  githubUrl: 'https://github.com/your-user/your-project',
  appStoreUrl: 'https://apps.apple.com/app/...',
}
```

If the app is not published on the App Store, just omit `appStoreUrl`.

## 5. Add the team members and LinkedIn URLs

Inside `members`, add each person with:

- `name`
- `role`
- `linkedinUrl`

Example:

```ts
members: [
  {
    name: 'Antonio Costa Jr',
    role: 'iOS Developer',
    linkedinUrl: 'https://www.linkedin.com/in/your-profile',
  },
  {
    name: 'Maria Silva',
    role: 'Designer',
    linkedinUrl: 'https://www.linkedin.com/in/maria-silva',
  },
]
```

The name becomes clickable on the project detail page when `linkedinUrl` is provided.

## 6. Add the texts in both languages

Each project needs:

- `content.en`
- `content.pt`

Each language block contains:

- `subtitle`
- `overview`
- `contribution`

Example:

```ts
content: {
  en: {
    subtitle: 'Short English summary.',
    overview: 'English overview of the project.',
    contribution: [
      'Built the main iOS flows.',
      'Worked on architecture and reusable UI.',
    ],
  },
  pt: {
    subtitle: 'Resumo curto em portugues.',
    overview: 'Visao geral do projeto em portugues.',
    contribution: [
      'Desenvolvi os fluxos principais do app iOS.',
      'Trabalhei na arquitetura e em componentes reutilizaveis.',
    ],
  },
}
```

## 7. Add the screenshots to the project entry

Inside `screenshots`, add one object per image.

Each screenshot item uses:

- `id`
- `title`
- `imageSrc`

Example:

```ts
screenshots: [
  { id: 'project-1', title: 'Launch screen', imageSrc: screenshot1 },
  { id: 'project-2', title: 'Home', imageSrc: screenshot2 },
  { id: 'project-3', title: 'Checkout', imageSrc: screenshot3 },
]
```

## 8. Example project structure

```ts
{
  id: 2,
  slug: 'my-new-app',
  title: 'My New App',
  period: '2026',
  iconSrc: myNewAppIcon,
  technologies: ['SwiftUI', 'Swift', 'Firebase'],
  links: {
    githubUrl: 'https://github.com/your-user/my-new-app',
  },
  members: [
    {
      name: 'Antonio Costa Jr',
      role: 'iOS Developer',
      linkedinUrl: 'https://www.linkedin.com/in/your-profile',
    },
  ],
  screenshots: [
    { id: 'my-new-app-1', title: 'Home', imageSrc: screenshot1 },
    { id: 'my-new-app-2', title: 'Detail', imageSrc: screenshot2 },
  ],
  content: {
    en: {
      subtitle: 'Short summary in English.',
      overview: 'Project overview in English.',
      contribution: ['Built the app architecture.'],
    },
    pt: {
      subtitle: 'Resumo curto em portugues.',
      overview: 'Visao geral do projeto em portugues.',
      contribution: ['Desenvolvi a arquitetura do app.'],
    },
  },
}
```

## 9. Understand the route

The project detail page is created from the `slug`.

If the slug is:

```ts
slug: 'my-new-app'
```

the page URL becomes:

- `/projects/my-new-app`

## 10. Test locally

Run:

```bash
npm run dev
```

Then verify:

1. the project appears on the home page
2. the row is clickable
3. the icon appears correctly on home and detail
4. screenshots appear on the detail page
5. GitHub and App Store links appear only when provided
6. team member names open LinkedIn correctly
7. the project name in the header still returns to the home page

## Related files

- `src/data/projects.ts`
- `src/components/Projects.tsx`
- `src/components/ProjectDetail.tsx`
- `src/App.tsx`
