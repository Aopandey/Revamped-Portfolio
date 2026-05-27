const projects = [
  {
    id: "icml",
    title: "ICML 2024 Research Paper Analyzer",
    type: "Personal Project / LLM-RAG Pipeline",
    dates: "Jul 2024 - Nov 2024",
    categories: ["LLM/RAG", "Data Engineering", "Research"],
    summary:
      "An end-to-end AI pipeline for collecting, parsing, retrieving, summarizing, and analyzing 2,600+ ICML 2024 research papers.",
    problem:
      "Researchers, founders, and technical readers need a faster way to explore dense AI conference proceedings by topic, author, institution, and trend.",
    built:
      "Collected and parsed ICML papers, indexed content with FAISS and ChromaDB, used Gemini 1.5 Flash for summarization and classification, and built dashboard views for exploration.",
    details: [
      "Used PDF extraction and preprocessing to prepare a large research corpus.",
      "Implemented retrieval workflows with FAISS and ChromaDB.",
      "Used LangChain metadata filtering for topic, author, institution, and research-area analysis.",
      "Built dashboards to surface research trends, top contributors, and major topic areas.",
      "Designed the system for non-technical users exploring AI research trends and startup opportunities."
    ],
    stack: [
      "Python",
      "LangChain",
      "Gemini API",
      "FAISS",
      "ChromaDB",
      "PyMuPDF",
      "Pandas",
      "Streamlit",
      "Data Visualization"
    ],
    links: []
  },
  {
    id: "mutual-learning",
    title: "Mutual Learning Algorithm for News Classification",
    type: "Capstone Project / NLP / Machine Learning",
    dates: "Aug 2024 - Dec 2024",
    categories: ["Machine Learning", "NLP"],
    summary:
      "A semi-supervised NLP system where heterogeneous models co-teach each other using labeled and unlabeled news data.",
    problem:
      "News classification models often have limited labeled data, and pseudo-labeling can either help or reinforce bad predictions.",
    built:
      "Implemented mutual learning across Naive Bayes, SVM, and MLP models with NLP preprocessing and metric-based comparisons.",
    details: [
      "Models iteratively trained on labeled splits and pseudo-labeled unlabeled news data.",
      "Built preprocessing with tokenization, stop-word removal, stemming, and lemmatization.",
      "Evaluated accuracy, precision, recall, and F1.",
      "Compared teacher-student pairings to understand when pseudo-labeling helps or hurts."
    ],
    stack: [
      "Python",
      "scikit-learn",
      "NLP",
      "NumPy",
      "Pandas",
      "Classification",
      "Semi-supervised Learning"
    ],
    links: []
  },
  {
    id: "diabetes",
    title: "AI-Driven Diabetes Prediction Pipeline",
    type: "Machine Learning Pipeline",
    dates: "Aug 2024 - Nov 2024",
    categories: ["Machine Learning", "Data Engineering"],
    summary:
      "A supervised ML pipeline for diabetes prediction using a public Kaggle dataset with screening-oriented evaluation.",
    problem:
      "In a screening context, model evaluation needs to look beyond accuracy and pay attention to recall, ROC-AUC, and signal interpretability.",
    built:
      "Cleaned a 100,000-sample dataset, handled imbalance with SMOTE and SMOTE-Tomek, benchmarked classical and neural models, and analyzed feature signals.",
    details: [
      "Performed EDA, outlier handling, categorical encoding, and class rebalancing.",
      "Benchmarked Decision Tree, Random Forest, SVM, and MLP models.",
      "Emphasized recall and ROC-AUC for screening usefulness.",
      "Used diagnostics to identify HbA1c and blood glucose as key signals."
    ],
    stack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "SciPy",
      "SMOTE",
      "MLP",
      "Random Forest"
    ],
    links: []
  },
  {
    id: "bushels",
    title: "Counts of Bushels Project",
    type: "SQL / Data Analytics",
    dates: "Aug 2023 - Oct 2023",
    categories: ["Data Engineering"],
    summary:
      "A relational database and SQL analytics project for corn and soybean yield data.",
    problem:
      "Agronomic yield analysis needs clean relational structure, documented assumptions, and reusable queries across regions and time windows.",
    built:
      "Designed a normalized schema, loaded representative records, validated integrity, and created a reusable SQL query suite.",
    details: [
      "Designed normalized relational schema for corn and soybean yield data.",
      "Loaded representative records and validated integrity with analytical SQL queries.",
      "Created reusable query suite for yield, region, and time-window analysis.",
      "Documented assumptions, constraints, and edge cases."
    ],
    stack: ["SQL", "SQL Server 2022", "Relational Databases", "Data Modeling", "Analytics"],
    links: []
  }
];

