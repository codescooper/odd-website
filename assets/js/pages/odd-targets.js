// Textes officiels ONU (fr) — source : un.org/sustainabledevelopment/fr + A/RES/71/313
const oddTargetsData = [
  {
    id: 1,
    title: "Pas de pauvreté",
    color: "#E5243B",
    summary: "Éliminer la pauvreté sous toutes ses formes et partout dans le monde.",
    targets: [
      { code: "1.1", text: "D’ici à 2030, éliminer complètement l’extrême pauvreté dans le monde entier (s’entend actuellement du fait de vivre avec moins de 1,90 dollar américain par jour)" },
      { code: "1.2", text: "D’ici à 2030, réduire de moitié au moins la proportion d’hommes, de femmes et d’enfants de tous âges souffrant d’une forme ou l’autre de pauvreté, telle que définie par chaque pays" },
      { code: "1.3", text: "Mettre en place des systèmes et mesures de protection sociale pour tous, adaptés au contexte national, y compris des socles de protection sociale, et faire en sorte que, d’ici à 2030, une part importante des pauvres et des personnes vulnérables en bénéficient" },
      { code: "1.4", text: "D’ici à 2030, faire en sorte que tous les hommes et les femmes, en particulier les pauvres et les personnes vulnérables, aient les mêmes droits aux ressources économiques et qu’ils aient accès aux services de base, à la propriété foncière, au contrôle des terres et à d’autres formes de propriété, à l’héritage, aux ressources naturelles et à des nouvelles technologies et des services financiers adaptés à leurs besoins, y compris la microfinance" },
      { code: "1.5", text: "D’ici à 2030, renforcer la résilience des pauvres et des personnes en situation vulnérable et réduire leur exposition aux phénomènes climatiques extrêmes et à d’autres chocs et catastrophes d’ordre économique, social ou environnemental et leur vulnérabilité" },
      { code: "1.a", text: "Garantir une mobilisation importante de ressources provenant de sources multiples, y compris par le renforcement de la coopération pour le développement, afin de doter les pays en développement, en particulier les pays les moins avancés, de moyens adéquats et prévisibles de mettre en œuvre des programmes et politiques visant à mettre fin à la pauvreté sous toutes ses formes" },
      { code: "1.b", text: "Mettre en place aux niveaux national, régional et international des cadres d’action viables, fondés sur des stratégies de développement favorables aux pauvres et soucieuses de la problématique hommes-femmes, afin d’accélérer l’investissement dans des mesures d’élimination de la pauvreté" }
    ]
  },
  {
    id: 2,
    title: "Faim « zéro »",
    color: "#DDA63A",
    summary: "Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir l’agriculture durable.",
    targets: [
      { code: "2.1", text: "D’ici à 2030, éliminer la faim et faire en sorte que chacun, en particulier les pauvres et les personnes en situation vulnérable, y compris les nourrissons, ait accès tout au long de l’année à une alimentation saine, nutritive et suffisante" },
      { code: "2.2", text: "D’ici à 2030, mettre fin à toutes les formes de malnutrition, y compris en réalisant d’ici à 2025 les objectifs arrêtés à l’échelle internationale relatifs aux retards de croissance et à l’émaciation parmi les enfants de moins de 5 ans, et répondre aux besoins nutritionnels des adolescentes, des femmes enceintes ou allaitantes et des personnes âgées" },
      { code: "2.3", text: "D’ici à 2030, doubler la productivité agricole et les revenus des petits producteurs alimentaires, en particulier les femmes, les autochtones, les exploitants familiaux, les éleveurs et les pêcheurs, y compris en assurant l’égalité d’accès aux terres, aux autres ressources productives et intrants, au savoir, aux services financiers, aux marchés et aux possibilités d’ajout de valeur et d’emploi autres qu’agricoles" },
      { code: "2.4", text: "D’ici à 2030, assurer la viabilité des systèmes de production alimentaire et mettre en œuvre des pratiques agricoles résilientes qui permettent d’accroître la productivité et la production, contribuent à la préservation des écosystèmes, renforcent les capacités d’adaptation aux changements climatiques, aux phénomènes météorologiques extrêmes, à la sécheresse, aux inondations et à d’autres catastrophes et améliorent progressivement la qualité des terres et des sols" },
      { code: "2.5", text: "D’ici à 2020, préserver la diversité génétique des semences, des cultures et des animaux d’élevage ou domestiqués et des espèces sauvages apparentées, y compris au moyen de banques de semences et de plantes bien gérées et diversifiées aux niveaux national, régional et international, et favoriser l’accès aux avantages que présentent l’utilisation des ressources génétiques et du savoir traditionnel associé et le partage juste et équitable de ces avantages, ainsi que cela a été décidé à l’échelle internationale" },
      { code: "2.a", text: "Accroître, notamment dans le cadre du renforcement de la coopération internationale, l’investissement en faveur de l’infrastructure rurale, des services de recherche et de vulgarisation agricoles et de la mise au point de technologies et de banques de gènes de plantes et d’animaux d’élevage, afin de renforcer les capacités productives agricoles des pays en développement, en particulier des pays les moins avancés" },
      { code: "2.b", text: "Corriger et prévenir les restrictions et distorsions commerciales sur les marchés agricoles mondiaux, y compris par l’élimination parallèle de toutes les formes de subventions aux exportations agricoles et de toutes les mesures relatives aux exportations aux effets similaires, conformément au mandat du Cycle de développement de Doha" },
      { code: "2.c", text: "Adopter des mesures visant à assurer le bon fonctionnement des marchés de denrées alimentaires et des produits dérivés et faciliter l’accès rapide aux informations relatives aux marchés, y compris les réserves alimentaires, afin de contribuer à limiter l’extrême volatilité du prix des denrées alimentaires" }
    ]
  },
  {
    id: 3,
    title: "Bonne santé et bien-être",
    color: "#4C9F38",
    summary: "Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge.",
    targets: [
      { code: "3.1", text: "D’ici à 2030, faire passer le taux mondial de mortalité maternelle au-dessous de 70 pour 100 000 naissances vivantes" },
      { code: "3.2", text: "D’ici à 2030, éliminer les décès évitables de nouveau-nés et d’enfants de moins de 5 ans, tous les pays devant chercher à ramener la mortalité néonatale à 12 pour 1 000 naissances vivantes au plus et la mortalité des enfants de moins de 5 ans à 25 pour 1 000 naissances vivantes au plus" },
      { code: "3.3", text: "D’ici à 2030, mettre fin à l’épidémie de sida, à la tuberculose, au paludisme et aux maladies tropicales négligées et combattre l’hépatite, les maladies transmises par l’eau et autres maladies transmissibles" },
      { code: "3.4", text: "D’ici à 2030, réduire d’un tiers, par la prévention et le traitement, le taux de mortalité prématurée due à des maladies non transmissibles et promouvoir la santé mentale et le bien-être" },
      { code: "3.5", text: "Renforcer la prévention et le traitement de l’abus de substances psychoactives, notamment de stupéfiants et d’alcool" },
      { code: "3.6", text: "D’ici à 2020, diminuer de moitié à l’échelle mondiale le nombre de décès et de blessures dus à des accidents de la route" },
      { code: "3.7", text: "D’ici à 2030, assurer l’accès de tous à des services de soins de santé sexuelle et procréative, y compris à des fins de planification familiale, d’information et d’éducation, et la prise en compte de la santé procréative dans les stratégies et programmes nationaux" },
      { code: "3.8", text: "Faire en sorte que chacun bénéficie d’une couverture sanitaire universelle, comprenant une protection contre les risques financiers et donnant accès à des services de santé essentiels de qualité et à des médicaments et vaccins essentiels sûrs, efficaces, de qualité et d’un coût abordable" },
      { code: "3.9", text: "D’ici à 2030, réduire nettement le nombre de décès et de maladies dus à des substances chimiques dangereuses, à la pollution et à la contamination de l’air, de l’eau et du sol" },
      { code: "3.a", text: "Renforcer dans tous les pays l’application de la Convention-cadre de l’Organisation mondiale de la Santé pour la lutte antitabac" },
      { code: "3.b", text: "Appuyer la recherche et la mise au point de vaccins et de médicaments contre les maladies, transmissibles ou non, qui touchent principalement les habitants des pays en développement, donner accès, à un coût abordable, à des médicaments et vaccins essentiels, conformément à la Déclaration de Doha sur l’Accord sur les ADPIC et la santé publique. Cette déclaration réaffirme le droit qu’ont les pays en développement de tirer pleinement parti des dispositions de l’Accord sur les aspects des droits de propriété intellectuelle qui touchent au commerce et à la marge de manœuvre nécessaire pour protéger la santé publique et, en particulier, assurer l’accès universel aux médicaments" },
      { code: "3.c", text: "Accroître considérablement le budget de la santé, le recrutement, le perfectionnement, la formation et le maintien en poste du personnel de santé dans les pays en développement, notamment dans les pays les moins avancés et les petits États insulaires en développement" },
      { code: "3.d", text: "Renforcer les moyens dont disposent tous les pays, en particulier les pays en développement en matière d’alerte rapide, de réduction des risques et de gestion des risques sanitaires nationaux et mondiaux" }
    ]
  },
  {
    id: 4,
    title: "Éducation de qualité",
    color: "#C5192D",
    summary: "Assurer l’accès de tous à une éducation de qualité, sur un pied d’égalité, et promouvoir les possibilités d’apprentissage tout au long de la vie.",
    targets: [
      { code: "4.1", text: "D’ici à 2030, faire en sorte que toutes les filles et tous les garçons suivent, sur un pied d’égalité, un cycle complet d’enseignement primaire et secondaire gratuit et de qualité, qui débouche sur un apprentissage véritablement utile" },
      { code: "4.2", text: "D’ici à 2030, faire en sorte que toutes les filles et tous les garçons aient accès à des activités de développement et de soins de la petite enfance et à une éducation préscolaire de qualité qui les préparent à suivre un enseignement primaire" },
      { code: "4.3", text: "D’ici à 2030, faire en sorte que les femmes et les hommes aient tous accès dans des conditions d’égalité à un enseignement technique, professionnel ou tertiaire, y compris universitaire, de qualité et d’un coût abordable" },
      { code: "4.4", text: "D’ici à 2030, augmenter considérablement le nombre de jeunes et d’adultes disposant des compétences, notamment techniques et professionnelles, nécessaires à l’emploi, à l’obtention d’un travail décent et à l’entrepreneuriat" },
      { code: "4.5", text: "D’ici à 2030, éliminer les inégalités entre les sexes dans le domaine de l’éducation et assurer l’égalité d’accès des personnes vulnérables, y compris les personnes handicapées, les autochtones et les enfants en situation vulnérable, à tous les niveaux d’enseignement et de formation professionnelle" },
      { code: "4.6", text: "D’ici à 2030, veiller à ce que tous les jeunes et une proportion considérable d’adultes, hommes et femmes, sachent lire, écrire et compter" },
      { code: "4.7", text: "D’ici à 2030, faire en sorte que tous les élèves acquièrent les connaissances et compétences nécessaires pour promouvoir le développement durable, notamment par l’éducation en faveur du développement et de modes de vie durables, des droits de l’homme, de l’égalité des sexes, de la promotion d’une culture de paix et de non-violence, de la citoyenneté mondiale et de l’appréciation de la diversité culturelle et de la contribution de la culture au développement durable" },
      { code: "4.a", text: "Faire construire des établissements scolaires qui soient adaptés aux enfants, aux personnes handicapées et aux deux sexes ou adapter les établissements existants à cette fin et fournir un cadre d’apprentissage effectif qui soit sûr, exempt de violence et accessible à tous" },
      { code: "4.b", text: "D’ici à 2020, augmenter considérablement à l’échelle mondiale le nombre de bourses d’études offertes aux pays en développement, en particulier aux pays les moins avancés, aux petits États insulaires en développement et aux pays d’Afrique, pour financer le suivi d’études supérieures, y compris la formation professionnelle, les cursus informatiques, techniques et scientifiques et les études d’ingénieur, dans des pays développés et d’autres pays en développement" },
      { code: "4.c", text: "D’ici à 2030, accroître considérablement le nombre d’enseignants qualifiés, notamment au moyen de la coopération internationale pour la formation d’enseignants dans les pays en développement, surtout dans les pays les moins avancés et les petits États insulaires en développement" }
    ]
  },
  {
    id: 5,
    title: "Égalité entre les sexes",
    color: "#FF3A21",
    summary: "Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles.",
    targets: [
      { code: "5.1", text: "Mettre fin, dans le monde entier, à toutes les formes de discrimination à l’égard des femmes et des filles" },
      { code: "5.2", text: "Éliminer de la vie publique et de la vie privée toutes les formes de violence faite aux femmes et aux filles, y compris la traite et l’exploitation sexuelle et d’autres types d’exploitation" },
      { code: "5.3", text: "Éliminer toutes les pratiques préjudiciables, telles que le mariage des enfants, le mariage précoce ou forcé et la mutilation génitale féminine" },
      { code: "5.4", text: "Faire une place aux soins et travaux domestiques non rémunérés et les valoriser, par l’apport de services publics, d’infrastructures et de politiques de protection sociale et la promotion du partage des responsabilités dans le ménage et la famille, en fonction du contexte national" },
      { code: "5.5", text: "Garantir la participation entière et effective des femmes et leur accès en toute égalité aux fonctions de direction à tous les niveaux de décision, dans la vie politique, économique et publique" },
      { code: "5.6", text: "Assurer l’accès de tous aux soins de santé sexuelle et procréative et faire en sorte que chacun puisse exercer ses droits en matière de procréation, ainsi qu’il a été décidé dans le Programme d’action de la Conférence internationale sur la population et le développement et le Programme d’action de Beijing et les documents finaux des conférences d’examen qui ont suivi" },
      { code: "5.a", text: "Entreprendre des réformes visant à donner aux femmes les mêmes droits aux ressources économiques, ainsi qu’à l’accès à la propriété et au contrôle des terres et d’autres formes de propriété, aux services financiers, à l’héritage et aux ressources naturelles, dans le respect du droit interne" },
      { code: "5.b", text: "Renforcer l’utilisation des technologies clefs, en particulier l’informatique et les communications, pour promouvoir l’autonomisation des femmes" },
      { code: "5.c", text: "Adopter des politiques bien conçues et des dispositions législatives applicables en faveur de la promotion de l’égalité des sexes et de l’autonomisation de toutes les femmes et de toutes les filles à tous les niveaux et renforcer celles qui existent" }
    ]
  },
  {
    id: 6,
    title: "Eau propre et assainissement",
    color: "#26BDE2",
    summary: "Garantir l’accès de tous à des services d’alimentation en eau et d’assainissement gérés de façon durable.",
    targets: [
      { code: "6.1", text: "D’ici à 2030, assurer l’accès universel et équitable à l’eau potable, à un coût abordable" },
      { code: "6.2", text: "D’ici à 2030, assurer l’accès de tous, dans des conditions équitables, à des services d’assainissement et d’hygiène adéquats et mettre fin à la défécation en plein air, en accordant une attention particulière aux besoins des femmes et des filles et des personnes en situation vulnérable" },
      { code: "6.3", text: "D’ici à 2030, améliorer la qualité de l’eau en réduisant la pollution, en éliminant l’immersion de déchets et en réduisant au minimum les émissions de produits chimiques et de matières dangereuses, en diminuant de moitié la proportion d’eaux usées non traitées et en augmentant considérablement à l’échelle mondiale le recyclage et la réutilisation sans danger de l’eau" },
      { code: "6.4", text: "D’ici à 2030, augmenter considérablement l’utilisation rationnelle des ressources en eau dans tous les secteurs et garantir la viabilité des retraits et de l’approvisionnement en eau douce afin de tenir compte de la pénurie d’eau et de réduire nettement le nombre de personnes qui souffrent du manque d’eau" },
      { code: "6.5", text: "D’ici à 2030, mettre en œuvre une gestion intégrée des ressources en eau à tous les niveaux, y compris au moyen de la coopération transfrontière" },
      { code: "6.6", text: "D’ici à 2020, protéger et restaurer les écosystèmes liés à l’eau, notamment les montagnes, les forêts, les zones humides, les rivières, les aquifères et les lacs" },
      { code: "6.a", text: "D’ici à 2030, développer la coopération internationale et l’appui au renforcement des capacités des pays en développement en ce qui concerne les activités et programmes relatifs à l’eau et à l’assainissement, y compris la collecte de l’eau, la désalinisation, l’utilisation rationnelle de l’eau, le traitement des eaux usées, le recyclage et les techniques de réutilisation" },
      { code: "6.b", text: "Appuyer et renforcer la participation de la population locale à l’amélioration de la gestion de l’eau et de l’assainissement" }
    ]
  },
  {
    id: 7,
    title: "Énergie propre et d’un coût abordable",
    color: "#FCC30B",
    summary: "Garantir l’accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable.",
    targets: [
      { code: "7.1", text: "D’ici à 2030, garantir l’accès de tous à des services énergétiques fiables et modernes, à un coût abordable" },
      { code: "7.2", text: "D’ici à 2030, accroître nettement la part de l’énergie renouvelable dans le bouquet énergétique mondial" },
      { code: "7.3", text: "D’ici à 2030, multiplier par deux le taux mondial d’amélioration de l’efficacité énergétique" },
      { code: "7.a", text: "D’ici à 2030, renforcer la coopération internationale en vue de faciliter l’accès à la recherche et aux technologies relatives à l’énergie propre, notamment l’énergie renouvelable, l’efficacité énergétique et les nouvelles technologies relatives aux combustibles fossiles propres, et promouvoir l’investissement dans l’infrastructure énergétique et les technologies relatives à l’énergie propre" },
      { code: "7.b", text: "D’ici à 2030, développer l’infrastructure et améliorer la technologie afin d’approvisionner en services énergétiques modernes et durables tous les habitants des pays en développement, en particulier des pays les moins avancés, des petits États insulaires en développement et des pays en développement sans littoral, dans le respect des programmes d’aide qui les concernent" }
    ]
  },
  {
    id: 8,
    title: "Travail décent et croissance économique",
    color: "#A21942",
    summary: "Promouvoir une croissance économique soutenue, partagée et durable, le plein emploi productif et un travail décent pour tous.",
    targets: [
      { code: "8.1", text: "Maintenir un taux de croissance économique par habitant adapté au contexte national et, en particulier, un taux de croissance annuelle du produit intérieur brut d’au moins 7 % dans les pays les moins avancés." },
      { code: "8.2", text: "Parvenir à un niveau élevé de productivité économique par la diversification, la modernisation technologique et l’innovation, notamment en mettant l’accent sur les secteurs à forte valeur ajoutée et à forte intensité de main-d’œuvre." },
      { code: "8.3", text: "Promouvoir des politiques axées sur le développement qui favorisent des activités productives, la création d’emplois décents, l’entrepreneuriat, la créativité et l’innovation et stimulent la croissance des microentreprises et des petites et moyennes entreprises et facilitent leur intégration dans le secteur formel, y compris par l’accès aux services financiers." },
      { code: "8.4", text: "Améliorer progressivement, jusqu’en 2030, l’efficience de l’utilisation des ressources mondiales du point de vue de la consommation comme de la production et s’attacher à ce que la croissance économique n’entraîne plus la dégradation de l’environnement, comme prévu dans le cadre décennal de programmation relatif à la consommation et à la production durables, les pays développés montrant l’exemple en la matière." },
      { code: "8.5", text: "D’ici à 2030, parvenir au plein emploi productif et garantir à toutes les femmes et à tous les hommes, y compris les jeunes et les personnes handicapées, un travail décent et un salaire égal pour un travail de valeur égale." },
      { code: "8.6", text: "D’ici à 2020, réduire considérablement la proportion de jeunes non scolarisés et sans emploi ni formation." },
      { code: "8.7", text: "Prendre des mesures immédiates et efficaces pour supprimer le travail forcé, mettre fin à l’esclavage moderne et à la traite d’êtres humains, interdire et éliminer les pires formes de travail des enfants, y compris le recrutement et l’utilisation d’enfants soldats et, d’ici à 2025, mettre fin au travail des enfants sous toutes ses formes." },
      { code: "8.8", text: "Défendre les droits des travailleurs, promouvoir la sécurité sur le lieu de travail et assurer la protection de tous les travailleurs, y compris les migrants, en particulier les femmes, et ceux qui ont un emploi précaire." },
      { code: "8.9", text: "D’ici à 2030, élaborer et mettre en œuvre des politiques visant à développer un tourisme durable qui crée des emplois et mette en valeur la culture et les produits locaux." },
      { code: "8.10", text: "Renforcer la capacité des institutions financières nationales de favoriser et généraliser l’accès de tous aux services bancaires et financiers et aux services d’assurance" },
      { code: "8.a", text: "Accroître l’appui apporté dans le cadre de l’initiative Aide pour le commerce aux pays en développement, en particulier aux pays les moins avancés, y compris par l’intermédiaire du cadre intégré renforcé pour l’assistance technique liée au commerce en faveur des pays les moins avancés." },
      { code: "8.b", text: "D’ici à 2020, élaborer et mettre en œuvre une stratégie mondiale en faveur de l’emploi des jeunes et appliquer le Pacte mondial pour l’emploi de l’Organisation internationale du Travail." }
    ]
  },
  {
    id: 9,
    title: "Industrie, innovation et infrastructure",
    color: "#FD6925",
    summary: "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable qui profite à tous et encourager l’innovation.",
    targets: [
      { code: "9.1", text: "Mettre en place une infrastructure de qualité, fiable, durable et résiliente, y compris une infrastructure régionale et transfrontière, pour favoriser le développement économique et le bien-être de l’être humain, en mettant l’accent sur un accès universel, à un coût abordable et dans des conditions d’équité." },
      { code: "9.2", text: "Promouvoir une industrialisation durable qui profite à tous et, d’ici à 2030, augmenter nettement la contribution de l’industrie à l’emploi et au produit intérieur brut, en fonction du contexte national, et la multiplier par deux dans les pays les moins avancés." },
      { code: "9.3", text: "Accroître, en particulier dans les pays en développement, l’accès des entreprises, notamment des petites entreprises industrielles, aux services financiers, y compris aux prêts consentis à des conditions abordables, et leur intégration dans les chaînes de valeur et sur les marchés." },
      { code: "9.4", text: "D’ici à 2030, moderniser l’infrastructure et adapter les industries afin de les rendre durables, par une utilisation plus rationnelle des ressources et un recours accru aux technologies et procédés industriels propres et respectueux de l’environnement, chaque pays agissant dans la mesure de ses moyens." },
      { code: "9.5", text: "Renforcer la recherche scientifique, perfectionner les capacités technologiques des secteurs industriels de tous les pays, en particulier des pays en développement, notamment en encourageant l’innovation et en augmentant considérablement le nombre de personnes travaillant dans le secteur de la recherche et du développement pour 1 million d’habitants et en accroissant les dépenses publiques et privées consacrées à la recherche et au développement d’ici à 2030." },
      { code: "9.a", text: "Faciliter la mise en place d’une infrastructure durable et résiliente dans les pays en développement en renforçant l’appui financier, technologique et technique apporté aux pays d’Afrique, aux pays les moins avancés, aux pays en développement sans littoral et aux petits États insulaires en développement." },
      { code: "9.b", text: "Soutenir la recherche, le développement et l’innovation technologique au niveau national dans les pays en développement, notamment en instaurant des conditions propices telles que la diversification industrielle et l’ajout de valeur aux marchandises." },
      { code: "9.c", text: "Accroître nettement l’accès aux technologies de l’information et de la communication et faire en sorte que tous les habitants des pays les moins avancés aient accès à Internet à un coût abordable d’ici à 2020." }
    ]
  },
  {
    id: 10,
    title: "Inégalités réduites",
    color: "#DD1367",
    summary: "Réduire les inégalités dans les pays et d’un pays à l’autre.",
    targets: [
      { code: "10.1", text: "D’ici à 2030, faire en sorte, au moyen d’améliorations progressives, que les revenus des 40 pour cent les plus pauvres de la population augmentent plus rapidement que le revenu moyen national, et ce de manière durable" },
      { code: "10.2", text: "D’ici à 2030, autonomiser toutes les personnes et favoriser leur intégration sociale, économique et politique, indépendamment de leur âge, de leur sexe, de leur handicap, de leur race, de leur appartenance ethnique, de leurs origines, de leur religion ou de leur statut économique ou autre" },
      { code: "10.3", text: "Assurer l’égalité des chances et réduire l’inégalité des résultats, notamment en éliminant les lois, politiques et pratiques discriminatoires et en promouvant l’adoption de lois, politiques et mesures adéquates en la matière" },
      { code: "10.4", text: "Adopter des politiques, notamment sur les plans budgétaire, salarial et dans le domaine de la protection sociale, et parvenir progressivement à une plus grande égalité" },
      { code: "10.5", text: "Améliorer la réglementation et la surveillance des institutions et marchés financiers mondiaux et renforcer l’application des règles" },
      { code: "10.6", text: "Faire en sorte que les pays en développement soient davantage représentés et entendus lors de la prise de décisions dans les institutions économiques et financières internationales, afin que celles-ci soient plus efficaces, crédibles, transparentes et légitimes" },
      { code: "10.7", text: "Faciliter la migration et la mobilité de façon ordonnée, sans danger, régulière et responsable, notamment par la mise en œuvre de politiques de migration planifiées et bien gérées" },
      { code: "10.a", text: "Mettre en œuvre le principe d’un traitement spécial et différencié pour les pays en développement, en particulier les pays les moins avancés, conformément aux accords de l’Organisation mondiale du commerce" },
      { code: "10.b", text: "Stimuler l’aide publique au développement et les flux financiers, y compris les investissements étrangers directs, pour les États qui en ont le plus besoin, en particulier les pays les moins avancés, les pays d’Afrique, les petits États insulaires en développement et les pays en développement sans littoral, conformément à leurs plans et programmes nationaux" },
      { code: "10.c", text: "D’ici à 2030, faire baisser au-dessous de 3 pour cent les coûts de transaction des envois de fonds effectués par les migrants et éliminer les couloirs de transfert de fonds dont les coûts sont supérieurs à 5 pour cent" }
    ]
  },
  {
    id: 11,
    title: "Villes et communautés durables",
    color: "#FD9D24",
    summary: "Faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables.",
    targets: [
      { code: "11.1", text: "D’ici à 2030, assurer l’accès de tous à un logement et des services de base adéquats et sûrs, à un coût abordable, et assainir les quartiers de taudis." },
      { code: "11.2", text: "D’ici à 2030, assurer l’accès de tous à des systèmes de transport sûrs, accessibles et viables, à un coût abordable, en améliorant la sécurité routière, notamment en développant les transports publics, une attention particulière devant être accordée aux besoins des personnes en situation vulnérable, des femmes, des enfants, des personnes handicapées et des personnes âgées." },
      { code: "11.3", text: "D’ici à 2030, renforcer l’urbanisation inclusive et durable pour tous et les capacités de planification et de gestion participatives, intégrées et durables des établissements humains dans tous les pays." },
      { code: "11.4", text: "Renforcer les efforts de protection et de préservation du patrimoine culturel et naturel mondial." },
      { code: "11.5", text: "D’ici à 2030, réduire considérablement le nombre de personnes tuées et le nombre de personnes touchées par les catastrophes, y compris celles d’origine hydrique, et réduire considérablement le montant des pertes économiques qui sont dues directement à ces catastrophes exprimé en proportion du produit intérieur brut mondial, l’accent étant mis sur la protection des pauvres et des personnes en situation vulnérable." },
      { code: "11.6", text: "D’ici à 2030, réduire l’impact environnemental négatif des villes par habitant, en accordant une attention particulière à la qualité de l’air et à la gestion, notamment municipale, des déchets." },
      { code: "11.7", text: "D’ici à 2030, assurer l’accès de tous, en particulier des femmes et des enfants, des personnes âgées et des personnes handicapées, à des espaces verts et des espaces publics sûrs." },
      { code: "11.a", text: "Favoriser l’établissement de liens économiques, sociaux et environnementaux positifs entre zones urbaines, périurbaines et rurales en renforçant la planification du développement à l’échelle nationale et régionale." },
      { code: "11.b", text: "D’ici 2020, accroître considérablement le nombre de villes et d’établissements humains qui adoptent et mettent en œuvre des politiques et plans d’action intégrés en faveur de l’insertion de tous, de l’utilisation rationnelle des ressources, de l’adaptation aux effets des changements climatiques et de leur atténuation et de la résilience face aux catastrophes, et élaborer et mettre en œuvre, conformément au Cadre de Sendai pour la réduction des risques de catastrophe (2015-2030), une gestion globale des risques de catastrophe à tous les niveaux." },
      { code: "11.c", text: "Aider les pays les moins avancés, y compris par une assistance financière et technique, à construire des bâtiments durables et résilients en utilisant des matériaux locaux." }
    ]
  },
  {
    id: 12,
    title: "Consommation et production durables",
    color: "#BF8B2E",
    summary: "Établir des modes de consommation et de production durables.",
    targets: [
      { code: "12.1", text: "Mettre en œuvre le Cadre décennal de programmation concernant les modes de consommation et de production durables avec la participation de tous les pays, les pays développés montrant l’exemple en la matière, compte tenu du degré de développement et des capacités des pays en développement" },
      { code: "12.2", text: "D’ici à 2030, parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles" },
      { code: "12.3", text: "D’ici à 2030, réduire de moitié à l’échelle mondiale le volume de déchets alimentaires par habitant au niveau de la distribution comme de la consommation et réduire les pertes de produits alimentaires tout au long des chaînes de production et d’approvisionnement, y compris les pertes après récolte" },
      { code: "12.4", text: "D’ici à 2020, instaurer une gestion écologiquement rationnelle des produits chimiques et de tous les déchets tout au long de leur cycle de vie, conformément aux principes directeurs arrêtés à l’échelle internationale, et réduire considérablement leur déversement dans l’air, l’eau et le sol, afin de minimiser leurs effets négatifs sur la santé et l’environnement" },
      { code: "12.5", text: "D’ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation" },
      { code: "12.6", text: "Encourager les entreprises, en particulier les grandes et les transnationales, à adopter des pratiques viables et à intégrer dans les rapports qu’elles établissent des informations sur la viabilité" },
      { code: "12.7", text: "Promouvoir des pratiques durables dans le cadre de la passation des marchés publics, conformément aux politiques et priorités nationales" },
      { code: "12.8", text: "D’ici à 2030, faire en sorte que toutes les personnes, partout dans le monde, aient les informations et connaissances nécessaires au développement durable et à un style de vie en harmonie avec la nature" },
      { code: "12.a", text: "Aider les pays en développement à se doter des moyens scientifiques et technologiques qui leur permettent de s’orienter vers des modes de consommation et de production plus durables" },
      { code: "12.b", text: "Mettre au point et utiliser des outils de contrôle des impacts sur le développement durable, pour un tourisme durable qui crée des emplois et met en valeur la culture et les produits locaux" },
      { code: "12.c", text: "Rationaliser les subventions aux combustibles fossiles qui sont source de gaspillage, en éliminant les distorsions du marché, selon le contexte national, y compris par la restructuration de la fiscalité et l’élimination progressive des subventions nuisibles, afin de mettre en évidence leur impact sur l’environnement, en tenant pleinement compte des besoins et de la situation propres aux pays en développement et en réduisant au minimum les éventuels effets pernicieux sur le développement de ces pays tout en protégeant les pauvres et les collectivités concernées" }
    ]
  },
  {
    id: 13,
    title: "Mesures relatives à la lutte contre les changements climatiques",
    color: "#3F7E44",
    summary: "Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions.",
    targets: [
      { code: "13.1", text: "Renforcer, dans tous les pays, la résilience et les capacités d’adaptation face aux aléas climatiques et aux catastrophes naturelles liées au climat" },
      { code: "13.2", text: "Incorporer des mesures relatives aux changements climatiques dans les politiques, les stratégies et la planification nationales" },
      { code: "13.3", text: "Améliorer l’éducation, la sensibilisation et les capacités individuelles et institutionnelles en ce qui concerne l’adaptation aux changements climatiques, l’atténuation de leurs effets et la réduction de leur impact et les systèmes d’alerte rapide" },
      { code: "13.a", text: "Mettre en œuvre l’engagement que les pays développés parties à la Convention-cadre des Nations Unies sur les changements climatiques ont pris de mobiliser ensemble auprès de multiples sources 100 milliards de dollars des États-Unis par an d’ici à 2020 pour répondre aux besoins des pays en développement en ce qui concerne les mesures concrètes d’atténuation et la transparence de leur mise en œuvre et rendre le Fonds vert pour le climat pleinement opérationnel en le dotant dans les plus brefs délais des moyens financiers nécessaires" },
      { code: "13.b", text: "Promouvoir des mécanismes de renforcement des capacités afin que les pays les moins avancés et les petits États insulaires en développement se dotent de moyens efficaces de planification et de gestion pour faire face aux changements climatiques, l’accent étant mis notamment sur les femmes, les jeunes, la population locale et les groupes marginalisés" }
    ]
  },
  {
    id: 14,
    title: "Vie aquatique",
    color: "#0A97D9",
    summary: "Conserver et exploiter de manière durable les océans, les mers et les ressources marines aux fins du développement durable.",
    targets: [
      { code: "14.1", text: "D’ici à 2025, prévenir et réduire nettement la pollution marine de tous types, en particulier celle résultant des activités terrestres, y compris les déchets en mer et la pollution par les nutriments" },
      { code: "14.2", text: "D’ici à 2020, gérer et protéger durablement les écosystèmes marins et côtiers, notamment en renforçant leur résilience, afin d’éviter les graves conséquences de leur dégradation et prendre des mesures en faveur de leur restauration pour rétablir la santé et la productivité des océans" },
      { code: "14.3", text: "Réduire au maximum l’acidification des océans et lutter contre ses effets, notamment en renforçant la coopération scientifique à tous les niveaux" },
      { code: "14.4", text: "D’ici à 2020, réglementer efficacement la pêche, mettre un terme à la surpêche, à la pêche illicite, non déclarée et non réglementée et aux pratiques de pêche destructrices et exécuter des plans de gestion fondés sur des données scientifiques, l’objectif étant de rétablir les stocks de poissons le plus rapidement possible, au moins à des niveaux permettant d’obtenir un rendement constant maximal compte tenu des caractéristiques biologiques" },
      { code: "14.5", text: "D’ici à 2020, préserver au moins 10 % des zones marines et côtières, conformément au droit national et international et compte tenu des meilleures informations scientifiques disponibles" },
      { code: "14.6", text: "D’ici à 2020, interdire les subventions à la pêche qui contribuent à la surcapacité et à la surpêche, supprimer celles qui favorisent la pêche illicite, non déclarée et non réglementée et s’abstenir d’en accorder de nouvelles, sachant que l’octroi d’un traitement spécial et différencié efficace et approprié aux pays en développement et aux pays les moins avancés doit faire partie intégrante des négociations sur les subventions à la pêche menées dans le cadre de l’Organisation mondiale du commerce" },
      { code: "14.7", text: "D’ici à 2030, faire mieux bénéficier les petits États insulaires en développement et les pays les moins avancés des retombées économiques de l’exploitation durable des ressources marines, notamment grâce à une gestion durable des pêches, de l’aquaculture et du tourisme" },
      { code: "14.a", text: "Approfondir les connaissances scientifiques, renforcer les capacités de recherche et transférer les techniques marines, conformément aux Critères et principes directeurs de la Commission océanographique intergouvernementale concernant le transfert de techniques marines, l’objectif étant d’améliorer la santé des océans et de renforcer la contribution de la biodiversité marine au développement des pays en développement, en particulier des petits États insulaires en développement et des pays les moins avancés" },
      { code: "14.b", text: "Garantir aux petits pêcheurs l’accès aux ressources marines et aux marchés" },
      { code: "14.c", text: "Améliorer la conservation des océans et de leurs ressources et les exploiter de manière plus durable en application des dispositions du droit international, énoncées dans la Convention des Nations Unies sur le droit de la mer, qui fournit le cadre juridique requis pour la conservation et l’exploitation durable des océans et de leurs ressources, comme il est rappelé au paragraphe 158 de « L’avenir que nous voulons »" }
    ]
  },
  {
    id: 15,
    title: "Vie terrestre",
    color: "#56C02B",
    summary: "Préserver et restaurer les écosystèmes terrestres, en veillant à les exploiter de façon durable, gérer durablement les forêts, lutter contre la désertification, enrayer et inverser le processus de dégradation des sols et mettre fin à l’appauvrissement de la biodiversité.",
    targets: [
      { code: "15.1", text: "D’ici à 2020, garantir la préservation, la restauration et l’exploitation durable des écosystèmes terrestres et des écosystèmes d’eau douce et des services connexes, en particulier les forêts, les zones humides, les montagnes et les zones arides, conformément aux obligations découlant des accords internationaux" },
      { code: "15.2", text: "D’ici à 2020, promouvoir la gestion durable de tous les types de forêt, mettre un terme à la déforestation, restaurer les forêts dégradées et accroître considérablement le boisement et le reboisement au niveau mondial" },
      { code: "15.3", text: "D’ici à 2030, lutter contre la désertification, restaurer les terres et sols dégradés, notamment les terres touchées par la désertification, la sécheresse et les inondations, et s’efforcer de parvenir à un monde neutre en matière de dégradation des terres." },
      { code: "15.4", text: "D’ici à 2030, assurer la préservation des écosystèmes montagneux, notamment de leur biodiversité, afin de mieux tirer parti de leurs bienfaits essentiels pour le développement durable" },
      { code: "15.5", text: "Prendre d’urgence des mesures énergiques pour réduire la dégradation du milieu naturel, mettre un terme à l’appauvrissement de la biodiversité et, d’ici à 2020, protéger les espèces menacées et prévenir leur extinction" },
      { code: "15.6", text: "Favoriser le partage juste et équitable des bénéfices découlant de l’utilisation des ressources génétiques et promouvoir un accès approprié à celles-ci, ainsi que cela a été décidé à l’échelle internationale" },
      { code: "15.7", text: "Prendre d’urgence des mesures pour mettre un terme au braconnage et au trafic d’espèces végétales et animales protégées et s’attaquer au problème sous l’angle de l’offre et de la demande" },
      { code: "15.8", text: "D’ici à 2020, prendre des mesures pour empêcher l’introduction d’espèces exotiques envahissantes, atténuer sensiblement les effets que ces espèces ont sur les écosystèmes terrestres et aquatiques et contrôler ou éradiquer les espèces prioritaires" },
      { code: "15.9", text: "D’ici à 2020, intégrer la protection des écosystèmes et de la biodiversité dans la planification nationale, dans les mécanismes de développement, dans les stratégies de réduction de la pauvreté et dans la comptabilité" },
      { code: "15.a", text: "Mobiliser des ressources financières de toutes provenances et les augmenter nettement pour préserver la biodiversité et les écosystèmes et les exploiter durablement" },
      { code: "15.b", text: "Mobiliser d’importantes ressources de toutes provenances et à tous les niveaux pour financer la gestion durable des forêts et inciter les pays en développement à privilégier ce type de gestion, notamment aux fins de la préservation des forêts et du reboisement" },
      { code: "15.c", text: "Apporter, à l’échelon mondial, un soutien accru à l’action menée pour lutter contre le braconnage et le trafic d’espèces protégées, notamment en donnant aux populations locales d’autres moyens d’assurer durablement leur subsistance" }
    ]
  },
  {
    id: 16,
    title: "Paix, justice et institutions efficaces",
    color: "#00689D",
    summary: "Promouvoir l’avènement de sociétés pacifiques et inclusives aux fins du développement durable, assurer l’accès de tous à la justice et mettre en place, à tous les niveaux, des institutions efficaces, responsables et ouvertes à tous.",
    targets: [
      { code: "16.1", text: "Réduire nettement, partout dans le monde, toutes les formes de violence et les taux de mortalité qui y sont associés" },
      { code: "16.2", text: "Mettre un terme à la maltraitance, à l’exploitation et à la traite, et à toutes les formes de violence et de torture dont sont victimes les enfants" },
      { code: "16.3", text: "Promouvoir l’état de droit aux niveaux national et international et donner à tous accès à la justice dans des conditions d’égalité" },
      { code: "16.4", text: "D’ici à 2030, réduire nettement les flux financiers illicites et le trafic d’armes, renforcer les activités de récupération et de restitution des biens volés et lutter contre toutes les formes de criminalité organisée" },
      { code: "16.5", text: "Réduire nettement la corruption et la pratique des pots-de-vin sous toutes leurs formes" },
      { code: "16.6", text: "Mettre en place des institutions efficaces, responsables et transparentes à tous les niveaux" },
      { code: "16.7", text: "Faire en sorte que le dynamisme, l’ouverture, la participation et la représentation à tous les niveaux caractérisent la prise de décisions" },
      { code: "16.8", text: "Élargir et renforcer la participation des pays en développement aux institutions chargées de la gouvernance au niveau mondial" },
      { code: "16.9", text: "D’ici à 2030, garantir à tous une identité juridique, notamment grâce à l’enregistrement des naissances" },
      { code: "16.10", text: "Garantir l’accès public à l’information et protéger les libertés fondamentales, conformément à la législation nationale et aux accords internationaux" },
      { code: "16.a", text: "Appuyer, notamment dans le cadre de la coopération internationale, les institutions nationales chargées de renforcer, à tous les niveaux, les moyens de prévenir la violence et de lutter contre le terrorisme et la criminalité, en particulier dans les pays en développement" },
      { code: "16.b", text: "Promouvoir et appliquer des lois et politiques non discriminatoires pour le développement durable" }
    ]
  },
  {
    id: 17,
    title: "Partenariats pour la réalisation des objectifs",
    color: "#19486A",
    summary: "Renforcer les moyens de mettre en œuvre le Partenariat mondial pour le développement durable et le revitaliser.",
    targets: [
      { code: "17.1", text: "Améliorer, notamment grâce à l’aide internationale aux pays en développement, la mobilisation de ressources nationales en vue de renforcer les capacités nationales de collecte de l’impôt et d’autres recettes" },
      { code: "17.2", text: "Faire en sorte que les pays développés honorent tous leurs engagements en matière d’aide publique au développement, notamment celui pris par nombre d’entre eux de consacrer 0,7% de leur revenu national brut à l’aide aux pays en développement et entre 0,15% et 0,20% à l’aide aux pays les moins avancés, les bailleurs de fonds étant encouragés à envisager de se fixer pour objectif de consacrer au moins 0,20% de leur revenu national brut à l’aide aux pays les moins avancés" },
      { code: "17.3", text: "Mobiliser des ressources financières supplémentaires de diverses provenances en faveur des pays en développement" },
      { code: "17.4", text: "Aider les pays en développement à assurer la viabilité à long terme de leur dette au moyen de politiques concertées visant à favoriser le financement de la dette, son allègement ou sa restructuration, selon le cas, et réduire le surendettement en réglant le problème de la dette extérieure des pays pauvres très endettés" },
      { code: "17.5", text: "Adopter et mettre en œuvre des dispositifs visant à encourager l’investissement en faveur des pays les moins avancés" },
      { code: "17.6", text: "Renforcer l’accès à la science, à la technologie et à l’innovation et la coopération Nord-Sud et Sud-Sud et la coopération triangulaire régionale et internationale dans ces domaines et améliorer le partage des savoirs selon des modalités arrêtées d’un commun accord, notamment en coordonnant mieux les mécanismes existants, en particulier au niveau des organismes des Nations unies, et dans le cadre d’un mécanisme mondial de facilitation des technologies" },
      { code: "17.7", text: "Promouvoir la mise au point, le transfert et la diffusion de technologies respectueuses de l’environnement en faveur des pays en développement, à des conditions favorables, y compris privilégiées et préférentielles, arrêtées d’un commun accord" },
      { code: "17.8", text: "Faire en sorte que la banque de technologies et le mécanisme de renforcement des capacités scientifiques et technologiques et des capacités d’innovation des pays les moins avancés soient pleinement opérationnels d’ici à 2017 et renforcer l’utilisation des technologies clefs, en particulier de l’informatique et des communications" },
      { code: "17.9", text: "Apporter, à l’échelon international, un soutien accru pour assurer le renforcement efficace et ciblé des capacités des pays en développement et appuyer ainsi les plans nationaux visant à atteindre tous les objectifs de développement durable, notamment dans le cadre de la coopération Nord-Sud et Sud-Sud et de la coopération triangulaire" },
      { code: "17.10", text: "Promouvoir un système commercial multilatéral universel, réglementé, ouvert, non discriminatoire et équitable sous l’égide de l’Organisation mondiale du commerce, notamment grâce à la tenue de négociations dans le cadre du Programme de Doha pour le développement" },
      { code: "17.11", text: "Accroître nettement les exportations des pays en développement, en particulier en vue de doubler la part des pays les moins avancés dans les exportations mondiales d’ici à 2020" },
      { code: "17.12", text: "Permettre l’accès rapide de tous les pays les moins avancés aux marchés en franchise de droits et sans contingent, conformément aux décisions de l’Organisation mondiale du commerce, notamment en veillant à ce que les règles préférentielles applicables aux importations provenant des pays les moins avancés soient transparentes et simples et facilitent l’accès aux marchés" },
      { code: "17.13", text: "Renforcer la stabilité macroéconomique mondiale, notamment en favorisant la coordination et la cohérence des politiques" },
      { code: "17.14", text: "Renforcer la cohérence des politiques de développement durable" },
      { code: "17.15", text: "Respecter la marge de manœuvre et l’autorité de chaque pays en ce qui concerne l’élaboration et l’application des politiques d’élimination de la pauvreté et de développement durable" },
      { code: "17.16", text: "Renforcer le Partenariat mondial pour le développement durable, associé à des partenariats multipartites permettant de mobiliser et de partager des savoirs, des connaissances spécialisées, des technologies et des ressources financières, afin d’aider tous les pays, en particulier les pays en développement, à atteindre les objectifs de développement durable" },
      { code: "17.17", text: "Encourager et promouvoir les partenariats publics, les partenariats public-privé et les partenariats avec la société civile, en faisant fond sur l’expérience acquise et les stratégies de financement appliquées en la matière" },
      { code: "17.18", text: "D’ici à 2020, apporter un soutien accru au renforcement des capacités des pays en développement, notamment des pays les moins avancés et des petits États insulaires en développement, l’objectif étant de disposer d’un beaucoup plus grand nombre de données de qualité, actualisées et exactes, ventilées par niveau de revenu, sexe, âge, race, appartenance ethnique, statut migratoire, handicap et emplacement géographique, et selon d’autres caractéristiques propres à chaque pays" },
      { code: "17.19", text: "D’ici à 2030, tirer parti des initiatives existantes pour établir des indicateurs de progrès en matière de développement durable qui viendraient compléter le produit intérieur brut, et appuyer le renforcement des capacités statistiques des pays en développement" }
    ]
  }
];

