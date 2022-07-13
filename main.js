const LEVELS = [
    {
        level: 'easy',
        cards: 6
    },
    {
        level: 'medium',
        cards: 12
    },
    {
        level: 'hard',
        cards: 18
    }

]

const levelButtons = document.querySelectorAll('.level-button');
const startButton = document.querySelectorAll('.start-button');
let userLevel = '';


levelButtons.forEach(button => button.addEventListener('click', (Event) => {
    Event.preventDefault();
    const target = Event.target;
    userLevel = target.value;
    target.style.backgroundColor = "#0080C1";
    target.style.color = "white";

}))

