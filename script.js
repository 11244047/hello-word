document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('interactive-btn');
    const title = document.querySelector('h1');
    const card = document.querySelector('.glass-card');
    
    // Array of greetings in different languages
    const greetings = [
        "Hello, World!",
        "Hola, Mundo!",
        "Bonjour, Monde!",
        "Hallo, Welt!",
        "Ciao, Mondo!",
        "こんにちは世界",
        "你好，世界",
        "안녕하세요 세계"
    ];

    let currentGreeting = 0;

    // Smooth transition for text changing
    title.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

    btn.addEventListener('click', () => {
        // Fade out
        title.style.opacity = 0;
        title.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            // Change text
            currentGreeting = (currentGreeting + 1) % greetings.length;
            title.textContent = greetings[currentGreeting];
            
            // Fade in from below
            title.style.transform = 'translateY(10px)';
            
            // Trigger reflow
            void title.offsetWidth;
            
            title.style.opacity = 1;
            title.style.transform = 'translateY(0)';
        }, 400);
    });
    
    // 3D Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
        
        // Apply transform only if card animation has finished
        if (getComputedStyle(card).opacity == 1) {
             card.style.transform = `translateY(0) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        }
    });
    
    // Reset transform when mouse leaves window
    document.addEventListener('mouseleave', () => {
        card.style.transform = `translateY(0) rotateY(0deg) rotateX(0deg)`;
        card.style.transition = `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
        
        setTimeout(() => {
            card.style.transition = '';
        }, 800);
    });
});
