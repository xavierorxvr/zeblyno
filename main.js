window.addEventListener('DOMContentLoaded', () => {
    console.log("HTML loaded, JS ready!");
    const intro = document.querySelector('.intro');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let maxScroll = 400;
        let opacity = 1 - scrollY / maxScroll;
        opacity = Math.max(0, opacity);
        intro.style.opacity = opacity;

        if (window.scrollY > maxScroll) {
            backToTop.classList.add('show'); // fade in
        } else {
            backToTop.classList.remove('show'); // fade out
        }
    });
       backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    
});

});
