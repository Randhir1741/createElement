// Write your code below:
let div = document.createElement("h3");
div.innerHTML = "Buy high quality organic fruits online";
document.getElementById("header").appendChild(div);
div.style.fontStyle = 'italic';

let div2 = document.querySelector("div:nth-of-type(2)");
let ul = document.querySelector("Ul.fruits");
let p = document.createElement('p');
p.textContent = "Total fruits: 4";
p.id = "fruits-total";
div2.insertBefore(p, ul);
