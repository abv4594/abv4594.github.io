import db from './db.js';

import imgs from './imgs.js';
        
window.addEventListener('DOMContentLoaded', event => {

    

    const gridContainer = document.getElementById('main-grid');

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
        itemEl.addEventListener('click', showGalery); // allow item to be clickable and show gallery
        itemEl.classList.add('grid-item');
        itemEl.setAttribute('id', item.id);
        itemEl.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.name}" width="250" height="250">
            <h3 class="item">${item.name}</h3>
            <p class="itemDescription">${item.description}</p>
            <p class="itemPrice"> Price: $${item.price}</p>
            <a href="whatsapp://send?phone=+972536121695&text=Hello,%20I%20have%20a%20question%20about ${item.name}...">
                Click here to send me a WhatsApp message about this item.
            </a>
        `;
        gridContainer.appendChild(itemEl);
    })

    document.addEventListener('click', function(event) {
        const galleryOverlay = document.getElementById('galleryOverlay');
        if (galleryOverlay.classList.contains('visible')) {
                galleryOverlay.classList.remove('visible');
                galleryOverlay.classList.add('hidden');
            } 
    })


})

function showGalery(e) {
    e.stopPropagation();
    const galleryOverlay = document.getElementById('galleryOverlay');
    const galleryContainer = document.getElementById('galleryContainer');
    galleryContainer.innerHTML = ''; // Clear existing images
    console.log(imgs);
    const images = imgs.filter(img => img.id == e.currentTarget.id);
    images[0].urls.forEach(image => {
        const galleryImage = document.createElement('img');
        galleryImage.src = image;
        galleryImage.classList.add('gallery-image');
        galleryContainer.appendChild(galleryImage);
    })

    galleryOverlay.classList.add('visible');
}