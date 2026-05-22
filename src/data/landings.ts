// Pages d'atterrissage SEO — contenu unique par cluster de mots-clés.
// Source unique de vérité : accueil, menu et /[slug] lisent ce fichier.
// Ton : rassurant, sérieux, prudent. Aucune promesse de résultat judiciaire.

export interface LandingSection {
  heading: string;
  body: string[];
  list?: string[];
}

export interface LandingFaq {
  q: string;
  a: string;
}

export interface Landing {
  slug: string;
  /** Libellé court pour menus & cartes. */
  navLabel: string;
  /** Accroche courte (cartes accueil / pages liées). */
  teaser: string;
  /** <title> — viser ~55-60 caractères. */
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  sections: LandingSection[];
  faq?: LandingFaq[];
  relatedSlugs?: string[];
}

export const landings: Landing[] = [
  {
    slug: 'separation-haut-conflit',
    navLabel: 'Séparation à haut conflit',
    teaser:
      'Quand chaque échange devient une bataille et que le dossier s’emballe : reprendre une lecture claire de la situation.',
    seoTitle: 'Séparation à haut conflit : analyse et stratégie',
    metaDescription:
      'Séparation conflictuelle, conflit parental qui s’enlise : nous aidons à transformer un dossier qui déborde en lecture claire, sérieuse et exploitable.',
    eyebrow: 'Comprendre la situation',
    h1: 'Séparation à haut conflit : retrouver de la clarté',
    lede:
      'Dans une séparation à haut conflit, tout s’accumule très vite — messages, captures, plaintes, témoignages, expertises, versions opposées. Le dossier grossit, mais il ne devient pas forcément plus solide.',
    sections: [
      {
        heading: 'Pourquoi le conflit “brouille tout”',
        body: [
          'Une pile de pièces ne fait pas une démonstration. Un ressenti ne fait pas une preuve. Et une expertise mal menée peut brouiller encore davantage la lecture de la situation.',
          'Quand le conflit s’intensifie, chacun finit par réagir à chaud, accumuler, se justifier. La situation devient illisible — d’abord pour les parents, parfois ensuite pour les professionnels qui la découvrent.',
        ],
      },
      {
        heading: 'Ce que nous apportons',
        body: [
          'Notre rôle est de transformer ce qui déborde en un dossier lisible, construit et exploitable. Concrètement, cela veut dire :',
        ],
        list: [
          'Lire ce qui compte et écarter ce qui parasite la compréhension.',
          'Repérer ce qui se répète : les schémas relationnels, les moments où le conflit monte.',
          'Faire évaluer ce qui doit l’être, et seulement cela.',
          'Aller chercher du concret quand le dossier reste au niveau des affirmations.',
          'Construire une stratégie qui tienne debout sur les plans clinique, factuel et judiciaire.',
        ],
      },
      {
        heading: 'Garder l’enfant au centre',
        body: [
          'Dans ces situations, l’enfant peut disparaître derrière le volume du dossier. Notre lecture le remet au centre — non comme argument ou messager, mais comme un enfant pris dans un climat relationnel précis, dont la souffrance doit être prise au sérieux.',
        ],
      },
    ],
    faq: [
      {
        q: 'Faut-il déjà avoir un avocat pour vous solliciter ?',
        a: 'Non. Nous travaillons aussi bien en amont qu’en collaboration avec votre avocat. Si vous n’êtes pas accompagné, nous pouvons vous orienter vers des avocats expérimentés dans les séparations à haut conflit.',
      },
      {
        q: 'Intervenez-vous partout en France ?',
        a: 'Oui. L’analyse de dossier et la plupart des évaluations se font à distance ou sur place selon les besoins ; nous intervenons sur l’ensemble du territoire.',
      },
    ],
    relatedSlugs: ['analyse-pieces-dossier-jaf', 'enfant-conflit-loyaute'],
  },

  {
    slug: 'expertise-psychologique-contre-expertise',
    navLabel: 'Expertise & contre-expertise',
    teaser:
      'Une expertise qui paraît fragile, biaisée ou déconnectée du dossier ? Nous en proposons une lecture critique argumentée.',
    seoTitle: 'Expertise et contre-expertise psychologique familiale',
    metaDescription:
      'Lecture critique d’une expertise psychologique, contre-expertise en contexte familial et JAF : méthode, biais, raisonnement. Une analyse étayée et défendable.',
    eyebrow: 'Lecture critique',
    h1: 'Expertise et contre-expertise psychologique',
    lede:
      'Une expertise psychologique pèse lourd dans un dossier familial. Lorsqu’elle paraît fragile, insuffisante ou déconnectée des pièces, elle mérite une lecture critique sérieuse.',
    sections: [
      {
        heading: 'Ce que nous examinons',
        body: [
          'Une expertise solide ne devrait pas seulement affirmer : elle devrait montrer son raisonnement. Notre lecture critique porte sur l’ensemble de la démarche.',
        ],
        list: [
          'La méthode utilisée et la qualité des entretiens.',
          'Les tests mobilisés — ou absents — et la place réellement donnée aux pièces.',
          'La cohérence du raisonnement, les hypothèses retenues et les éléments oubliés.',
          'Les conclusions trop rapides, les formulations floues et les biais possibles.',
        ],
      },
      {
        heading: 'Le poids des croyances sur le mensonge',
        body: [
          'Le travail de recherche de Laëtitia Bouaziz Buiron a porté sur l’influence des croyances dans les jugements de cour d’assises, et en particulier sur les croyances autour du mensonge.',
          'Dans une procédure, une hésitation, une contradiction, une émotion, un silence, un récit pauvre ou au contraire très détaillé ne disent pas mécaniquement si une personne ment ou dit vrai. Une expertise ne devrait pas transformer une impression en certitude.',
        ],
      },
      {
        heading: 'Un appui défendable',
        body: [
          'L’objectif n’est pas de “démolir” à tout prix, mais de rendre visible ce qui est solide, ce qui est hypothétique et ce qui ne peut pas être conclu. C’est un appui clinique et critique qui peut nourrir l’argumentation, en lien avec votre avocat.',
        ],
      },
    ],
    faq: [
      {
        q: 'Une contre-expertise privée a-t-elle de la valeur devant le juge ?',
        a: 'Elle constitue un élément d’appréciation parmi d’autres. Sa force tient à la rigueur de sa méthode et de son raisonnement. Le juge en apprécie librement la portée ; nous veillons donc à produire une analyse étayée et transparente sur ses limites.',
      },
    ],
    relatedSlugs: ['analyse-pieces-dossier-jaf', 'separation-haut-conflit'],
  },

  {
    slug: 'analyse-pieces-dossier-jaf',
    navLabel: 'Analyse de pièces & dossier JAF',
    teaser:
      'Des centaines de messages, des attestations, des décisions… Lus ensemble, ils racontent autre chose que pris un par un.',
    seoTitle: 'Analyse des pièces et stratégie de dossier JAF',
    metaDescription:
      'Analyse de pièces (messages, attestations, expertises) et stratégie de dossier JAF : lecture transversale pour distinguer ce qui éclaire de ce qui encombre.',
    eyebrow: 'Lire le dossier autrement',
    h1: 'Analyse des pièces et stratégie de dossier',
    lede:
      'Nous travaillons à partir des échanges écrits, enregistrements, plaintes, attestations, expertises et décisions déjà versés. L’enjeu n’est pas de lire les pièces une par une, mais de les lire ensemble.',
    sections: [
      {
        heading: 'La lecture transversale',
        body: [
          'Ce qui compte, c’est de repérer les répétitions, les schémas relationnels, les moments où le conflit s’intensifie, les changements de version et les décalages entre ce qui est affirmé et ce qui est documenté.',
          'Une pièce seule peut paraître forte, une autre banale. Mais leur répétition, leur chronologie et leur effet dans le dossier peuvent changer complètement la lecture.',
        ],
      },
      {
        heading: 'Distinguer ce qui tient de ce qui est seulement affirmé',
        body: [
          'L’objectif est de séparer ce qui éclaire de ce qui encombre, ce qui relève d’un élément isolé de ce qui révèle un véritable schéma. Cette clarté est utile au parent, à son avocat — et, in fine, à la lecture du dossier par le juge.',
        ],
      },
      {
        heading: 'Vers une stratégie cohérente',
        body: [
          'À partir de cette analyse, nous aidons à construire une stratégie : ce qui mérite d’être mis en avant, ce qui doit être complété, ce qui peut être vérifié sur le terrain, et ce qu’il vaut mieux ne pas surinvestir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Sous quel format vous transmettre les pièces ?',
        a: 'Le plus souvent sous forme numérique organisée (PDF, exports de messageries). Nous précisons ensemble, lors du premier échange, ce qui est utile et comment le transmettre dans un cadre confidentiel.',
      },
    ],
    relatedSlugs: ['expertise-psychologique-contre-expertise', 'preuves-enqueteurs-prives'],
  },

  {
    slug: 'garde-alternee-residence',
    navLabel: 'Garde alternée & résidence',
    teaser:
      'Garde alternée qui ne fonctionne plus, demande de modification de résidence : éclairer ce qui se joue vraiment pour l’enfant.',
    seoTitle: 'Garde alternée, résidence et conflit parental',
    metaDescription:
      'Garde alternée en conflit, changement de résidence de l’enfant, dossier JAF : un éclairage psychologique et factuel pour des décisions centrées sur l’enfant.',
    eyebrow: 'Organisation & résidence',
    h1: 'Garde alternée, résidence et conflit parental',
    lede:
      'Quand l’organisation de la garde devient un terrain de conflit permanent, la question n’est plus seulement “qui a raison”, mais ce que cette organisation produit concrètement pour l’enfant.',
    sections: [
      {
        heading: 'Comprendre l’organisation réelle du quotidien',
        body: [
          'Au-delà du jugement, il y a la vie réelle : les passages de bras, les ruptures de rythme, la place de chaque parent, les repères de l’enfant et la manière dont il circule entre les adultes.',
          'Nos partenaires enquêteurs sociaux peuvent apporter une lecture du contexte familial, éducatif et relationnel ; l’évaluation psychologique éclaire, elle, ce que l’enfant vit de cette organisation.',
        ],
      },
      {
        heading: 'Demande de modification de garde ou de résidence',
        body: [
          'Lorsqu’une modification est envisagée, le dossier gagne à montrer un faisceau d’éléments cohérents plutôt qu’une accumulation de reproches. Nous aidons à identifier ce qui est réellement documenté et ce qui relève de l’affirmation.',
        ],
      },
      {
        heading: 'Au service de l’enfant, pas de la rivalité',
        body: [
          'L’objectif n’est jamais de “gagner contre” l’autre parent, mais de rendre lisible ce qui sert l’enfant : sa stabilité, sa sécurité relationnelle et son droit de garder un lien avec ses deux parents lorsque c’est possible.',
        ],
      },
    ],
    faq: [
      {
        q: 'Mon enfant refuse la garde alternée : que faire ?',
        a: 'Un refus mérite d’être compris avant d’être interprété. Il peut traduire un conflit de loyauté, une fatigue d’organisation, une vraie difficulté de lien ou une pression. Une évaluation aide à distinguer ces hypothèses sans transformer l’enfant en arbitre.',
      },
    ],
    relatedSlugs: ['enfant-conflit-loyaute', 'analyse-pieces-dossier-jaf'],
  },

  {
    slug: 'enfant-conflit-loyaute',
    navLabel: 'L’enfant dans le conflit',
    teaser:
      'Conflit de loyauté, refus de voir un parent, signes de souffrance : écouter l’enfant sans le mettre au milieu.',
    seoTitle: 'L’enfant dans le conflit : loyauté, refus, souffrance',
    metaDescription:
      'Conflit de loyauté, enfant qui refuse d’aller chez un parent, signes de souffrance : comprendre ce que vit l’enfant sans le transformer en arbitre du conflit.',
    eyebrow: 'L’enfant d’abord',
    h1: 'L’enfant pris dans le conflit',
    lede:
      'Les enfants sont souvent les premiers concernés par une séparation conflictuelle, et les derniers réellement regardés. Notre travail consiste à les remettre au centre — avec prudence.',
    sections: [
      {
        heading: 'Ni argument, ni messager, ni preuve',
        body: [
          'Un enfant n’est pas une preuve vivante contre un parent. Le placer en position d’arbitre, lui faire porter des messages ou solliciter sans cesse sa parole peut aggraver sa souffrance.',
          'Nous cherchons à comprendre ce que la situation produit pour lui : sa place entre les adultes, les pressions possibles, les conflits de loyauté, l’exposition au conflit et les ruptures de lien.',
        ],
      },
      {
        heading: 'Quand l’enfant refuse de voir un parent',
        body: [
          'Un refus n’a pas une seule explication. Il peut signaler un conflit de loyauté, une difficulté réelle dans la relation, une pression extérieure, ou plusieurs de ces éléments à la fois. Comprendre avant de conclure est essentiel.',
        ],
      },
      {
        heading: 'Prendre la souffrance au sérieux',
        body: [
          'Certains signes — repli, troubles du sommeil, paroles qu’il porte sans pouvoir les penser, changements brutaux — méritent attention. L’évaluation de l’enfant tient compte de son âge, de son développement et de sa parole, sans jamais le surcharger.',
        ],
      },
    ],
    faq: [
      {
        q: 'Allez-vous “faire parler” mon enfant ?',
        a: 'Non au sens d’un interrogatoire. L’évaluation d’un enfant se fait dans un cadre adapté à son âge, avec prudence, sans le mettre en position d’avoir à choisir un camp ou à trancher le conflit des adultes.',
      },
    ],
    relatedSlugs: ['rupture-lien-comportements-alienants', 'garde-alternee-residence'],
  },

  {
    slug: 'rupture-lien-comportements-alienants',
    navLabel: 'Rupture de lien & dénigrement',
    teaser:
      'Dénigrement répété, lien parent-enfant qui s’abîme : objectiver les dynamiques sans tomber dans les raccourcis.',
    seoTitle: 'Rupture de lien parent-enfant et comportements aliénants',
    metaDescription:
      'Rupture de lien parent-enfant, dénigrement, comportements aliénants : une lecture clinique prudente pour comprendre la dynamique et préserver ce qui peut l’être.',
    eyebrow: 'Protéger le lien',
    h1: 'Rupture de lien et comportements aliénants',
    lede:
      'Quand le lien entre un parent et son enfant se distend ou se rompt, la souffrance est immense. Comprendre la dynamique avec prudence est plus utile que d’y coller une étiquette.',
    sections: [
      {
        heading: 'Comprendre la dynamique, pas l’étiqueter',
        body: [
          'Les notions de dénigrement, d’instrumentalisation ou de comportements aliénants décrivent des dynamiques réelles et douloureuses. Mais elles sont aussi débattues et parfois invoquées trop vite.',
          'Nous privilégions une lecture clinique des faits : ce qui se répète, ce qui pèse sur l’enfant, ce qui abîme le lien, et ce qui le protège encore. L’objectif est d’objectiver, pas de plaquer une grille toute faite.',
        ],
      },
      {
        heading: 'Documenter sans aggraver',
        body: [
          'Face à un lien qui s’abîme, la tentation est de réagir fort. Or quelques messages mal calibrés peuvent affaiblir une position pourtant légitime. Nous aidons le parent à se positionner de manière plus ajustée et à ne pas nourrir lui-même la dynamique.',
        ],
      },
      {
        heading: 'Préserver ce qui peut l’être',
        body: [
          'Lorsque c’est possible, l’enjeu reste de protéger ou de restaurer un lien de qualité, dans l’intérêt de l’enfant. Notre travail vise à éclairer les conditions de ce lien, sans jamais se substituer aux décisions de justice.',
        ],
      },
    ],
    faq: [
      {
        q: 'Parlez-vous d’“aliénation parentale” ?',
        a: 'Nous décrivons des comportements et leurs effets observables plutôt que de poser un diagnostic à partir d’un concept contesté. Une lecture prudente et étayée est plus solide, y compris devant un juge.',
      },
    ],
    relatedSlugs: ['enfant-conflit-loyaute', 'preuves-enqueteurs-prives'],
  },

  {
    slug: 'preuves-enqueteurs-prives',
    navLabel: 'Preuves & enquêteurs privés',
    teaser:
      'Sortir du “il dit / elle dit” : apporter des éléments vérifiables, recueillis dans un cadre légal et avec discrétion.',
    seoTitle: 'Preuves et enquêteurs privés en séparation conflictuelle',
    metaDescription:
      'Enquêteurs privés et recueil de preuves dans les séparations et conflits de garde : chronologie, constats, témoignages — des éléments factuels recevables.',
    eyebrow: 'Du concret',
    h1: 'Preuves et enquêteurs privés',
    lede:
      'Quand le dossier tourne autour d’affirmations opposées, nos enquêteurs privés partenaires peuvent aller chercher du concret — dans un cadre légal, avec méthode et discrétion.',
    sections: [
      {
        heading: 'Sortir du “il dit / elle dit”',
        body: [
          'Beaucoup de choses sont affirmées avec force, ressenties, répétées — mais tout n’est pas établi. Le travail d’enquête permet, quand c’est possible, d’apporter ce qui peut être observé, daté, recoupé et documenté.',
        ],
      },
      {
        heading: 'Ce que l’enquête peut apporter',
        body: ['Selon la situation et toujours dans un cadre légal :'],
        list: [
          'Établir une chronologie et objectiver des comportements répétés.',
          'Constater certains éléments matériels et vérifier des incohérences.',
          'Recueil de témoignages, enquêtes de voisinage, de moralité, administrative.',
          'Enquêtes patrimoniale et de solvabilité lorsque le dossier le justifie.',
        ],
      },
      {
        heading: 'Recevabilité et loyauté de la preuve',
        body: [
          'Les rapports d’enquête privée peuvent être produits en justice. Leur recevabilité et leur force probante sont appréciées par le juge, notamment au regard de la légalité, de la loyauté et de la proportionnalité des moyens employés. Nous travaillons dans ce cadre, sans le franchir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Un rapport d’enquêteur privé est-il légal et recevable ?',
        a: 'Oui, lorsqu’il respecte le cadre légal : légalité des moyens, loyauté et proportionnalité. Le juge en apprécie la portée. Nous veillons à ce que les éléments recueillis soient exploitables et défendables.',
      },
    ],
    relatedSlugs: ['analyse-pieces-dossier-jaf', 'separation-haut-conflit'],
  },
];

export function getLanding(slug: string): Landing | undefined {
  return landings.find((l) => l.slug === slug);
}
