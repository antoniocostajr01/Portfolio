# Adding New Projects

This file explains how to manually add future projects to the portfolio.

## Where project data lives

All project content is stored in:

- `src/data/projects.ts`

Each project object controls:

- the project row shown on the home page
- the clickable detail page route
- team members
- your contribution
- GitHub and App Store links
- screenshots

## 1. Duplicate an existing project entry

Open `src/data/projects.ts` and copy one existing project object inside the `projects` array.

Update these fields:

- `id`: use a new number
- `slug`: unique route id, for example `my-new-app`
- `title`: project name
- `period`: year or date label
- `iconLabel`: temporary letter shown in the icon block
- `accent`: Tailwind gradient classes for the icon background

## 2. Add links

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

If the project is not on the App Store yet, just omit `appStoreUrl`.

## 3. Add team members

Inside `members`, add the people and their roles:

```ts
members: [
  { name: 'Antonio Costa Jr', role: 'iOS Developer' },
  { name: 'Maria Silva', role: 'Designer' },
  { name: 'Joao Souza', role: 'Scrum Master' },
  { name: 'Ana Costa', role: 'Product Owner' },
]
```

## 4. Add content in both languages

Each project has:

- `content.en`
- `content.pt`

Each one needs:

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

## 5. Add screenshots

Inside `screenshots`, each screenshot needs:

- `id`
- `title`
- optional `imageSrc`

Example with placeholders:

```ts
screenshots: [
  { id: 'home', title: 'Home screen' },
  { id: 'detail', title: 'Detail screen' },
]
```

If you want real screenshots:

1. Add image files into `src/assets/`
2. Import them at the top of `src/data/projects.ts`
3. Pass them to `imageSrc`

Example:

```ts
import screenHome from '../assets/my-app-home.png'
```

Then:

```ts
screenshots: [
  { id: 'home', title: 'Home screen', imageSrc: screenHome },
]
```

## 6. Understand the route

The detail page route is created from the `slug`.

If you use:

```ts
slug: 'my-new-app'
```

the project page becomes:

- `/projects/my-new-app`

## 7. Test locally

Run:

```bash
npm run dev
```

Then verify:

1. the project appears in the home list
2. clicking it opens the detail page
3. the project name in the header still returns to home
4. GitHub and App Store links appear only when provided
5. the team and contribution sections render correctly

## Related files

- `src/data/projects.ts`
- `src/components/Projects.tsx`
- `src/components/ProjectDetail.tsx`
- `src/App.tsx`
