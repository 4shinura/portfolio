// ==========================
// Variables globales
// ==========================
let currentProjects = [];
let currentAPs = [];

// ==========================
// Initialisation au chargement de la page
// ==========================
document.addEventListener("DOMContentLoaded", function () {
	initNavigation();
	initModal();
	initSmoothScroll();

	loadSection(proData, "proGrid"); // Pro
	loadSection(scoData, "scoGrid"); // Scolaire
	loadSection(persoData, "persoGrid"); // Perso

	initScrollEffects();
});

// ==========================
// Navigation
// ==========================
function initNavigation() {
	const navToggle = document.getElementById("navToggle");
	const navMenu = document.getElementById("navMenu");
	const navLinks = document.querySelectorAll(".nav-link");

	// Toggle menu mobile
	if (navToggle) {
		navToggle.addEventListener("click", function () {
			navToggle.classList.toggle("active");
			navMenu.classList.toggle("active");
		});
	}

	// Fermer le menu au clic sur un lien
	navLinks.forEach((link) => {
		link.addEventListener("click", function () {
			if (navMenu.classList.contains("active")) {
				navToggle.classList.remove("active");
				navMenu.classList.remove("active");
			}
		});
	});

	// Navbar scroll effect
	window.addEventListener("scroll", function () {
		const navbar = document.getElementById("navbar");
		if (window.scrollY > 50) {
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.remove("scrolled");
		}
	});

	// Active link on scroll
	window.addEventListener("scroll", highlightActiveSection);
}

