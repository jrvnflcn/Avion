//***********************************************Functions*******************************************************
const totalImages = 13; // Always remember to replace this with the actual number of images in the assets folder
const backgroundImages = [];

for (let i = 1; i <= totalImages; i++) {
    backgroundImages.push(`assets/${i}.jpg`);
}

function setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const selectedImage = backgroundImages[randomIndex];
    document.body.style.backgroundImage = `url(${selectedImage})`;
}

function createChecklistItem(goal) {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` 
        <input type="checkbox" onchange="toggleStrikeThrough(event)"> 
        <button class="btn btn-custom" style="padding: 2px 2px !important;" onclick="toggleStrikeThrough(event)" id="goalItem">${goal}</button> 
        <button class="close-btn" onclick="removeChecklistItem(event)">✖</button>
    `;
    return listItem;
}

function toggleStrikeThrough(event) {
    const target = event.target;
    const listItem = target.closest('li');   
    if (target.type === 'checkbox') {
        listItem.classList.toggle('strikethrough', target.checked);
    } 
    else if (target.id === 'goalItem') {
        listItem.classList.toggle('strikethrough');
        const checkbox = listItem.querySelector('input[type="checkbox"]');
        checkbox.checked = listItem.classList.contains('strikethrough');
    }
}

function removeChecklistItem(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.remove();

        const goalList = document.getElementById("goalList");
        const mainGoalList = document.getElementById("mainGoalList");
        const goalListContainer = document.getElementById("goalListContainer");

        if (goalList.children.length === 0 && mainGoalList.children.length === 0) {
            goalListContainer.classList.remove('visible');
        }
    }
}

function handleGoalSubmission(event) {
    if (event.key === "Enter") {
        const goalInput = document.getElementById("goalInput");
        const goalText = goalInput.value.trim();

        if (goalText !== "") {
            const isMainGoalChecked = document.getElementById("mainGoalCheckbox").checked;
            const goalListContainer = document.getElementById("goalListContainer");
            const goalList = document.getElementById("goalList");
            const mainGoalList = document.getElementById("mainGoalList");

            if (!goalListContainer.classList.contains('visible')) {
                goalListContainer.classList.add('visible');
            }

            if (isMainGoalChecked) {
                mainGoalList.appendChild(createChecklistItem(goalText)); 
            } else {
                goalList.classList.add('fw-light');
                goalList.appendChild(createChecklistItem(goalText)); 
            }

            
            if (window.innerWidth < 950) {
             
            }

            goalInput.value = "";
        }
    }
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const timeString = `${formattedHours}<span id="colon" class="colon">:</span>${formattedMinutes} ${ampm}`;
    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    const dateString = timeString + ', ' + dayString;
    document.querySelector("#time").innerHTML = dateString;

}

let colonVisible = true;
function blinkColon() {
    const colon = document.getElementById("colon");
    colon.classList.toggle('hidden', !colonVisible);
    colonVisible = !colonVisible;
}

function showGreeting() {
    const nickname = document.getElementById("nameInput").value;
    if (nickname.trim()) {
        const greetingSpan = document.getElementById('greeting');
        const currentHour = new Date().getHours();
        const inputPage = document.getElementById("inputPage");
        const greetingPage = document.getElementById("greetingPage");
        const wholeBody = document.querySelector("body");
        wholeBody.classList.remove('overflow-hidden')
        inputPage.classList.add('d-none');
        greetingPage.classList.remove('hidden');
        greetingPage.classList.add('visible');
        setTimeout(() => {
            inputPage.style.display = 'none';
        }, 800);          

        if (currentHour < 12) {
                greetingSpan.textContent = `Good Morning, ${nickname}`;
            } else if (currentHour < 18) {
                greetingSpan.textContent = `Good Afternoon, ${nickname}`;
            } else {
                greetingSpan.textContent = `Good Evening, ${nickname}`;
            }

    }
}

