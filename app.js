//  First we get, the elements to display the card details
const cardNumber = document.querySelector('.card-number');
const cardName = document.querySelector('.name');
const cardExpDate = document.querySelector('.exp');
const cardcvc = document.querySelector('.cvc');


//  Then we get the user input from all the form input values;
const form = document.querySelector('.form');
const cardHolderName = document.getElementById('name');
const userCardNumber = document.getElementById('user-card-number');
const expMonth = document.getElementById('month');
const expYear = document.getElementById('year');
const userCardCvc = document.getElementById('cvc');
const expDetails = document.querySelectorAll('.exp-details');



//  We get the form wrapper element for when input has been validated
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btn');


//  Add a submit event listener to te form
form.addEventListener('submit', (e) => {
    //Prevent default behavior, i.e, submitting data to a server
    e.preventDefault();

    // Validate and place the user input details on the card
    if(validateCardHolderName())
    {
        let value = cardHolderName.value;
        cardName.textContent = value.toUpperCase();
    }

    validateCardNumber();


    if(validateExpDate())
    {
        cardExpDate.innerHTML = `${expMonth.value}/${expYear.value}`;
        cardcvc.innerHTML = `${userCardCvc.value}`;
    }


    //  If all input is validate and is correct then display the Thank you message
    if (validateCardHolderName() && validateCardNumber() && validateExpDate())
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





//  #########################################
//  ##              FUNCTIONS              ##
//  #########################################


//  Function to validate the card number
function validateCardNumber()
{
    if(validateEmpty(userCardNumber) && validateInteger(userCardNumber) && formatCardNumber())
    {
        //  Once we validate the card number is not empty and it is a number
        //  We check that it is in the correct format(xxxx xxxx xxxx xxxx),
        //  then we display
        formatCardNumber();
        cardNumber.innerHTML = userCardNumber.value;
        return true;
    }
    
}



//  Function to validate the card expiry date input fields (Month, Year, cvc)
function validateExpDate()
{
    let flag = true;
    expDetails.forEach(input => {
        if(validateEmpty(input) && validateInteger(input) && checkExpDate(input))
        {
            //  Do nothing
        } 
        else
        {
            flag = false;
        }
    })

    return flag;
}




//  Function to validate if the input box(parameter) is empty
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


//  Function to check if the card format is correct (xxxx xxxx xxxx xxxx);
function formatCardNumber()
{
    let i = 0;

    let cardRegex = /^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/;

    let error = userCardNumber.parentElement.querySelector('.error');
    
    userCardNumber.addEventListener('input',()=> {
        i += 1;
        if(i % 4 == 0 && i < 16)
        {
            userCardNumber.value += ' ';
        }

    });

    if(userCardNumber.value && validateInteger(userCardNumber))
    {
        if(!cardRegex.test(userCardNumber.value))
        {
            userCardNumber.classList.add('error-msg');
            error.innerHTML = "Wrong format";
            error.style.display = 'block';
            return false;
        }

        else
        {
            userCardNumber.classList.remove('error-msg');
            error.style.display = 'none';
            return true;
        }
    }
}
formatCardNumber();




//  Function to check name of the card holder
function validateCardHolderName()
{
    validateEmpty(cardHolderName);
    let error = cardHolderName.parentElement.querySelector('.error');
    let nameRegex = /^(\w{3,})\s(\w{3,})$/g;
    if (!nameRegex.test(cardHolderName.value))
    {   
        cardHolderName.classList.add('error-msg');
        error.innerHTML = "Wrong format";
        error.style.display = 'block';
        return false;
    }
    else
    {
        userCardNumber.classList.remove('error-msg');
        error.style.display = 'none';
        return true;
    }
}