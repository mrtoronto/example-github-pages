document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const counterButton = document.getElementById('counterBtn');
    let count = 0;

    counterButton.addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
        
        // Add a little animation
        counterElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterElement.style.transform = 'scale(1)';
        }, 200);
    });
}); 