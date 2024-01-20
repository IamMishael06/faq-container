
// questionBoxes.forEach(questionBox => {


// });
const btns = document.querySelectorAll('.faq-btn')
const questionBox = document.querySelectorAll('.question-box')
btns.forEach(btn => {
    btn.addEventListener("click", (e)=>{
        questionBox.forEach(box => {
            box.classList.toggle('active')
        });
    })
});