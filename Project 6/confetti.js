let confettiInterval;

function startConfetti() {
  confettiInterval = setInterval(() => {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = confetti.style.width; 
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove(); 
    }, 3000); 
  }, 20); 
}

function stopConfetti() {
  clearInterval(confettiInterval);
  document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
}