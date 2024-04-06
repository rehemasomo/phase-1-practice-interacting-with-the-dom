document.addEventListener('DOMContentLoaded', function () {
    let timer = 0;
    let counter = 0;
    let likes = {};
    let timerInterval;

    function startTimer() {
        timerInterval = setInterval(function () {
            timer++;
            document.getElementById('counter').innerText = timer;
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resumeTimer() {
        timerInterval = setInterval(function () {
            timer++;
            document.getElementById('counter').innerText = timer;
        }, 1000);
    }

    startTimer();

    document.getElementById('plus').addEventListener('click', function () {
        counter++;
        document.getElementById('counter').innerText = counter;
    });

    document.getElementById('minus').addEventListener('click', function () {
        counter--;
        document.getElementById('counter').innerText = counter;
    });

    document.getElementById('heart').addEventListener('click', function () {
        if (!likes[counter]) {
            likes[counter] = 1;
        } else {
            likes[counter]++;
        }
        updateLikes();
    });

    document.getElementById('pause').addEventListener('click', function () {
        pauseTimer();
        document.getElementById('pause').disabled = true;
        document.getElementById('resume').disabled = false;
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
    });

    document.getElementById('resume').addEventListener('click', function () {
        resumeTimer();
        document.getElementById('pause').disabled = false;
        document.getElementById('resume').disabled = true;
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
    });

    document.getElementById('comment-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const commentInput = document.getElementById('comment-input').value;
        const commentList = document.getElementById('list');
        const newComment = document.createElement('li');
        newComment.innerText = commentInput;
        commentList.appendChild(newComment);
        document.getElementById('comment-input').value = '';
    });

    function updateLikes() {
        const likesList = document.querySelector('.likes');
        likesList.innerHTML = '';
        for (let key in likes) {
            const newLike = document.createElement('li');
            newLike.innerText = `${key} has been liked ${likes[key]} times`;
            likesList.appendChild(newLike);
        }
    }
});
