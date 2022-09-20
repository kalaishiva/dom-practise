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


/* 8. Webiste Name: MDN Web Docs
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