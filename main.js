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


levelButtons.forEach(button => button.addEventListener('click', (button) => {
    button.preventDefault();
    const target = button.target;
    userLevel = target.value;
    target.style.backgroundColor = "#0080C1";
    target.style.color = "white";

}))

