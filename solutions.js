/* 2. Website Name: Apple
Task:
Fetch all the product name and store in an array
Output
['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV'] */


solution:

    let products = document.querySelectorAll(".as-imagegrid-item");
let arr = [];
products.forEach((item) => { arr.push(item.innerText.replace('\nSupport', '')) });
console.log(arr);
//output: ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']


/* 3. Webiste Name: Youtube Support
Topics
- Get Element By Id, Create Element, Create Text Node, Append Child

Task:
Add another FAQ 'My New FAQ' to the list */
let nav = document.querySelector('article .accordion-homepage')
let newTopic = document.createElement("section"); //<section></section>
newTopic.className = "parent"; //<section class="parent">
newTopic.appendChild(document.createElement("h3"));
newTopic.textContent = "My New FAQ"; //<section class="parent">My New FAQ</section>
nav.appendChild(newTopic);

​
/* 
4. Webiste Name: OnePlus

Topic:  Query Selector, InnerText
Tasks: Change the contact number
 */

let num = document.querySelector(".one-tel-number");
num.textContent = "+91-9791032330";


/* 
5. Webiste Name: Samsung

Topic:  getElementById, createElement, InnerText, append, setAttribute
Task: Target the main div of card and change the Button text to Check out
*/
let btn = document.querySelector(".diwali-deals-product-sale-btn").innerHTML;
let newBtn = document.createElement("button");
newBtn.className = "diwali-deals-product-sale-btn";
newBtn.appendChild(document.createElement("h3"));
newBtn.textContent = "Check Out";​
//or below way
document.querySelector(".diwali-deals-product-sale-btn").innerHTML = "Check out";


//6.Webiste Name: Adidas
/* Topic:  Query Selector, Event listeners, Changing Styles
Task: Target the search box and on hover change thebackground color to red.
 */
let search = document.querySelector(".searchinput___19uW0");
search.addEventListener("mouseover", function() {
    document.querySelector(".searchinput___19uW0").style.backgroundColor = "green";
});

//or

let form = document.querySelector(".searchinput___zXLAR");

form.addEventListener("mouseenter", red);
form.addEventListener("mouseout", white);

function red() {
    form.style.background = "red";
    form.style.transition = "all 0.2s ease-in-out";
}

function white() {
    form.style.background = "white";
}


/* 7. Webiste Name: MDN Web Docs
Topics: Form, Value, Submit
Tasks: To Search a topic in the MDN Search bar.
       First add a text to search in the search bar and then hit the submit search button to search the docs using DOM
 */
function search(searchText) {
    let input = document.querySelector("#top-nav-search-input");
    input.value = searchText;
    let form = document.querySelector("#top-nav-search-form");
    form.submit();
}

search("css");

/* 8.Webiste Name: Google
Topics:  Remove Elements
Tasks: Remove alternate languages from the home page languages listed */

document.querySelector("#SIvCob").remove();

/* 9. Webiste Name: Code Wars
Topics: Change Font Family, Color of Text.
Tasks: Change the font family of the text to monospace and text color to the logo’s background color.

 */
let heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "Cursive";
heading.style.color = "Red";


/* 10. Webiste Name: Freecodecamp
Topics: querySelector, mouseover, click eventListener,  callback function, style,
Tasks: Target the button and change background colour on mouseover
 */
let button = document.querySelector(".login-btn-text");
button.addEventListener("mouseover", function() { document.querySelector(".login-btn-text").style.backgroundColor = "Red" });


/* 11. Webiste Name: realme
Topics: querySelector,style,background-image
Tasks: change the realme logo to ineuron logo */

let logoreal = document.querySelector(".icon-logo");
logoreal.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')";

/* 12. Webiste Name: Github
Topics: querySelector, style, background - Color
Tasks: change the background colour of the button to blue. */

let repobtn = document.querySelector(".btn-primary");
repobtn.style.backgroundColor = "blue";

/* 13. Webiste Name: Hackerrank
Topics: querySelector,innerHtml
Tasks: Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.
 */
document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP";

/* 14. Webiste Name: Asus
Topics: querySelector,style,font-size
Tasks: change the fontsize of “Hot Deals” to 80px
 */
let title = document.querySelector(".HotDealsAll__Heading__2fIbe");
title.style.fontSize = "80px";

/* 15.Webiste Name: Dell
Topics: querySelector,style.textAlign
Tasks: Convert the text “G15 Gaming Laptop” from left to right */
/*  */


/* 16. Webiste Name: Vercel
Topics: querySelector,innerHTMl
Tasks: change the heading “Start with the developer” to “Start with Scratch”
 */
let vercelHeadin = document.querySelector(".section-title_title__VEDfK");
vercelHeadin.innerHTML = "Start with Scratch";
/* 
17. Webiste Name: Sony
Topics: querySelector, innerHTMl
Tasks: change the button text To current Date. */

let buybtn = document.querySelector(".buy-button");
buybtn.style.color = "black";
buybtn.style.backgroundColor = "white";


let date = new Date();
buybtn.innerHTML = date;

/* 18. Webiste Name: Philips
Topics: querySelector,style,backgroundcolor
Tasks: change the background colour blue to orange */

document.querySelector(".p-footer").style.backgroundColor = "orange";

/* 19. Webiste Name: Canon
Topics: querySelector, src
Tasks: extract the canon logo */

let logoSrc = document.querySelector(".logo").src;

/* 20. Webiste Name: Oppo
Topics: querySelector, style, color
Tasks: Change the description colour black to orange */

let changeColor = document.querySelector(".desc");
changeColor.style.color = "orange";