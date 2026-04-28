// ========== DONNÉES DES ODD ==========

const oddData = [
  { name: "Éradication de la pauvreté", description: "Éliminer la pauvreté sous toutes ses formes et partout dans le monde, en garantissant à tous un niveau de vie décent.", color: "#e5243b", icon: "🏠" },
  { name: "Faim Zéro", description: "Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir une agriculture durable.", color: "#dda63a", icon: "🌾" },
  { name: "Bonne santé et bien-être", description: "Garantir une vie saine et promouvoir le bien-être de tous à tout âge avec un accès universel aux soins de santé.", color: "#4c9f38", icon: "❤️" },
  { name: "Éducation de qualité", description: "Assurer une éducation inclusive, équitable et de qualité, et promouvoir des opportunités d'apprentissage pour tous.", color: "#c5192d", icon: "📚" },
  { name: "Égalité entre les sexes", description: "Parvenir à l'égalité des sexes et autonomiser toutes les femmes et les filles dans tous les domaines.", color: "#ff3a21", icon: "⚖️" },
  { name: "Eau propre et assainissement", description: "Garantir l'accès universel à l'eau potable et à l'assainissement, et assurer une gestion durable des ressources en eau.", color: "#26bde2", icon: "💧" },
  { name: "Énergie propre et d'un coût abordable", description: "Garantir l'accès à une énergie abordable, fiable, durable et moderne pour tous, en favorisant les énergies renouvelables.", color: "#fcc30b", icon: "⚡" },
  { name: "Travail décent et croissance économique", description: "Promouvoir une croissance économique soutenue, inclusive et durable, le plein emploi productif et un travail décent pour tous.", color: "#a21942", icon: "💼" },
  { name: "Industrie, innovation et infrastructure", description: "Bâtir des infrastructures résilientes, promouvoir une industrialisation durable et favoriser l'innovation technologique.", color: "#fd6925", icon: "🏭" },
  { name: "Inégalités réduites", description: "Réduire les inégalités dans les pays et d'un pays à l'autre, garantir l'égalité des chances pour tous.", color: "#dd1367", icon: "🤝" },
  { name: "Villes et communautés durables", description: "Faire en sorte que les villes et les établissements humains soient ouverts, sûrs, résilients et durables.", color: "#fd9d24", icon: "🏙️" },
  { name: "Consommation et production responsables", description: "Établir des modes de consommation et de production durables, réduire le gaspillage et promouvoir l'économie circulaire.", color: "#bf8b2e", icon: "♻️" },
  { name: "Mesures relatives à la lutte contre les changements climatiques", description: "Prendre d'urgence des mesures pour lutter contre les changements climatiques et leurs répercussions sur la planète.", color: "#3f7e44", icon: "🌍" },
  { name: "Vie aquatique", description: "Conserver et exploiter de manière durable les océans, les mers et les ressources marines pour le développement durable.", color: "#0a97d9", icon: "🐠" },
  { name: "Vie terrestre", description: "Protéger, restaurer et promouvoir l'utilisation durable des écosystèmes terrestres, gérer durablement les forêts et lutter contre la désertification.", color: "#56c02b", icon: "🌳" },
  { name: "Paix, justice et institutions efficaces", description: "Promouvoir des sociétés pacifiques et inclusives, assurer l'accès à la justice pour tous et mettre en place des institutions efficaces.", color: "#00689d", icon: "⚖️" },
  { name: "Partenariats pour la réalisation des objectifs", description: "Renforcer les moyens de mise en œuvre et revitaliser le partenariat mondial pour le développement durable.", color: "#19486a", icon: "🌐" }
];

let currentActiveOdd = 1;
const totalOdds = oddData.length;
const degreesPerSection = 360 / totalOdds;

// ========== INITIALISATION AU CHARGEMENT PAGE ==========

document.addEventListener('DOMContentLoaded', function() {
  animateStats();
  loadQuestion();
  initShareButtons();
  resetProgress();
  initOddWheel();
});

// ========== CRÉATION DE LA ROUE DES ODD ==========

