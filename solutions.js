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