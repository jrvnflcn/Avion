let progress = 0;
const progressBar = document.getElementById('progress-bar');

const interval = setInterval(() => {
    if (progress < 100) {
        progress += 1; // Increment the progress
        progressBar.style.width = progress + '%'; // Update the progress bar width
    } else {
        clearInterval(interval); // Stop when reaching 100%
        // Optionally, redirect to another page or remove the loading screen
        setTimeout(() => {
            // Redirect or show the main content
            alert('Loading complete!'); // Placeholder action
        }, 1000); // Show the alert for 1 second before moving on
    }
}, 50); // Adjust the interval time for loading speed

