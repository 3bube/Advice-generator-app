const adviceApi = 'https://api.adviceslip.com/advice';
let advice;

function getAdvice(){
    return fetch(adviceApi)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    advice = data.slip.advice;
    return advice;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

getAdvice().then(advice => {
    displayAdvice(advice);
});

  function displayAdvice(advice){
    const dice = document.querySelector('.dice');
    dice.removeEventListener('click', clickHandler);
    clickHandler();
    function clickHandler (){
        dice.addEventListener('click', ()=>{
            const adviceText = document.querySelector('.advice');
        adviceText.innerHTML = advice;
        });
    };
    
  }
  