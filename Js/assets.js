/* ===== MODO CLARO / OSCURO ===== */
(function () {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
})();

function insertThemeToggle() {
  const btn = document.createElement("button");
  btn.className = "theme-toggle";
  btn.setAttribute("aria-label", "Cambiar modo claro/oscuro");
  btn.setAttribute("title", "Cambiar tema");
  btn.innerHTML = `<span class="theme-toggle__thumb">
    ${document.documentElement.getAttribute("data-theme") === "light" ? "☀️" : "🌙"}
  </span>`;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    btn.querySelector(".theme-toggle__thumb").textContent = next === "light" ? "☀️" : "🌙";
  });

  document.body.appendChild(btn);
}

document.addEventListener("DOMContentLoaded", insertThemeToggle);

/* ===== BARRA DE NAVEGACIÓN ===== */
var navegador = document.getElementById("barNav");
navegador.innerHTML = `<nav class="navBar" aria-label="Navegación principal">
  <a href="https://github.com/UlisesLA" target="_blank" rel="noopener noreferrer">Repositorios</a>
  <a href="#">Programación Web</a>
  <a href="../index.html">ULISES</a>
  <a href="../Desarrollo3d.html">Desarrollo 3D</a>
  <a href="../IA.html">Inteligencia Artificial</a>
</nav>`;

/* ===== REDES SOCIALES — solo GitHub y LinkedIn ===== */
var redes = document.getElementById("redesSociales");
redes.innerHTML = `
<div class="contacto" role="list" aria-label="Redes sociales">

  <div class="icon" role="listitem">
    <a href="https://github.com/UlisesLA" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Ulises">
      <svg height="80" width="80" aria-hidden="true">
        <circle cx="40" cy="40" r="35" stroke="white" stroke-width="2" fill="none"></circle>
      </svg>
      <i class="bx bxl-github"></i>
    </a>
  </div>

  <div class="icon" role="listitem">
    <a href="https://www.linkedin.com/in/ulises-lopez-7659771b8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Ulises">
      <svg height="80" width="80" aria-hidden="true">
        <circle cx="40" cy="40" r="35" stroke="white" stroke-width="2" fill="none"></circle>
      </svg>
      <i class="bx bxl-linkedin"></i>
    </a>
  </div>

</div>`;

/* ===== PIE DE PÁGINA ===== */
var pie = document.getElementById("piePagina");
pie.innerHTML = `<p>Todos los derechos reservados &copy; Ulises Lopez Amezcua ${new Date().getFullYear()}</p>`;