let rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

rateBtn.addEventListener('click', ()=>{
    alert("tá foda")
})

rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        
    })
});