const words = ['creative', 'crafting', 'artistic'];
let currentIndex = 0;

function changeWord() {
    const changingWord = document.getElementById('changing-word');
    changingWord.style.transition = 'opacity 0.5s ease-in-out';
    changingWord.style.opacity = '0';
    setTimeout(() => {
        changingWord.textContent = words[currentIndex];
        changingWord.style.opacity = '1';
        currentIndex = (currentIndex + 1) % words.length;
    }, 500);
}

setInterval(changeWord, 3000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple interactive effects for portfolio
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('body');
    
    // 1. Create stars on double click/tap
    let lastTap = 0;
    
    // Handle double tap for mobile
    mainContent.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        
        if (tapLength < 500 && tapLength > 0) {
            createStar(e);
        }
        lastTap = currentTime;
    });

    // Handle double click for desktop
    mainContent.addEventListener('dblclick', createStar);

    function createStar(e) {
        const star = document.createElement('div');
        const x = e.clientX || e.changedTouches?.[0]?.clientX || 0;
        const y = e.clientY || e.changedTouches?.[0]?.clientY || 0;
        
        star.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 20px;
            height: 20px;
            background: gold;
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            transform: translate(-50%, -50%);
            animation: fadeOut 1s ease-out forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 1000);
    }

    // 2. Simple hover glow effect on project items
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.5)';
            item.style.transform = 'scale(1.02)';
            item.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = 'none';
            item.style.transform = 'scale(1)';
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        function createConfetti() {
            const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
            
            for (let i = 0; i < 50; i++) { 
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => {
                        confetti.remove();
                    }, 3000);
                }, i * 50); 
            }
        }
    
        createConfetti();
    });
});