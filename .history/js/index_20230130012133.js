let rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

function changeColor(){
    rateBtn.style.backgroundColor = 'red'
}

rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        changeColor();
    })
});