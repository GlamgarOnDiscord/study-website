// ================================
// State Management
// ================================
let countdown;
let isPaused = false;
let isPlaying = false;
let currentMinutes = 25;

let todos = [];
let flashcards = [];
let notes = [];

// ================================
// DOM Elements
// ================================
const timerDisplay = document.querySelector('#timer-display .time-value');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const musicBtn = document.getElementById('music');
const presetBtns = document.querySelectorAll('.preset-btn');

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const todoTotalEl = document.getElementById('todo-total');
const todoCompletedEl = document.getElementById('todo-completed');

const notesForm = document.getElementById('notes-form');
const notesInput = document.getElementById('notes-input');
const notesList = document.getElementById('notes-list');

const flashcardForm = document.getElementById('flashcard-form');
const flashcardQuestion = document.getElementById('flashcard-question');
const flashcardAnswer = document.getElementById('flashcard-answer');
const flashcardContainer = document.getElementById('flashcard-container');
const flashcardRandomBtn = document.getElementById('flashcard-random');

const audio = new Audio('./src/musique/music2.mp3');
audio.loop = true;

// ================================
// Timer Functions
// ================================
function timerCountdown(seconds) {
	clearInterval(countdown);

	const now = Date.now();
	const then = now + seconds * 1000;

	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft < 0) {
			clearInterval(countdown);
			timerDisplay.textContent = '00:00';
			document.title = '⏰ Fin du minuteur!';

			// Play end sound
			const endAudio = new Audio('https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3');
			endAudio.play();

			// Show notification if supported
			if ('Notification' in window && Notification.permission === 'granted') {
				new Notification('⏰ Temps écoulé!', {
					body: 'Votre session d\'étude est terminée.',
					icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2300BFFF"><circle cx="12" cy="12" r="10"/></svg>'
				});
			}

			return;
		}

		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainderSeconds = seconds % 60;
	const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

	document.title = `${display} - Study Hub`;
	timerDisplay.textContent = display;
}

function stopTimer() {
	clearInterval(countdown);
	timerDisplay.textContent = `${currentMinutes}:00`;
	document.title = 'Study Hub - Boostez votre productivité';
	isPaused = false;
	updatePauseButton();
}

function pauseTimer() {
	clearInterval(countdown);
	isPaused = true;
	updatePauseButton();
}

function resumeTimer() {
	isPaused = false;
	const timeLeft = timerDisplay.textContent.split(':').map(parseFloat);
	timerCountdown(timeLeft[0] * 60 + timeLeft[1]);
	updatePauseButton();
}

function updatePauseButton() {
	const pauseSvg = pauseBtn.querySelector('svg');
	const pauseText = pauseBtn.querySelector('span');

	if (isPaused) {
		pauseText.textContent = 'Reprendre';
		pauseSvg.innerHTML = '<path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>';
	} else {
		pauseText.textContent = 'Pause';
		pauseSvg.innerHTML = '<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>';
	}
}

function setPreset(minutes) {
	currentMinutes = minutes;
	stopTimer();

	// Update active state
	presetBtns.forEach(btn => btn.classList.remove('active'));
	event.target.classList.add('active');
}

// ================================
// Music Functions
// ================================
function toggleMusic() {
	if (!isPlaying) {
		audio.play();
		isPlaying = true;
		musicBtn.classList.add('playing');
	} else {
		audio.pause();
		isPlaying = false;
		musicBtn.classList.remove('playing');
	}
}

// ================================
// To-Do List Functions
// ================================
function addTodo(text) {
	const todo = {
		id: Date.now(),
		text: text,
		completed: false
	};

	todos.push(todo);
	renderTodos();
	updateTodoStats();
}

function toggleTodo(id) {
	const todo = todos.find(t => t.id === id);
	if (todo) {
		todo.completed = !todo.completed;
		renderTodos();
		updateTodoStats();
	}
}

function deleteTodo(id) {
	todos = todos.filter(t => t.id !== id);
	renderTodos();
	updateTodoStats();
}

function renderTodos() {
	todoList.innerHTML = '';

	todos.forEach((todo, index) => {
		const li = document.createElement('li');
		li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
		li.style.animationDelay = `${index * 0.05}s`;

		// Checkbox
		const checkbox = document.createElement('div');
		checkbox.className = `todo-checkbox ${todo.completed ? 'checked' : ''}`;
		checkbox.setAttribute('role', 'checkbox');
		checkbox.setAttribute('aria-checked', todo.completed);
		checkbox.addEventListener('click', () => toggleTodo(todo.id));

		// Text
		const text = document.createElement('span');
		text.className = 'todo-text';
		text.textContent = todo.text;

		// Delete button
		const deleteBtn = document.createElement('button');
		deleteBtn.className = 'todo-delete';
		deleteBtn.setAttribute('aria-label', 'Supprimer la tâche');
		deleteBtn.innerHTML = `
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
			</svg>
		`;
		deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

		li.appendChild(checkbox);
		li.appendChild(text);
		li.appendChild(deleteBtn);
		todoList.appendChild(li);
	});
}

