# Images du site — prompts prêts à générer

Workflow : tu génères les images (Meshy.ai → mode **Text to Image**, ou tout autre
générateur), puis tu les déposes dans **`public/images/`** avec le **nom exact** indiqué.
Le site les affichera automatiquement (les emplacements ont déjà un repère `<!-- … -->`
dans le code).

## Direction artistique (à respecter pour TOUTES les images)

- **Ton : rassurant, calme, doux, plein d'espoir.** Jamais anxiogène ni dramatique.
- **Palette** : vert sauge / pétrole (#356b61), sable et crème (#f3ecdf), touche terracotta douce (#cd7a59). Lumière naturelle et chaude.
- **À ÉVITER absolument** : enfants en pleurs ou en détresse, disputes, scènes de tribunal, mains menaçantes, ambiance sombre, visages d'enfants reconnaissables, texte incrusté dans l'image.
- **Privilégier les métaphores apaisées** : clarté retrouvée, lumière, abri/protection, mise en ordre sereine, nature calme, intérieurs chaleureux. Si des personnes apparaissent : adultes uniquement, de dos ou en silhouette douce, anonymes.
- **Format** : sans texte. Photoréaliste doux **ou** illustration éditoriale douce (garder le même style sur tout le site).

> Astuce Meshy / text-to-image : ajouter en fin de prompt `soft natural light, warm muted palette, calm, hopeful, editorial photography, shallow depth of field` et utiliser le *negative prompt* fourni.

---

## 1. `hero.jpg` — bannière d'accueil
- **Emplacement** : visuel à droite du grand titre de l'accueil.
- **Format / ratio** : **1200 × 1500 px** (portrait 4:5).
- **Prompt (EN)** :
  > A serene, hopeful scene symbolizing clarity returning after confusion: soft morning light streaming through a calm living-room window onto a tidy wooden table, a few neatly arranged papers and a warm cup, gentle out-of-focus greenery, sage-green and sandy cream tones, no people, no text, soft natural light, warm muted palette, calm, hopeful, editorial photography, shallow depth of field.
- **Negative prompt** :
  > children, faces, crying, conflict, courtroom, dark, harsh shadows, text, watermark, logo, cluttered, dramatic, scary.

## 2. `laetitia.jpg` — portrait de la fondatrice
- **Emplacement** : accueil (carré) **et** page « Qui sommes-nous » (4:5).
- ⚠️ **Ce doit être une VRAIE photo de Laëtitia Bouaziz Buiron**, pas une image générée
  (c'est une personne réelle nommée sur le site). À fournir par elle.
- **Recommandations photo** : portrait professionnel, lumière naturelle douce, fond neutre/chaleureux, expression posée et bienveillante. Cadrage portrait **1000 × 1250 px** minimum.
- Si pas encore disponible : le bloc dégradé actuel reste affiché, c'est propre.

## 3. `og-default.jpg` — image de partage (réseaux sociaux)
- **Emplacement** : aperçu lors du partage du lien (Facebook, LinkedIn, etc.).
- **Format** : **1200 × 630 px** exactement.
- Un placeholder SVG correct existe déjà (`og-default.svg`). Pour une version photo :
- **Prompt (EN)** :
  > Calm editorial banner background, soft sage-green to cream gradient, gentle morning light, a faint protective arch motif, lots of empty space on the right for text overlay, no people, no text, warm muted palette, minimal, soothing.
- Garder beaucoup d'espace vide (le titre sera ajouté ensuite si besoin).

## 4. (Optionnel) `situations.jpg` — illustration des pages thématiques
- **Emplacement** : en-tête possible des pages d'atterrissage (non câblé par défaut).
- **Format** : **1600 × 900 px** (paysage 16:9).
- **Prompt (EN)** :
  > A quiet path leading toward soft warm light on the horizon, calm open landscape at dawn, sense of direction and reassurance, sage-green and sandy tones, no people, no text, soft natural light, hopeful, editorial.

---

## Après génération
1. Renomme le fichier exactement comme ci-dessus (`hero.jpg`, `laetitia.jpg`, `og-default.jpg`).
2. Dépose-le dans `public/images/`.
3. Dis-le-moi : je remplace les blocs « placeholder » par les `<img>` (avec `alt`, dimensions et `loading="lazy"` pour le SEO/perf), et on revérifie le rendu.

> Formats conseillés : `.jpg` (photos) ou `.webp` (plus léger). Vise < 300 Ko par image.
