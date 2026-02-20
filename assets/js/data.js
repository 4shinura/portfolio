// ==================================
// Données des Projets Professionnels
// ==================================

const proData = [
	{
		id: "stage-3wolfdesign",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/3wolfdesign-logo.png",
		date: "Janvier 2026 - Février 2026",

		title: "Stage 3wolfdesign - Développement Fullstack Symfony",
		description:
			"Conception et développement d'une plateforme vitrine et d'un catalogue e-commerce pour un spécialiste de l'impression 3D et de l'aéromodélisme.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Centraliser la gestion des réalisations techniques et des prototypes de maquettes d'avions.</li>
                <li>Mise en place d'un catalogue de produits clair distinguant la galerie d'exposition et les articles disponibles.</li>
                <li>Création d'un outil d'administration intuitif pour permettre au client de gérer son inventaire en toute autonomie.</li>
                <li>Garantir une expérience utilisateur moderne et fluide sur tous les types de supports.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Conception de l'architecture globale du site via le framework <code>Symfony 8</code>, en exploitant les fonctionnalités avancées du moteur de template Twig.</li>
                <li>Structuration de la persistance des données avec <code>Doctrine ORM</code> et une base de données <code>MySQL</code>, assurant une gestion rigoureuse des relations produits/catégories.</li>
                <li>Développement d'un back-office complet (CRUD), sécurisé par le composant Security de Symfony pour restreindre l'accès aux fonctions sensibles.</li>
                <li>Intégration d'une interface utilisateur sous <code>Bootstrap 5</code>, complétée par des scripts <code>JavaScript</code> pour l'affichage de notifications 'Toast' dynamiques.</li>
                <li>Résolution de problématiques complexes liées à l'injection de dépendances et à l'optimisation de la logique de redirection interne.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Maîtrise du cycle de vie complet d'un projet web, de l'analyse du besoin client à la mise en production.</li>
                <li>Apprentissage en autonomie et implémentation des nouveautés techniques de l'écosystème Symfony.</li>
                <li>Traduction d'exigences métier spécifiques en fonctionnalités techniques (gestion catalogue vs galerie).</li>
                <li>Rigueur dans le développement back-end et optimisation de l'expérience utilisateur (UX/UI).</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Symfony%208-000000?style=for-the-badge&logo=symfony&logoColor=white",
			"https://img.shields.io/badge/PHP%208.4-777BB4?style=for-the-badge&logo=php&logoColor=white",
			"https://img.shields.io/badge/MVC-FF6600?style=for-the-badge&logo=devbox&logoColor=white",
			"https://img.shields.io/badge/Doctrine-FF0000?style=for-the-badge&logo=doctrine&logoColor=white",
			"https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
			"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
			"https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white",
			"https://img.shields.io/badge/Test-PHPUnit-critical?style=for-the-badge&logo=checkmarx&logoColor=white",
			"https://img.shields.io/badge/Bootstrap%20-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
			"https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
			"https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
			"https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
		],
		links: [
			{
				url: "https://github.com/4shinura/3wolfdesign",
				label: "GitHub Repo",
				icon: "fab fa-github",
			},
			{
				url: "https://3wolfdesign.fr",
				label: "Voir le site",
				icon: "fas fa-external-link-alt",
			},
		],
	},
	{
		id: "stage-kelio",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/kelio-logo.png",
		date: "Mai 2025 - Juin 2025",

		title: "Stage Kelio - Développement Java",
		description:
			"Refonte d'interfaces métiers et intégration du micro-framework interne au sein de l'équipe R&D de Kelio, leader européen de la gestion des temps.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Apprentissage et maîtrise du micro-framework propriétaire "Bodet Web Toolkit" pour le développement d'interfaces standardisées.</li>
                <li>Refonte technique d'un écran de gestion de paie, assurant la transition d'une technologie legacy (C) vers un environnement moderne (Java).</li>
                <li>Collaboration active au sein d'une équipe de développement suivant la méthodologie Agile.</li>
                <li>Validation des fonctionnalités développées pour une future mise en production à destination des clients.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Formation intensive d'une semaine sur le framework interne avec réalisation de travaux pratiques pour la conception d'interfaces de test.</li>
                <li>Refonte complète d'un écran de paie en <code>Java</code>, incluant la migration de la logique métier depuis le langage <code>C</code> vers l'architecture actuelle.</li>
                <li>Gestion des tâches et du versionnage via <code>GitLab</code>, incluant la rédaction de fiches techniques et le suivi des tickets de développement.</li>
                <li>Utilisation d'un document de planification Excel pour synchroniser l'avancement individuel avec les objectifs de l'équipe.</li>
                <li>Participation aux rituels <code>Agile</code> de l'entreprise : Daily Scrums, ouvertures et revues de sprints, ainsi que les rétrospectives de période.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Adaptation rapide à un environnement technique spécifique (framework propriétaire).</li>
                <li>Expérience concrète du cycle de vie logiciel en entreprise, de la planification GitLab à la revue de code.</li>
                <li>Compréhension des enjeux de la refonte d'applications métiers critiques pour la production.</li>
                <li>Travail collaboratif et communication au sein d'une équipe R&D structurée.</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
			"https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white",
			"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
			"https://img.shields.io/badge/DBeaver-5c453c?style=for-the-badge&logo=dbeaver&logoColor=white",
			"https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
			"https://img.shields.io/badge/Method-Agile-4CAF50?style=for-the-badge&logo=jira&logoColor=white",
			"https://img.shields.io/badge/Micro--Framework-BWT%20(Interne)-0055FF?style=for-the-badge&logo=framework&logoColor=white",
		],
		links: [
			{
				url: "https://www.kelio.com/fr/",
				label: "Site Kelio",
				icon: "fas fa-building",
			},
		],
	},
];


