//navBar
function updateDateTime() {
    const now = new Date();

    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                    "Aug","Sep","Oct","Nov","Dec"];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const formatted = `${dayName} ${monthName} ${day}   ${hours}:${minutes} ${ampm}`;

    document.getElementById("datetime").textContent = formatted;
  }

  // Jalankan saat DOM siap
  document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });


document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-right li a");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.querySelector(".nav-right ul");

  // Klik menu → aktif langsung
  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
      navMenu.classList.remove("show"); // tutup dropdown setelah klik
    });
  });

  // Toggle dropdown menu
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Scroll spy pakai IntersectionObserver
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

//EXPERIENCES 
const experiences = [
  {
    img: "assets/experiences/LO.jpg",
    title: "Liaison Officer Marketing UPH",
    subtitle: "Since 2024 until now",
    description:
      "Assisted and coordinated groups of 20-30 students/parents, ensuring a seamless visit through logistics management, campus tours, and delivery of UPH promotional information.",
  },
  {
    img: "assets/experiences/PEMBEBAS2025.jpg",
    title: "PEMBEBAS UPH 2025",
    subtitle: "Member of Logistics Division - 2025",
    description:
      "Overseeing all equipment, supplies, and venue arrangements, and coordinating with other divisions to ensure timely fulfillment of needs for a smooth event from start to finish.",
  },
  {
    img: "assets/experiences/TEDxUPH2025.jpg",
    title: "TEDxUPH 2025",
    subtitle: "Member of Event Division - 2025",
    description:
      "Managing the planning, execution, coordination of TEDxUPH 2025 to ensure each session runs smoothly, with speakers, performers, and technical aspects well-arranged.",
  },
  {
    img: "assets/experiences/IDEA2025.jpg",
    title: "I-DEA 2025",
    subtitle: "Member of Publication and Registration Division - 2025",
    description:
      "Designing and managing event publicity and participant registration through effective communication, organized systems, and timely information.",
  },
  {
    img: "assets/experiences/IGC2025.png",
    title: "IGC 2025",
    subtitle: "Coordinator of Publication and Registration Division - 2025",
    description:
      "Coordinating event promotion and registration to ensure clear communication, efficient systems, and a smooth participant experience.",
  },
  {
    img: "assets/experiences/ACS.jpg",
    title: "Informatics Showcase",
    subtitle: "Presenter - 2025",
    description:
      "Delivering a summary of Informatics student projects and providing a detailed explanation of the systems used, from concept to implementation.",
  },
  {
    img: "assets/experiences/KEYSTONE2024.jpg",
    title: "KEYSTONE 2024",
    subtitle: "Member of Publication Division - 2024",
    description:
      "Managing event publicity, including promotional materials, social media, information distribution, and maintaining a positive public image.",
  },
  {
    img: "assets/experiences/STAGECREW.jpg",
    title: "Stage Crew UPH Graduation",
    subtitle: "Since 2024 until 2025",
    description:
      "Supporting stage management, ensuring smooth transitions during performances, and assisting with technical/logistics needs for the graduation ceremony.",
  },
  {
    img: "assets/experiences/FALCON14.jpg",
    title: "Falcon Project 14",
    subtitle: "Member of Escaperoom Division - 2024",
    description:
      "Responsible for designing the escape room experience, including theme development, layout planning, rule setting, and room setup to create an immersive and engaging environment.",
  },
  {
    img: "assets/experiences/IVILLAGE2024.jpg",
    title: "I-Village 2024",
    subtitle: "Volunteer - 2024",
    description:
      "Preparing the materials to be presented and guiding participants during the demonstration session to try using the taught application, as an effort to support UMKM in Bencongan Village.",
  },
  {
    img: "assets/experiences/FALCON13.jpg",
    title: "Falcon Project 13",
    subtitle: "Coordinator Decoration Division - 2023",
    description:
      "Coordinated design and setup of event decor, overseeing theme implementation, spatial arrangement, and ensuring environment aligns with overall concept to create an immersive experience.",
  },
  {
    img: "assets/experiences/IGC2023.jpg",
    title: "IGC 2023",
    subtitle: "Member of Publication and Registration Division - 2023",
    description:
      "Managed event publicity and registration processes, coordinating communication, promotional materials, and participant enrollment to ensure smooth outreach and seamless attendance.",
  },
  {
    img: "assets/experiences/ITRIP2024.jpg",
    title: "I-Trip 2023",
    subtitle: "Coordinator of Logistic Division - 2023",
    description:
      "Oversaw logistics coordination for the transport, event, managing equipment, supplies, and timely delivery to ensure smooth operations and support throughout the program.",
  },
];

// CONFIG
const cardsContainer = document.getElementById("cards-container");
const experienceCount = document.getElementById("experience-count");
const experiencesSection = document.getElementById("experiences");

