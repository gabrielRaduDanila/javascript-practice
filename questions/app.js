//using selectors inside the element

const questions = document.querySelectorAll('.question');
// console.log(questions);

questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
//    console.log(btn)
    btn.addEventListener("click", function(){
      questions.forEach(function(item){
        if(item !== question) {
            item.classList.remove('show-text');
        }
      })
        question.classList.toggle('show-text');
    })
})

// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// const questions = document.querySelectorAll('.question');
// console.log(questions);

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         console.log((question));
//         questions.forEach(function(item){
//             item.classList.remove("show-text");
//         })
//         question.classList.toggle('show-text');
//     })
// })