// ==================================
// Données des Projets Académiques
// ==================================

const scoData = [
	{
		id: "ap3_labo-lbc",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/AP3_labo-lbc.png",
		date: "Fin 2025",

		title: "AP3 - Labo LBC",
		description:
			"Atelier de Professionnalisation - Développement d'une application web sécurisée en architecture MVC pour la gestion des rapports de visites, des praticiens et de la distribution d'échantillons au sein d'un laboratoire pharmaceutique.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Concevoir une plateforme centralisée permettant aux visiteurs médicaux de saisir et consulter leurs comptes rendus de visite.</li>
                <li>Mettre en place un système de gestion des stocks d'échantillons et des médicaments présentés lors des rendez-vous.</li>
                <li>Assurer une hiérarchie d'accès sécurisée entre les visiteurs, les délégués régionaux et l'administration.</li>
                <li>Garantir la fiabilité du code par l'implémentation de plans de tests rigoureux.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Développement de l'application en <code>PHP</code> natif en respectant strictement l'architecture <code>MVC</code> pour séparer la logique métier de l'interface.</li>
                <li>Modélisation de la base de données relationnelle sous <code>MySQL</code> via une approche MCD respectant les normes Merise.</li>
                <li>Création d'un moteur de génération de rapports de visite au format PDF pour faciliter l'archivage et la consultation.</li>
                <li>Mise en œuvre d'une suite de tests unitaires automatisés (via TestRunner) pour valider les fonctions critiques comme la récupération des praticiens et la vérification des profils.</li>
                <li>Utilisation de <code>Laragon</code> pour l'environnement de développement local et <code>Git</code> pour le versionnage du code.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Maîtrise de la programmation orientée objet et du pattern Modèle-Vue-Contrôleur en PHP.</li>
                <li>Conception de bases de données complexes et optimisation de requêtes SQL.</li>
                <li>Gestion de projet en autonomie avec l'utilisation de méthodes Agile (Trello/Kanban).</li>
                <li>Rédaction de documentation technique complète, incluant diagrammes de cas d'utilisation et schémas de navigation.</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/PHP%208-777BB4?style=for-the-badge&logo=php&logoColor=white",
			"https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
			"https://img.shields.io/badge/MVC-FF6600?style=for-the-badge&logo=devbox&logoColor=white",
			"https://img.shields.io/badge/Test-PHPUnit-critical?style=for-the-badge&logo=checkmarx&logoColor=white",
			"https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white",
			"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
			"https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
		],
	},
	{
		id: "ap2_course-hippique",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/AP2_course-hippique.png",
		date: "Janvier 2025 - Avril 2025",

		title: "AP2 - Courses Hippiques",
		description:
			"Atelier de Professionnalisation - Conception et intégration d'une interface web sur mesure pour la gestion de courses hippiques, mettant l'accent sur l'ergonomie utilisateur et la structure HTML/CSS.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Concevoir une interface utilisateur intuitive permettant aux propriétaires de haras d'inscrire leurs chevaux et jockeys.</li>
                <li>Développer un espace d'administration pour la gestion des événements et la saisie des résultats de courses.</li>
                <li>Mettre en place un système d'authentification sécurisé pour différencier les accès propriétaires et gestionnaires.</li>
                <li>Assurer une consultation fluide et visuelle de l'historique des courses pour tous les visiteurs.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>J'ai réalisé un travail approfondi d'intégration <code>HTML5</code> et <code>CSS3</code> pour créer un design professionnel, responsive et adapté au secteur hippique.</li>
                <li>L'utilisation du framework <code>Bootstrap</code> m'a permis d'optimiser la mise en page et de garantir une compatibilité mobile complète.</li>
                <li>J'ai développé la logique de persistance des données en <code>PHP</code> natif, permettant d'enregistrer et de modifier les informations des chevaux et jockeys en base de données.</li>
                <li>La structure de données a été modélisée sous <code>MySQL</code> pour lier efficacement les participants aux différentes courses prévues.</li>
                <li>Le déploiement final a été effectué sur un environnement <code>IONOS</code> via le client <code>FileZilla</code>[cite: 4].</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Maîtrise de l'intégration web statique et dynamique (HTML/CSS/PHP) sans recours à un CMS[cite: 4].</li>
                <li>Application des principes d'ergonomie et de design pour une interface métier simple et pratique.</li>
                <li>Gestion de projet structurée avec suivi des délais et planification via <code>Trello</code>.</li>
                <li>Administration de base de données relationnelle et gestion d'hébergement web[cite: 4].</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
			"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css&logoColor=white",
			"https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white",
			"https://img.shields.io/badge/PHP%208-777BB4?style=for-the-badge&logo=php&logoColor=white",
			"https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white",
			"https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white",
		],
	},
	{
		id: "ap1_bst79",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/bst79.png",
		date: "Décembre 2024 - Février 2025",

		title: "AP1 - BST79",
		description:
			"Conception et réalisation du site vitrine de l'entreprise de chaudronnerie BST 79, incluant la mise en place d'un système de gestion de contenu et la rédaction d'un guide utilisateur.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Moderniser l'image numérique de l'entreprise BST 79 spécialisée en chaudronnerie.</li>
                <li>Proposer une interface intuitive permettant de présenter les services et les réalisations de l'atelier.</li>
                <li>Assurer une autonomie complète du client pour les futures mises à jour de contenu (textes et images).</li>
                <li>Garantir une lisibilité optimale sur tous les terminaux (ordinateurs, tablettes et mobiles).</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Analyse des besoins métier et rédaction d'un cahier des charges fonctionnel adapté au secteur industriel.</li>
                <li>Déploiement et configuration du CMS <code>WordPress</code> sur un hébergement mutualisé.</li>
                <li>Conception graphique et intégration sur mesure via le constructeur de pages <code>Elementor</code> pour une personnalisation avancée du design.</li>
                <li>Optimisation du <code>Responsive Design</code> avec des ajustements spécifiques pour les trois résolutions cibles (Desktop, Tablette, Mobile).</li>
                <li>Rédaction d'une documentation technique et d'un guide d'utilisation détaillé pour accompagner le client dans l'administration quotidienne du site.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Maîtrise d'un système de gestion de contenu (CMS) et de ses outils d'édition visuelle.</li>
                <li>Gestion de projet en équipe avec suivi de l'avancement via des diagrammes de GANTT (prévisionnel vs réel).</li>
                <li>Adaptation de la communication technique pour un client non-informaticien.</li>
                <li>Sensibilité à l'expérience utilisateur (UX) et aux contraintes du référencement naturel (SEO).</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/CMS-WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white",
			"https://img.shields.io/badge/Elementor-92003B?style=for-the-badge&logo=elementor&logoColor=white",
			"https://img.shields.io/badge/Responsive-4CAF50?style=for-the-badge&logo=google-chrome&logoColor=white",
			"https://img.shields.io/badge/GANTT-FF9800?style=for-the-badge&logo=clockify&logoColor=white",
		],
		links: [
			{
				url: "https://bst79.fr",
				label: "Voir le site",
				icon: "fas fa-external-link-alt",
			},
		],
	},
	{
		id: "ap0_maraibio",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/AP0_maraibio.png",
		date: "Septembre 2024 - Novembre 2024",

		title: "AP0 - MaraiBio",
		description:
			"Atelier de Professionnalisation - Mise en place complète d'une infrastructure réseau pour une PME, incluant la virtualisation d'un serveur Windows 2019, la gestion d'un domaine Active Directory et le déploiement physique.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Conception d'une architecture réseau répondant aux besoins de communication des services Production et Logistique.</li>
                <li>Centralisation de la gestion des utilisateurs et des ressources via un contrôleur de domaine Windows Server.</li>
                <li>Sécurisation du parc informatique par l'application de restrictions logicielles et horaires via des stratégies de groupe.</li>
                <li>Simulation puis déploiement physique de l'infrastructure pour valider la connectivité globale.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Modélisation intégrale du réseau sous <code>Cisco Packet Tracer</code> pour valider l'adressage IP et le routage avant la mise en œuvre.</li>
                <li>Installation et configuration du serveur <code>Windows Server 2019</code> via l'hyperviseur <code>VMware</code>, incluant les rôles AD DS et DNS.</li>
                <li>Structuration de l'annuaire Active Directory avec des Unités d'Organisation (OU) dédiées par service.</li>
                <li>Renforcement de la sécurité par la création de <code>GPO</code> spécifiques (désactivation de l'invite de commande et restrictions horaires).</li>
                <li>Implémentation de scripts de connexion pour l'automatisation du montage de lecteurs réseaux partagés lors de l'ouverture de session.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Administration de services d'annuaire (Active Directory) et gestion des permissions.</li>
                <li>Maîtrise de la virtualisation et configuration système sous Windows Server.</li>
                <li>Conception de schémas réseau et compréhension des protocoles TCP/IP.</li>
                <li>Mise en œuvre d'une infrastructure physique (brassage, configuration de commutateurs).</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Windows%20Server-0078D6?style=for-the-badge&logo=windows&logoColor=white",
			"https://img.shields.io/badge/Packet%20Tracer-0081C9?style=for-the-badge&logo=cisco&logoColor=white",
			"https://img.shields.io/badge/GPO-CC0000?style=for-the-badge&logo=active-directory&logoColor=white",
			"https://img.shields.io/badge/VMware-607078?style=for-the-badge&logo=vmware&logoColor=white",
		],
	},
	{
		id: "ruche-connectee",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/connected-hive.png",
		date: "Novembre 2023 - Juin 2024",

		title: "Ruche Connectée",
		description:
			"Projet de Bac - Infrastructure IoT complète, réalisé dans le cadre de mon Bac STI2D option SIN, avec multitude de capteurs et transmission MQTT",
		fullDescription: `            
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Surveiller en temps réel l'état de santé d'une ruche</li>
                <li>Collecter des données environnementales (température, humidité, poids)</li>
                <li>Transmettre les données vers un serveur distant</li>
                <li>Visualiser les données via une interface web</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <p>Mise en place d'une infrastructure complète comprenant :</p>
            <ul>
                <li>Capteurs embarqués de température, humidité, poids, vibrations</li>
                <li>Microcontrôleur Arduino UNO R4 pour la collecte et le traitement des données</li>
                <li>Communication via Protocole MQTT pour la transmission</li>
                <li>Serveur Linux incluant Mosquitto (broker MQTT) et Node-RED pour le traitement et l'interface</li>
                <li>Visualisation sous forme de dashboard en temps réel avec historiques</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Programmation embarquée (Arduino C++)</li>
                <li>Protocoles IoT (MQTT)</li>
                <li>Administration Linux</li>
                <li>Architecture système</li>
                <li>Électronique et câblage</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white",
			"https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white",
			"https://img.shields.io/badge/MQTT-660066?style=for-the-badge&logo=mqtt&logoColor=white",
			"https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
			"https://img.shields.io/badge/Node--RED-8F0000?style=for-the-badge&logo=nodered&logoColor=white",
		],
	},
];


// ==================================
// Données des Projets Personnels
// ==================================

const persoData = [
	{
		id: "n8n-ollama-ai",
		status: "warning",
		statusText: "Expérimental | Archivé",
		image: "assets/img/n8n-experimental.png",
		date: "Fin 2025",

		title: "Orchestration IA & Automatisation de Flux",
		description:
			"Conception d'un assistant intelligent auto-hébergé exploitant l'orchestration de flux via n8n pour traiter des requêtes complexes entre une interface Discord et le moteur d'IA local Ollama.",
		fullDescription: `            
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Concevoir une chaîne de traitement automatisée entre une interface utilisateur (Discord) et un moteur d'intelligence artificielle.</li>
                <li>Héberger une IA localement pour garantir la confidentialité des données et supprimer les coûts d'API tiers.</li>
                <li>Utiliser un orchestrateur de flux pour gérer la logique de communication sans coder chaque interaction manuellement.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Déploiement de l'outil d'automatisation <code>n8n</code> sur un Raspberry Pi 4 sous DietPi pour servir de cerveau central à l'infrastructure.</li>
                <li>Utilisation d'<code>Ollama</code> et configuration sur une machine locale pour traiter les modèles de langage (LLM & SLM) en utilisant la puissance de calcul du GPU.</li>
                <li>Mise en place une communication bidirectionnelle via API entre le Raspberry Pi et le PC local pour transmettre les questions et récupérer les réponses générées.</li>
                <li>Bot Discord agissant comme interface d'entrée-sortie, transformant les Slash Commands en déclencheurs pour le workflow n8n avant de renvoyer le résultat final à l'utilisateur.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Orchestration de micro-services et automatisation de flux de travail (n8n).</li>
                <li>Déploiement et consommation d'API pour l'intelligence artificielle locale (Ollama).</li>
                <li>Gestion de réseaux hybrides (communication entre PC et Raspberry Pi).</li>
                <li>Maîtrise des formats d'échange de données JSON pour les requêtes API.</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/n8n-FF6D5A?style=for-the-badge&logo=n8n&logoColor=white",
			"https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
			"https://img.shields.io/badge/AI-Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white",
			"https://img.shields.io/badge/Discord%20Bot-5865F2?style=for-the-badge&logo=discord&logoColor=white",
			"https://img.shields.io/badge/Raspberry%20Pi%204-A22846?style=for-the-badge&logo=raspberrypi&logoColor=white",
			"https://img.shields.io/badge/OS-DietPi%20(Debian)-699707?style=for-the-badge&logo=raspberrypi&logoColor=white",
			"https://img.shields.io/badge/API%20REST-0055FF?style=for-the-badge&logo=postman&logoColor=white",
		],
	},
	{
		id: "dietpi-infra",
		status: "success",
		statusText: "Terminé | Archivé",
		image: "assets/img/grass-projet.png",
		date: "Fin 2024 - Début 2025",

		title: "Infrastructure IoT & Monitoring",
		description:
			"Ce projet est né d'une expérimentation sur le partage de ressources réseau (GetGrass) et a évolué vers la mise en place d'une infrastructure d'administration système complète et d'un déploiement d'une flotte de Raspberry Pi Zero 2W sous DietPi avec tunnel VPN sécurisé et monitoring Discord.",
		fullDescription: `          
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Déployer des nœuds de calcul basse consommation sur différents réseaux locaux distants.</li>
                <li>Garantir un accès administrateur sécurisé sans ouverture de ports (NAT traversal).</li>
                <li>Automatiser la remontée d'informations système (santé, réseau, température).</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <ul>
                <li>Installation et optimisation de l'OS <code>DietPi</code> sur des Raspberry Pi Zero 2W afin de maximiser les performances de ces machines à ressources limitées.</li>
                <li>Utilisation de <code>Docker</code> afin d'isoler les services déployés et de faciliter les futures mises à jour logicielles.</li>
                <li>Configuration d'un tunnel VPN dédié pour permettre une administration SSH sécurisée à distance, même sur des réseaux locaux distincts.</li>
                <li>Réalisation d'un script Bash personnalisé qui s'exécute au démarrage pour envoyer des informations via un <code>Webhook Discord</code> contenant des données comme l'IP WAN et la température du CPU.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Administration système Linux (Debian/DietPi).</li>
                <li>Maîtrise de Docker et des micro-services.</li>
                <li>Scripting Bash et interaction avec des API (Webhooks Discord).</li>
                <li>Notions avancées en réseau (VPN, SSH Tunneling, Adressage IP).</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
			"https://img.shields.io/badge/Os-DietPi%20(Debian)-699707?style=for-the-badge&logo=raspberrypi&logoColor=white",
			"https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
			"https://img.shields.io/badge/Raspberry%20Pi%20Zero-A22846?style=for-the-badge&logo=raspberrypi&logoColor=white",
			"https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white",
			"https://img.shields.io/badge/Discord%20Webhook-5865F2?style=for-the-badge&logo=discord&logoColor=white",
		],
	},
	{
		id: "streaming-downloader",
		status: "success",
		statusText: "Stable | Développement à l'arrêt",
		image: "assets/img/str-dl_logo.png",
		date: "Août 2023 - Indéterminé",

		title: "Streaming-Downloader",
		description:
			"Solution logicielle développée en Python visant à simplifier et centraliser le téléchargement de contenus de multimédias depuis les plateformes de streaming les plus populaires.",
		fullDescription: `
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Centraliser plusieurs outils de téléchargement (CLI) dans une interface unique.</li>
                <li>Offrir une expérience utilisateur fluide via une Interface Homme-Machine (IHM).</li>
                <li>Automatiser la gestion des métadonnées et des formats de conversion.</li>
                <li>Permettre le téléchargement haute qualité (Spotify, SoundCloud, YouTube).</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <p>L'application repose sur une architecture modulaire intégrant :</p>
            <ul>
                <li>Moteur de téléchargement comme <code>yt-dlp</code> et <code>spotdl</code>.</li>
                <li>Développement d'une IHM intuitive pour éviter l'usage de lignes de commande.</li>
                <li>Support complet des URL Spotify, YouTube et SoundCloud et autres.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Développement d'interfaces homme-machine en Python.</li>
                <li>Manipulation et intégration de bibliothèques tierces.</li>
                <li>Compilation de scripts en exécutables avec PyInstaller (.exe).</li>
                <li>Gestion des flux multimédia et des formats d'encodage.</li>
                <li>Automatisation de scripts de téléchargement.</li>
            </ul>
        `,
		badges: [
			"https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
			"https://img.shields.io/badge/Build-PyInstaller-FFD43B?style=for-the-badge&logo=python&logoColor=white",
			"https://img.shields.io/badge/Lib-yt--dlp-222222?style=for-the-badge&logo=python&logoColor=white",
			"https://img.shields.io/badge/Lib-spotdl-1DB954?style=for-the-badge&logo=python&logoColor=white",
			"https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white",
			"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
		],
		links: [
			{
				url: "https://github.com/Ashinura/Streaming-Downloader",
				label: "GitHub Repo",
				icon: "fab fa-github",
			},
		],
	},
	{
		id: "ashe-bot",
		status: "danger",
		statusText: "Archivé | Développement arrêté",
		image: "assets/img/ashe-bot.png",
		date: "Fin 2022 - 2023",

		title: "Ashe - Bot Discord",
		description:
			"Bot de modération polyvalent multi-serveurs utilisant Discord.js v14 et MongoDB pour la gestion des données utilisateurs, exploitant les dernières fonctionnalités de l'API Discord.",
		fullDescription: `         
            <h2>Objectifs du projet</h2>
            <ul>
                <li>Automatiser la modération (système d'avertissements/warns).</li>
                <li>Migrer vers les 'Slash Commands' pour une meilleure expérience utilisateur.</li>
                <li>Assurer la persistance des données sur plusieurs serveurs simultanément.</li>
            </ul>
            
            <h2>Réalisations techniques</h2>
            <p>Le bot repose sur un environnement JavaScript moderne :</p>
            <ul>
                <li>Moteur développé sous <code>Node.js</code> avec la bibliothèque <code>Discord.js v14</code>.</li>
                <li>Base de données Utilisation de <code>MongoDB</code> (NoSQL) avec l'ODM <code>Mongoose</code> pour stocker les logs et les sanctions.</li>
                <li>Système de 'Command Handler' modulaire pour faciliter l'ajout de fonctionnalités.</li>
            </ul>
            
            <h2>Compétences développées</h2>
            <ul>
                <li>Manipulation de bases de données NoSQL.</li>
                <li>Gestion de l'asynchrone en JavaScript (async/await).</li>
                <li>Déploiement et maintenance d'une application Node.js sous Raspberry PI 4.</li>
                <li>Interactions avec des API REST et WebSockets.</li>
            </ul>
        `,

		badges: [
			"https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white",
			"https://img.shields.io/badge/Lib-Discord.js-5865F2?style=for-the-badge&logo=nodedotjs&logoColor=white",
			"https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
			"https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
			"https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white",
			"https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
		],
	},
];