
// questionBoxes.forEach(questionBox => {


// });

const faqBtn =document.querySelectorAll('.faq-btn')
    faqBtn.forEach( btn => {
        btn.addEventListener('click', (e)=>{
            var questionBoxes = document.querySelectorAll('.question-box')
            questionBoxes.forEach( box => {
                box.classList.toggle("active")
            });
          
        })
    });