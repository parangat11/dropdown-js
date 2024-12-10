import "./style.css"

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    console.log(dropdown);
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    console.log(dropdownButton)
    const options = dropdown.querySelectorAll('.option');
    dropdownButton.textContent += "▼";
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
})