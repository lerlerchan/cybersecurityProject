document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('question1').value;
    alert('Your answer: ' + answer);
});
