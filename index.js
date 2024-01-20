
// questionBoxes.forEach(questionBox => {


// });

const questionBox = document.querySelectorAll('.question-box')
const plus = document.querySelectorAll('.faq-btn .bar:nth-child(2)')
        questionBox.forEach(box => {
            box.addEventListener("click",(e)=>{
                if (e.target.className.includes('faq-btn')) {
                    const btns = box.querySelectorAll('.faq-btn')
                    btns.forEach( btn => {
                        box.classList.toggle('active')
                        plus.classList.toggle('active')
                    });
                }
            })
        });
