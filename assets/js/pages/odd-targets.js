const oddTargetsData = [
  {
    id: 1,
    title: "Pas de pauvreté",
    color: "#E5243B",
    summary: "Éliminer la pauvreté sous toutes ses formes et partout dans le monde.",
    targets: [
      { code: "1.1", text: "D’ici à 2030, éliminer complètement l’extrême pauvreté dans le monde entier." },
      { code: "1.2", text: "Réduire de moitié au moins la proportion d’hommes, de femmes et d’enfants vivant dans la pauvreté sous toutes ses formes." },
      { code: "1.3", text: "Mettre en place des systèmes et mesures de protection sociale pour tous." },
      { code: "1.4", text: "Faire en sorte que tous les hommes et les femmes aient les mêmes droits aux ressources économiques et aux services de base." }
    ]
  },
  {
    id: 2,
    title: "Faim zéro",
    color: "#DDA63A",
    summary: "Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir une agriculture durable.",
    targets: [
      { code: "2.1", text: "D’ici à 2030, éliminer la faim et faire en sorte que chacun ait accès toute l’année à une alimentation saine, nutritive et suffisante." },
      { code: "2.2", text: "Mettre fin à toutes les formes de malnutrition." },
      { code: "2.3", text: "Doubler la productivité agricole et les revenus des petits producteurs alimentaires." }
    ]
  },
  {
    id: 3,
    title: "Bonne santé et bien-être",
    color: "#4C9F38",
    summary: "Permettre à tous de vivre en bonne santé et promouvoir le bien-être de tous à tout âge.",
    targets: [
      { code: "3.1", text: "Réduire le taux mondial de mortalité maternelle." },
      { code: "3.2", text: "Mettre fin aux décès évitables de nouveau-nés et d’enfants de moins de 5 ans." },
      { code: "3.3", text: "Mettre fin aux épidémies de sida, de tuberculose, de paludisme et de maladies tropicales négligées." },
      { code: "3.8", text: "Faire en sorte que chacun bénéficie d’une couverture sanitaire universelle." }
    ]
  },
  {
    id: 4,
    title: "Éducation de qualité",
    color: "#C5192D",
    summary: "Assurer l’accès de tous à une éducation de qualité, sur un pied d’égalité, et promouvoir les possibilités d’apprentissage tout au long de la vie.",
    targets: [
      { code: "4.1", text: "Faire en sorte que toutes les filles et tous les garçons suivent un cycle complet d’enseignement primaire et secondaire gratuit et de qualité." },
      { code: "4.2", text: "Faire en sorte que toutes les filles et tous les garçons aient accès à des activités de développement et de soins de la petite enfance." },
      { code: "4.3", text: "Assurer l’égalité d’accès de toutes les femmes et de tous les hommes à un enseignement technique, professionnel ou tertiaire de qualité." },
      { code: "4.4", text: "Augmenter considérablement le nombre de jeunes et d’adultes disposant des compétences nécessaires à l’emploi." }
    ]
  },
  {
    id: 5,
    title: "Égalité entre les sexes",
    color: "#FF3A21",
    summary: "Parvenir à l’égalité des sexes et autonomiser toutes les femmes et les filles.",
    targets: [
      { code: "5.1", text: "Mettre fin, dans le monde entier, à toutes les formes de discrimination à l’égard des femmes et des filles." },
      { code: "5.2", text: "Éliminer toutes les formes de violence faites aux femmes et aux filles." },
      { code: "5.5", text: "Garantir la pleine participation des femmes aux fonctions de direction." }
    ]
  },
  {
    id: 6,
    title: "Eau propre et assainissement",
    color: "#26BDE2",
    summary: "Garantir l’accès de tous à l’eau et à l’assainissement et assurer une gestion durable des ressources en eau.",
    targets: [
      { code: "6.1", text: "Assurer l’accès universel et équitable à l’eau potable, à un coût abordable." },
      { code: "6.2", text: "Assurer l’accès de tous à des services d’assainissement et d’hygiène adéquats." },
      { code: "6.3", text: "Améliorer la qualité de l’eau en réduisant la pollution." }
    ]
  },
  {
    id: 7,
    title: "Énergie propre et d’un coût abordable",
    color: "#FCC30B",
    summary: "Garantir l’accès de tous à des services énergétiques fiables, durables et modernes, à un coût abordable.",
    targets: [
      { code: "7.1", text: "Garantir l’accès de tous à des services énergétiques fiables et modernes, à un coût abordable." },
      { code: "7.2", text: "Accroître nettement la part de l’énergie renouvelable dans le bouquet énergétique mondial." },
      { code: "7.3", text: "Multiplier par deux le taux mondial d’amélioration de l’efficacité énergétique." }
    ]
  },
  {
    id: 8,
    title: "Travail décent et croissance économique",
    color: "#A21942",
    summary: "Promouvoir une croissance économique soutenue, partagée et durable, le plein emploi productif et un travail décent pour tous.",
    targets: [
      { code: "8.3", text: "Promouvoir des politiques axées sur le développement qui favorisent les activités productives et la création d’emplois décents." },
      { code: "8.5", text: "Parvenir au plein emploi productif et garantir un travail décent pour toutes les femmes et tous les hommes." },
      { code: "8.6", text: "Réduire nettement la proportion de jeunes non scolarisés et sans emploi." }
    ]
  },
  {
    id: 9,
    title: "Industrie, innovation et infrastructure",
    color: "#FD6925",
    summary: "Bâtir une infrastructure résiliente, promouvoir une industrialisation durable qui profite à tous et encourager l’innovation.",
    targets: [
      { code: "9.1", text: "Mettre en place une infrastructure de qualité, fiable, durable et résiliente." },
      { code: "9.2", text: "Promouvoir une industrialisation durable qui profite à tous." },
      { code: "9.5", text: "Renforcer la recherche scientifique et les capacités technologiques des secteurs industriels." }
    ]
  },
  {
    id: 10,
    title: "Inégalités réduites",
    color: "#DD1367",
    summary: "Réduire les inégalités dans les pays et d’un pays à l’autre.",
    targets: [
      { code: "10.1", text: "Faire en sorte que les revenus des 40 % les plus pauvres augmentent plus rapidement que le revenu moyen national." },
      { code: "10.2", text: "Autonomiser toutes les personnes et favoriser leur intégration sociale, économique et politique." },
      { code: "10.3", text: "Assurer l’égalité des chances et réduire l’inégalité des résultats." }
    ]
  },
  {
    id: 11,
    title: "Villes et communautés durables",
    color: "#FD9D24",
    summary: "Faire en sorte que les villes et les établissements humains soient ouverts à tous, sûrs, résilients et durables.",
    targets: [
      { code: "11.1", text: "Assurer l’accès de tous à un logement et des services de base adéquats, sûrs et abordables." },
      { code: "11.2", text: "Assurer l’accès de tous à des systèmes de transport sûrs, accessibles et viables." },
      { code: "11.6", text: "Réduire l’impact environnemental négatif des villes, notamment en accordant une attention particulière à la qualité de l’air." }
    ]
  },
  {
    id: 12,
    title: "Consommation et production responsables",
    color: "#BF8B2E",
    summary: "Établir des modes de consommation et de production durables.",
    targets: [
      { code: "12.2", text: "Parvenir à une gestion durable et à une utilisation rationnelle des ressources naturelles." },
      { code: "12.3", text: "Réduire de moitié à l’échelle mondiale le volume de déchets alimentaires par habitant." },
      { code: "12.5", text: "Réduire considérablement la production de déchets par la prévention, la réduction, le recyclage et la réutilisation." }
    ]
  },
  {
    id: 13,
    title: "Mesures relatives à la lutte contre les changements climatiques",
    color: "#3F7E44",
    summary: "Prendre d’urgence des mesures pour lutter contre les changements climatiques et leurs répercussions.",
    targets: [
      { code: "13.1", text: "Renforcer la résilience et les capacités d’adaptation face aux aléas climatiques." },
      { code: "13.2", text: "Incorporer des mesures relatives aux changements climatiques dans les politiques et stratégies nationales." },
      { code: "13.3", text: "Améliorer l’éducation, la sensibilisation et les capacités humaines face aux changements climatiques." }
    ]
  },
  {
    id: 14,
    title: "Vie aquatique",
    color: "#0A97D9",
    summary: "Conserver et exploiter de manière durable les océans, les mers et les ressources marines.",
    targets: [
      { code: "14.1", text: "Prévenir et réduire nettement la pollution marine de tous types." },
      { code: "14.2", text: "Gérer et protéger durablement les écosystèmes marins et côtiers." },
      { code: "14.5", text: "Préserver au moins 10 % des zones marines et côtières." }
    ]
  },
  {
    id: 15,
    title: "Vie terrestre",
    color: "#56C02B",
    summary: "Préserver et restaurer les écosystèmes terrestres, en veillant à les exploiter de façon durable.",
    targets: [
      { code: "15.1", text: "Garantir la préservation, la restauration et l’exploitation durable des écosystèmes terrestres et des écosystèmes d’eau douce." },
      { code: "15.2", text: "Promouvoir la gestion durable de tous les types de forêts." },
      { code: "15.5", text: "Prendre d’urgence des mesures pour mettre un terme à l’appauvrissement de la biodiversité." }
    ]
  },
  {
    id: 16,
    title: "Paix, justice et institutions efficaces",
    color: "#00689D",
    summary: "Promouvoir l’avènement de sociétés pacifiques et ouvertes à tous aux fins du développement durable.",
    targets: [
      { code: "16.1", text: "Réduire nettement, partout dans le monde, toutes les formes de violence." },
      { code: "16.3", text: "Promouvoir l’état de droit et garantir à tous un égal accès à la justice." },
      { code: "16.6", text: "Mettre en place des institutions efficaces, responsables et transparentes." }
    ]
  },
  {
    id: 17,
    title: "Partenariats pour la réalisation des objectifs",
    color: "#19486A",
    summary: "Renforcer les moyens de mettre en œuvre le Partenariat mondial pour le développement durable et le revitaliser.",
    targets: [
      { code: "17.1", text: "Améliorer la mobilisation de ressources nationales." },
      { code: "17.6", text: "Renforcer la coopération régionale et internationale dans les domaines de la science, de la technologie et de l’innovation." },
      { code: "17.17", text: "Encourager et promouvoir les partenariats efficaces entre acteurs publics, public-privé et société civile." }
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