function initOddWheel() {
  const svg = document.querySelector('.odd-circle');
  const radius = 190;
  const innerRadius = 80;

  oddData.forEach((odd, index) => {
    const oddNumber = index + 1;
    const startAngle = (index * degreesPerSection) - 90; // Commencer en haut
    const endAngle = ((index + 1) * degreesPerSection) - 90;

    // Créer la section (path SVG)
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = 200 + innerRadius * Math.cos(startRad);
    const y1 = 200 + innerRadius * Math.sin(startRad);
    const x2 = 200 + radius * Math.cos(startRad);
    const y2 = 200 + radius * Math.sin(startRad);
    const x3 = 200 + radius * Math.cos(endRad);
    const y3 = 200 + radius * Math.sin(endRad);
    const x4 = 200 + innerRadius * Math.cos(endRad);
    const y4 = 200 + innerRadius * Math.sin(endRad);

    const largeArc = degreesPerSection > 180 ? 1 : 0;

    const pathData = `
      M ${x1} ${y1}
      L ${x2} ${y2}
      A ${radius} ${radius} 0 ${largeArc} 1 ${x3} ${y3}
      L ${x4} ${y4}
      A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}
      Z
    `;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('class', `odd-section ${oddNumber === 1 ? 'active' : ''}`);
    path.setAttribute('data-odd', oddNumber);
    path.setAttribute('fill', odd.color);
    path.addEventListener('click', () => selectOdd(oddNumber));

    svg.appendChild(path);

    // Ajouter le numéro dans la section
    const midAngle = (startAngle + endAngle) / 2;
    const midRad = (midAngle * Math.PI) / 180;
    const labelRadius = (innerRadius + radius) / 2;
    const textX = 200 + labelRadius * Math.cos(midRad);
    const textY = 200 + labelRadius * Math.sin(midRad) + 4;

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', textX);
    text.setAttribute('y', textY);
    text.setAttribute('class', 'section-label');
    text.textContent = oddNumber;

    svg.appendChild(text);
  });

  // Initialisez avec le premier ODD
  selectOdd(1);
}

// ========== SÉLECTION D'UN ODD ==========

function selectOdd(oddNumber) {
  currentActiveOdd = oddNumber;
  const oddIndex = oddNumber - 1;
  const oddInfo = oddData[oddIndex];

  // Mets à jour les sections actives
  document.querySelectorAll('.odd-section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelector(`.odd-section[data-odd="${oddNumber}"]`).classList.add('active');

  // Mets à jour le centre
  const wheelOddNumber = document.getElementById('wheelOddNumber');
  wheelOddNumber.textContent = oddNumber;
  wheelOddNumber.style.color = oddInfo.color;
  document.getElementById('wheelOddTitle').textContent = oddInfo.name;

  // Mets à jour la description
  document.getElementById('wheelDescription').textContent = oddInfo.description;

  // Ajoute à la progression
  discoveredOdds.add(String(oddNumber));
  updateProgress();
}

// ========== DONNÉES DU QUIZ ==========

const quizQuestions = [
  {
    question: "Quel ODD concerne l'éradication de la pauvreté ?",
    options: ["ODD 1", "ODD 8", "ODD 10", "ODD 17"],
    correct: 0
  },
  {
    question: "Quel objectif vise à éliminer la faim dans le monde ?",
    options: ["ODD 1", "ODD 2", "ODD 3", "ODD 12"],
    correct: 1
  },
  {
    question: "L'ODD 4 concerne quel domaine ?",
    options: ["La santé", "L'éducation", "L'eau", "L'énergie"],
    correct: 1
  },
  {
    question: "Quel ODD traite de l'égalité entre les sexes ?",
    options: ["ODD 3", "ODD 5", "ODD 10", "ODD 16"],
    correct: 1
  },
  {
    question: "L'accès à l'eau potable est l'objectif numéro...",
    options: ["ODD 3", "ODD 6", "ODD 7", "ODD 14"],
    correct: 1
  },
  {
    question: "Quel ODD concerne les énergies renouvelables ?",
    options: ["ODD 7", "ODD 9", "ODD 12", "ODD 13"],
    correct: 0
  },
  {
    question: "L'ODD 13 traite de quel sujet majeur ?",
    options: ["La biodiversité", "Les océans", "Le changement climatique", "Les villes durables"],
    correct: 2
  },
  {
    question: "Combien d'objectifs de développement durable existe-t-il ?",
    options: ["15", "17", "20", "25"],
    correct: 1
  },
  {
    question: "Quelle est l'année cible pour atteindre les ODD ?",
    options: ["2025", "2030", "2040", "2050"],
    correct: 1
  },
  {
    question: "L'ODD 14 concerne la protection de...",
    options: ["La faune terrestre", "La vie aquatique", "Les forêts", "L'atmosphère"],
    correct: 1
  },
  {
    question: "Quel ODD vise des villes et communautés durables ?",
    options: ["ODD 9", "ODD 10", "ODD 11", "ODD 12"],
    correct: 2
  },
  {
    question: "L'ODD 16 concerne...",
    options: ["L'innovation", "Les partenariats", "La paix et la justice", "La consommation responsable"],
    correct: 2
  },
  {
    question: "Combien de pays ont adopté les ODD en 2015 ?",
    options: ["150", "175", "193", "210"],
    correct: 2
  },
  {
    question: "L'ODD 17 traite de...",
    options: ["L'industrie", "Les partenariats", "L'innovation", "La justice"],
    correct: 1
  },
  {
    question: "Quel ODD vise une consommation responsable ?",
    options: ["ODD 8", "ODD 9", "ODD 12", "ODD 15"],
    correct: 2
  }
];

// ========== ÉTAT DU JEU ==========

let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let score = 0;
let answeredQuestions = new Set();

const discoveredOdds = new Set();

// ========== ANIMATIONS DES STATS ==========

function animateStats() {
  const stats = document.querySelectorAll('.stat-number');

  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        stat.textContent = target;
        clearInterval(timer);
      } else {
        stat.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// ========== BARRE DE PROGRESSION ==========

function updateProgress() {
  const progressBar = document.getElementById('learningProgress');
  const progressCount = document.getElementById('progressCount');
  const percentage = (discoveredOdds.size / 17) * 100;

  progressBar.style.width = percentage + '%';
  progressCount.textContent = discoveredOdds.size;
}

function resetProgress() {
  const progressBar = document.getElementById('learningProgress');
  progressBar.style.width = '0%';
}

// ========== SYSTÈME DE QUIZ ==========

function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    currentQuestionIndex = 0;
  }

  const question = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById('questionText');
  const quizOptions = document.getElementById('quizOptions');
  const feedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('nextQuestionBtn');

  questionText.textContent = question.question;
  quizOptions.innerHTML = '';
  feedback.style.display = 'none';
  nextBtn.style.display = 'none';

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'quiz-option';
    optionDiv.textContent = option;
    optionDiv.addEventListener('click', () => handleAnswer(index));
    quizOptions.appendChild(optionDiv);
  });
}

function handleAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('nextQuestionBtn');

  // Désactiver toutes les options
  options.forEach(opt => opt.classList.add('disabled'));

  if (selectedIndex === question.correct) {
    // Bonne réponse
    options[selectedIndex].classList.add('correct');
    correctCount++;
    score += 10;
    feedback.textContent = '🎉 Excellent ! Bonne réponse ! (+10 points)';
    feedback.style.background = 'rgba(76, 175, 80, 0.3)';
  } else {
    // Mauvaise réponse
    options[selectedIndex].classList.add('incorrect');
    options[question.correct].classList.add('correct');
    wrongCount++;
    score = Math.max(0, score - 5);
    feedback.textContent = '❌ Dommage ! La bonne réponse était : ' + question.options[question.correct] + ' (-5 points)';
    feedback.style.background = 'rgba(244, 67, 54, 0.3)';
  }

  feedback.style.display = 'block';
  nextBtn.style.display = 'block';

  // Mettre à jour les statistiques
  document.getElementById('correctAnswers').textContent = correctCount;
  document.getElementById('wrongAnswers').textContent = wrongCount;
  document.getElementById('quizScore').textContent = score;

  answeredQuestions.add(currentQuestionIndex);
}

function nextQuestion() {
  currentQuestionIndex++;
  loadQuestion();
}

// ========== PARTAGE SOCIAL ==========

function initShareButtons() {
  document.getElementById('shareFacebook')?.addEventListener('click', shareOnFacebook);
  document.getElementById('shareWhatsapp')?.addEventListener('click', shareOnWhatsApp);
  document.getElementById('shareTwitter')?.addEventListener('click', shareOnTwitter);
  document.getElementById('nextQuestionBtn')?.addEventListener('click', nextQuestion);
}

function shareOnFacebook() {
  const text = `🎯 J'ai découvert ${discoveredOdds.size}/17 ODD et j'ai ${score} points au quiz sur les Objectifs de Développement Durable ! 🌍 Rejoignez-moi pour un monde meilleur ! #ODD #DéveloppementDurable #ODD2030`;
  const url = encodeURIComponent(window.location.href);

  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');

  // Copier le texte dans le presse-papier
  navigator.clipboard.writeText(text).then(() => {
    alert('✅ Texte copié ! Vous pouvez le coller dans votre publication Facebook.');
  }).catch(() => {
    prompt('Copiez ce texte pour votre publication :', text);
  });
}

function shareOnWhatsApp() {
  const text = `🎯 J'ai découvert ${discoveredOdds.size}/17 ODD et j'ai ${score} points au quiz sur les Objectifs de Développement Durable ! 🌍\n\nRejoingnez-moi pour apprendre et agir : ${window.location.href}\n\n#ODD #DéveloppementDurable #ODD2030`;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    window.open(`whatsapp://send?text=${encodeURIComponent(text)}`, '_blank');
  } else {
    window.open(`https://web.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'width=800,height=600');
  }
}

function shareOnTwitter() {
  const text = `🎯 J'ai découvert ${discoveredOdds.size}/17 ODD et j'ai ${score} points au quiz ! 🌍 Apprenez-en plus sur les Objectifs de Développement Durable !`;
  const hashtags = 'ODD,DéveloppementDurable,ODD2030';
  const url = encodeURIComponent(window.location.href);

  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}&hashtags=${hashtags}`, '_blank', 'width=600,height=400');
}
