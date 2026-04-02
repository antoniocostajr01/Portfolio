import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'pulse',
    title: 'Pulse',
    period: '2026',
    iconLabel: 'P',
    accent: 'from-sky-400 via-cyan-300 to-white',
    technologies: ['SwiftUI', 'Combine', 'Core Data'],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/pulse',
      appStoreUrl: 'https://apps.apple.com',
    },
    members: [
      { name: 'Antonio Costa Jr', role: 'iOS Developer' },
      { name: 'Marina Alves', role: 'Designer' },
      { name: 'Julia Rocha', role: 'Scrum Master' },
      { name: 'Rafael Lima', role: 'Product Owner' },
    ],
    screenshots: [
      { id: 'pulse-1', title: 'Home screen' },
      { id: 'pulse-2', title: 'Tracking flow' },
      { id: 'pulse-3', title: 'Insights view' },
    ],
    content: {
      en: {
        subtitle: 'Daily habit and wellness tracking with a clean native flow.',
        overview:
          'Pulse is a habit and wellness tracking concept designed for a lightweight and polished native iPhone experience.',
        contribution: [
          'Built the iOS structure and core user flows.',
          'Organized reusable UI components and navigation patterns.',
          'Refined the app experience with focus on clarity, rhythm, and native interaction quality.',
        ],
      },
      pt: {
        subtitle:
          'Acompanhamento diário de hábitos e bem-estar com um fluxo nativo e limpo.',
        overview:
          'Pulse é um conceito de app para acompanhamento de hábitos e bem-estar, pensado para uma experiência nativa leve e bem acabada no iPhone.',
        contribution: [
          'Estruturei o app iOS e os fluxos principais da experiência.',
          'Organizei componentes reutilizáveis de interface e padrões de navegação.',
          'Refinei a experiência com foco em clareza, ritmo visual e qualidade de interação nativa.',
        ],
      },
    },
  },
  {
    id: 2,
    slug: 'habit-flow',
    title: 'Habit Flow',
    period: '2025',
    iconLabel: 'H',
    accent: 'from-violet-500 via-fuchsia-300 to-white',
    technologies: ['SwiftUI', 'Firebase', 'MVVM'],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/habit-flow',
    },
    members: [
      { name: 'Antonio Costa Jr', role: 'iOS Developer' },
      { name: 'Camila Torres', role: 'Designer' },
      { name: 'Lucas Pereira', role: 'Product Owner' },
    ],
    screenshots: [
      { id: 'habit-1', title: 'Planner screen' },
      { id: 'habit-2', title: 'Habit detail' },
    ],
    content: {
      en: {
        subtitle: 'Simple routine planning focused on consistency and progress.',
        overview:
          'Habit Flow explores a minimal routine planner that helps users stay consistent through simple scheduling and progress tracking.',
        contribution: [
          'Implemented the main planning and tracking screens.',
          'Improved the project structure to support future features.',
          'Worked with product and design decisions to keep the app focused and intuitive.',
        ],
      },
      pt: {
        subtitle:
          'Planejamento de rotina simples com foco em consistência e progresso.',
        overview:
          'Habit Flow explora um planejador de rotina minimalista, ajudando usuários a manter constância com agendamento simples e acompanhamento de progresso.',
        contribution: [
          'Implementei as principais telas de planejamento e acompanhamento.',
          'Melhorei a estrutura do projeto para suportar evolução futura.',
          'Atuei junto às decisões de produto e design para manter o app focado e intuitivo.',
        ],
      },
    },
  },
  {
    id: 3,
    slug: 'pocket-chef',
    title: 'Pocket Chef',
    period: '2025',
    iconLabel: 'C',
    accent: 'from-amber-400 via-orange-300 to-white',
    technologies: ['UIKit', 'Swift', 'URLSession'],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/pocket-chef',
      appStoreUrl: 'https://apps.apple.com',
    },
    members: [
      { name: 'Antonio Costa Jr', role: 'iOS Developer' },
      { name: 'Beatriz Souza', role: 'Designer' },
      { name: 'Henrique Costa', role: 'Scrum Master' },
      { name: 'Paula Mendes', role: 'Product Owner' },
    ],
    screenshots: [
      { id: 'chef-1', title: 'Recipe gallery' },
      { id: 'chef-2', title: 'Recipe detail' },
      { id: 'chef-3', title: 'Favorites list' },
    ],
    content: {
      en: {
        subtitle:
          'Recipe and meal ideas designed for a lightweight mobile experience.',
        overview:
          'Pocket Chef is a recipe-focused concept with a friendly browsing flow, clean reading experience, and lightweight mobile interactions.',
        contribution: [
          'Built the browsing and detail flows with attention to native navigation.',
          'Worked on reusable screen composition patterns for recipes and saved items.',
          'Focused on interface clarity and smooth interaction details across the product.',
        ],
      },
      pt: {
        subtitle:
          'Receitas e ideias de refeições pensadas para uma experiência mobile leve.',
        overview:
          'Pocket Chef é um conceito focado em receitas, com navegação amigável, leitura limpa e interações leves para a experiência mobile.',
        contribution: [
          'Desenvolvi os fluxos de navegação e detalhe com atenção à experiência nativa.',
          'Trabalhei em padrões reutilizáveis de composição de telas para receitas e itens salvos.',
          'Mantive foco em clareza de interface e em detalhes fluidos de interação ao longo do produto.',
        ],
      },
    },
  },
]