// Render cards
experiences.forEach((exp, index) => {
  const card = document.createElement("div");
  card.className = "experience-card";

  const img = document.createElement("img");
  img.className = "card-image";
  img.src = exp.img;
  img.alt = exp.title;

  const content = document.createElement("div");
  content.className = "card-content";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = exp.title;

  const subtitle = document.createElement("p");
  subtitle.className = "card-subtitle";
  subtitle.textContent = exp.subtitle;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = exp.description;

  content.appendChild(title);
  content.appendChild(subtitle);
  content.appendChild(description);

  card.appendChild(img);
  card.appendChild(content);

  cardsContainer.appendChild(card);
});

experienceCount.textContent = experiences.length;

// Change background automatically
let bgIndex = 0;
setInterval(() => {
  bgIndex = (bgIndex + 1) % experiencesBackground.length;
  experiencesSection.style.backgroundImage = `url(${experiencesBackground[bgIndex].img})`;
}, 2000);

//Skills
const techStacks = {
  Backend: [
    { name: "Node.js", img: "assets/skills/nodejs.png" },
    { name: "mySQL", img: "assets/skills/mysql.png" },
    { name: "MongoDB", img: "assets/skills/mongodb.png" },
    { name: "Firebase", img: "assets/skills/firebase.png" },
    { name: "Supabase", img: "assets/skills/supabase.png" },
  ],
  Frontend: [
    { name: "Next.js", img: "assets/skills/nextjs.webp" },
    { name: "React", img: "assets/skills/react.png" },
    { name: "TypeScript", img: "assets/skills/typescript.webp" },
    { name: "Vercel", img: "assets/skills/vercel.webp" },
  ],
  Design: [
    { name: "Figma", img: "assets/skills/figma.webp" },
    { name: "Canva", img: "assets/skills/canva.webp" },
  ],
  Others: [
    { name: "Git", img: "assets/skills/git.png" },
    { name: "GitHub", img: "assets/skills/github.png" },
    { name: "MS Office", img: "assets/skills/office.png" },
    { name: "CapCut", img: "assets/skills/capcut.webp" },
  ],
};

const tabs = document.querySelectorAll('.tab-item');
  const techGrid = document.getElementById('tech-grid');
  let activeTab = "Backend";

  function renderTech(tab) {
    techGrid.innerHTML = '';
    techStacks[tab].forEach(tech => {
      const card = document.createElement('div');
      card.className = 'tech-card';
      card.innerHTML = `
        <img src="${tech.img}" alt="${tech.name}">
        <p>${tech.name}</p>
      `;
      techGrid.appendChild(card);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeTab = tab.dataset.tab;
      renderTech(activeTab);
    });
  });

  // Render awal
  renderTech(activeTab);
