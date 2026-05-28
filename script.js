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
    challenges: [
      "ICML pages and paper metadata were not available as one clean API export, so the collection layer needed resilient scraping and data cleanup.",
      "PDF extraction produced inconsistent text because of layouts, headers, encoding issues, and merged line breaks.",
      "Large-paper summarization required chunking and metadata filtering to stay within LLM token budgets.",
      "FAISS and ChromaDB had different tradeoffs between precision, latency, and memory use."
    ],
    impact: [
      "Processed and analyzed 2,600+ ICML 2024 papers through an end-to-end collection, retrieval, summarization, and dashboard workflow.",
      "Surfaced research trends, top contributors, institutions, topic distributions, and research-area correlations.",
      "Benchmarked retrieval behavior in the technical report, with FAISS showing stronger precision and ChromaDB showing lower-latency retrieval characteristics."
    ],
    improvements: [
      "Add layout-aware PDF parsing for tables, figures, and multi-column papers.",
      "Parallelize extraction and embedding jobs more aggressively for larger conference or multi-year datasets.",
      "Add richer query templates and domain-specific embeddings for non-ICML corpora."
    ],
    pipeline: [
      "ICML Papers",
      "PDF Extraction",
      "Chunking/Metadata",
      "FAISS/ChromaDB",
      "Gemini Classification/Summarization",
      "Dashboard Insights"
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
    links: [
      { label: "GitHub", url: "https://github.com/Aopandey/Research-Paper-Analyzer" },
      { label: "Report", url: "https://drive.google.com/file/d/1P7V19IM9IuX5c2VeYuBFIIGPdsXjTAQX/view?usp=sharing" }
    ]
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
    challenges: [
      "Pseudo-labeling can amplify early model mistakes, especially when one model becomes overconfident on noisy unlabeled samples.",
      "Different model families needed consistent preprocessing so comparisons were meaningful.",
      "The experiment required tracking teacher-student pairings across multiple evaluation metrics rather than relying on accuracy alone."
    ],
    impact: [
      "Created a reproducible capstone workflow for studying when heterogeneous NLP models help each other through unlabeled data.",
      "Compared Naive Bayes, SVM, and MLP behavior under mutual-learning and pseudo-labeling setups.",
      "Produced a report-backed analysis of model pairings, preprocessing decisions, and evaluation tradeoffs."
    ],
    improvements: [
      "Add confidence calibration before accepting pseudo-labels.",
      "Test transformer embeddings as a stronger text representation baseline.",
      "Add active-learning loops so uncertain samples can be prioritized for human review."
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
    links: [
      { label: "GitHub", url: "https://github.com/jp1779/Capstone_Project" },
      { label: "Report", url: "https://drive.google.com/file/d/1owcMzd3VMgxlZp8xTyLK9ZNRtAJaeg0-/view" }
    ]
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
    challenges: [
      "Class imbalance made accuracy a weak success metric for a screening-oriented model.",
      "Preprocessing needed to preserve clinically meaningful signals while handling categorical values and outliers.",
      "Model comparison had to balance recall, ROC-AUC, interpretability, and overfitting risk."
    ],
    impact: [
      "Built a complete supervised ML workflow over a 100,000-sample diabetes dataset.",
      "Compared classical and neural models using metrics better suited to screening contexts.",
      "Identified HbA1c and blood glucose as important predictive signals through model diagnostics."
    ],
    improvements: [
      "Add probability calibration and decision-threshold analysis for clinical-style screening tradeoffs.",
      "Package preprocessing and inference into a reproducible pipeline artifact.",
      "Explore interpretable model explanations for patient-facing or analyst-facing review."
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
    links: [
      { label: "GitHub", url: "https://github.com/RajaATAli/CSCI365_481_Final_Project" }
    ]
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
    challenges: [
      "Agricultural yield data needed a schema that avoided duplication while still supporting analytical questions.",
      "The project required clear assumptions about entities, constraints, and time-window queries.",
      "Validation queries had to confirm both relational integrity and practical analytical usefulness."
    ],
    impact: [
      "Produced a normalized SQL Server database design for corn and soybean yield analysis.",
      "Created reusable SQL queries for region, yield, and time-window exploration.",
      "Documented schema decisions so another analyst could understand constraints and edge cases."
    ],
    improvements: [
      "Add a larger real-world dataset and import scripts.",
      "Build a small dashboard layer over the SQL query suite.",
      "Add stored procedures or views for the most common analytics workflows."
    ],
    stack: ["SQL", "SQL Server 2022", "Relational Databases", "Data Modeling", "Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/Aopandey/5NF-Counts-of-Bushels-Project" },
      { label: "Report", url: "https://drive.google.com/file/d/11g0LNbEw1lXqfwNd4_bknOUOafn1h8pD/view" }
    ]
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
    group: "Data, Cloud & MLOps",
    skills: ["PySpark", "Docker", "Kubernetes", "AWS EC2", "AWS S3", "AWS Lambda", "MLflow", "SQL Server", "Git/GitHub"]
  },
  {
    group: "Visualization & Apps",
    skills: ["Streamlit", "Tableau", "Power BI", "Matplotlib"]
  },
  {
    group: "AI-Assisted Development",
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

const skillEvidence = {
  Python: [
    { type: "Project", projectId: "icml", detail: "Data collection, PDF parsing, retrieval, summarization, and dashboard workflows." },
    { type: "Project", projectId: "mutual-learning", detail: "NLP preprocessing and semi-supervised model experiments." },
    { type: "Project", projectId: "diabetes", detail: "EDA, class balancing, model benchmarking, and diagnostics." },
    { type: "Research", label: "Biomedical literature summarization", detail: "Retrieval, metadata enrichment, ranking, and evaluation pipeline work." }
  ],
  SQL: [
    { type: "Project", projectId: "bushels", detail: "Normalized schema design and analytical query suite." },
    { type: "Experience", label: "Legislative Services Agency", detail: "SQL Server ETL workflows for legislative datasets." }
  ],
  Java: [{ type: "Coursework", label: "Purdue CS foundation", detail: "Core programming and CS coursework background." }],
  R: [{ type: "Coursework", label: "Statistics and data coursework", detail: "Probability, statistics, and data-analysis foundation." }],
  PyTorch: [{ type: "Coursework", label: "AI/ML toolkit", detail: "Part of the broader ML framework stack for research and engineering roles." }],
  "scikit-learn": [
    { type: "Project", projectId: "mutual-learning", detail: "Naive Bayes, SVM, MLP, and classification metrics." },
    { type: "Project", projectId: "diabetes", detail: "Decision Tree, Random Forest, SVM, MLP, ROC-AUC, and recall analysis." }
  ],
  XGBoost: [{ type: "Toolkit", label: "AI/ML modeling toolkit", detail: "Tree-based modeling skill aligned with supervised ML pipeline work." }],
  "Hugging Face Transformers": [{ type: "Toolkit", label: "Transformer NLP toolkit", detail: "Relevant to LLM, summarization, and NLP systems work." }],
  NumPy: [
    { type: "Project", projectId: "mutual-learning", detail: "Feature processing and model-evaluation utilities." },
    { type: "Project", projectId: "diabetes", detail: "Numerical processing for supervised ML experiments." }
  ],
  Pandas: [
    { type: "Project", projectId: "icml", detail: "Metadata tables and research-paper analysis." },
    { type: "Project", projectId: "mutual-learning", detail: "Dataset preparation and evaluation tables." },
    { type: "Project", projectId: "diabetes", detail: "EDA, cleaning, and feature preparation." },
    { type: "Experience", label: "Legislative Services Agency", detail: "Dataset validation and preprocessing workflows." }
  ],
  SciPy: [{ type: "Project", projectId: "diabetes", detail: "Statistical and numerical support for ML diagnostics." }],
  LangChain: [
    { type: "Project", projectId: "icml", detail: "Metadata filtering for research-paper retrieval and summarization." },
    { type: "Research", label: "Biomedical literature summarization", detail: "RAG-style workflow design and summary orchestration." }
  ],
  "OpenAI API": [
    { type: "Research", label: "Biomedical literature summarization", detail: "GPT-4o-mini used in multi-model summarization workflows." },
    { type: "Project", projectId: "icml", detail: "Technical report describes OpenAI embedding experiments." }
  ],
  "Gemini API": [
    { type: "Project", projectId: "icml", detail: "Gemini 1.5 Flash classification and summarization." },
    { type: "Research", label: "Biomedical literature summarization", detail: "Gemini 2.0 Flash used in multi-LLM summary workflows." }
  ],
  "Claude API": [{ type: "Toolkit", label: "LLM development toolkit", detail: "Listed LLM API skill for evaluation, prototyping, and assistant workflows." }],
  FAISS: [{ type: "Project", projectId: "icml", detail: "Vector indexing and semantic retrieval over paper chunks." }],
  ChromaDB: [{ type: "Project", projectId: "icml", detail: "Vector database retrieval path for research-paper exploration." }],
  "Prompt Engineering": [
    { type: "Project", projectId: "icml", detail: "Targeted prompts for paper summarization and metadata extraction." },
    { type: "Research", label: "Biomedical literature summarization", detail: "Prompted multi-model summaries with validation and evaluation." }
  ],
  "Retrieval-Augmented Generation": [
    { type: "Project", projectId: "icml", detail: "Retrieval plus LLM summarization over ICML papers." },
    { type: "Research", label: "Biomedical literature summarization", detail: "Retrieval, ranking, summarization, and evaluation pipeline." }
  ],
  PySpark: [{ type: "Toolkit", label: "Scalable data toolkit", detail: "Relevant to large-data ETL and data/ML pipeline roles." }],
  Docker: [{ type: "Project", projectId: "icml", detail: "Technical report describes local LLM experiments with Ollama containers." }],
  Kubernetes: [{ type: "Toolkit", label: "MLOps toolkit", detail: "Deployment-oriented skill aligned with scalable AI/ML systems." }],
  "AWS EC2": [{ type: "Toolkit", label: "Cloud compute toolkit", detail: "Relevant to hosting data and model workflows." }],
  "AWS S3": [{ type: "Toolkit", label: "Cloud storage toolkit", detail: "Relevant to storing datasets, model artifacts, and pipeline outputs." }],
  "AWS Lambda": [{ type: "Toolkit", label: "Serverless toolkit", detail: "Relevant to event-driven data processing and lightweight automation." }],
  MLflow: [{ type: "Toolkit", label: "MLOps toolkit", detail: "Experiment tracking skill aligned with model benchmarking workflows." }],
  "SQL Server": [
    { type: "Project", projectId: "bushels", detail: "Relational database implementation." },
    { type: "Experience", label: "Legislative Services Agency", detail: "SQL Server ETL and BI workflows." }
  ],
  "SQL Server 2022": [{ type: "Project", projectId: "bushels", detail: "Primary database platform for the normalized schema project." }],
  "Git/GitHub": [
    { type: "Project", projectId: "icml", detail: "Repository-linked research-paper analyzer." },
    { type: "Project", projectId: "mutual-learning", detail: "Capstone repository and report artifacts." },
    { type: "Project", projectId: "diabetes", detail: "Final project repository." },
    { type: "Project", projectId: "bushels", detail: "Database project repository." }
  ],
  Streamlit: [
    { type: "Project", projectId: "icml", detail: "Dashboard interface for research-paper exploration." },
    { type: "Research", label: "Biomedical literature summarization", detail: "Prototype interface for retrieval and summary workflows." }
  ],
  Tableau: [{ type: "Experience", label: "Legislative Services Agency", detail: "BI reporting and analysis workflows." }],
  "Power BI": [{ type: "Experience", label: "Legislative Services Agency", detail: "Reporting and dashboard support for structured datasets." }],
  Matplotlib: [
    { type: "Project", projectId: "diabetes", detail: "EDA and model diagnostic visualizations." },
    { type: "Project", projectId: "icml", detail: "Technical report describes PyPlot/Seaborn dashboard visualizations." }
  ],
  Cursor: [{ type: "Toolkit", label: "AI development workflow", detail: "Used as part of the modern AI-assisted engineering toolkit." }],
  "Claude Code": [{ type: "Toolkit", label: "AI development workflow", detail: "Used for codebase iteration, debugging, and implementation support." }],
  "GitHub Copilot": [{ type: "Toolkit", label: "AI development workflow", detail: "Assistant-based development tool for faster coding workflows." }],
  ChatGPT: [{ type: "Toolkit", label: "AI development workflow", detail: "Used for research, drafting, debugging, and technical planning." }]
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

function evidenceForSkill(skill) {
  return skillEvidence[skill] || [];
}

function projectIdsForSkill(skill) {
  return [...new Set(evidenceForSkill(skill).map((item) => item.projectId).filter(Boolean))];
}

function renderPipeline(steps, label = "System pipeline") {
  if (!steps || !steps.length) return "";
  const formatStep = (step) => escapeHtml(step).replaceAll("/", "/<wbr>").replaceAll("-", "-<wbr>");
  return `
    <div class="pipeline-block" aria-label="${escapeHtml(label)}">
      <p class="pipeline-title">${escapeHtml(label)}</p>
      <ol class="pipeline-diagram">
        ${steps.map((step) => `<li>${formatStep(step)}</li>`).join("")}
      </ol>
    </div>
  `;
}

function renderList(items) {
  if (!items || !items.length) return "";
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderLinks(links, className = "button button-primary") {
  if (!links || !links.length) return "";
  return `
    <div class="feature-actions case-study-links">
      ${links.map((link) => `<a class="${className}" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}
    </div>
  `;
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
  const relatedIds = activeSkill ? projectIdsForSkill(activeSkill) : [];

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
          ${renderPipeline(project.pipeline, "Pipeline")}
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

  const evidence = evidenceForSkill(skill);
  const evidenceMarkup = evidence.length
    ? `<div class="evidence-list">${evidence
        .map((item) => {
          const project = item.projectId ? projectById(item.projectId) : null;
          const title = project ? project.title : item.label;
          return `
            <article class="evidence-item">
              <span>${escapeHtml(item.type)}</span>
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(item.detail)}</p>
            </article>
          `;
        })
        .join("")}</div>`
    : "<p>This skill is listed as part of the broader toolkit, but it is not pinned to a project yet.</p>";

  dom.skillPanel.innerHTML = `
    <p class="status-kicker">Selected Skill</p>
    <h3>${escapeHtml(skill)}</h3>
    <p>Evidence across projects, experience, coursework, and tooling:</p>
    ${evidenceMarkup}
    <button class="text-button" type="button" data-clear-skill>Clear selection</button>
  `;
}

function openProjectLegacy(projectId) {
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
      ${renderPipeline(project.pipeline, "Pipeline")}
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

function openProject(projectId) {
  const project = projectById(projectId);
  if (!project) return;

  dom.dialogContent.innerHTML = `
    <div class="dialog-body case-study">
      <div class="case-study-hero">
        <p class="card-kicker">${escapeHtml(project.type)} · ${escapeHtml(project.dates)}</p>
        <h2>${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
      </div>

      <section class="case-study-section">
        <h3>Overview</h3>
        <p>${escapeHtml(project.summary)}</p>
      </section>

      <section class="case-study-section">
        <h3>Problem</h3>
        <p>${escapeHtml(project.problem)}</p>
      </section>

      <section class="case-study-section">
        <h3>System Design</h3>
        <p>${escapeHtml(project.built)}</p>
        ${renderPipeline(project.pipeline, "System flow")}
      </section>

      <section class="case-study-section">
        <h3>What I Built</h3>
        ${renderList(project.details)}
      </section>

      <section class="case-study-section">
        <h3>Technical Challenges</h3>
        ${renderList(project.challenges)}
      </section>

      <section class="case-study-section">
        <h3>Results / Impact</h3>
        ${renderList(project.impact)}
      </section>

      <section class="case-study-section">
        <h3>What I Would Improve</h3>
        ${renderList(project.improvements)}
      </section>

      <section class="case-study-section">
        <h3>Tech Stack</h3>
        <div class="tag-row">
          ${project.stack.map((tech) => `<span class="tech-badge">${escapeHtml(tech)}</span>`).join("")}
        </div>
      </section>

      <section class="case-study-section">
        <h3>Links</h3>
        ${renderLinks(project.links, "button")}
      </section>
    </div>
  `;

  if (typeof dom.dialog.showModal === "function") {
    dom.dialog.showModal();
  } else {
    dom.dialog.setAttribute("open", "");
  }
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
