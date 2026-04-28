// Technology data array
const technologies = [
  { image: "image/html-iconpng.png", alt: "HTML", name: "HTML" },
  { image: "image/css-3.png", alt: "CSS", name: "CSS" },
  { image: "image/js.png", alt: "JavaScript", name: "JavaScript" },
  { image: "image/React.png", alt: "React", name: "React" },
  { image: "image/node.png", alt: "Node.js", name: "Node.js" },
];

function createTechCard(tech) {
  return `
    <div class="tech-card">
      <img src="${tech.image}" alt="${tech.alt}" loading="lazy" decoding="async" />
      <p>${tech.name}</p>
    </div>
  `;
}

function renderTechnologies() {
  const techContainer = document.getElementById("techContainer");
  techContainer.innerHTML = technologies.map(createTechCard).join("");
}
// Project data array
const projects = [
  {
    image: "image/coffeeproj.png",
    alt: "Coffee Shop Website screenshot",
    title: "Coffee Shop Website",
    description:
      "A responsive platform for ordering coffee products with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/Bk-webDev/html-css-projects/tree/main/coffee",
    demo: " https://bk-webdev.github.io/html-css-projects/",
  },
  {
    image: "image/barberoroj.png",
    alt: "Barber website screenshot",
    title: "Barber Website",
    description:
      "Showcases portfolio, services, and booking information for a barber.",
    tech: ["HTML", "CSS"],
    code: "https://github.com/Bk-webDev/barberoroj",
    demo: "https://bk-webdev.github.io/barberoroj",
  },
  {
    image: "image/hoddieproj2.png",
    alt: "Hoddie shop screenshot",
    title: "Hoddie Shop",
    description:
      "Product gallery with pricing and promotional offers for a clothing shop.",
    tech: ["HTML", "CSS"],
    code: "https://github.com/Bk-webDev/hoddieproj2",
    demo: "https://bk-webdev.github.io/hoddieproj2",
  },
  {
    image: "image/artproj.png",
    alt: "Art website screenshot",
    title: "Art Portfolio",
    description:
      "Gallery-driven site that highlights artworks and artist statements.",
    tech: ["HTML", "CSS"],
    code: "https://github.com/Bk-webDev/artproj",
    demo: "https://bk-webdev.github.io/artproj",
  },
  {
    image: "image/charisproj.png",
    alt: "Charis shop screenshot",
    title: "Charis Furniture",
    description:
      "Product catalog with featured items and pricing for a furniture store.",
    tech: ["HTML", "CSS"],
    code: "https://github.com/Bk-webDev/charisproj",
    demo: "https://bk-webdev.github.io/charisproj",
  },
  {
    image: "image/quiz-app-img (2).png",
    alt: "Quiz app screenshot",
    title: "Quiz App",
    description:
      "Interactive quiz application with timed questions and scoring.",
    tech: ["JavaScript"],
    code: "https://github.com/Bk-webDev/quiz-app",
    demo: "https://bk-webdev.github.io/quiz-app",
  },
];

function createProjectCard(project) {
  const techList = project.tech.map((tech) => `<li>${tech}</li>`).join("");
  return `
		<article class="project-card">
			<img src="${project.image}" alt="${project.alt}" loading="lazy" decoding="async" />
			<div class="project-info">
				<h3>${project.title}</h3>
				<p>${project.description}</p>
				<ul class="tech-list">${techList}</ul>
				<div class="project-links">
					<a href="${project.code}" class="btn small" target="_blank" rel="noopener noreferrer">View Code</a>
					<a href="${project.demo}" class="btn small outline" target="_blank" rel="noopener noreferrer">Live Demo</a>
				</div>
			</div>
		</article>
	`;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML =
    projects.map(createProjectCard).join("") +
    `
		<article class="project-card placeholder">
			<div class="project-info">
				<h3>Future Project</h3>
				<p>New exciting projects are coming soon — stay tuned.</p>
			</div>
		</article>
	`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderTechnologies();
});
