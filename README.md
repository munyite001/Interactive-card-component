# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
Wow!. This was a really nice cahllenge. It really gets you thinking.
On the surface, it might seem simple but the functionality you have to incorporate, really packs a punch. Overall, it is a very great challenge, if you are looking to test your javascript skills, and to try and practise form validation using javascript.


### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./Screenshots/Desktop%20Design.png)
![](./Screenshots/Mobile%20Design.png)
![](./Screenshots/Desktop%20Complete%20Status.png)

### Links

- Solution Repo: [GitHub](https://github.com/munyite001/Interactive-card-component)
- Live Site URL: [Netlify](https://interactive-credit-card-fm.netlify.app/)

## My process
I work with a mobile first Work flow.
For me, the first step is always analysing the designs, first the mobile design then the desktop design, to see how "everything fits".
This will help me in seeing how to structure the media breakpoints when switching from one screen to another.
After analysis, I then lay the foudations and the structure with html.
Then I apply the mobile design styles, then later on breakpoints for bigger screen sizes
Then I add the functionality using js


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javaScript
- Mobile-first workflow

### What I learned

I have learned alot from this cahllenge.
First thing being how to validate form input using js.
Initially I would just add the validation to the html using attributes like, required or number etc. The problem with that approach is that the styling would be off, and your designs would just look bad, but with js, you can style how the errors will look like if the input is not the one you intended.

I have alos learned how to manipulate form inputs using js.
When dealing with credit cards, most people will always just ignore that the number sets need to be seperated with spaces(xxxx xxxx xxxx xxxx), and if input is fed in the old way without spaces, then the whole thing will look just wrong(xxxxxxxxxxxxxxx)
So using js, i created a function that would listen foriput events in the card number input box, and after every fourth digit, it would automatically add a space, which was really cool

```js
userCardNumber.addEventListener('input',()=> {
        i += 1;
        if(i % 4 == 0 && i < 16)
        {
            userCardNumber.value += ' ';
        }
```
### Continued development
This is just the first version, so while indeed the functionality is working, the overall structure might not be the best looking or the most efficient(mostly for js), so I want to continue refining and refactoring the code, in order to make it as efficient as possible
PS if you have some pointers on how to improve or if you'd want to patner up for a project, let me know
### Useful resources

- [Regular Expression Generator](https://www.regex101.com) - This helped me for coming up with targeted regex expressions for the input validation. Using regular expressions for input validation is really easy and very efficient, so going forward, I will try to get rid of the bulky functions and try to come up with simpler regular expressions.
## Author

- Website - [Github](https://github.com/munyite001)
- Frontend Mentor - [@munyite001](https://www.frontendmentor.io/profile/munyite001)
- Twitter - [@emunyite](https://www.twitter.com/emunyite)