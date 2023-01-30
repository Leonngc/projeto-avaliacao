let rateBtn = document.querySelector('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

rateBtn.forEach((rate) =>{
    rateBtn.addEventListener("click", () =>{
        alert("test2")
    })
});