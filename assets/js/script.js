const username = "TlawXp";

// Daftar manual repositori + data visual (karena GitHub API tidak punya thumbnail)
const projects = [
  {
    name: "anime-gallery",
    description: "Galeri gambar anime dengan tampilan aesthetic.",
    image: "assets/img/illust_125690263_20250906_121359.png", // path gambar lokal
    demo: "https://tlawxp.github.io/anime-gallery/",
    github: "https://github.com/TlawXp/anime-gallery"
  },
  {
    name: "game-ui",
    description: "Tampilan UI untuk game RPG berbasis web.",
    image: "assets/img/illust_128618530_20250906_121231.png",
    demo: "https://tlawxp.github.io/game-ui/",
    github: "https://github.com/TlawXp/game-ui"
  },
  // Tambahkan proyek lainnya di sini
];

const container = document.getElementById("github-projects");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="project-thumb" />
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div class="button-group">
      <a href="${project.demo}" target="_blank">Live Preview</a>
      <a href="${project.github}" target="_blank">GitHub</a>
    </div>
  `;
  container.appendChild(card);
});