const quotes = [
    "It’s up to me to decide who I want to be and to cut my own path. No one can tell me what to do. — Chiori",
    "Even if life’s all in a jumble, you can sort it out as long as there’s a whisper of the wind. — Venti",
    "Every journey has its final day. Don’t rush. — Zhongli",
    "Rain… If only it could cleanse the corrupt souls of this world. — Diluc",
    "A Vision may seem like a great tool, but one day, the power one accumulates always finds a way to turn back on you. — Lisa",
    "Can freedom mandated by the God of Freedom be considered freedom at all? — Venti",
    "You should know that all power comes at a price. For every bit of power you gain, so too do you gain more responsibility. — Zhongli",
    "Come on Traveler, let’s go! The world is full of lost ballads just waiting to be rediscovered. — Venti",
    "Going out into the world and investigating, turning the 'unknown' into the 'known.' Ahhh, I missed this feeling. — Albedo",
    "Should the day ever come that we are not together, you will continue to shine like gold in my memories. — Zhongli",
    "Power is necessary if we are to meet our objectives. — Diluc",
    "Mwuhahaha, lucky all my new bombs are waterproof! — Klee",
    "The darkness that seethes with evil, full of demons that must be vanquished, will take more than a blade to be torn asunder. — Diluc",
    "Relationships are… quite troublesome. Once you establish a relation with someone, you must continue to maintain it; if you lose contact, you must reestablish the relation. — Albedo",
    "Listen, as long as you stick to your own path, it doesn’t matter what Mother Nature throws at you. — Diluc",
    "My Vision can’t turn back time. But at least it gives me the power to protect the people that matter most. — Qiqi",
    "A successful day starts from the morning. Let’s give it our all today. — Jean",
    "I’m not lazy, I just know to save my energy for when I need it most. — Lisa",
    "There’s just never enough time, is there? Even when I remove the most troublesome matters from my schedule, I still can’t find enough time for everything. — Albedo",
    "I swear by this sword, victory shall be yours. — Jean",
    "Do you wanna come fish blasting with me? I’ll get grounded for a whole day, but it’s way worth it coz the fish taste sooo good! — Klee",
    "A true knight can’t afford to be a picky eater. — Jean",
    "There’s no such thing as pure freedom in this world. Even the wind cannot blow on forever. — Wanderer",
    "Some use the wind’s whistling to drown out the sound of their crimes. — Diluc",
    "My past? So, you want to get to know me a little better, huh? That’s a story for another day. But I’m touched that you asked. — Lisa",
    "Every course of action has its risks. Be careful. — Diluc",
    "My greatest wish? It has always been to roam free and experience the whole world. — Venti",
    "Only glorious victories are recorded in legends and history books. Surely even the great knights of old must have had their struggles? Wind, please show me the path. — Jean",
    "The past cannot be changed, and the future cannot be foretold. As a result, I make sure to always cherish the here and now. — Cyno",
    "The past is set in stone, but you can keep moving on. And the longer your future lasts, the shorter your past will become, until one day it is but a tiny fraction of your life. — Nahida",
    "Visions are a light in the sea of darkness that surrounds those who have lost their way. But for those who have faith, they are little more than badges of conviction. — Diluc",
    "Osmanthus wine tastes the same as I remember… But where are those who share the memory? — Zhongli",
    "Don’t be afraid to make mistakes. It’s all part of the learning process. — Tighnari",
    "Should the day ever come that we are not together, you will continue to shine like gold in my memories. — Zhongli",
    "Only once you know and respect death can you truly understand the value of life. — Hu Tao",
    "Perhaps empathy is mankind’s proudest achievement after all? — Azhdaha",
    "People try to avoid pain and stay in their perceived bubbles of safety out of an instinct to protect themselves. This is human nature, but it is also one of their weaknesses. — Nahida",
    "Get some good rest! Ya know… Use the bathroom and flush your anxiety dookie away. — Nahida",
    "But the discussion is meaningless if everyone has the same opinion, no? — Zhongli",
    "My Vision can’t turn back time. But at least it gives me the power to protect the people that matter most. — Qiqi",
    "In the end, all that remains is beautiful. Those who part will come to meet again in Sarva. — Arama",
    "It’s important to keep your priorities straight. — Alhaitham"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function randomizeQuote() {
    const quotesElement = document.getElementById("quotes");

    quotesElement.classList.remove('fade-in');
    quotesElement.classList.add('fade-out');

    setTimeout(() => {

        quotesElement.textContent = getRandomQuote();

        quotesElement.classList.remove('fade-out');
        quotesElement.classList.add('fade-in');
    }, 500); 
}

function editQuote() {
    const newQuote = prompt("Edit your quote:", document.getElementById("quotes").textContent);
    if (newQuote) {
        document.getElementById("quotes").textContent = newQuote;
    }
}

function handleResize() {
    const goalListContainer = document.getElementById("goalListContainer");
    if (window.innerWidth < 950) {
        goalListContainer.classList.remove('visible');
        goalListContainer.classList.add('hidden'); 
    }
}

function toggleGoalList() {
    const goalListContainer = document.getElementById("goalListContainer");
    if (goalListContainer.classList.contains('hidden')) {
        goalListContainer.classList.remove('hidden');
        goalListContainer.classList.add('visible');
    } else {
        goalListContainer.classList.remove('visible');
        goalListContainer.classList.add('hidden');
    }
}

function closeGoalList() {
    const goalListContainer = document.getElementById("goalListContainer");
    goalListContainer.classList.remove('visible');
    goalListContainer.classList.add('hidden');
}


//********************************************Event Listeners Starts Here*********************************************

document.addEventListener("DOMContentLoaded", () => {


    const input = document.getElementById("nameInput");
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            showGreeting(); 
            document.getElementById('player').play(); 
        }
    });

    const playPause = document.getElementById('togglePlayPause');
    playPause.addEventListener('click', function() {
        const player = document.getElementById('player');
        const playIcon = document.getElementById('playIcon');
        const pauseIcon = document.getElementById('pauseIcon');
    
        if (player.paused) {
          player.play();  
          playIcon.style.display = 'none';  
          pauseIcon.style.display = 'inline'; 
        } else {
          player.pause();  // Pause the audio
          playIcon.style.display = 'inline';  
          pauseIcon.style.display = 'none'; 
        }
    });

    const goalInput = document.getElementById("goalInput");
    goalInput.addEventListener("keypress", handleGoalSubmission);

    const quotesElement = document.getElementById("quotes");
    quotesElement.addEventListener("click", randomizeQuote);

    const toggleBtn = document.getElementById("toggleGoalListBtn");
    const goalListContainer = document.getElementById("goalListContainer");
    const hideGoalListBtn = document.getElementById("hideGoalListBtn"); 

    function updateToggleButtonVisibility() {
        if (goalListContainer.classList.contains('visible')) {
            toggleBtn.style.display = 'none'; 
        } else {
            toggleBtn.style.display = 'block'; 
        }
    }

    toggleBtn.addEventListener("click", () => {
        goalListContainer.classList.toggle('visible');
        updateToggleButtonVisibility();
    });

    hideGoalListBtn.addEventListener("click", () => {
        goalListContainer.classList.remove('visible'); 
        updateToggleButtonVisibility(); 
    });

    const observer = new MutationObserver(updateToggleButtonVisibility);
    observer.observe(goalListContainer, {
        attributes: true,
        attributeFilter: ['class']
    });
    

    quotesElement.textContent = getRandomQuote();

    window.addEventListener("resize", handleResize);
    
    window.onload = function() {
      setRandomBackground();
      document.getElementById('player').play().catch(error => {
        console.log('Autoplay prevented:', error);
      });
    };

    updateTime();
    setInterval(updateTime, 500);
    setInterval(blinkColon, 1000);
    handleResize();
    updateToggleButtonVisibility();
  });