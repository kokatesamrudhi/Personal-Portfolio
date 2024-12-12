window.addEventListener('load', () => {
    const loader = document.getElementById('loader') as HTMLElement;
    const mainContent = document.getElementById('main-content') as HTMLElement;

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); 

    const changingWord = document.getElementById('changing-word') as HTMLElement;
    const words = ['creative', 'crafting', 'artistic'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        changingWord.textContent = words[currentIndex];
    }, 2500); 
});