//Project
const projects = [
  {
          title: "This Portfolio",
          description:
            "A modern portfolio website highlighting my projects, skills, and experiences, designed for responsiveness, smooth animations, and seamless user navigation.",
          role: "Developer",
          tech: "CSS, HTML, JS, Node.js",
          youtube:
            "https://gggrc.github.io/portfolio2/",
          image: "assets/projects/ThisPortfolio.png",
          github:
            "https://github.com/gggrc/portfolio2",
        },
        {
          title: "Photobooth Website (Ongoing)",
          description:
            "An interactive web application that allows users to take, customize, and download their photos directly from the browser. It features real-time camera access, fun filters, and an easy-to-use interface designed for events and personal use. Built with a responsive layout to ensure smooth performance across devices.",
          role: "UI/UX Designer and Frontend Developer",
          tech: "Figma, Node.js, Express",
          youtube:
            "https://www.figma.com/proto/PHlHTfhYNFNdT4Zjfu5b1Z/PROTOTYPE-PHOTOBOOTH?node-id=641-8584&p=f&t=cNClPzZeR1n3pNi0-0&scaling=contain&content-scaling=fixed&page-id=641%3A8366&starting-point-node-id=641%3A8584",
          image: "assets/projects/Photobooth.jpg",
          github:
            "https://www.figma.com/proto/PHlHTfhYNFNdT4Zjfu5b1Z/PROTOTYPE-PHOTOBOOTH?node-id=641-8584&p=f&t=cNClPzZeR1n3pNi0-0&scaling=contain&content-scaling=fixed&page-id=641%3A8366&starting-point-node-id=641%3A8584",
        },
        {
          title: "Website Database GKI Karawaci",
          description:
            "A personal portfolio website showcasing experiences, projects, and skills. Built with React and TypeScript, it focuses on responsive design, smooth animations, and intuitive navigation to provide a professional and modern showcase of my work.",
          role: "Fullstack Developer",
          tech: "React, TypeScript, Supabase, Next.js, Node.js",
          youtube: "https://gkikarawaci.vercel.app/",
          image: "assets/projects/DatabaseGKIKarawaci.png",
          github: "https://github.com/gggrc/gkikarawaci",
        },
        {
          title: "Portfolio",
          description:
            "A personal portfolio website showcasing experiences, projects, and skills. Built with React and TypeScript, it focuses on responsive design, smooth animations, and intuitive navigation to provide a professional and modern showcase of my work.",
          role: "Software Developer",
          tech: "React, CSS, TypeScript",
          youtube: "https://gracepatricia.vercel.app/",
          image: "assets/projects/Portfolio.jpg",
          github: "https://github.com/gggrc/portfolio",
        },
        {
          title: "Prayer Link",
          description:
            "PrayerLink is an innovative spiritual app created to strengthen connections through the power of prayer. In a fast-paced world where many feel isolated in their struggles, with PrayerLink, prayer is no longer just a personal act—it becomes a movement of community, linking hearts, hopes, and faith in one platform.",
          role: "Fullstack Developer",
          tech: "T3 Stack, Next.js, tRPC, Prisma, Firebase",
          youtube: "https://youtu.be/YjrGjn3tolU",
          image: "assets/projects/PrayerLink.jpg",
          github: "https://github.com/gggrc/ncfiprayer",
        },
        {
          title: "KeyToHatch",
          description:
            "KeytoHatch is a simple, fun, and educational Java-based typing game that challenges your typing speed and accuracy. It features a basic GUI using Java Swing and offers three different game modes for players of all skill levels.",
          role: "UI/UX Designer and Game Developer",
          tech: "Aseprite and Java",
          youtube: "https://youtu.be/-HQPywMF3p8",
          image: "assets/projects/KeyToHatch.jpg",
          github: "https://github.com/gggrc/KeyToHatch",
        },
        {
          title: "Algorithm Visualizer",
          description:
            "An HTML visualizer for sorting, searching, and pathfinding with step-by-step animations, speed controls, and responsive UI for learning and comparison.",
          role: "Developer",
          tech: "HTML",
          youtube: "https://youtu.be/qS6g4z6CGlQ",
          image: "assets/projects/AlgorithmVisualizer.jpg",
          github: "https://github.com/gggrc/AlgorithmVisualizer",
        },
        {
          title: "Random Dice",
          description:
            "A simple web app that generates random dice rolls with a click, featuring a clean interface and responsive design for quick and easy use.",
          role: "Developer",
          tech: "HTML, CSS, JavaScript",
          youtube: "https://gggrc.github.io/RandomDice/",
          image: "assets/projects/RandomDice.png",
          github: "https://github.com/gggrc/RandomDIce",
        },
        {
          title: "Exercise Flexbox",
          description:
            "Learning Flexbox by building a responsive webpage layout with HTML and CSS, demonstrating various Flexbox properties and techniques for modern web design.",
          role: "Developer",
          tech: "HTML, CSS",
          youtube: "https://gggrc.github.io/exerciseFlex/",
          image: "assets/projects/flexBoxExercise.png",
          github: "https://github.com/gggrc/exerciseFlex",
        },
      
];

let currentIndex = 0;

const mainImg = document.querySelector(".project-main-box img");
const mainTitle = document.querySelector(".project-info h3");
const mainRole = document.querySelector(".project-info .role");
const mainTech = document.querySelector(".project-info .tech");
const mainDesc = document.querySelector(".project-info p");
const mainLinks = document.querySelector(".project-info .links");

const thumbsContainer = document.getElementById("projects-thumbs");
const prevBtn = document.querySelector(".nav-btn.prev");
const nextBtn = document.querySelector(".nav-btn.next");

// Render main content
function renderMain(index) {
  const proj = projects[index];
  mainImg.src = proj.image;
  mainImg.alt = proj.title;
  mainTitle.textContent = proj.title;
  mainRole.textContent = `Role: ${proj.role}`;
  mainTech.textContent = `Tech: ${proj.tech}`;
  mainDesc.textContent = proj.description;

  // Tambah link
  mainLinks.innerHTML = `
    <a href="${proj.youtube}" target="_blank" class="links">Demo</a> 
    <a href="${proj.github}" target="_blank" class="links">Code</a>
`;
}

// Render thumbnails
function renderThumbs() {
  // Hapus dulu isi lama
  thumbsContainer.querySelectorAll(".thumb-card").forEach((el) => el.remove());

  projects.forEach((proj, i) => {
    const thumb = document.createElement("div");
    thumb.classList.add("thumb-card");
    const img = document.createElement("img");
    img.src = proj.image;
    img.alt = proj.title;
    thumb.appendChild(img);

    thumb.addEventListener("click", () => {
      currentIndex = i;
      renderMain(currentIndex);
    });

    thumbsContainer.insertBefore(thumb, nextBtn); // sebelum tombol >
  });
}

// Navigasi
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projects.length) % projects.length;
  renderMain(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projects.length;
  renderMain(currentIndex);
});

// Inisialisasi
renderMain(currentIndex);
renderThumbs();
