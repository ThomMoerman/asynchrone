// Exercice 01

// const loadButton = document.getElementById('loadButton');
// const listContainer = document.getElementById('listContainer');

//     loadButton.addEventListener('click', () => {
//         fetch('array.json')
//             .then(response => response.json())
//             .then(data => {
//                 listContainer.innerHTML = ''; // Clear existing list

//                 data.forEach(rule => {
//                     const listItem = document.createElement('li');
//                     listItem.textContent = rule;
//                     listContainer.appendChild(listItem);
//                 });
//             })
//     });

// Exercice 02

const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('nameInput');
const resultContainer = document.getElementById('resultContainer');
const countrySelect = document.getElementById('countrySelect');

submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const country = countrySelect.value;

    let apiUrl = `https://api.agify.io/?name=${name}`;

    if (country) {
        apiUrl += `&country_id=${country}`;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const requestContainer = document.createElement('div');
            requestContainer.classList.add('request-container');
            requestContainer.textContent = `${data.name} is estimated to be ${data.age} years old in ${country} and they are ${data.count} in number` ;
            resultContainer.appendChild(requestContainer);
        })
});