function updateTodoStats() {
	const completed = todos.filter(t => t.completed).length;
	todoTotalEl.textContent = todos.length;
	todoCompletedEl.textContent = completed;
}

// ================================
// Notes Functions
// ================================
function addNote(text) {
	const note = {
		id: Date.now(),
		text: text,
		date: new Date().toLocaleDateString('fr-FR', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		})
	};

	notes.push(note);
	renderNotes();
}

function deleteNote(id) {
	notes = notes.filter(n => n.id !== id);
	renderNotes();
}

function renderNotes() {
	notesList.innerHTML = '';

	notes.forEach((note, index) => {
		const card = document.createElement('div');
		card.className = 'note-card';
		card.style.animationDelay = `${index * 0.1}s`;

		card.innerHTML = `
			<div class="note-date">${note.date}</div>
			<div class="note-text">${note.text}</div>
			<button class="note-delete" aria-label="Supprimer la note">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
				</svg>
			</button>
		`;

		card.querySelector('.note-delete').addEventListener('click', () => deleteNote(note.id));
		notesList.appendChild(card);
	});
}

// ================================
// Flashcards Functions
// ================================
function addFlashcard(question, answer) {
	const flashcard = {
		id: Date.now(),
		question: question,
		answer: answer
	};

	flashcards.push(flashcard);
	renderFlashcards();
}

function deleteFlashcard(id) {
	flashcards = flashcards.filter(f => f.id !== id);
	renderFlashcards();
}

function toggleFlashcard(cardElement) {
	cardElement.classList.toggle('flipped');
}

function renderFlashcards() {
	flashcardContainer.innerHTML = '';

	flashcards.forEach((flashcard, index) => {
		const card = document.createElement('div');
		card.className = 'flashcard';
		card.style.animationDelay = `${index * 0.1}s`;
		card.setAttribute('role', 'button');
		card.setAttribute('tabindex', '0');
		card.setAttribute('aria-label', 'Cliquez pour retourner la carte');

		card.innerHTML = `
			<div class="flashcard-inner">
				<div class="flashcard-front">
					<div class="flashcard-label">Question</div>
					<div class="flashcard-content">${flashcard.question}</div>
				</div>
				<div class="flashcard-back">
					<div class="flashcard-label">Réponse</div>
					<div class="flashcard-content">${flashcard.answer}</div>
				</div>
			</div>
			<button class="flashcard-delete" aria-label="Supprimer la carte">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
				</svg>
			</button>
		`;

		// Flip on click
		card.addEventListener('click', (e) => {
			if (!e.target.closest('.flashcard-delete')) {
				toggleFlashcard(card);
			}
		});

		// Flip on Enter/Space
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleFlashcard(card);
			}
		});

		// Delete button
		card.querySelector('.flashcard-delete').addEventListener('click', (e) => {
			e.stopPropagation();
			deleteFlashcard(flashcard.id);
		});

		flashcardContainer.appendChild(card);
	});
}

function showRandomFlashcard() {
	if (flashcards.length === 0) return;

	const randomIndex = Math.floor(Math.random() * flashcards.length);
	const cards = document.querySelectorAll('.flashcard');

	if (cards[randomIndex]) {
		cards[randomIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });

		// Highlight effect
		cards[randomIndex].style.transform = 'scale(1.05)';
		cards[randomIndex].style.boxShadow = '0 0 30px rgba(0, 191, 255, 0.5)';

		setTimeout(() => {
			cards[randomIndex].style.transform = '';
			cards[randomIndex].style.boxShadow = '';
		}, 1000);
	}
}

// ================================
// Event Listeners
// ================================

// Timer
startBtn.addEventListener('click', () => {
	if (!isPaused) {
		timerCountdown(currentMinutes * 60);
	} else {
		resumeTimer();
	}
});

pauseBtn.addEventListener('click', () => {
	if (!isPaused) {
		pauseTimer();
	} else {
		resumeTimer();
	}
});

stopBtn.addEventListener('click', stopTimer);

presetBtns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		const minutes = parseInt(btn.dataset.minutes);
		setPreset(minutes);
	});
});

