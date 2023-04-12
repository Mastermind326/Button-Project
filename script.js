var button = document.getElementById('button');

var clicks = 0
function countUp() {
    clicks+=1;
    document.getElementById("click-count").innerHTML = 'I\'ve been pressed '+clicks+ ' times!!';
};

button.addEventListener('click', countUp);