
// questionBoxes.forEach(questionBox => {


// });

const questionBox = document.querySelectorAll('.question-box')

        questionBox.forEach(box => {
            const plus = box.querySelectorAll('.faq-btn > .bar:nth-child(2)');
            box.addEventListener("click",(e)=>{
                if (e.target.className.includes('faq-btn')) {
                    // const btns = box.querySelectorAll('.faq-btn')
                    box.classList.toggle('active')
                    plus.forEach( cross => {
                        cross.classList.toggle('active')

                    });
                }
                else if (e.target) {
                        box.classList.toggle('active')
                        plus.forEach( cross => {
                            cross.classList.toggle('active')
    
                        });
                }
                questionBox.forEach( otherbox =>{
                    if (otherbox !== box && otherbox.classList.contains('active')) {
                        otherbox.classList.remove('active');
                        const plus = otherbox.querySelectorAll('.faq-btn > .bar:nth-child(2)');
                        plus.forEach( cross => {
                            cross.classList.remove('active')
    
                        });

                    }
                })
            })
        });
