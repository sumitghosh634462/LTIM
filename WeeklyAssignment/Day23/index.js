// function addTask() {
//     const taskInput = document.getElementById('task');
//     const taskValue = taskInput.value.trim();
//     const taskDisplay = document.getElementById('taskDisplay');
//     if (taskValue !== '') {
//         // Create a new paragraph element
//         const taskParagraph = document.createElement('p');
//         taskParagraph.innerText = taskValue;
//         // Append the paragraph to the task display area
//         taskDisplay.appendChild(taskParagraph);
//         // Clear the task input after adding task
//         taskInput.value = '';
//     } else {
//         alert('Please enter a task.');
//     }
// }

const registrationF = document.getElementById('registration');
const studentId = document.getElementById("studentID");
const studentIDError = document.getElementById("studentID-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const succes = document.getElementById("success-message");

registrationF.addEventListener('submit',function(e){
let invalF = false;
e.preventDefault();

studentIDError.textContent = '';
emailError.textContent = '';
passwordError.textContent = '';
succes.style.display = 'none';


//validate StudentID
const studentIDV = studentId.value.trim();
const studentIDR = /^[a-zA-Z0-9]*$/;
if(!studentIDV){
    studentIDError.textContent = "Student ID is required";
    invalF = true;
}
if(studentIDV && !studentIDR.test(studentIDV)){
    studentIDError.textContent = "Student can have only char and num";
    invalF = true;
}

//validate Email
const emailV = email.value.trim();
const emailR = /^[a-zA-Z]*$/
if(!emailV){
    emailError.textContent = "Email is required";
    invalF = true;
}
if(emailV && !emailR.test(emailV)){
    emailError.textContent = "it is not valid email";
    invalF = true;
}

//validate password
const passwordV = password.value.trim();
const passwordR = /^[0-9]*$/;
if(!passwordV){
    passwordError.textContent = "Password is required";
    invalF = true;
}
if(passwordV && !passwordR.test(passwordV)){
    passwordError.textContent = "password should be this this ........";
    invalF = true;
}

if(!invalF){
    succes.style.display = 'block';
}

});