const skillGroups = [
  {
    group: "Languages",
    skills: ["Python", "SQL", "Java", "R"]
  },
  {
    group: "AI/ML",
    skills: ["PyTorch", "scikit-learn", "XGBoost", "Hugging Face Transformers", "NumPy", "Pandas", "SciPy"]
  },
  {
    group: "LLM & RAG Systems",
    skills: [
      "LangChain",
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "FAISS",
      "ChromaDB",
      "Prompt Engineering",
      "Retrieval-Augmented Generation"
    ]
  },
  {
    group: "Data & MLOps",
    skills: ["PySpark", "Docker", "Kubernetes", "AWS EC2", "AWS S3", "AWS Lambda", "MLflow", "SQL Server", "Git/GitHub"]
  },
  {
    group: "Visualization & Apps",
    skills: ["Streamlit", "Tableau", "Power BI", "Matplotlib"]
  },
  {
    group: "AI Development Tools",
    skills: ["Cursor", "Claude Code", "GitHub Copilot", "ChatGPT"]
  }
];

const skillMap = {
  Python: ["icml", "mutual-learning", "diabetes"],
  SQL: ["bushels"],
  "SQL Server": ["bushels"],
  "SQL Server 2022": ["bushels"],
  "scikit-learn": ["mutual-learning", "diabetes"],
  NumPy: ["mutual-learning", "diabetes"],
  Pandas: ["icml", "mutual-learning", "diabetes"],
  SciPy: ["diabetes"],
  LangChain: ["icml"],
  "OpenAI API": [],
  "Gemini API": ["icml"],
  "Claude API": [],
  FAISS: ["icml"],
  ChromaDB: ["icml"],
  "Retrieval-Augmented Generation": ["icml"],
  "Prompt Engineering": ["icml"],
  Streamlit: ["icml"],
  Tableau: [],
  "Power BI": [],
  Docker: [],
  Kubernetes: [],
  MLflow: [],
  "Git/GitHub": ["icml", "mutual-learning", "diabetes", "bushels"],
  PyTorch: [],
  XGBoost: [],
  "Hugging Face Transformers": [],
  PySpark: [],
  "AWS EC2": [],
  "AWS S3": [],
  "AWS Lambda": [],
  Java: [],
  R: [],
  Matplotlib: ["diabetes"],
  Cursor: [],
  "Claude Code": [],
  "GitHub Copilot": [],
  ChatGPT: []
};

const categories = ["All", "LLM/RAG", "Machine Learning", "Data Engineering", "NLP"];

const dom = {
  header: document.querySelector("[data-header]"),
  navToggle: document.querySelector("[data-nav-toggle]"),
  navLinks: document.querySelector("[data-nav-links]"),
  themeToggle: document.querySelector("[data-theme-toggle]"),
  filters: document.querySelector("[data-filters]"),
  projectGrid: document.querySelector("[data-project-grid]"),
  skills: document.querySelector("[data-skills]"),
  skillPanel: document.querySelector("[data-skill-panel]"),
  dialog: document.querySelector("[data-dialog]"),
  dialogContent: document.querySelector("[data-dialog-content]"),
  dialogClose: document.querySelector("[data-dialog-close]")
};

let activeFilter = "All";
let activeSkill = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectById(id) {
  return projects.find((project) => project.id === id);
}

