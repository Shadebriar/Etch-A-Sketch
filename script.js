const container = document.querySelector("#container");

for( let i = 0; i < 256; i++){
const div = document.createElement("div");
div.classList.add("square");

container.appendChild(div);
div.addEventListener("mouseover", () => {
    div.style.background = "black";
})
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let userInput = prompt("Enter a grid size");
    if (userInput <= 100){
        container.textContent = "";
    
for(let i = 0; i < userInput * userInput; i++){
const div = document.createElement("div");
div.style.width = `${100 / userInput}%`
div.style.height = `${100 / userInput}%`
div.classList.add("square");

container.appendChild(div);
div.addEventListener("mouseover", () => {
    div.style.background = "black";})
}}
})

