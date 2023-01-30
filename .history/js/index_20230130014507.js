let rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

rateBtn.addEventListener('click', ()=>{
    rateBtn.body.style.background = "red"
})

rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        
    })
});