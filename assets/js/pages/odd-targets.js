const oddTargetsData = [
  {
    id: 1,
    title: "Pas de pauvreté",
    color: "#E5243B",
    summary: "Éliminer la pauvreté sous toutes ses formes et partout dans le monde.",
    targets: [
      { code: "1.1", text: "D’ici à 2030, éliminer complètement l’extrême pauvreté dans le monde entier (personnes vivant avec moins de 1,25 dollar US par jour)." },
      { code: "1.2", text: "D’ici à 2030, réduire de moitié au moins la proportion d’hommes, de femmes et d’enfants de tous âges vivant dans la pauvreté sous toutes ses formes." },
      { code: "1.3", text: "Mettre en place des systèmes et mesures de protection sociale adaptés à chaque pays, y compris des socles de protection sociale, pour tous." },
      { code: "1.4", text: "D’ici à 2030, faire en sorte que tous les hommes et les femmes, en particulier les pauvres et les personnes vulnérables, aient les mêmes droits aux ressources économiques." },
      { code: "1.5", text: "D’ici à 2030, renforcer la résilience des pauvres et des personnes en situation vulnérable et réduire leur exposition et leur vulnérabilité aux phénomènes climatiques extrêmes." },
      { code: "1.a", text: "Garantir une mobilisation importante de ressources provenant de sources variées afin de doter les pays en développement de moyens suffisants et prévisibles pour mettre en œuvre des programmes et politiques." },
      { code: "1.b", text: "Mettre en place aux niveaux national, régional et international des cadres stratégiques solides, fondés sur des stratégies de développement favorables aux pauvres et soucieuses de la problématique hommes-femmes." }
    ]
  },
  {
    id: 2,
    title: "Faim zéro",
    color: "#DDA63A",
    summary: "Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir une agriculture durable.",
    targets: [
      { code: "2.1", text: "D’ici à 2030, éliminer la faim et faire en sorte que chacun, en particulier les pauvres et les personnes en situation vulnérable, y compris les nourrissons, ait accès toute l’année à une alimentation saine, nutritive et suffisante." },
      { code: "2.2", text: "D’ici à 2030, mettre fin à toutes les formes de malnutrition, y compris en atteignant d’ici à 2025 les objectifs arrêtés à l’échelle internationale relatifs aux retards de croissance et à l’émaciation chez les enfants de moins de 5 ans." },
      { code: "2.3", text: "D’ici à 2030, doubler la productivité agricole et les revenus des petits producteurs alimentaires, en particulier des femmes, des autochtones, des exploitants familiaux, des éleveurs et des pêcheurs." },
      { code: "2.4", text: "D’ici à 2030, assurer la viabilité des systèmes de production alimentaire et mettre en œuvre des pratiques agricoles résilientes qui permettent d’accroître la productivité et la production." },
      { code: "2.5", text: "D’ici à 2020, préserver la diversité génétique des semences, des plantes cultivées et des animaux d’élevage et domestiques et des espèces sauvages apparentées." },
      { code: "2.a", text: "Accroître les investissements dans les équipements et l’infrastructure ruraux, la recherche agricole et les services de vulgarisation, le développement technologique et les banques de gènes de plantes et d’animaux d’élevage." },
      { code: "2.b", text: "Corriger et prévenir les restrictions et distorsions affectant les marchés mondiaux des produits agricoles, notamment en éliminant en parallèle toutes les formes de subventions aux exportations agricoles." },
      { code: "2.c", text: "Adopter des mesures pour assurer le bon fonctionnement des marchés des denrées alimentaires de base et de leurs produits dérivés et faciliter l’accès aux informations sur ces marchés." }
    ]
  },
  {
    id: 3,
    title: "Bonne santé et bien-être",
    color: "#4C9F38",
    summary: "Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge.",
    targets: [
      { code: "3.1", text: "D’ici à 2030, faire passer le taux mondial de mortalité maternelle au-dessous de 70 pour 100 000 naissances vivantes." },
      { code: "3.2", text: "D’ici à 2030, mettre fin aux décès évitables de nouveau-nés et d’enfants de moins de 5 ans, tous les pays devant chercher à ramener la mortalité néonatale à 12 pour 1 000 naissances vivantes au plus." },
      { code: "3.3", text: "D’ici à 2030, mettre fin à l’épidémie de sida, à la tuberculose, au paludisme et aux maladies tropicales négligées et combattre l’hépatite, les maladies transmises par l’eau et autres maladies transmissibles." },
      { code: "3.4", text: "D’ici à 2030, réduire d’un tiers, par la prévention et le traitement, le taux de mortalité prématurée due à des maladies non transmissibles et promouvoir la santé mentale et le bien-être." },
      { code: "3.5", text: "Renforcer la prévention et le traitement de l’abus de substances psychoactives, notamment de stupéfiants et d’alcool." },
      { code: "3.6", text: "D’ici à 2020, réduire de moitié à l’échelle mondiale le nombre de décès et de blessures dus à des accidents de la route." },
      { code: "3.7", text: "D’ici à 2030, assurer l’accès de tous à des services de soins de santé sexuelle et procréative, y compris à des fins de planification familiale, d’information et d’éducation." },
      { code: "3.8", text: "Faire en sorte que chacun bénéficie d’une couverture sanitaire universelle, comprenant une protection contre les risques financiers et l’accès à des services de santé essentiels de qualité." },
      { code: "3.9", text: "D’ici à 2030, réduire nettement le nombre de décès et de maladies dus à des substances chimiques dangereuses et à la pollution et à la contamination de l’air, de l’eau et du sol." },
      { code: "3.a", text: "Renforcer dans tous les pays, selon qu’il convient, la mise en œuvre de la Convention-cadre de l’Organisation mondiale de la Santé pour la lutte antitabac." },
      { code: "3.b", text: "Soutenir la recherche et la mise au point de vaccins et de médicaments contre les maladies, transmissibles ou non, qui touchent principalement les habitants des pays en développement." },
      { code: "3.c", text: "Accroître les ressources financières allouées à la santé et aider les pays en développement à recruter, à perfectionner, à former et à retenir le personnel de santé." },
      { code: "3.d", text: "Renforcer les moyens dont disposent tous les pays, en particulier les pays en développement, en matière d’alerte rapide, de réduction des risques et de gestion des risques sanitaires nationaux et mondiaux." }
    ]
  },
  {
    id: 4,
    title: "Éducation de qualité",
    color: "#C5192D",
    summary: "Assurer l’accès de tous à une éducation de qualité, sur un pied d’égalité, et promouvoir les possibilités d’apprentissage tout au long de la vie.",
    targets: [
      { code: "4.1", text: "D’ici à 2030, faire en sorte que toutes les filles et tous les garçons suivent un cycle complet d’enseignement primaire et secondaire gratuit, équitable et de qualité, qui débouche sur un apprentissage véritablement utile." },
      { code: "4.2", text: "D’ici à 2030, faire en sorte que toutes les filles et tous les garçons aient accès à des activités de développement et de soins de la petite enfance et à une éducation préscolaire de qualité." },
      { code: "4.3", text: "D’ici à 2030, faire en sorte que les femmes et les hommes aient tous accès dans des conditions d’égalité à un enseignement technique, professionnel ou tertiaire de qualité, y compris universitaire." },
      { code: "4.4", text: "D’ici à 2030, augmenter considérablement le nombre de jeunes et d’adultes disposant des compétences, notamment techniques et professionnelles, nécessaires à l’emploi, à l’obtention d’un travail décent et à l’entrepreneuriat." },
      { code: "4.5", text: "D’ici à 2030, éliminer les inégalités entre les sexes dans le domaine de l’éducation et assurer l’égalité d’accès des personnes vulnérables, y compris les personnes handicapées, les autochtones et les enfants en situation vulnérable." },
      { code: "4.6", text: "D’ici à 2030, faire en sorte que tous les jeunes et une proportion considérable d’adultes, hommes et femmes, sachent lire, écrire et compter." },
      { code: "4.7", text: "D’ici à 2030, faire en sorte que tous les élèves acquièrent les connaissances et compétences nécessaires pour promouvoir le développement durable, notamment par l’éducation en faveur du développement et de modes de vie durables." },
      { code: "4.a", text: "Faire construire des établissements scolaires qui soient adaptés aux enfants, aux personnes handicapées et aux deux sexes, ou rénover les établissements existants à cette fin et qui offrent un cadre d’apprentissage sûr, non violent, inclusif et efficace pour tous." },
      { code: "4.b", text: "D’ici à 2020, augmenter le nombre de bourses d’études accordées à des étudiants des pays en développement, en particulier des pays les moins avancés, des petits États insulaires en développement et des pays d’Afrique." },
      { code: "4.c", text: "D’ici à 2030, accroître nettement le nombre d’enseignants qualifiés, notamment grâce à la coopération internationale pour la formation d’enseignants dans les pays en développement." }
    ]
  },
  {
    id: 5,
    title: "Égalité entre les sexes",
    color: "#FF3A21",
    summary: "Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles.",
    targets: [
      { code: "5.1", text: "Mettre fin, dans le monde entier, à toutes les formes de discrimination à l’égard des femmes et des filles." },
      { code: "5.2", text: "Éliminer de la vie publique et de la vie privée toutes les formes de violence faite aux femmes et aux filles, y compris la traite et l’exploitation sexuelle et d’autres types d’exploitation." },
      { code: "5.3", text: "Éliminer toutes les pratiques néfastes, telles que le mariage des enfants, le mariage précoce ou forcé et la mutilation génitale féminine." },
      { code: "5.4", text: "Faire une place au travail domestique non rémunéré et le valoriser, par la mise en place de services publics, d’infrastructures et de politiques de protection sociale." },
      { code: "5.5", text: "Garantir la participation entière et effective des femmes et leur accès en toute égalité aux fonctions de direction à tous les niveaux de décision, dans la vie politique, économique et publique." },
      { code: "5.6", text: "Assurer l’accès de tous aux soins de santé sexuelle et procréative et faire en sorte que chacun puisse exercer ses droits en matière de procréation, conformément au Programme d’action de la Conférence internationale sur la population et le développement." },
      { code: "5.a", text: "Entreprendre des réformes visant à donner aux femmes les mêmes droits aux ressources économiques, ainsi qu’à l’accès à la propriété et au contrôle des terres et d’autres formes de propriété." },
      { code: "5.b", text: "Renforcer l’utilisation des technologies, en particulier l’informatique et les communications, pour promouvoir l’émancipation des femmes." },
      { code: "5.c", text: "Adopter des politiques bien conçues et des dispositions législatives applicables en faveur de la promotion de l’égalité des sexes et de l’autonomisation de toutes les femmes et de toutes les filles." }
    ]
  },
  {
    id: 6,
    title: "Eau propre et assainissement",
    color: "#26BDE2",
    summary: "Garantir l’accès de tous à l’eau et à l’assainissement et assurer une gestion durable des ressources en eau.",
    targets: [
      { code: "6.1", text: "D’ici à 2030, assurer l’accès universel et équitable à l’eau potable, à un coût abordable." },
      { code: "6.2", text: "D’ici à 2030, assurer l’accès de tous, dans des conditions équitables, à des services d’assainissement et d’hygiène adéquats et mettre fin à la défécation en plein air." },
      { code: "6.3", text: "D’ici à 2030, améliorer la qualité de l’eau en réduisant la pollution, en éliminant les déversements et en limitant au minimum les émissions de produits chimiques et de matières dangereuses." },
      { code: "6.4", text: "D’ici à 2030, augmenter considérablement l’utilisation rationnelle des ressources en eau dans tous les secteurs et garantir la viabilité des retraits et de l’approvisionnement en eau douce." },
      { code: "6.5", text: "D’ici à 2030, assurer la gestion intégrée des ressources en eau à tous les niveaux, y compris au moyen de la coopération transfrontière selon qu’il convient." },
      { code: "6.6", text: "D’ici à 2020, protéger et restaurer les écosystèmes liés à l’eau, notamment les montagnes, les forêts, les zones humides, les rivières, les aquifères et les lacs." },
      { code: "6.a", text: "D’ici à 2030, développer la coopération internationale et l’appui au renforcement des capacités des pays en développement pour ce qui est des activités et programmes liés à l’eau et à l’assainissement." },
      { code: "6.b", text: "Soutenir et renforcer la participation de la population locale à l’amélioration de la gestion de l’eau et de l’assainissement." }
    ]
  },
  {
    id: 7,
    title: "Énergie propre et d’un coût abordable",
    color: "#FCC30B",
    summary: "Garantir l’accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable.",
    targets: [
      { code: "7.1", text: "D’ici à 2030, garantir l’accès de tous à des services énergétiques fiables et modernes, à un coût abordable." },
      { code: "7.2", text: "D’ici à 2030, accroître nettement la part de l’énergie renouvelable dans le bouquet énergétique mondial." },
      { code: "7.3", text: "D’ici à 2030, multiplier par deux le taux mondial d’amélioration de l’efficacité énergétique." },
      { code: "7.a", text: "D’ici à 2030, renforcer la coopération internationale en vue de faciliter l’accès aux technologies et à la recherche dans le domaine de l’énergie propre, notamment les énergies renouvelables, l’efficacité énergétique et les nouvelles technologies." },
      { code: "7.b", text: "D’ici à 2030, développer l’infrastructure et améliorer la technologie afin d’approvisionner en services énergétiques modernes et durables tous les habitants des pays en développement, en particulier des pays les moins avancés." }
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
      { code: "8.3", text: "Promouvoir des politiques axées sur le développement qui favorisent des activités productives, la création d’emplois décents, l’entrepreneuriat, la créativité et l’innovation et stimulent la croissance des microentreprises et des petites et moyennes entreprises." },
      { code: "8.4", text: "Améliorer progressivement, jusqu’en 2030, l’efficience dans l’utilisation des ressources mondiales du point de vue de la consommation comme de la production et s’attacher à dissocier croissance économique et dégradation de l’environnement." },
      { code: "8.5", text: "D’ici à 2030, parvenir au plein emploi productif et garantir à toutes les femmes et à tous les hommes, y compris les jeunes et les personnes handicapées, un travail décent et un salaire égal pour un travail de valeur égale." },
      { code: "8.6", text: "D’ici à 2020, réduire nettement la proportion de jeunes non scolarisés et sans emploi ni formation." },
      { code: "8.7", text: "Prendre des mesures immédiates et efficaces pour supprimer le travail forcé, mettre fin à l’esclavage moderne et à la traite d’êtres humains, et interdire et éliminer les pires formes de travail des enfants." },
      { code: "8.8", text: "Défendre les droits des travailleurs, promouvoir la sécurité sur le lieu de travail et assurer la protection de tous les travailleurs, y compris les migrants, en particulier les femmes, et ceux qui ont un emploi précaire." },
      { code: "8.9", text: "D’ici à 2030, élaborer et mettre en œuvre des politiques visant à développer un tourisme durable qui crée des emplois et met en valeur la culture et les produits locaux." },
      { code: "8.10", text: "Renforcer la capacité des institutions financières nationales de favoriser et généraliser l’accès de tous aux services bancaires et financiers et aux services d’assurance." },
      { code: "8.a", text: "Accroître l’aide pour le commerce allouée aux pays en développement, en particulier aux pays les moins avancés, notamment dans le cadre du programme Aide pour le commerce de l’Organisation mondiale du commerce." },
      { code: "8.b", text: "D’ici à 2020, élaborer et mettre en œuvre une stratégie mondiale en faveur de l’emploi des jeunes et appliquer le Pacte mondial pour l’emploi de l’Organisation internationale du travail." }
    ]
  },
  {
    id: 9,
    title: "Industrie, innovation et infrastructure",
    color: "#FD6925",
    summary: "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable qui profite à tous et encourager l’innovation.",
    targets: [
      { code: "9.1", text: "Mettre en place une infrastructure de qualité, fiable, durable et résiliente, y compris une infrastructure régionale et transfrontière, pour favoriser le développement économique et le bien-être de l’être humain." },
      { code: "9.2", text: "Promouvoir une industrialisation durable qui profite à tous et, d’ici à 2030, augmenter nettement la contribution de l’industrie à l’emploi et au produit intérieur brut." },
      { code: "9.3", text: "Accroître, en particulier dans les pays en développement, l’accès des entreprises industrielles, notamment des petites entreprises, aux services financiers, y compris au crédit abordable, et leur intégration dans les chaînes de valeur et sur les marchés." },
      { code: "9.4", text: "D’ici à 2030, moderniser l’infrastructure et adapter les industries afin de les rendre durables, par une utilisation plus rationnelle des ressources et un recours accru aux technologies et procédés industriels propres et respectueux de l’environnement." },
      { code: "9.5", text: "Renforcer la recherche scientifique, perfectionner les capacités technologiques des secteurs industriels de tous les pays, en particulier des pays en développement, notamment en encourageant l’innovation et en augmentant considérablement le nombre de personnes travaillant dans le secteur de la recherche et du développement." },
      { code: "9.a", text: "Faciliter la mise en place d’une infrastructure durable et résiliente dans les pays en développement en renforçant l’appui financier, technologique et technique apporté aux pays d’Afrique, aux pays les moins avancés, aux pays en développement sans littoral et aux petits États insulaires en développement." },
      { code: "9.b", text: "Soutenir le développement technologique national, la recherche et l’innovation dans les pays en développement, y compris en leur assurant un cadre stratégique propice, entre autres à la diversification industrielle et à la valorisation des produits de base." },
      { code: "9.c", text: "Accroître l’accès aux technologies de l’information et de la communication et s’efforcer de fournir un accès universel et abordable à Internet dans les pays les moins avancés d’ici à 2020." }
    ]
  },
  {
    id: 10,
    title: "Inégalités réduites",
    color: "#DD1367",
    summary: "Réduire les inégalités dans les pays et d’un pays à l’autre.",
    targets: [
      { code: "10.1", text: "D’ici à 2030, faire en sorte, au moyen d’améliorations progressives, que les revenus des 40 % les plus pauvres de la population augmentent plus rapidement que le revenu moyen national, et ce de manière durable." },
      { code: "10.2", text: "D’ici à 2030, autonomiser toutes les personnes et favoriser leur intégration sociale, économique et politique, indépendamment de leur âge, de leur sexe, de leur handicap, de leur race, de leur appartenance ethnique, de leurs origines, de leur religion ou de leur situation économique ou autre statut." },
      { code: "10.3", text: "Assurer l’égalité des chances et réduire l’inégalité des résultats, notamment en éliminant les lois, politiques et pratiques discriminatoires et en promouvant l’adoption de lois, politiques et mesures adéquates en la matière." },
      { code: "10.4", text: "Adopter des politiques, notamment sur les plans budgétaire, salarial et dans le domaine de la protection sociale, et parvenir progressivement à une plus grande égalité." },
      { code: "10.5", text: "Améliorer la réglementation et la surveillance des institutions et marchés financiers mondiaux et renforcer l’application des règlements." },
      { code: "10.6", text: "Faire en sorte que les pays en développement soient davantage représentés et entendus lors de la prise de décisions dans les institutions économiques et financières internationales." },
      { code: "10.7", text: "Faciliter la migration et la mobilité de façon ordonnée, sans danger, régulière et responsable, notamment par la mise en œuvre de politiques migratoires planifiées et bien gérées." },
      { code: "10.a", text: "Mettre en œuvre le principe d’un traitement spécial et différencié pour les pays en développement, en particulier les pays les moins avancés, conformément aux accords de l’Organisation mondiale du commerce." },
      { code: "10.b", text: "Encourager l’aide publique au développement et les flux financiers, y compris les investissements étrangers directs, dans les États où le besoin est le plus grand." },
      { code: "10.c", text: "D’ici à 2030, faire baisser au-dessous de 3 % les coûts de transaction des envois de fonds effectués par les migrants et éliminer les couloirs de transfert de fonds dont les coûts sont supérieurs à 5 %." }
    ]
  },
  {
    id: 11,
    title: "Villes et communautés durables",
    color: "#FD9D24",
    summary: "Faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables.",
    targets: [
      { code: "11.1", text: "D’ici à 2030, assurer l’accès de tous à un logement et des services de base adéquats et sûrs, à un coût abordable, et assainir les quartiers de taudis." },
      { code: "11.2", text: "D’ici à 2030, assurer l’accès de tous à des systèmes de transport sûrs, accessibles et viables, à un coût abordable, en améliorant la sécurité routière, notamment en développant les transports publics." },
      { code: "11.3", text: "D’ici à 2030, renforcer l’urbanisation inclusive et durable pour tous ainsi que les capacités de planification et de gestion participatives, intégrées et durables des établissements humains dans tous les pays." },
      { code: "11.4", text: "Renforcer les efforts de protection et de préservation du patrimoine culturel et naturel mondial." },
      { code: "11.5", text: "D’ici à 2030, réduire nettement le nombre de personnes tuées et le nombre de personnes touchées par les catastrophes, y compris celles qui sont liées à l’eau, et réduire nettement le montant des pertes économiques causées par rapport au produit intérieur brut mondial." },
      { code: "11.6", text: "D’ici à 2030, réduire l’impact environnemental négatif des villes par habitant, y compris en accordant une attention particulière à la qualité de l’air et à la gestion des déchets municipaux et autres déchets." },
      { code: "11.7", text: "D’ici à 2030, assurer l’accès de tous, en particulier des femmes et des enfants, des personnes âgées et des personnes handicapées, à des espaces verts et des espaces publics sûrs." },
      { code: "11.a", text: "Soutenir des liens économiques, sociaux et environnementaux positifs entre zones urbaines, périurbaines et rurales en renforçant la planification du développement à l’échelle nationale et régionale." },
      { code: "11.b", text: "D’ici à 2020, augmenter le nombre de villes et d’établissements humains qui adoptent et mettent en œuvre des politiques et plans d’action intégrés en faveur de l’insertion de tous, de l’utilisation rationnelle des ressources, de l’atténuation des effets des changements climatiques et de l’adaptation à ces effets." },
      { code: "11.c", text: "Aider les pays les moins avancés à construire des bâtiments durables et résilients en leur fournissant un appui financier et technique, et en leur proposant des formations." }
    ]
  },
  {
    id: 12,
    title: "Consommation et production responsables",
    color: "#BF8B2E",
    summary: "Établir des modes de consommation et de production durables.",
    targets: [
      { code: "12.1", text: "Mettre en œuvre le Cadre décennal de programmation pour des modes de consommation et de production durables avec la participation de tous les pays, les pays développés montrant l’exemple en la matière." },
      { code: "12.2", text: "D’ici à 2030, parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles." },
      { code: "12.3", text: "D’ici à 2030, réduire de moitié à l’échelle mondiale le volume de déchets alimentaires par habitant au niveau de la distribution comme de la consommation et réduire les pertes de produits alimentaires tout au long des chaînes de production et d’approvisionnement." },
      { code: "12.4", text: "D’ici à 2020, instaurer une gestion écologiquement rationnelle des produits chimiques et de tous les déchets tout au long de leur cycle de vie, conformément aux principes directeurs arrêtés à l’échelle internationale." },
      { code: "12.5", text: "D’ici à 2030, réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation." },
      { code: "12.6", text: "Encourager les entreprises, en particulier les grandes entreprises et les sociétés transnationales, à adopter des pratiques durables et à intégrer dans les rapports qu’elles établissent des informations sur leur durabilité." },
      { code: "12.7", text: "Promouvoir des pratiques durables dans le cadre de la passation des marchés publics, conformément aux politiques et priorités nationales." },
      { code: "12.8", text: "D’ici à 2030, faire en sorte que toutes les personnes, partout dans le monde, aient les informations et connaissances nécessaires au développement durable et à un style de vie en harmonie avec la nature." },
      { code: "12.a", text: "Aider les pays en développement à se doter des moyens scientifiques et technologiques qui leur permettent d’évoluer vers des modes de consommation et de production plus durables." },
      { code: "12.b", text: "Mettre au point et utiliser des outils permettant de contrôler les effets du tourisme durable sur le développement durable, afin d’amplifier les effets bénéfiques du tourisme sur ce plan." },
      { code: "12.c", text: "Rationaliser les subventions aux combustibles fossiles qui sont préjudiciables en éliminant les distorsions du marché, en tenant compte du contexte national, y compris en réformant la fiscalité et en supprimant progressivement les subventions préjudiciables." }
    ]
  },
  {
    id: 13,
    title: "Mesures relatives à la lutte contre les changements climatiques",
    color: "#3F7E44",
    summary: "Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions.",
    targets: [
      { code: "13.1", text: "Renforcer, dans tous les pays, la résilience et les capacités d’adaptation face aux aléas climatiques et aux catastrophes naturelles liées au climat." },
      { code: "13.2", text: "Incorporer des mesures relatives aux changements climatiques dans les politiques, les stratégies et la planification nationales." },
      { code: "13.3", text: "Améliorer l’éducation, la sensibilisation et les capacités humaines et institutionnelles en ce qui concerne l’atténuation des changements climatiques, l’adaptation à ces changements, la réduction de leurs effets et l’alerte rapide." },
      { code: "13.a", text: "Mettre en œuvre l’engagement que les pays développés parties à la Convention-cadre des Nations Unies sur les changements climatiques ont pris de mobiliser ensemble 100 milliards de dollars par an d’ici à 2020." },
      { code: "13.b", text: "Promouvoir des mécanismes de renforcement des capacités afin que les pays les moins avancés et les petits États insulaires en développement se dotent de moyens efficaces de planification et de gestion face aux changements climatiques." }
    ]
  },
  {
    id: 14,
    title: "Vie aquatique",
    color: "#0A97D9",
    summary: "Conserver et exploiter de manière durable les océans, les mers et les ressources marines.",
    targets: [
      { code: "14.1", text: "D’ici à 2025, prévenir et réduire nettement la pollution marine de tous types, en particulier celle résultant des activités terrestres, y compris les déchets en mer et la pollution par les nutriments." },
      { code: "14.2", text: "D’ici à 2020, gérer et protéger durablement les écosystèmes marins et côtiers, notamment en renforçant leur résilience, afin d’éviter les graves conséquences de leur dégradation et prendre des mesures en faveur de leur restauration pour rétablir la santé et la productivité des océans." },
      { code: "14.3", text: "Réduire au maximum l’acidification des océans et lutter contre ses effets, notamment par le renforcement de la coopération scientifique à tous les niveaux." },
      { code: "14.4", text: "D’ici à 2020, réglementer efficacement la pêche, mettre fin à la surpêche, à la pêche illicite, non déclarée et non réglementée et aux pratiques de pêche destructrices et exécuter des plans de gestion fondés sur des données scientifiques." },
      { code: "14.5", text: "D’ici à 2020, préserver au moins 10 % des zones marines et côtières, conformément au droit national et international et compte tenu des meilleures informations scientifiques disponibles." },
      { code: "14.6", text: "D’ici à 2020, interdire les subventions à la pêche qui contribuent à la surcapacité et à la surpêche, supprimer celles qui favorisent la pêche illicite, non déclarée et non réglementée et s’abstenir d’en accorder de nouvelles de même nature." },
      { code: "14.7", text: "D’ici à 2030, faire bénéficier davantage les petits États insulaires en développement et les pays les moins avancés des retombées économiques de l’exploitation durable des ressources marines." },
      { code: "14.a", text: "Approfondir les connaissances scientifiques, renforcer les capacités de recherche et transférer les techniques marines, conformément aux critères et principes directeurs de la Commission océanographique intergouvernementale." },
      { code: "14.b", text: "Garantir aux petits pêcheurs artisanaux l’accès aux ressources marines et aux marchés." },
      { code: "14.c", text: "Améliorer la conservation et l’exploitation durable des océans et de leurs ressources par l’application du droit international, tel qu’il ressort de la Convention des Nations Unies sur le droit de la mer." }
    ]
  },
  {
    id: 15,
    title: "Vie terrestre",
    color: "#56C02B",
    summary: "Préserver et restaurer les écosystèmes terrestres, en veillant à les exploiter de façon durable.",
    targets: [
      { code: "15.1", text: "D’ici à 2020, garantir la préservation, la restauration et l’exploitation durable des écosystèmes terrestres et des écosystèmes d’eau douce et des services connexes, en particulier les forêts, les zones humides, les montagnes et les zones arides, conformément aux obligations découlant des accords internationaux." },
      { code: "15.2", text: "D’ici à 2020, promouvoir la gestion durable de tous les types de forêts, mettre un terme à la déforestation, restaurer les forêts dégradées et augmenter considérablement le boisement et le reboisement au niveau mondial." },
      { code: "15.3", text: "D’ici à 2030, lutter contre la désertification, restaurer les terres et sols dégradés, notamment les terres touchées par la désertification, la sécheresse et les inondations, et s’efforcer de parvenir à un monde sans dégradation des terres." },
      { code: "15.4", text: "D’ici à 2030, assurer la préservation des écosystèmes montagneux, notamment de leur biodiversité, afin de mieux tirer parti de leurs bienfaits essentiels pour le développement durable." },
      { code: "15.5", text: "Prendre d’urgence des mesures énergiques pour réduire la dégradation du milieu naturel, mettre un terme à l’appauvrissement de la biodiversité et, d’ici à 2020, protéger les espèces menacées et prévenir leur extinction." },
      { code: "15.6", text: "Favoriser le partage juste et équitable des bénéfices découlant de l’utilisation des ressources génétiques et promouvoir un accès approprié à celles-ci, ainsi que cela a été décidé à l’échelle internationale." },
      { code: "15.7", text: "Prendre d’urgence des mesures pour mettre un terme au braconnage et au trafic d’espèces végétales et animales protégées et s’attaquer au problème sous l’angle de l’offre et de la demande." },
      { code: "15.8", text: "D’ici à 2020, prendre des mesures pour empêcher l’introduction d’espèces exotiques envahissantes, atténuer sensiblement les effets que ces espèces ont sur les écosystèmes terrestres et aquatiques et contrôler ou éradiquer les espèces prioritaires." },
      { code: "15.9", text: "D’ici à 2020, intégrer la protection des écosystèmes et de la biodiversité dans la planification nationale, dans les mécanismes de développement, dans les stratégies et les budgets de réduction de la pauvreté." },
      { code: "15.a", text: "Mobiliser des ressources financières de toutes provenances et les augmenter nettement pour préserver la biodiversité et les écosystèmes et les exploiter durablement." },
      { code: "15.b", text: "Mobiliser d’importantes ressources de toutes provenances et à tous les niveaux pour financer la gestion durable des forêts et inciter les pays en développement à adopter ce type de gestion, notamment aux fins de la préservation des forêts et du reboisement." },
      { code: "15.c", text: "Apporter un soutien accru à la lutte contre le braconnage et le trafic d’espèces protégées, notamment en développant les moyens locaux leur permettant de saisir les débouchés qu’offre un tourisme durable." }
    ]
  },
  {
    id: 16,
    title: "Paix, justice et institutions efficaces",
    color: "#00689D",
    summary: "Promouvoir l’avènement de sociétés pacifiques et ouvertes à tous aux fins du développement durable.",
    targets: [
      { code: "16.1", text: "Réduire nettement, partout dans le monde, toutes les formes de violence et les taux de mortalité qui y sont associés." },
      { code: "16.2", text: "Mettre un terme à la maltraitance, à l’exploitation et à la traite, et à toutes les formes de violence et de torture dont sont victimes les enfants." },
      { code: "16.3", text: "Promouvoir l’état de droit dans l’ordre interne et international et garantir à tous un égal accès à la justice." },
      { code: "16.4", text: "D’ici à 2030, réduire nettement les flux financiers illicites et le trafic d’armes, renforcer les activités de récupération et de restitution des biens volés et lutter contre toutes les formes de criminalité organisée." },
      { code: "16.5", text: "Réduire nettement la corruption et les pots-de-vin sous toutes leurs formes." },
      { code: "16.6", text: "Mettre en place des institutions efficaces, responsables et transparentes à tous les niveaux." },
      { code: "16.7", text: "Faire en sorte que le dynamisme, l’ouverture, la participation et la représentation à tous les niveaux caractérisent la prise de décisions." },
      { code: "16.8", text: "Élargir et renforcer la participation des pays en développement aux institutions chargées de la gouvernance mondiale." },
      { code: "16.9", text: "D’ici à 2030, garantir à tous une identité juridique, notamment grâce à l’enregistrement des naissances." },
      { code: "16.10", text: "Garantir l’accès public à l’information et protéger les libertés fondamentales, conformément à la législation nationale et aux accords internationaux." },
      { code: "16.a", text: "Appuyer, notamment dans le cadre de la coopération internationale, les institutions nationales chargées de renforcer, à tous les niveaux, les capacités nécessaires pour prévenir la violence et lutter contre le terrorisme et la criminalité." },
      { code: "16.b", text: "Promouvoir et appliquer des lois et politiques non discriminatoires pour le développement durable." }
    ]
  },
  {
    id: 17,
    title: "Partenariats pour la réalisation des objectifs",
    color: "#19486A",
    summary: "Renforcer les moyens de mettre en œuvre le Partenariat mondial pour le développement durable et le revitaliser.",
    targets: [
      { code: "17.1", text: "Améliorer la mobilisation des ressources nationales, notamment par l’appui international aux pays en développement, pour renforcer les capacités nationales en matière de collecte de l’impôt et d’autres recettes." },
      { code: "17.2", text: "Les pays développés tiennent pleinement leurs engagements en matière d’aide publique au développement, et notamment l’engagement pris par nombre d’entre eux de consacrer 0,7 % de leur revenu national brut à l’aide aux pays en développement." },
      { code: "17.3", text: "Mobiliser des ressources financières supplémentaires de sources multiples en faveur des pays en développement." },
      { code: "17.4", text: "Aider les pays en développement à assurer la viabilité à long terme de leur dette au moyen de politiques coordonnées visant à favoriser le financement de la dette, son allégement ou sa restructuration, selon le cas." },
      { code: "17.5", text: "Adopter et mettre en œuvre des dispositifs tendant à encourager les investissements en faveur des pays les moins avancés." },
      { code: "17.6", text: "Renforcer l’accès à la science, la technologie et l’innovation et améliorer le partage des savoirs dans des conditions mutuellement convenues, notamment en améliorant la coordination entre les mécanismes existants." },
      { code: "17.7", text: "Promouvoir la mise au point, le transfert et la diffusion de technologies respectueuses de l’environnement en faveur des pays en développement, à des conditions favorables, notamment à des conditions de faveur et préférentielles." },
      { code: "17.8", text: "Rendre opérationnel, pour tout le monde, la Banque de technologies et le mécanisme de renforcement des capacités scientifiques et technologiques et des capacités d’innovation des pays les moins avancés d’ici à 2017." },
      { code: "17.9", text: "Renforcer le soutien international à l’exécution de programmes efficaces et ciblés de renforcement des capacités dans les pays en développement afin d’appuyer les plans nationaux visant à atteindre tous les objectifs de développement durable." },
      { code: "17.10", text: "Promouvoir un système commercial multilatéral universel, réglementé, ouvert, non discriminatoire et équitable sous l’égide de l’Organisation mondiale du commerce." },
      { code: "17.11", text: "Accroître nettement les exportations des pays en développement, en particulier en vue de doubler la part des pays les moins avancés dans les exportations mondiales d’ici à 2020." },
      { code: "17.12", text: "Concrétiser rapidement l’accès aux marchés en franchise de droits et sans contingent, de manière durable, pour tous les pays les moins avancés, conformément aux décisions de l’Organisation mondiale du commerce." },
      { code: "17.13", text: "Renforcer la stabilité macroéconomique mondiale, notamment par la coordination et la cohérence des politiques." },
      { code: "17.14", text: "Renforcer la cohérence des politiques de développement durable." },
      { code: "17.15", text: "Respecter la marge de manœuvre de chaque pays en ce qui concerne l’élaboration et la mise en œuvre des politiques d’élimination de la pauvreté et de développement durable." },
      { code: "17.16", text: "Renforcer le Partenariat mondial pour le développement durable, associé à des partenariats multipartites qui mobilisent et partagent des connaissances, des ressources spécialisées, des technologies et des ressources financières." },
      { code: "17.17", text: "Encourager et promouvoir les partenariats publics, public-privé et avec la société civile qui sont efficaces, grâce à l’expérience et aux stratégies de ressources des partenariats." },
      { code: "17.18", text: "D’ici à 2020, apporter un soutien accru au renforcement des capacités des pays en développement, notamment des pays les moins avancés et des petits États insulaires en développement, en vue de disposer d’un beaucoup plus grand nombre de données de qualité, actualisées et exactes." },
      { code: "17.19", text: "D’ici à 2030, tirer parti des initiatives existantes pour établir des indicateurs de progrès en matière de développement durable qui viendraient compléter le produit intérieur brut, et appuyer le renforcement des capacités statistiques des pays en développement." }
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

      card.innerHTML = `
        <span class="oddtarget-code">${target.code}</span>
        <p class="oddtarget-text">${target.text}</p>
      `;

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