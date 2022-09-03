//  First we'll have to grab, the front card details
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.name');
const CardExpDate = document.querySelector('.exp');
const cardcvc = document.querySelector('.cvc');


//  Then we get the form and the user input for all the card details
const form = document.querySelector('.form');
const userName = document.getElementById('name');
const userCardNumber = document.getElementById('user-card-number');
const expMonth = document.getElementById('month');
const expYear = document.getElementById('year');
const userCardCvc = document.getElementById('cvc');
const expDetails = document.querySelectorAll('.exp-details');



//  Handling the form when input has been validated
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');


form.addEventListener('submit', (e) => {
    //Prevent default behavior, i.e, submitting data to a server
    e.preventDefault();

    // Validate and place the user input details on the card
    cardName .textContent = userName.value;


    if (validateCardNumber() && validateExpDate())
    {
        wrapper.classList.add('complete');

        let complete = document.querySelector('.complete');

        complete.innerHTML = `

        <div class="complete-container">
        
            <img src="./images/icon-complete.svg" alt="Complete icon" class="complete-icon">

        </div>

        <h2> THANK YOU! </h2>

        <p> We've added your card details </p>

        `;
    }
    
})

//  Function to validate the card number
function validateCardNumber()
{
    if(validateEmpty(userCardNumber) && validateInteger(userCardNumber))
    {
        cardNumber.innerHTML = userCardNumber.value;
        return true;
    }
    
}



function validateExpDate()
{
    let flag = false
    expDetails.forEach(element => {
        if (validateEmpty(element) && validateInteger(element) &&checkExpDate(element))
        {
            flag = true;   
        }
    });
    if (flag)
    {
            CardExpDate.innerHTML = `${expMonth.value}/${expYear.value}`;
            cardcvc.innerHTML = `${userCardCvc.value}`;
            return true;
    }

}




//  Function to validate if the input box is empty
function validateEmpty(item)
{
    let error = item.parentElement.querySelector('.error');
    const value = item.value;
    if(!value)
    {
        item.classList.add('error-msg');
        error.innerHTML = "can't be blank";
        error.style.display = 'block';
        return false;
    }
    else
    {
        item.classList.remove('error-msg');
        error.style.display = 'none';
        return true;
    }   
}



//  Function to validate that the input is a number
function validateInteger(item)
{
    let error = item.parentElement.querySelector('.error');
    const value = item.value;
    if(value && isNaN(parseInt(value)))
    {   
        item.classList.add('error-msg');
        error.innerHTML = "Wrong format, numbers only";
        error.style.display = 'block';
        return false;
    }
    else if(!isNaN(parseInt(value)))
    {
        item.classList.remove('error-msg');
        error.style.display = 'none';
        return true;
    }   
    
}

//  Function to validate the card expiry details
function checkExpDate(item)
{
    let error = item.parentElement.querySelector('.error');
    const value = item.value;
    let id = item.dataset.id;

    if(value && !isNaN(parseInt(value)))
    {   
        // Month
        if(id == "month" && parseInt(value) > 12 || parseInt(value) < 1)
        {
            item.classList.add('error-msg');
            error.innerHTML = "Wrong format";
            error.style.display = 'block';
            return false;
        } 

        // Year
        else if(id == "year" && parseInt(value) > 99)
        {
            item.classList.add('error-msg');
            error.innerHTML = "Wrong format";
            error.style.display = 'block';
            return false
        }

        // Cvc
        else if(id == "cvc" && value.length !== 3)
        {   
            item.classList.add('error-msg');
            error.innerHTML = "Wrong format";
            error.style.display = 'block';
            return false
        }

        else
        {
            item.classList.remove('error-msg');
            error.style.display = 'none';
            return true;
        }
        
    }
    
}

