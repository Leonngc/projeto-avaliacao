let rateBtn = document.querySelector('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        console.log(rate.in)
    })
});