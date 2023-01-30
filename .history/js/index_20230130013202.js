let rateBtn = document.querySelectorAll('.rate-btn');
const sent = document.querySelector('#submit-btn');

sent.addEventListener('click', ()=>{
    window.alert("test")
})

function changeColor(color){
    rateBtn.style.backgroundColor = color;
}

rateBtn.forEach((rate) =>{
    rate.addEventListener("click", () =>{
        changeColor('red');
    })
});