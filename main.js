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

    //select hamburguer menu, add event listener;
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu');
    const hamburgerIcons = document.querySelectorAll('.hamburger-icon');
    hamburger.addEventListener('click', function (e) {
        menu.classList.toggle('open');
        hamburgerIcons.forEach(icon => icon.classList.toggle('open'));
      });

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

        /* handle the whatsapp link */
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // WhatsApp number
        const phoneNumber = '972536121695'; // Replace with your actual WhatsApp number

        // Text in the WhatsApp
        const text = `Hi, could you share more info about the ${item.name}?`;
        const encodedText = encodeURIComponent(text);
  
        // Generate the appropriate WhatsApp link
        const whatsappLink = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodedText}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;


        itemEl.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.name}" width="250" height="250">
            <h3 class="itemName">${item.name}</h3>
            <p class="itemDescription">${item.description}</p>
            <p class="itemPrice"> Price: $${item.price}</p>
            <a href=${whatsappLink} target="_blank">
                WhatsApp me to get more info
            </a>
        `;
        gridContainer.appendChild(itemEl);
    })


})
