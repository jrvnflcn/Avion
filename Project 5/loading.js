function fadeOutContainer() {
    const container = document.querySelector('.loadingio-spinner-ellipsis-nq4q5u6dq7r');
    const inputPage = document.getElementById('inputPage');
    
    container.classList.add('fade-out'); // Add fade-out class

    // Wait for fade-out to complete before displaying the input page
    setTimeout(() => {
        container.style.display = 'none'; // Hide loading container // Show input page
        inputPage.classList.remove('d-none');
        inputPage.classList.add('fade-in'); // Add fade-in class
    }, 1000); // Duration of the fade-out animation
}

// Wait until the last image's animation is complete
const lastAnimationDelay = 6; // Delay of the last image
setTimeout(fadeOutContainer, (lastAnimationDelay + 1) * 1000); // Add 1 second buffer