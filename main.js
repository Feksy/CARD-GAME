const LEVELS = {
    easy: {
        cards: 6
    },
    medium: {
        cards: 12
    },
    hard: {
        cards: 18
    }
}

const levelButtons = document.querySelectorAll('.level-button');
const startButton = document.querySelectorAll('.start-button');
let userLevel = '';
const firstLevelButton = document.querySelectorAll('.first-level-button');
const secondLevelButton = document.querySelectorAll('.second-level-button');
const thirdLevelButton = document.querySelectorAll('.third-level-button');


levelButtons.forEach(button => button.addEventListener('click', (button) => {
    button.preventDefault();
    const target = button.target;
    userLevel = target.value;
    console.log(target);
    levelButtons.forEach(b => {
        if (b.value !== target.value) {
            b.classList.remove("level-selected");
        }
    })
    target.classList.add("level-selected");

}))

