let rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})


rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        rate.style.background = "hsl(25, 97%, 53%)"
        rate
    })
});