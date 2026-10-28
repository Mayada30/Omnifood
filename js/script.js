"use strict";

// Set current year
const yearEl = document.querySelector(".year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

// Smooth scrolling (only for in-page "#" links; mailto:/tel: keep working)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionEl = document.querySelector(href);
      if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Always CLOSE the mobile nav (old code toggled it, which re-opened it on desktop)
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");
new IntersectionObserver(
  ([ent]) => document.body.classList.toggle("sticky", !ent.isIntersecting),
  { root: null, threshold: 0, rootMargin: "-80px" }
).observe(sectionHeroEl);
