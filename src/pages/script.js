const circle = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");

let currentStep = 0;

const updateSteps = (e) => {
    if(currentStep = e.target.id === "face-view"){
        currentStep = 1;
        circle.forEach((circle, index) => {
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
         });
         
         progressBar.style.width = `${((currentStep -1 ) / (circle.length - 1)) *100}%`;
    }
    else if(currentStep = e.target.id === "face-left"){
        currentStep = 2;
        circle.forEach((circle, index) => {
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
         });
         
         progressBar.style.width = `${((currentStep -1 ) / (circle.length - 1)) *100}%`;
    }
    else if(currentStep = e.target.id === "face-right"){
        currentStep = 3;
        circle.forEach((circle, index) => {
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
         });
         
         progressBar.style.width = `${((currentStep -1 ) / (circle.length - 1)) *100}%`;
    }
    else{
        currentStep = 4;
        circle.forEach((circle, index) => {
            circle.classList[`${index < currentStep ? "add" : "remove"}`]("avtive");
         });
         
         progressBar.style.width = `${((currentStep -1 ) / (circle.length - 1)) *100}%`;
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
});
inputs.forEach((input) => {
    input.addEventListener("click", updateSteps);
});