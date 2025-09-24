




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
const container = document.getElementById("cards-container");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const visibleCards = 3;
let clonesCount = Math.min(visibleCards, experiences.length);
let cardWidth = 320;
let currentCenter = 0;
let isAnimating = false;

// RENDER
function renderCards() {
  if (!container) return;
  container.innerHTML = "";

  clonesCount = Math.min(visibleCards, experiences.length);
  const firstClones = experiences.slice(0, clonesCount).map((e) => ({ ...e, clone: true }));
  const lastClones = experiences.slice(-clonesCount).map((e) => ({ ...e, clone: true }));
  const allSlides = [...lastClones, ...experiences, ...firstClones];

  allSlides.forEach((exp, idx) => {
    const card = document.createElement("div");
    card.className = "experience-card";
    card.dataset.idx = idx;
    card.innerHTML = `
      <img src="${exp.img}" alt="${exp.title}">
      <h3>${exp.title}</h3>
      <p class="subtitle">${exp.subtitle || ""}</p>
      <p class="desc">${exp.description || ""}</p>
    `;

    card.addEventListener("click", () => {
      if (isAnimating) return;
      currentCenter = idx;
      snapToIndex();
    });

    container.appendChild(card);
  });

  computeCardWidth();
  currentCenter = clonesCount;
  updateCarousel(false);
}

function cards() {
  return Array.from(container?.querySelectorAll(".experience-card") || []);
}

function computeCardWidth() {
  const c = cards();
  if (c.length >= 2) {
    const r0 = c[0].getBoundingClientRect();
    const r1 = c[1].getBoundingClientRect();
    cardWidth = Math.round(r1.left - r0.left) || c[0].offsetWidth;
  } else if (c.length === 1) {
    cardWidth = c[0].offsetWidth;
  }
}

function updateActiveCard() {
  cards().forEach((card) => card.classList.remove("active"));
  const centerCard = cards()[currentCenter];
  if (centerCard) centerCard.classList.add("active");
}

function updateCarousel(animate = true) {
  const leftIndex = currentCenter - Math.floor(visibleCards / 2);
  const offset = leftIndex * cardWidth;
  if (container) {
    container.style.transition = animate ? "transform 0.5s ease" : "none";
    container.style.transform = `translateX(-${offset}px)`;
  }
  updateActiveCard();
}

function snapToIndex() {
  if (isAnimating) return;
  isAnimating = true;
  setButtonsDisabled(true);

  updateCarousel(true);
  container?.addEventListener(
    "transitionend",
    () => {
      handleInfiniteLoop();
      isAnimating = false;
      setButtonsDisabled(false);
    },
    { once: true }
  );
}

function handleInfiniteLoop() {
  const originalsStart = clonesCount;
  const originalsEnd = clonesCount + experiences.length - 1;

  if (currentCenter > originalsEnd) currentCenter -= experiences.length;
  if (currentCenter < originalsStart) currentCenter += experiences.length;

  updateCarousel(false);
}

function setButtonsDisabled(disabled) {
  if (prevBtn) prevBtn.disabled = disabled;
  if (nextBtn) nextBtn.disabled = disabled;
}

function attachControls() {
  nextBtn?.addEventListener("click", () => {
    if (isAnimating) return;
    currentCenter++;
    snapToIndex();
  });
  prevBtn?.addEventListener("click", () => {
    if (isAnimating) return;
    currentCenter--;
    snapToIndex();
  });
}

window.addEventListener("resize", () => {
  computeCardWidth();
  updateCarousel(false);
});

renderCards();
attachControls();