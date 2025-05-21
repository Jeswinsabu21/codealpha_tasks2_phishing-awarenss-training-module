document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  const result = document.getElementById('quiz-result');
  if (!userAnswer) {
      result.textContent = 'Please select an answer.';
      result.style.color = 'red';
      return;
  }

  if (userAnswer.value === 'phishing') {
      result.textContent = 'Correct! This is a phishing email. Always verify the sender and link carefully.';
      result.style.color = 'green';
  } else {
      result.textContent = 'Incorrect. This email is likely phishing. Check for spelling errors in the email address and suspicious links.';
      result.style.color = 'red';
  }
});
