// Minuteurs
const timer = document.querySelector('.timer');
const timerDisplay = document.querySelector('.timer div');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const pauseBtn = document.getElementById('pause');
const musicBtn = document.getElementById('music');
const audio = new Audio("./src/musique/music2.mp3"); // music1 = chill, music2 = son tiktok sinon ajouter votre propre audio en mp3
const todoList = document.getElementById("todo-list");
const flashcardContainer = document.getElementById("flashcard-container");
const flashcardQuestion = document.getElementById("flashcard-question");
const flashcardAnswer = document.getElementById("flashcard-answer");
const flashcardAddBtn = document.getElementById("flashcard-add");
const flashcardRandomBtn = document.getElementById("flashcard-random");
const notesContainer = document.getElementById("notes-list");
const notesInput = document.getElementById("notes-input");
const notesAddBtn = document.getElementById("notes-add");

let flashcards = []; // Variable flash cards
let countdown; // Variable compte à rebours
let isPaused = false; // Variable pour savoir si le timer est en pause
let isPlaying = false; // Variable pour la musique pour savoir si il c'est en pause ou non
let notes = []; // Variable notes


// Timer
function timerCountdown(seconds) {
  clearInterval(countdown);
  
  const now = Date.now();
  const then = now + seconds * 1000;
  
  displayTimeLeft(seconds);
  
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      timerDisplay.textContent = "00:00";
      document.title = "Fin du minuteur!";
      const endAudio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
      endAudio.play();
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function stopTimer() {
  clearInterval(countdown);
  timerDisplay.textContent = "25:00";
  document.title = "Minuteur";
  isPaused = false;
  pauseBtn.textContent = "Pause";
}

function pauseTimer() {
  clearInterval(countdown);
  isPaused = true;
  pauseBtn.textContent = "Reprendre";
}

function resumeTimer() {
  isPaused = false;
  const timeLeft = timerDisplay.textContent.split(':').map(parseFloat);
  timerCountdown(timeLeft[0] * 60 + timeLeft[1]);
  pauseBtn.textContent = "Pause";
}

startBtn.addEventListener('click', () => {
  if(!isPaused) {
    timerCountdown(25 * 60);
  } else {
    resumeTimer();
  }
});

stopBtn.addEventListener('click', stopTimer);

pauseBtn.addEventListener('click', () => {
  if(!isPaused) {
    pauseTimer();
  } else {
    resumeTimer();
  }
});
// Musique

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    isPlaying = false;
    musicBtn.innerHTML = '<i class="fas fa-music"></i>';
  }
});


// To do
todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
});

const addTodo = () => {
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const newTodo = document.createElement("li");
  const todoText = document.createElement("span");
  const todoDelete = document.createElement("button");

  todoText.innerText = todoInput.value;
  todoDelete.innerText = "Supprimer";

  newTodo.appendChild(todoText);
  newTodo.appendChild(todoDelete);
  todoList.appendChild(newTodo);

  todoInput.value = "";
};

const addTodoButton = document.getElementById("todo-add");
addTodoButton.addEventListener("click", addTodo);

// Flash cards

flashcardAddBtn.addEventListener("click", () => {
  const question = flashcardQuestion.value;
  const answer = flashcardAnswer.value;
  if (question.trim() && answer.trim()) {
    const flashcard = { question, answer };
    flashcards.push(flashcard);
    clearFlashcardInput();
    updateFlashcards();
  }
});

function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

flashcardRandomBtn.addEventListener("click", function () {
  const flashcards = document.querySelectorAll(".flashcard");
  const randomIndex = getRandomIndex(flashcards.length);

  const randomCard = flashcards[randomIndex];

  // Afficher la carte aléatoire dans la page
  const flashcardContainer = document.getElementById("flashcard-container");
  flashcardContainer.innerHTML = "";
  flashcardContainer.appendChild(randomCard);
});



function updateFlashcards() {
  flashcardContainer.innerHTML = "";
  flashcards.forEach((flashcard, index) => {
    const card = document.createElement("div");
    card.classList.add("flashcard");
    const cardQuestion = document.createElement("div");
    cardQuestion.classList.add("flashcard-question");
    cardQuestion.textContent = flashcard.question;
    const cardAnswer = document.createElement("div");
    cardAnswer.classList.add("flashcard-answer");
    cardAnswer.textContent = flashcard.answer;
    const cardRemoveBtn = document.createElement("button");
    cardRemoveBtn.classList.add("flashcard-remove");
    cardRemoveBtn.innerHTML = '<i class="fas fa-trash"></i>';
    cardRemoveBtn.addEventListener("click", () => {
      flashcards.splice(index, 1);
      updateFlashcards();
    });
    card.appendChild(cardQuestion);
    card.appendChild(cardAnswer);
    card.appendChild(cardRemoveBtn);
    flashcardContainer.appendChild(card);
  });
}

function clearFlashcardInput() {
  flashcardQuestion.value = "";
  flashcardAnswer.value = "";
}

// Notes

notesAddBtn.addEventListener("click", () => {
  const note = notesInput.value;
  if (note.trim()) {
    notes.push(note);
    clearNotesInput();
    updateNotes();
  }
});

function updateNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.classList.add("note-item");
    li.textContent = note;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("note-remove");
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
    removeBtn.addEventListener("click", () => {
      notes.splice(index, 1);
      updateNotes();
    });
    li.appendChild(removeBtn);
    notesContainer.appendChild(li);
  });
}

function clearNotesInput() {
  notesInput.value = "";
}
