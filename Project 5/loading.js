function fadeOutContainer() {
    const container = document.querySelector('.loadingio-spinner-ellipsis-nq4q5u6dq7r');
    const inputPage = document.getElementById('inputPage');

    container.classList.add('fade-out'); 

    setTimeout(() => {
        container.style.display = 'none'; 
        inputPage.classList.remove('d-none');
        inputPage.classList.add('fade-in'); 
    }, 1000); 
}

const lastAnimationDelay = 6; 
setTimeout(fadeOutContainer, (lastAnimationDelay + 1) * 1000); 