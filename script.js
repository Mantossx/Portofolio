AOS.init({
    once: true,     
    offset: 200,    
    duration: 800,  
    easing: 'ease-out-cubic',
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const background = document.querySelector('.background-glow');
    
    background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));



