// Cache untuk HTML dan script
const loadedScripts = new Set();
const htmlCache = new Map();

function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");

    const loadContent = (data) => {
      // Tambahkan animasi fade-in
      el.style.opacity = 0;
      setTimeout(() => {
        el.innerHTML = data;
        runPartialScripts(el);

        el.style.transition = "opacity 0.4s ease";
        el.style.opacity = 1;
      }, 100); // jeda sedikit sebelum isi diubah
    };

    if (htmlCache.has(file)) {
      loadContent(htmlCache.get(file));
      return;
    }

    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.text();
      })
      .then(data => {
        htmlCache.set(file, data);
        loadContent(data);
      })
      .catch(err => console.error(`Gagal memuat ${file}:`, err));
  });
}

function runPartialScripts(el) {
  el.querySelectorAll("script").forEach(oldScript => {
    const scriptKey = oldScript.src || oldScript.textContent.trim();

    // Skip kalau script sudah pernah dijalankan
    if (loadedScripts.has(scriptKey)) return;

    const newScript = document.createElement("script");

    if (oldScript.src) {
      newScript.src = oldScript.src;
    } else {
      newScript.textContent = oldScript.textContent;
    }

    document.body.appendChild(newScript);
    loadedScripts.add(scriptKey);
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);


