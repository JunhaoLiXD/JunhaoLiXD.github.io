// Add event listener to all links starting with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default jump behavior
        e.preventDefault();
        
        // Find the target section
        const target = document.querySelector(this.getAttribute('href'));
        
        // Scroll smoothly to the target
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});