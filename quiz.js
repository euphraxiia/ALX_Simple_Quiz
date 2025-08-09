function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the submit button and add event listener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
