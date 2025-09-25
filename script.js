document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const heartContainer = document.getElementById('heart-container');

    // Navigation function
    function navigateToPage(pageNumber) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(`page${pageNumber}`).classList.add('active');
    }

    // Button event listeners
    document.getElementById('nextBtn1').addEventListener('click', () => {
        navigateToPage(2);
    });

    document.getElementById('nextBtn2').addEventListener('click', () => {
        navigateToPage(3);
    });

    document.getElementById('mandiSudahBtn').addEventListener('click', () => {
        navigateToPage(5);
    });

    document.getElementById('mandiBelumBtn').addEventListener('click', () => {
        navigateToPage(4);
    });
    
    document.getElementById('nextBtn4').addEventListener('click', () => {
        navigateToPage(6);
    });
    
    document.getElementById('nextBtn5').addEventListener('click', () => {
        navigateToPage(6);
    });

    // Aura effect
    document.addEventListener('mousemove', (e) => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        
        heartContainer.appendChild(heart);

        // Remove the heart after a short delay
        setTimeout(() => {
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0.5) rotate(-45deg)';
            setTimeout(() => heart.remove(), 500); // Clean up the element
        }, 100);
    });
});
