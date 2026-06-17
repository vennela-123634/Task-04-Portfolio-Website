const greetingElement = document.getElementById("greeting");
const hour = new Date().getHours();
if (hour < 12) greetingElement.textContent = "Good Morning!";
else if (hour < 18) greetingElement.textContent = "Good Afternoon!";
else greetingElement.textContent = "Good Evening!";

window.onscroll = function() {
    const header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
};

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});