// Music
musicBtn.addEventListener('click', toggleMusic);

// To-Do List
todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = todoInput.value.trim();

	if (text) {
		addTodo(text);
		todoInput.value = '';
		todoInput.focus();
	}
});

// Notes
notesForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = notesInput.value.trim();

	if (text) {
		addNote(text);
		notesInput.value = '';
		notesInput.focus();
	}
});

// Flashcards
flashcardForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const question = flashcardQuestion.value.trim();
	const answer = flashcardAnswer.value.trim();

	if (question && answer) {
		addFlashcard(question, answer);
		flashcardQuestion.value = '';
		flashcardAnswer.value = '';
		flashcardQuestion.focus();
	}
});

flashcardRandomBtn.addEventListener('click', showRandomFlashcard);

// ================================
// Notification Permission
// ================================
if ('Notification' in window && Notification.permission === 'default') {
	startBtn.addEventListener('click', () => {
		Notification.requestPermission();
	}, { once: true });
}

// ================================
// Keyboard Shortcuts
// ================================
document.addEventListener('keydown', (e) => {
	// Ctrl/Cmd + Space: Start/Pause timer
	if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
		e.preventDefault();
		if (!isPaused) {
			startBtn.click();
		} else {
			pauseBtn.click();
		}
	}

	// Ctrl/Cmd + R: Reset timer
	if ((e.ctrlKey || e.metaKey) && e.code === 'KeyR') {
		e.preventDefault();
		stopBtn.click();
	}

	// Ctrl/Cmd + M: Toggle music
	if ((e.ctrlKey || e.metaKey) && e.code === 'KeyM') {
		e.preventDefault();
		musicBtn.click();
	}
});

// ================================
// Local Storage (Persistence)
// ================================
function saveToLocalStorage() {
	localStorage.setItem('studyHub_todos', JSON.stringify(todos));
	localStorage.setItem('studyHub_notes', JSON.stringify(notes));
	localStorage.setItem('studyHub_flashcards', JSON.stringify(flashcards));
}

function loadFromLocalStorage() {
	const savedTodos = localStorage.getItem('studyHub_todos');
	const savedNotes = localStorage.getItem('studyHub_notes');
	const savedFlashcards = localStorage.getItem('studyHub_flashcards');

	if (savedTodos) {
		todos = JSON.parse(savedTodos);
		renderTodos();
		updateTodoStats();
	}

	if (savedNotes) {
		notes = JSON.parse(savedNotes);
		renderNotes();
	}

	if (savedFlashcards) {
		flashcards = JSON.parse(savedFlashcards);
		renderFlashcards();
	}
}

// Save on changes
window.addEventListener('beforeunload', saveToLocalStorage);

// Auto-save every 10 seconds
setInterval(saveToLocalStorage, 10000);

// ================================
// Scroll Reveal Animation
// ================================
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
	section.style.opacity = '0';
	section.style.transform = 'translateY(30px)';
	section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
	observer.observe(section);
});

// ================================
// Initialize App
// ================================
document.addEventListener('DOMContentLoaded', () => {
	loadFromLocalStorage();

	// Show welcome message for first-time users
	if (!localStorage.getItem('studyHub_visited')) {
		console.log('%c👋 Bienvenue sur Study Hub!', 'font-size: 20px; color: #00BFFF; font-weight: bold;');
		console.log('%cRaccourcis clavier:', 'font-size: 14px; color: #9CA3AF;');
		console.log('  • Ctrl/Cmd + Space : Démarrer/Pause le timer');
		console.log('  • Ctrl/Cmd + R : Réinitialiser le timer');
		console.log('  • Ctrl/Cmd + M : Toggle musique');

		localStorage.setItem('studyHub_visited', 'true');
	}
});

// ================================
// Performance: Lazy Load Background SVGs
// ================================
if ('IntersectionObserver' in window) {
	const bgObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const pattern = entry.target;
				pattern.style.opacity = '1';
			}
		});
	});

	document.querySelectorAll('.section-bg-pattern').forEach(pattern => {
		pattern.style.opacity = '0';
		pattern.style.transition = 'opacity 1s ease-out';
		bgObserver.observe(pattern);
	});
}

// ================================
// Prevent accidental page navigation
// ================================
window.addEventListener('beforeunload', (e) => {
	if (todos.length > 0 && todos.some(t => !t.completed)) {
		e.preventDefault();
		e.returnValue = 'Vous avez des tâches en cours. Voulez-vous vraiment quitter?';
		return e.returnValue;
	}
});
