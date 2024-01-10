import db from './db.js';
        
window.addEventListener('DOMContentLoaded', event => {

    

    const gridContainer = document.getElementById('itemGrid');

    // select menu buttons and add event listeners:
    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            sessionStorage.setItem("menu", e.target.textContent.toLowerCase());
            location.reload();
        })
    })

    // handles the menu selection
    const filter = sessionStorage.getItem("menu");

    let dbFiltered;

    if (filter && filter !== 'all') {
        dbFiltered = db.filter(item => item.category.toLocaleLowerCase() == filter)
    } else {
        dbFiltered = db;
    }

    dbFiltered.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('grid-item');
        console.log(item);
        itemEl.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.name}" width="250" height="250">
            <h3 class="itemName">${item.name}</h3>
            <p class="itemDescription">${item.description}</p>
            <p class="itemPrice"> Price: $${item.price}</p>
        `;
        gridContainer.appendChild(itemEl);
    })


})