function renderFilters() {
  dom.filters.innerHTML = categories
    .map(
      (category) => `
        <button class="filter-button ${category === activeFilter ? "is-active" : ""}" type="button" data-filter="${escapeHtml(category)}">
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");
}

function renderProjects() {
  const filtered = projects.filter((project) => activeFilter === "All" || project.categories.includes(activeFilter));
  const relatedIds = activeSkill ? skillMap[activeSkill] || [] : [];

  dom.projectGrid.innerHTML = filtered
    .map((project) => {
      const isRelated = relatedIds.includes(project.id);
      const shouldDim = activeSkill && relatedIds.length > 0 && !isRelated;
      const highlightClass = isRelated ? "is-highlighted" : "";
      const dimClass = shouldDim ? "is-dimmed" : "";
      return `
        <article class="project-card ${highlightClass} ${dimClass}" data-project-card="${escapeHtml(project.id)}">
          <div class="project-meta">
            <span>${escapeHtml(project.type)}</span>
            <span>${escapeHtml(project.dates)}</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <div class="tag-row">
            ${project.stack.slice(0, 7).map((tech) => `<span class="tech-badge">${escapeHtml(tech)}</span>`).join("")}
          </div>
          <div class="project-footer">
            <button class="text-button" type="button" data-project-details="${escapeHtml(project.id)}">View Details</button>
            ${project.links
              .map((link) => `<a class="text-button" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderSkills() {
  dom.skills.innerHTML = skillGroups
    .map(
      (group) => `
        <section class="skill-group">
          <h3>${escapeHtml(group.group)}</h3>
          <div class="skill-buttons">
            ${group.skills
              .map(
                (skill) => `
                  <button class="skill-button ${skill === activeSkill ? "is-active" : ""}" type="button" data-skill="${escapeHtml(skill)}">
                    ${escapeHtml(skill)}
                  </button>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function renderSkillPanel(skill) {
  if (!skill) {
    dom.skillPanel.innerHTML = `
      <p class="status-kicker">Skill map</p>
      <h3>Select a skill</h3>
      <p>Choose a badge to highlight related projects and experience. This is meant to make the stack scannable without turning the page into a keyword wall.</p>
    `;
    return;
  }

  const related = (skillMap[skill] || []).map(projectById).filter(Boolean);
  const relatedMarkup = related.length
    ? `<ul>${related.map((project) => `<li>${escapeHtml(project.title)}</li>`).join("")}</ul>`
    : "<p>This skill is part of the broader toolkit listed on the resume; no specific project card is pinned to it yet.</p>";

  dom.skillPanel.innerHTML = `
    <p class="status-kicker">Selected Skill</p>
    <h3>${escapeHtml(skill)}</h3>
    <p>Related portfolio evidence:</p>
    ${relatedMarkup}
    <button class="text-button" type="button" data-clear-skill>Clear selection</button>
  `;
}

function openProject(projectId) {
  const project = projectById(projectId);
  if (!project) return;

  dom.dialogContent.innerHTML = `
    <div class="dialog-body">
      <p class="card-kicker">${escapeHtml(project.type)} · ${escapeHtml(project.dates)}</p>
      <h2>${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.summary)}</p>
      <h3>Problem</h3>
      <p>${escapeHtml(project.problem)}</p>
      <h3>What I built</h3>
      <p>${escapeHtml(project.built)}</p>
      <h3>Details</h3>
      <ul>
        ${project.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
      </ul>
      <h3>Tech stack</h3>
      <div class="tag-row">
        ${project.stack.map((tech) => `<span class="tech-badge">${escapeHtml(tech)}</span>`).join("")}
      </div>
      ${
        project.links.length
          ? `<div class="feature-actions">${project.links
              .map((link) => `<a class="button button-primary" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
              .join("")}</div>`
          : ""
      }
    </div>
  `;

  if (typeof dom.dialog.showModal === "function") {
    dom.dialog.showModal();
  } else {
    dom.dialog.setAttribute("open", "");
  }
}

function closeProject() {
  dom.dialog.close();
}

function setFilter(filter) {
  activeFilter = filter;
  renderFilters();
  renderProjects();
}

function setSkill(skill) {
  activeSkill = activeSkill === skill ? null : skill;
  if (activeSkill) {
    activeFilter = "All";
  }
  renderFilters();
  renderSkills();
  renderSkillPanel(activeSkill);
  renderProjects();
}

function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = stored || (prefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: { theme, initial: true } }));
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  document.documentElement.classList.toggle("dark", next === "dark");
  localStorage.setItem("portfolio-theme", next);
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: { theme: next, initial: false } }));
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initNavState() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navAnchors = [...document.querySelectorAll(".nav-links a")];

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navAnchors.forEach((anchor) => {
        anchor.classList.toggle("is-active", anchor.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.2, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initEvents() {
  window.addEventListener("scroll", () => {
    dom.header.classList.toggle("is-scrolled", window.scrollY > 12);
  });

  dom.navToggle.addEventListener("click", () => {
    const isOpen = dom.navLinks.classList.toggle("is-open");
    dom.navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  dom.navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      dom.navLinks.classList.remove("is-open");
      dom.navToggle.setAttribute("aria-expanded", "false");
    }
  });

  dom.themeToggle.addEventListener("click", toggleTheme);

  dom.filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    activeSkill = null;
    renderSkills();
    renderSkillPanel(null);
    setFilter(button.dataset.filter);
  });

  dom.projectGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-details]");
    if (!button) return;
    openProject(button.dataset.projectDetails);
  });

  dom.skills.addEventListener("click", (event) => {
    const button = event.target.closest("[data-skill]");
    if (!button) return;
    setSkill(button.dataset.skill);
  });

  dom.skillPanel.addEventListener("click", (event) => {
    if (!event.target.closest("[data-clear-skill]")) return;
    activeSkill = null;
    renderSkills();
    renderSkillPanel(null);
    renderProjects();
  });

  dom.dialogClose.addEventListener("click", closeProject);
  dom.dialog.addEventListener("click", (event) => {
    if (event.target === dom.dialog) closeProject();
  });
}

function init() {
  initTheme();
  if (window.location.hash === "#home") {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }
  renderFilters();
  renderProjects();
  renderSkills();
  initEvents();
  initReveal();
  initNavState();
}

init();
