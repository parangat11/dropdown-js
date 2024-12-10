import "./style.css"

const dropdown = document.querySelector(".dropdown");
const dropdownButton = document.querySelector(".dropdown-button");
const options = document.querySelectorAll('.option');

console.log(options);

let currentSelection = null;

dropdownButton.addEventListener('click', (e) => {
    if(dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        let str = dropdownButton.textContent;
        dropdownButton.textContent = "";
        for(let i = 0; i < str.length - 1; i++) {
            dropdownButton.textContent += str[i];
        }
        dropdownButton.textContent += "▼";
    }
    else {
        dropdown.classList.add('open');
        let str = dropdownButton.textContent;
        dropdownButton.textContent = "";
        for(let i = 0; i < str.length - 1; i++) {
            dropdownButton.textContent += str[i];
        }
        dropdownButton.textContent += "▲";
    }
})

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        dropdownButton.textContent = option.textContent;
        dropdownButton.textContent += "▲";
        dropdownButton.click();
    })
})