
const container = document.querySelector("#container");
const redp = document.createElement("p");
redp.style.color = "red";
redp.textContent = "Hey I'm red!"
container.appendChild(redp);

const blueh3 = document.createElement("h3");
blueh3.style.color = "blue";
blueh3.textContent = "I'm a blue h3!"
container.appendChild(blueh3);

const blackpink = document.createElement("div");
blackpink.style.backgroundColor = "pink";
blackpink.style.border = "2px solid black";
container.appendChild(blackpink);

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div";
blackpink.appendChild(h1);

const p = document.createElement("p")
p.textContent = "Me too";
blackpink.appendChild(p);
