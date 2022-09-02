//  First we'll have to grab, the front card details
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.name');
const CardExpDate = document.querySelector('.exp');
const cardcvc = document.querySelector('.cvc');


//  Then we get the form and the user input for all the card details
const form = document.querySelector('.form');
const userName = document.getElementById('name').value;
const userCardNumber = document.getElementById('user-card-number').value;
const expMonth = document.getElementById('month').value;
const expYear = document.getElementById('year').value;
const userCardCvc = document.getElementById('cvc').value;


form.addEventListener('submit', (e) => {
    //Prevent default behavior, i.e, submitting data to a server
    e.preventDefault();

    // Validate and place the user input details on the card
    cardName .textContent = userName;
    cardNumber.textContent = userCardNumber;
    CardExpDate.textContent = `${expMonth}/${expYear}`;
    cardcvc.textContent = userCardCvc;

    
})