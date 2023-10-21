let dice = document.getElementById("dice");
let advice = document.getElementById("advice");
let adviceNo = document.getElementById("advice-id");

let getAdvice = async (random) => {

    let findAdvice = 'https://api.adviceslip.com/advice/'
    let randomNumber = random
    let randomAdvice = await fetch(findAdvice + randomNumber);
    let data = randomAdvice.json();
    
    return data;
}

let updateUI = async (data) => {
    let adviceText = data.slip.advice
    let adviceId = data.slip.id

    advice.innerText = `"${adviceText}"`
    adviceNo.innerText = adviceId
}

dice.addEventListener("click", () => {
    let randomNumber = Math.round(Math.random() * 222);

    getAdvice(randomNumber)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})