window.initOddTargetsPage = function initOddTargetsPage() {
  const wheel = document.getElementById("oddWheel");
  const oddPrev = document.getElementById("oddPrev");
  const oddNext = document.getElementById("oddNext");

  const oddCurrentNumber = document.getElementById("oddCurrentNumber");
  const wheelCenterLabel = document.getElementById("wheelCenterLabel");
  const oddBadge = document.getElementById("oddBadge");
  const oddTitle = document.getElementById("oddTitle");
  const oddSummary = document.getElementById("oddSummary");
  const oddTargetsList = document.getElementById("oddTargetsList");

  if (!wheel || !oddTargetsList) return;

  let currentIndex = 0;
  const total = oddTargetsData.length;
  const radius = 185;

  function renderWheel() {
    wheel.innerHTML = "";

    oddTargetsData.forEach((odd, index) => {
      const angle = (360 / total) * index;
      const btn = document.createElement("button");

      btn.className = "oddtargets-segment";
      if (index === currentIndex) btn.classList.add("active");

      btn.textContent = `ODD ${odd.id}`;
      btn.style.background = odd.color;
      btn.style.setProperty("--angle", `${angle}deg`);
      btn.style.setProperty("--translateY", `-${radius}px`);

      btn.addEventListener("click", () => {
        currentIndex = index;
        updateUI();
      });

      wheel.appendChild(btn);
    });
  }

  function renderTargets(odd) {
    oddTargetsList.innerHTML = "";

    odd.targets.forEach((target) => {
      const card = document.createElement("article");
      card.className = "oddtarget-card";
      card.style.setProperty("--target-color", odd.color);

      const isLong = target.text.length > 180;

      card.innerHTML = `
        <span class="oddtarget-code">${target.code}</span>
        <p class="oddtarget-text${isLong ? " is-clamped" : ""}">${target.text}</p>
        ${isLong ? '<button class="oddtarget-toggle" type="button" aria-expanded="false">Voir plus</button>' : ""}
      `;

      if (isLong) {
        const textEl = card.querySelector(".oddtarget-text");
        const toggle = card.querySelector(".oddtarget-toggle");
        toggle.addEventListener("click", () => {
          const clamped = textEl.classList.toggle("is-clamped");
          toggle.textContent = clamped ? "Voir plus" : "Voir moins";
          toggle.setAttribute("aria-expanded", String(!clamped));
        });
      }

      oddTargetsList.appendChild(card);
    });
  }

  function updateUI() {
    const odd = oddTargetsData[currentIndex];

    const angle = (360 / total) * currentIndex;
    wheel.style.transform = `rotate(${-angle}deg)`;

    oddCurrentNumber.textContent = `ODD ${odd.id}`;
    wheelCenterLabel.textContent = odd.id;
    oddBadge.textContent = `ODD ${odd.id}`;
    oddBadge.style.background = odd.color;
    oddTitle.textContent = odd.title;
    oddTitle.style.color = odd.color;
    oddSummary.textContent = odd.summary;

    renderWheel();
    renderTargets(odd);
  }

  oddPrev?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + total) % total;
    updateUI();
  });

  oddNext?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % total;
    updateUI();
  });

  updateUI();
};

window.addEventListener("DOMContentLoaded", () => {
  if (window.initOddTargetsPage) window.initOddTargetsPage();
});