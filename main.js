const adviceApi = 'https://api.adviceslip.com/advice';
let advice;
let id;

  
  function displayAdvice() {
    const dice = document.querySelector('.dice');
    const heading = document.querySelector('.card-heading');
  
    async function clickHandler() {
        try {
            const response = await fetch(adviceApi);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            const advice = data.slip.advice;
            const id = data.slip.id;
  
            const adviceText = document.querySelector('.advice');
            adviceText.innerHTML = advice;
            heading.innerHTML = `advice #${id}`;
        } catch (error) {
            console.error('Error:', error);
        }
    };
  
    dice.removeEventListener('click', clickHandler);
    dice.addEventListener('click', clickHandler);
  }
  
  displayAdvice();
