let score = 0;
let currentQuestion = 1;

function checkAnswer(questionId) {
  const selectedOption = document.querySelector(`input[name=${questionId}]:checked`);

  if (selectedOption) {
    const userAnswer = selectedOption.value;

    // Check the answer and update the score
    switch (questionId) {
      case 'q1':
        if (userAnswer === 'delhi') score++;
        break;
      case 'q2':
        if (userAnswer === 'hindi') score++;
        break;
      case 'q3':
        if (userAnswer === 'tajmahal') score++;
        break;
      case 'q4':
        if (userAnswer === 'ganges') score++;
        break;
      case 'q5':
        if (userAnswer === 'cricket') score++;
        break;
    }

    // update ques no.
    currentQuestion++;

    // Update ques.and options
    updateQuestionAndOptions();
  } else {
    alert('Please select an option before submitting.');
  }
}

function updateQuestionAndOptions() {
  const questionElement = document.getElementById('question');
  const scoreElement = document.getElementById('score');
  const optionsForm = document.getElementById('quizForm');

  if (currentQuestion <= 5) {

    switch (currentQuestion) {
      case 2:
        questionElement.innerHTML = 'Question 2: What is the official language of India?';
        updateOptions(['hindi', 'english', 'bengali', 'telugu']);
        break;
      case 3:
        questionElement.innerHTML = 'Question 3: Which famous monument is located in Agra, India?';
        updateOptions(['tajmahal', 'qutubminar', 'indiagate', 'lotustemple']);
        break;
      case 4:
        questionElement.innerHTML = 'Question 4: What is the holy river of Hinduism in India?';
        updateOptions(['ganges', 'yamuna', 'brahmaputra', 'godavari']);
        break;
      case 5:
        questionElement.innerHTML = 'Question 5: Which sport is extremely popular in India?';
        updateOptions(['cricket', 'football', 'hockey', 'badminton']);
        break;
    }

    // clearing options
    optionsForm.reset();

    // Update score
    scoreElement.innerHTML = `Score: ${score}`;
  } else {
    // Display completion 
    questionElement.innerHTML = 'Quiz completed!';

    // Hide the form
    optionsForm.style.display = 'none';

    // final score
    scoreElement.innerHTML = `Final Score: ${score}`;
  }
}

function updateOptions(options) {
  const optionsForm = document.getElementById('quizForm');
  const optionsContainer = optionsForm.querySelector('.options-container');

  // Remove existing options
  while (optionsContainer.firstChild) {
    optionsContainer.removeChild(optionsContainer.firstChild);
  }

  // Add new options
  options.forEach((option) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `q${currentQuestion}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(label);
  });
}
