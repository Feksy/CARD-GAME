/* eslint-disable no-unused-vars */
const LEVELS = {
    easy: {
        cards: 6,
    },
    medium: {
        cards: 12,
    },
    hard: {
        cards: 18,
    },
}

const levelButtons = document.querySelectorAll('.level-button')
//const startButton = document.querySelector('.start-button')
let userLevel = ''

levelButtons.forEach((button) =>
    button.addEventListener('click', (button) => {
        button.preventDefault()
        const target = button.target
        userLevel = target.value
        levelButtons.forEach((b) => {
            if (b.value !== target.value) {
                b.classList.remove('level-selected')
            }
        })
        target.classList.add('level-selected')
    })
)
