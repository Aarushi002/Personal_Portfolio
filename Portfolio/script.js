// On refresh or load, scroll to hero section
if (typeof history !== "undefined" && history.scrollRestoration) {
  history.scrollRestoration = "manual";
}
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("pageshow", function (e) {
  if (e.persisted) window.scrollTo(0, 0);
});

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navibar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

// Typewriter effect for role titles
const typewriterEl = document.getElementById("typewriter");
const roles = [
  "Software Developer",
  "Frontend Engineer",
  "Cinephile",
  "Full-Stack Developer",
  "Bibliophile",
  "Debug Detective 🐛"
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 80;
const deleteSpeed = 50;
const pauseAfterType = 2000;
const pauseAfterDelete = 600;

function typeWriter() {
  if (!typewriterEl) return;
  const current = roles[roleIndex];
  if (isDeleting) {
    typewriterEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex <= 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      charIndex = 0;
      setTimeout(typeWriter, pauseAfterDelete);
    } else {
      setTimeout(typeWriter, deleteSpeed);
    }
  } else {
    typewriterEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeWriter, pauseAfterType);
    } else {
      setTimeout(typeWriter, typeSpeed);
    }
  }
}
if (typewriterEl) setTimeout(typeWriter, 500);

// Hire me button: show "Yayyyyyyyyy" in place of (before someone else does) + confetti
const hireBtn = document.getElementById("hire-btn");
const ctaYay = document.getElementById("cta-yay");
const ctaSub = document.getElementById("cta-sub");
function showYay() {
  if (ctaSub) ctaSub.classList.add("hide");
  if (ctaYay) ctaYay.classList.add("show");
  if (typeof confetti === "function") {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.8 } });
  }
}
function hideYay() {
  if (ctaSub) ctaSub.classList.remove("hide");
  if (ctaYay) ctaYay.classList.remove("show");
}
if (hireBtn) {
  hireBtn.addEventListener("click", function(e) {
    showYay();
  });
  hireBtn.addEventListener("mouseenter", showYay);
  hireBtn.addEventListener("mouseleave", hideYay);
  var ctaBlock = document.querySelector(".cta-block");
  if (ctaBlock) ctaBlock.addEventListener("mouseleave", function() { setTimeout(hideYay, 200); });
}
