(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const config = window.RIWAYAT_CONFIG || {};
  const number = String(config.whatsappNumber || "").replace(/\D/g, "");
  const message = String(config.whatsappMessage || "Hello Riwayat Eventz! I'd like to enquire.").slice(0, 500);
  const whatsappLink = document.querySelector("#whatsapp-link");

  if (whatsappLink && /^\d{10,15}$/.test(number) && !/^0+$/.test(number)) {
    whatsappLink.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  } else if (whatsappLink) {
    whatsappLink.href = "https://wa.me/";
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.alert("Please add the correct WhatsApp number in assets/config.js before publishing.");
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
