import type { Project, ProjectScreenshot } from '../types'

const assetModules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function getProjectAsset(projectFolder: string, fileName: string) {
  return assetModules[`../assets/${projectFolder}/${fileName}`]
}

function createScreenshots(
  projectFolder: string,
  items: Array<{ id: string; title: string; fileName: string }>,
): ProjectScreenshot[] {
  return items.map(({ id, title, fileName }) => ({
    id,
    title,
    imageSrc: getProjectAsset(projectFolder, fileName),
  }))
}

export const projects: Project[] = [
  {
    id: 96,
    slug: 'lavanda',
    title: 'Lavanda',
    period: '2025',
    origin: 'Apple Developer Academy',
    iconSrc: getProjectAsset('lavanda', 'lavandaIcon.png'),
    iconLabel: 'L',
    accent: 'from-emerald-200 via-green-100 to-lime-100',
    technologies: ['UIKit', 'Swift', 'URLSession', 'Core Data', 'ViewCode', 'MVC'],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/laundry-app',
    },
    members: [
      {
        name: 'Antonio Costa Jr',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
      {
        name: 'Enzo Tonatto',
        role: 'iOS Developer / Scrum Master',
        linkedinUrl: 'https://www.linkedin.com/in/enzotonatto/',
      },
      {
        name: 'Gabriel Barbosa',
        role: 'iOS Developer',
        linkedinUrl:
          'https://www.linkedin.com/in/gabriel-cabreira-barbosa-972ba8247/',
      },
      {
        name: 'Gustavo Melleu',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/gustavo-melleu-218533231/',
      },
      {
        name: 'Julia Nascimento',
        role: 'UX/UI Designer',
        linkedinUrl: 'https://www.linkedin.com/in/julianascimentocosta/',
      },
    ],
    screenshots: createScreenshots('lavanda', [
      { id: 'lavanda-1', title: 'Launch screen', fileName: 'screenshoot1.png' },
      { id: 'lavanda-2', title: 'Home', fileName: 'screenshoot2.png' },
      { id: 'lavanda-3', title: 'Clothes selection', fileName: 'screenshoot3.png' },
      { id: 'lavanda-4', title: 'Cart summary', fileName: 'screenshoot4.png' },
      { id: 'lavanda-5', title: 'Address form', fileName: 'screenshoot5.png' },
      { id: 'lavanda-6', title: 'Order review', fileName: 'screenshoot6.png' },
      { id: 'lavanda-7', title: 'Payment flow', fileName: 'screenshoot7.png' },
      { id: 'lavanda-8', title: 'Confirmation', fileName: 'screenshoot8.png' },
    ]),
    content: {
      en: {
        subtitle:
          'Laundry app focused on a simple order flow, address validation, and checkout.',
        overview:
          'Lavanda is an iOS application designed to simplify the laundry ordering experience. The app guides users through clothes selection, validates delivery addresses using CEP, and closes the flow with a straightforward checkout experience.',
        contribution: [
          'Developed the iOS application structure using Swift and programmatic UI.',
          'Built the main ordering flow, including clothes selection, summary, and checkout steps.',
          'Integrated local persistence and external services for address validation and supporting data.',
        ],
      },
      pt: {
        subtitle:
          'App de lavanderia com foco em pedido simples, validação de endereço e checkout.',
        overview:
          'Lavanda é uma aplicação iOS criada para simplificar a experiência de pedido em uma lavanderia. O app conduz o usuário pela seleção de roupas, valida endereços com CEP e fecha o fluxo com uma experiência de checkout direta.',
        contribution: [
          'Desenvolvi a estrutura da aplicação iOS utilizando Swift e UI programática.',
          'Construí o fluxo principal de pedido, incluindo seleção de roupas, resumo e etapas de checkout.',
          'Integrei persistência local e serviços externos para validação de endereço e dados de apoio.',
        ],
      },
    },
  },
  {
    id: 98,
    slug: 'readup',
    title: 'ReadUp',
    period: '2025',
    origin: 'Personal Project',
    iconSrc: getProjectAsset('readUp', 'readUpIcon.png'),
    iconLabel: 'R',
    accent: 'from-blue-200 via-indigo-100 to-purple-100',
    technologies: ['SwiftUI', 'Swift', 'SwiftData', 'MVVM', 'Xcode', 'Git'],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/ReadUp',
    },
    members: [
      {
        name: 'Antonio Costa Jr',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
    ],
    screenshots: createScreenshots('readUp', [
      { id: 'readup-1', title: 'Launch screen', fileName: 'screenshoot1.png' },
      { id: 'readup-2', title: 'Dashboard', fileName: 'screenshoot2.png' },
      { id: 'readup-3', title: 'Reading session', fileName: 'screenshoot3.png' },
      { id: 'readup-4', title: 'Book organization', fileName: 'screenshoot4.png' },
      { id: 'readup-5', title: 'Reading insights', fileName: 'screenshoot5.png' },
      { id: 'readup-6', title: 'Library status', fileName: 'screenshoot6.png' },
    ]),
    content: {
      en: {
        subtitle:
          'Reading tracker for sessions, insights, and personal library organization.',
        overview:
          'ReadUp is an iOS application built to support a more consistent reading habit. It helps users time reading sessions, save notes and reflections after each session, and keep their library organized by reading status.',
        contribution: [
          'Designed and developed the iOS application using SwiftUI and Swift.',
          'Built the reading session flow with timer support and post-session notes.',
          'Integrated SwiftData to persist books, reading progress, and user insights locally.',
        ],
      },
      pt: {
        subtitle:
          'App de leitura para sessões, insights e organização da biblioteca pessoal.',
        overview:
          'ReadUp é uma aplicação iOS criada para apoiar um hábito de leitura mais consistente. Ela ajuda o usuário a cronometrar sessões de leitura, salvar anotações e reflexões após cada sessão e organizar a biblioteca por status de leitura.',
        contribution: [
          'Desenhei e desenvolvi a aplicação iOS usando SwiftUI e Swift.',
          'Construí o fluxo de sessão de leitura com suporte a cronômetro e anotações pós-sessão.',
          'Integrei SwiftData para persistir localmente livros, progresso de leitura e insights do usuário.',
        ],
      },
    },
  },
  {
    id: 99,
    slug: 'retrotrip',
    title: 'RetroTrip',
    period: '2025',
    origin: 'Apple Developer Academy',
    iconSrc: getProjectAsset('retroTrip', 'retroTripIcon.png'),
    iconLabel: 'RT',
    accent: 'from-amber-200 via-orange-100 to-red-100',
    technologies: ['Swift', 'SwiftUI', 'MapKit', 'SceneKit', 'WidgetKit', 'MVVM'],
    links: {
      appStoreUrl: 'https://apps.apple.com/br/app/retrotrip/id6752355019',
    },
    members: [
      {
        name: 'Alex Fraga',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/alex-fraga1/',
      },
      {
        name: 'Antônio Costa Jr',
        role: 'iOS Developer / Scrum Master',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
      {
        name: 'Eduardo Fensterseifer',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/eduardo-fensterseifer/',
      },
      {
        name: 'Leonardo Simon',
        role: 'UX/UI Designer / Product Owner',
        linkedinUrl: 'https://www.linkedin.com/in/leonardosimon/',
      },
      {
        name: 'Marcos Raach',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/marcosraach/',
      },
    ],
    screenshots: createScreenshots('retroTrip', [
      {
        id: 'retrotrip-1',
        title: 'Interactive World Map',
        fileName: 'screenshoot1.png',
      },
      {
        id: 'retrotrip-2',
        title: '3D Quiz Environment',
        fileName: 'screenshoot2.png',
      },
      {
        id: 'retrotrip-3',
        title: 'Multiplayer Match',
        fileName: 'screenshoot3.png',
      },
      {
        id: 'retrotrip-4',
        title: 'Leaderboards',
        fileName: 'screenshoot4.png',
      },
    ]),
    content: {
      en: {
        subtitle:
          'An immersive trivia game that blends history and technology through interactive maps and 3D quizzes.',
        overview:
          'RetroTrip is an educational iOS app designed for students, curious minds, and history lovers. It allows users to explore historical events on a world map, test their knowledge in challenging 3D environments, and compete with friends in a real-time multiplayer mode.',
        contribution: [
          'Collaborated with a team of five developers to build an immersive and gamified historical learning experience.',
          'Helped implement features such as interactive world maps, 3D quiz environments, and a comprehensive achievement system.',
          'Integrated dynamic features including real-time multiplayer leaderboards, a rechargeable energy system, and iOS Home Screen widgets.',
          'Acted as Scrum Master by helping organize the team workflow, facilitating communication, and keeping deliveries aligned with the project goals and sprint priorities.',
        ],
      },
      pt: {
        subtitle:
          'Um jogo de curiosidades imersivo que mistura história e tecnologia através de mapas interativos e quizzes em 3D.',
        overview:
          'O RetroTrip é um aplicativo educacional para iOS feito para estudantes, mentes curiosas e amantes da história. Ele permite aos usuários explorar eventos históricos pelo mapa-múndi, testar conhecimentos em ambientes 3D desafiadores e competir com amigos em um modo multiplayer em tempo real.',
        contribution: [
          'Colaborei em uma equipe de cinco desenvolvedores para construir uma experiência de aprendizado histórico imersiva e gamificada.',
          'Auxiliei na implementação de recursos como mapas interativos, ambientes de quiz em 3D e um sistema robusto de conquistas e distintivos.',
          'Integrei funcionalidades dinâmicas, incluindo placares de multiplayer em tempo real, sistema de energia recarregável e widgets para a Tela de Início do iOS.',
          'Atuei como Scrum Master, ajudando a organizar o fluxo de trabalho do time, facilitando a comunicação e mantendo as entregas alinhadas com os objetivos do projeto e as prioridades de cada sprint.',
        ],
      },
    },
  },
  {
    id: 100,
    slug: 'dopamine-news',
    title: 'Dopamine News',
    period: '2025',
    origin: 'Apple Developer Academy',
    iconSrc: getProjectAsset('dopamine', 'dopamineIcon.png'),
    iconLabel: 'D',
    accent: 'from-stone-300 via-zinc-100 to-neutral-100',
    technologies: [
      'Swift',
      'SwiftUI',
      'Node.js',
      'MongoDB',
      'REST API',
      'JSON',
      'MVVM',
      'Backend Integration',
      'Content Moderation',
      'Xcode',
      'Git',
    ],
    links: {
      appStoreUrl: 'https://apps.apple.com/br/app/dopamine-news/id6755773697?l=en-GB',
    },
    members: [
      {
        name: 'Adriel de Souza',
        role: 'iOS Developer / Scrum Master',
        linkedinUrl: 'https://www.linkedin.com/in/dsadriel/',
      },
      {
        name: 'Antonio Costa Jr',
        role: 'iOS Developer / Scrum Master',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
      {
        name: 'Gabriel Kowaleski',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/gabriel-kowaleski/',
      },
      {
        name: 'Vitor Bruno',
        role: 'iOS Developer / Product Owner',
        linkedinUrl: 'https://www.linkedin.com/in/vitor-bruno-243975258/',
      },
      {
        name: 'Rafael Julianotte',
        role: 'UX/UI Designer / Product Owner',
        linkedinUrl: 'https://www.linkedin.com/in/rafajulianotte/',
      },
    ],
    screenshots: createScreenshots('dopamine', [
      { id: 'dopamine-1', title: 'Launch screen', fileName: 'screenshoot1.png' },
      { id: 'dopamine-2', title: 'Daily ritual', fileName: 'screenshoot2.png' },
      { id: 'dopamine-3', title: 'Word challenge', fileName: 'screenshoot3.png' },
      { id: 'dopamine-4', title: 'Word search', fileName: 'screenshoot4.png' },
      { id: 'dopamine-5', title: 'Daily insights', fileName: 'screenshoot5.png' },
      { id: 'dopamine-6', title: 'Reading experience', fileName: 'screenshoot6.png' },
      { id: 'dopamine-7', title: 'Content feed', fileName: 'screenshoot7.png' },
    ]),
    content: {
      en: {
        subtitle:
          'A daily ritual app combining word games, reflective reading, and quick mental stimulation.',
        overview:
          'Dopamine News is an iOS app built around short daily experiences. It combines word-based challenges, reflective reading, horoscope content, and curated news into a lightweight ritual designed to deliver curiosity, focus, and mental stimulation in just a few minutes each day.',
        contribution: [
          'Designed and built a Node.js backend consumed by the Swift app, creating a controlled server-side layer between the product and the external content APIs.',
          'Implemented filtering logic for the news pipeline to reduce sensitive topics such as politics, violence, and wars before the content reached the app.',
          'Integrated scheduled requests for news and horoscope APIs, storing processed JSON content in MongoDB for the iOS client to consume.',
          'Contributed to the iOS experience and acted as Scrum Master, helping with delivery flow, team communication, and sprint alignment.',
        ],
      },
      pt: {
        subtitle:
          'Um app de ritual diário que combina jogos de palavras, leitura reflexiva e estímulo mental leve.',
        overview:
          'Dopamine News é um app iOS construído em torno de experiências curtas do dia a dia. Ele combina desafios com palavras, leitura reflexiva, horóscopo e notícias curadas para criar um ritual leve de poucos minutos focado em curiosidade, concentração e estímulo mental.',
        contribution: [
          'Desenhei e desenvolvi um backend em Node.js consumido pelo app em Swift, criando uma camada controlada entre o produto e as APIs externas.',
          'Implementei uma lógica de filtragem no pipeline de notícias para reduzir a entrada de temas sensíveis como política, violência e guerras no app.',
          'Integrei requisições periódicas para as APIs de notícias e horóscopo, salvando o conteúdo processado em JSON no MongoDB para consumo do cliente iOS.',
          'Também contribui na experiência iOS do produto e atuei como Scrum Master, ajudando na organização do fluxo do time, comunicação e alinhamento das sprints.',
        ],
      },
    },
  },
  {
    id: 95,
    slug: 'leo',
    title: 'Leo',
    period: '2026',
    origin: 'Swift Student Challenge',
    screenshotOrientation: 'landscape',
    iconSrc: getProjectAsset('leo', 'leoIcon.png'),
    iconLabel: 'L',
    accent: 'from-sky-200 via-cyan-100 to-emerald-100',
    technologies: [
      'Swift',
      'SwiftUI',
      'iPadOS',
      'MVVM',
      'Dynamic Type',
      'CoreMotion',
      'SpriteKit',
      'AVFoundation',
      'Figma',
      'Sketchbook',
      'Procreate Pocket',
    ],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/Leo',
    },
    members: [
      {
        name: 'Antonio Costa Jr',
        role: 'iOS Developer / UX/UI Designer',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
    ],
    screenshots: createScreenshots('leo', [
      { id: 'leo-1', title: 'Story introduction', fileName: 'screenshoot1.png' },
      { id: 'leo-2', title: 'Sensory interaction', fileName: 'screenshoot2.png' },
      { id: 'leo-3', title: 'Narrative moment', fileName: 'screenshoot3.png' },
      { id: 'leo-4', title: 'Progress through stages', fileName: 'screenshoot4.png' },
    ]),
    content: {
      en: {
        subtitle:
          'An iPad narrative experience about food selectivity, inspired by the SOS Approach to Feeding.',
        overview:
          'Leo is an iPad app created as my submission for the Swift Student Challenge 2026. Inspired by the real journey of a Brazilian autistic child and grounded in the SOS Approach to Feeding, the experience uses an interactive story to represent stages such as tolerating, interacting, touching, smelling, and tasting foods. The story is lived through a dinosaur, inspired by Leo’s favorite toy, to create a playful and emotionally respectful experience for children, families, caregivers, and educators.',
        contribution: [
          'Designed and developed the full iPad experience, turning a real therapeutic journey into an interactive narrative based on the SOS Approach to Feeding.',
          'Created the app visuals with Figma, Sketchbook, and Procreate Pocket, building custom illustrations with a consistent emotional tone and character-driven identity.',
          'Implemented accessibility features such as Dynamic Type support, silent-mode flexibility for sensory comfort, and bilingual Portuguese-English support.',
        ],
      },
      pt: {
        subtitle:
          'Uma experiência narrativa para iPad sobre seletividade alimentar, inspirada no SOS Approach to Feeding.',
        overview:
          'Leo é um app para iPad criado como minha submissão para o Swift Student Challenge 2026. Inspirado na jornada real de um menino brasileiro autista e fundamentado no SOS Approach to Feeding, o projeto usa uma narrativa interativa para representar etapas como tolerar, interagir, tocar, cheirar e experimentar alimentos. A história é vivida por um dinossauro, inspirado no brinquedo favorito do Leo, para criar uma experiência lúdica, respeitosa e emocionalmente envolvente para crianças, famílias, cuidadores e educadores.',
        contribution: [
          'Desenhei e desenvolvi toda a experiência para iPad, transformando uma jornada terapêutica real em uma narrativa interativa baseada no SOS Approach to Feeding.',
          'Criei o visual do app com Figma, Sketchbook e Procreate Pocket, produzindo ilustrações autorais com uma identidade consistente, sensível e centrada no personagem.',
          'Implementei recursos de acessibilidade como suporte a Dynamic Type, uso em modo silencioso para conforto sensorial e conteúdo bilíngue em português e inglês.',
        ],
      },
    },
  },
  {
    id: 97,
    slug: 'untoothable',
    title: 'UnToothAble',
    period: '2026',
    origin: 'Apple Developer Academy',
    screenshotOrientation: 'landscape',
    iconSrc: getProjectAsset('untoothable', 'untoothableIcon.png'),
    iconLabel: 'U',
    accent: 'from-orange-200 via-amber-100 to-yellow-100',
    technologies: [
      'Swift',
      'SpriteKit',
      'SwiftUI',
      'Entity Component System',
      'Game Architecture',
      'Scene Navigation',
      'Animation',
      'Xcode',
      'Git',
    ],
    links: {
      githubUrl: 'https://github.com/antoniocostajr01/UnToothAble',
      appStoreUrl:
        'https://apps.apple.com/br/app/untoothable-endless-runner/id6760667597?l=en-GB',
    },
    members: [
      {
        name: 'Antonio Costa Jr',
        role: 'iOS Developer / Scrum Master',
        linkedinUrl: 'https://www.linkedin.com/in/antoniocosta001',
      },
      {
        name: 'Giovana H. Rebello',
        role: 'UX/UI Designer',
        linkedinUrl: 'https://www.linkedin.com/in/giovanahrebello/',
      },
      {
        name: 'Rafael Toneto',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/rafael-toneto-429b76316/',
      },
      {
        name: 'Sofia Leitão',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/sofiafleitao/',
      },
      {
        name: 'Richard S. Ros',
        role: 'iOS Developer',
        linkedinUrl: 'https://www.linkedin.com/in/richardsros/',
      },
    ],
    screenshots: createScreenshots('untoothable', [
      { id: 'untoothable-1', title: 'Gameplay', fileName: 'screenshoot1.png' },
      { id: 'untoothable-2', title: 'Action sequence', fileName: 'screenshoot2.png' },
      { id: 'untoothable-3', title: 'Level transition', fileName: 'screenshoot3.png' },
      { id: 'untoothable-4', title: 'Runner mechanics', fileName: 'screenshoot4.png' },
      { id: 'untoothable-5', title: 'Scene progression', fileName: 'screenshoot5.png' },
    ]),
    content: {
      en: {
        subtitle:
          'An endless runner inspired by Jetpack Joyride, built with SpriteKit and scene-based game systems.',
        overview:
          'UnToothAble is an endless runner inspired by Jetpack Joyride and built around fast movement, scene transitions, and arcade-style progression. The project uses SpriteKit as its gameplay foundation while combining SwiftUI components for supporting visual layers and interface structure.',
        contribution: [
          'Implemented the project’s Entity Component System architecture, structuring the game around a pattern widely used in games to organize entities, behaviors, and reusable logic.',
          'Built the overall project structure and navigation between scenes, helping define how the player moves through the game flow and level progression.',
          'Implemented the background system and transitions between levels, as well as SwiftUI visual components used alongside the game experience.',
        ],
      },
      pt: {
        subtitle:
          'Um endless runner inspirado em Jetpack Joyride, construído com SpriteKit e sistemas de jogo baseados em cenas.',
        overview:
          'UnToothAble é um endless runner inspirado em Jetpack Joyride, pensado em torno de movimentação rápida, transições entre cenas e progressão no estilo arcade. O projeto usa SpriteKit como base principal do gameplay, combinado com componentes em SwiftUI para camadas visuais e estrutura de interface.',
        contribution: [
          'Implementei a arquitetura ECS (Entity Component System) do projeto, estruturando o jogo com um padrão muito usado em games para organizar entidades, comportamentos e lógicas reutilizáveis.',
          'Desenvolvi a estrutura geral do projeto e a navegação entre cenas, ajudando a definir como o jogador percorre o fluxo do jogo e a progressão entre fases.',
          'Implementei o sistema de background com transições entre níveis e também componentes visuais em SwiftUI usados junto da experiência do jogo.',
        ],
      },
    },
  },
]
