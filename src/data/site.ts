// Configuration centrale du site « L'enfant au milieu ».
// Toutes les pages lisent ces données pour rester cohérentes.

export const site = {
  name: "L'enfant au milieu",
  legalName: "L'enfant au milieu",
  tagline: 'Séparations à haut conflit : de la psychologie aux preuves',
  baseline:
    'Quand le conflit brouille tout, nous aidons à construire un dossier clair, sérieux et exploitable.',
  url: 'https://conflit-parental.fr',
  locale: 'fr_FR',
  lang: 'fr',

  founder: {
    name: 'Laëtitia Bouaziz Buiron',
    role: 'Psychologue, psychotraumatologue',
  },

  contact: {
    phone: '03 67 47 08 73',
    phoneHref: 'tel:+33367470873',
    email: 'contact@conflit-parental.fr',
    emailHref: 'mailto:contact@conflit-parental.fr',
    coverage: 'Intervention France entière',
    address: {
      street: '9b rue de Clermont',
      postalCode: '60200',
      city: 'Compiègne',
      region: 'Hauts-de-France',
      country: 'France',
    },
  },

  pricing: {
    firstInterview: '95 €',
    firstInterviewNote: 'Premier entretien de prise de contact — tarif horaire',
  },
} as const;

// Navigation principale (header)
export const mainNav: { label: string; href: string }[] = [
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Ce que nous faisons', href: '/ce-que-nous-faisons' },
  { label: 'Pour qui', href: '/pour-qui' },
  { label: 'Articles', href: '/articles' },
  { label: 'Tarifs', href: '/tarifs' },
];

// Les 6 prestations (page « Ce que nous faisons » + aperçu accueil)
export const services: {
  id: string;
  title: string;
  summary: string;
  points: string[];
}[] = [
  {
    id: 'evaluer',
    title: 'Évaluer ce qui doit l’être',
    summary:
      'Des évaluations psychologiques ciblées, choisies selon les besoins réels du dossier — jamais systématiques.',
    points: [
      'Évaluation d’un parent : posture dans le conflit, régulation émotionnelle, capacité à protéger l’enfant des tensions.',
      'Évaluation de l’enfant : ce qu’il vit, son âge, sa parole, sans jamais le transformer en arbitre du conflit.',
      'Évaluation de la relation parent-enfant : qualité et sécurité du lien.',
      'Analyse de la dynamique familiale : comment les places s’organisent autour de l’enfant.',
    ],
  },
  {
    id: 'analyser-les-pieces',
    title: 'Analyser les pièces',
    summary:
      'Lire ensemble ce qui, lu séparément, ne dit rien. La force d’un dossier tient souvent à sa lecture transversale.',
    points: [
      'Messages, enregistrements, plaintes, attestations, expertises, décisions : tout est repris.',
      'Repérer les répétitions, les schémas relationnels, les moments où le conflit s’intensifie.',
      'Distinguer ce qui éclaire de ce qui encombre, ce qui tient de ce qui est seulement affirmé.',
    ],
  },
  {
    id: 'critiquer-les-expertises',
    title: 'Lire et critiquer les expertises déjà réalisées',
    summary:
      'Quand une expertise paraît fragile, biaisée ou déconnectée du dossier, nous en proposons une lecture critique argumentée.',
    points: [
      'Examen de la méthode, des entretiens, des tests mobilisés ou absents, de la cohérence du raisonnement.',
      'Appui sur un travail de recherche dédié aux croyances sur le mensonge et à leur influence sur les décisions.',
      'Une expertise solide doit montrer son raisonnement — pas transformer une impression en certitude.',
    ],
  },
  {
    id: 'positionnement-parent',
    title: 'Aider au positionnement du parent',
    summary:
      'On peut avoir des arguments solides et les abîmer en quelques messages. Nous aidons à ne pas se faire aspirer par le conflit.',
    points: [
      'Protéger le lien avec l’enfant et éviter les réactions contre-productives.',
      'Rendre sa posture plus claire, plus cohérente et plus défendable.',
      'Il ne s’agit pas de devenir lisse ou muet, mais d’arrêter de nourrir la dynamique conflictuelle.',
    ],
  },
  {
    id: 'preuves',
    title: 'Recueillir des preuves, matérialiser les faits',
    summary:
      'Lorsque le dossier tourne autour d’affirmations opposées, nos enquêteurs privés partenaires vont chercher du concret, dans un cadre légal.',
    points: [
      'Établir une chronologie, objectiver des comportements répétés, vérifier des incohérences.',
      'Recueil de témoignages, enquêtes de voisinage, de moralité, administrative, patrimoniale.',
      'Des éléments vérifiables, recueillis avec méthode et discrétion, exploitables en justice.',
    ],
  },
  {
    id: 'orienter',
    title: 'Orienter vers les bons interlocuteurs',
    summary:
      'Mobiliser le bon regard au bon moment : psychologique, factuel, social ou juridique.',
    points: [
      'Orientation vers des avocats expérimentés dans les séparations à haut conflit.',
      'Mobilisation de psychologues partenaires, enquêteurs privés ou enquêteurs sociaux selon les besoins.',
    ],
  },
];

