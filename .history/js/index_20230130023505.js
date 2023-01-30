const rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');
const card = document.querySelector('#card')
const avaliation = document.querySelector("#result-avaliation")
const userRatting = document.querySelector('#avaliation-user')

sent.addEventListener('click', ()=>{
    avaliation.classList.remove('hidden')
    card.style.display = 'none'
})


rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        userRatting.innerText = rateBtn.inneHTML
    })
});