function highlightActiveSection() {
	const sections = document.querySelectorAll(".section");
	const navLinks = document.querySelectorAll(".nav-link");

	let current = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;

		if (window.scrollY >= sectionTop - 200) {
			current = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${current}`) {
			link.classList.add("active");
		}
	});
}

// ==========================
// Smooth Scroll
// ==========================
function initSmoothScroll() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener("click", function (e) {
			const href = this.getAttribute("href");

			// Ignorer # seul
			if (href === "#") {
				e.preventDefault();
				return;
			}

			const target = document.querySelector(href);

			if (target) {
				e.preventDefault();

				const navbarHeight =
					document.getElementById("navbar").offsetHeight;
				const targetPosition = target.offsetTop - navbarHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
}

// ==========================
// Effets de scroll
// ==========================
function initScrollEffects() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -100px 0px",
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = "1";
				entry.target.style.transform = "translateY(0)";
			}
		});
	}, observerOptions);

	// Observer tous les éléments qui doivent apparaître au scroll
	const elements = document.querySelectorAll(
		".project-card, .ap-card, .cv-card, .highlight-item",
	);
	elements.forEach((el) => {
		el.style.opacity = "0";
		el.style.transform = "translateY(30px)";
		observer.observe(el);
	});
}

// ==========================
// Chargement des projets
// ==========================
function loadSection(data, gridId) {
	const grid = document.getElementById(gridId);
	if (!grid || !data) return;

	grid.innerHTML = "";
	data.forEach((item) => {
		const card = createCard(item);
		grid.appendChild(card);
	});
}

function createCard(item) {
	const card = document.createElement("div");
	card.className = "project-card";
	card.onclick = () => openProjectModal(item);

	if (item.image) {
		const img = document.createElement("img");
		img.src = item.image;
		img.alt = item.title;
		img.className = "project-image";
		card.appendChild(img);
	} else {
		const placeholder = document.createElement("div");
		placeholder.className = "project-image-placeholder";
		placeholder.textContent = item.category || "BTS SIO";
		card.appendChild(placeholder);
	}

	const content = document.createElement("div");
	content.className = "project-content";

	let techHTML = "";
	if (item.badges && item.badges.length > 0) {
		techHTML = item.badges
			.map((b) => `<img src="${b}" class="badge-img">`)
			.join("");
	} else if (item.technologies && item.technologies.length > 0) {
		techHTML = item.technologies
			.map((t) => `<span class="tech-tag">${t}</span>`)
			.join("");
	}

	content.innerHTML = `
        <h3 class="project-title">${item.title}</h3>
        <p class="project-description">${item.description}</p>
        <div class="project-tech">
            ${techHTML}
        </div>
        <span class="project-date"><i class="far fa-calendar"></i> ${item.date}</span>
    `;

	card.appendChild(content);
	return card;
}

// ==========================
// Modal
// ==========================
function initModal() {
	const modal = document.getElementById("projectModal");
	const closeBtn = document.getElementById("modalClose");

	if (closeBtn) {
		closeBtn.onclick = function () {
			closeModal();
		};
	}

	window.onclick = function (event) {
		if (event.target === modal) {
			closeModal();
		}
	};

	document.addEventListener("keydown", function (event) {
		if (event.key === "Escape" && modal.classList.contains("active")) {
			closeModal();
		}
	});
}

function openProjectModal(project) {
	const modal = document.getElementById("projectModal");
	const modalBody = document.getElementById("modalBody");

	let modalContent = `
        <div class="modal-header">
            <h2 class="modal-title">${project.title}</h2>
            <div class="modal-meta">
                <span><i class="far fa-calendar"></i> ${project.date}</span>
            </div>
        </div>
    `;

	if (project.image) {
		modalContent += `<img src="${project.image}" alt="${project.title}" class="modal-image">`;
	}

	modalContent += `
        <div class="modal-description">
            <h2>Description</h2>
            ${project.description}
        </div>
    `;

	modalContent += `<div class="modal-description">${project.fullDescription}</div>`;

	if (project.badges && project.badges.length > 0) {
		modalContent += '<div class="modal-tech">';
		project.badges.forEach((badge) => {
			modalContent += `<img src="${badge}" alt="Technology badge">`;
		});
		modalContent += "</div>";
	} else if (project.technologies && project.technologies.length > 0) {
		modalContent += '<div class="modal-tech">';
		project.technologies.forEach((tech) => {
			modalContent += `<span class="tech-tag">${tech}</span>`;
		});
		modalContent += "</div>";
	}

	modalContent += '<div class="modal-footer">';

	if (project.links && project.links.length > 0) {
		modalContent += '<div class="modal-links">';
		project.links.forEach((link) => {
			modalContent += `
                <a href="${link.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <i class="${link.icon}"></i> ${link.label}
                </a>
            `;
		});
		modalContent += "</div>";
	} else {
		modalContent += "<div></div>";
	}

	if (project.status && project.statusText) {
		modalContent += `
            <div class="modal-status">
                <span class="status-badge status-${project.status}">
                    <span class="status-dot"></span>
                    ${project.statusText}
                </span>
            </div>
        `;
	}

	modalContent += "</div>";

	modalBody.innerHTML = modalContent;
	modal.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closeModal() {
	const modal = document.getElementById("projectModal");
	if (modal) {
		modal.classList.remove("active");
		document.body.style.overflow = "auto";
	}
}

// ==========================
// Utilitaires
// ==========================

// Détection de scroll pour animations
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <=
			(window.innerWidth || document.documentElement.clientWidth)
	);
}

// Optimiser les events scroll/resize
function debounce(func, wait) {
	let timeout;
	return function executedFunction(...args) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
}

function initNavigation() {
	const navToggle = document.getElementById("navToggle");
	const navMenu = document.getElementById("navMenu");
	const navOverlay = document.getElementById("navOverlay");
	const navLinks = document.querySelectorAll(".nav-link");
	const body = document.body;

	function openMenu() {
		navToggle.classList.add("active");
		navMenu.classList.add("active");
		navOverlay.classList.add("active");
		body.style.overflow = "hidden";
	}

	function closeMenu() {
		navToggle.classList.remove("active");
		navMenu.classList.remove("active");
		navOverlay.classList.remove("active");
		body.style.overflow = "";
	}


	navToggle.addEventListener("click", function (e) {
		e.stopPropagation();
		if (navMenu.classList.contains("active")) {
			closeMenu();
		} else {
			openMenu();
		}
	});

	navOverlay.addEventListener("click", closeMenu);

	navLinks.forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && navMenu.classList.contains("active")) {
			closeMenu();
		}
	});
}