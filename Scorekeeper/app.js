const p1 = {
    score: 0,
    button: document.querySelector('#player1'),
    display: document.querySelector('#score1')
};

const p2 = {
    score: 0,
    button: document.querySelector('#player2'),
    display: document.querySelector('#score2')
};




const resetButton = document.querySelector('#reset');


const maxScoreSelect = document.querySelector('#scoreSelect')


// button1.addEventListener('click', function() {
//     score1.innerHTML = parseInt(score1.innerHTML) + 1;
// });
// button2.addEventListener('click', function() {
//     score2.innerHTML = parseInt(score2.innerHTML) + 1;
// });

// buttons.addEventListener('click', function() {
//     if (parseInt(score1.innerHTML) === parseInt(maxscoreSelect.value) || parseInt(score2.innerHTML) === parseInt(maxscoreSelect.value)) {
//         player1.setAttribute('disabled', true);
//         player2.setAttribute('disabled', true);
//     } 
// });

// resetButton.addEventListener('click', function() {
//     score1.innerHTML = 0;
//     score2.innerHTML = 0;
//     player1.removeAttribute('disabled');
//     player2.removeAttribute('disabled');
// });





let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
};

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

maxScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(maxScoreSelect.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