// Les publics (page « Pour qui » + accueil)
export const audiences: {
  id: string;
  title: string;
  intro: string;
  body: string[];
}[] = [
  {
    id: 'enfants',
    title: 'Pour les enfants',
    intro:
      'Souvent les premiers concernés, et les derniers réellement regardés.',
    body: [
      'Nous remettons l’enfant au centre de la lecture du dossier, comme un être sensible à part entière — non comme argument, messager ou preuve vivante contre un parent.',
      'L’objectif est de comprendre ce que la situation produit pour lui : sa place entre les adultes, les conflits de loyauté, les ruptures de lien, et les signes de souffrance qui doivent être pris au sérieux.',
    ],
  },
  {
    id: 'parents',
    title: 'Pour les parents',
    intro:
      'Quand la situation vous échappe et que l’enfant commence à payer le prix du conflit.',
    body: [
      'Pour les parents engagés dans une séparation ou post-séparation à haut conflit, lorsque les pièces s’accumulent, que les versions s’opposent, qu’une expertise déjà réalisée brouille encore la lecture.',
      'Nous intervenons quand vous ne savez plus comment analyser ce qui se joue, documenter utilement la situation, vous faire entendre sans aggraver les choses, ni préserver votre relation avec votre enfant.',
    ],
  },
  {
    id: 'avocats',
    title: 'Pour les avocats',
    intro:
      'Un appui clinique, critique et stratégique pour les dossiers familiaux complexes.',
    body: [
      'Lorsque le dossier grossit mais ne gagne pas en clarté, que les versions se heurtent, ou qu’une expertise versée au dossier brouille plus qu’elle n’éclaire.',
      'Nous donnons à l’argumentation un appui psychologique sérieux, étayé et défendable : lecture fine des interactions, des expertises, de la place de l’enfant et des pièces disponibles.',
    ],
  },
  {
    id: 'magistrats',
    title: 'Pour les magistrats',
    intro: 'Rendre la situation plus lisible, sans jamais se substituer à la décision.',
    body: [
      'Quand les pièces sont nombreuses, les accusations répétées, les expertises inégales, et que l’enfant peut disparaître derrière le volume du dossier.',
      'Notre intervention distingue ce qui est affirmé de ce qui est documenté, ce qui relève d’un schéma, et ce qui concerne réellement l’enfant.',
    ],
  },
];

// Ce que nous ne faisons pas (cadre déontologique — important)
export const boundaries: string[] = [
  'Nous ne proposons pas de psychothérapie ni de prise en charge de la souffrance psychique.',
  'Nous n’intervenons pas dans une logique de soin.',
  'Nous ne décidons pas à la place du magistrat.',
  'Nous ne nous substituons pas aux autorités administratives et judiciaires.',
];
