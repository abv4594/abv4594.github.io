import db from './db.js';

const {jsPDF} = window.jspdf;

let dbFiltered;
let dbDynamic;

window.addEventListener('DOMContentLoaded', event => {

    if (sessionStorage.getItem('db')) {
        dbDynamic = JSON.parse(sessionStorage.getItem('db'));
    } else {
        dbDynamic = db;
    }


    const optionsFunctions = [pdfBtn, csvBtn, allBtn, noneBtn];

    const optionsBtns = document.querySelectorAll('.options button');
    optionsBtns.forEach((btn, index) => btn.addEventListener('click', optionsFunctions[index]));
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

    

    if (filter && filter !== 'all') {
        dbFiltered = dbDynamic.filter(item => item.category.toLocaleLowerCase() == filter)
    } else {
        dbFiltered = dbDynamic;
    }

    dbFiltered.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('grid-item');
        if (item.selected) itemEl.classList.add('selected');
        itemEl.setAttribute('data-id', item.id);
        itemEl.addEventListener('click', selectItem)

        /* handle the whatsapp link */
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // WhatsApp number
        const phoneNumber = '972536121695'; 

        // Text in the WhatsApp
        const text = `Hi, could you share more info about the ${item.name}?`;
        const encodedText = encodeURIComponent(text);
  
        // Generate the appropriate WhatsApp link
        const whatsappLink = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodedText}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;


        itemEl.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.name}" width="250" height="250">
            <p class="itemTitle">${item.name}</p>
            <p class="itemDetail">${item.description}</p>
            <p class="itemDetail"> Available: ${item.available} </p>
            <p class="itemPrice"> Price: ${item.price} NIS </p>
            <a href=${whatsappLink} target="_blank">
                I want more info about this item
            </a>
        `;
        gridContainer.appendChild(itemEl);
    })



})

function selectItem(e){
    let el = e.target;
    if (e.target.tagName.toLocaleLowerCase() === 'img') {
        el = e.target.parentNode;
    }
    el.classList.toggle('selected');
    let selectedItem = dbDynamic.filter(item => item.id === parseInt(el.getAttribute('data-id')))[0];
    if (selectedItem.selected) {
        selectedItem.selected = false;
    } else {
        selectedItem.selected = true;
    }
    sessionStorage.setItem('db', JSON.stringify(dbDynamic)); // store status of db
    
}



function pdfBtn () {
    const doc = new jsPDF();
    let y = 10;
    let pageNumber = 1;
    let total = 0;
    const dbSelected = dbDynamic.filter(item => item.selected);

    dbSelected.forEach((product, index) => {
        if (y > 250) { // Check if space for the next item is available on the page
            doc.addPage(); // Add a new page
            y = 10; // Reset y position
            pageNumber++; // Increment page number
        }
        doc.text(`Category: ${product.category} | Name: ${product.name}`, 10, y);
        doc.text(`Description: ${product.description}`, 10, y + 10);
        doc.text(`Price: ${product.price} | Available: ${product.available}`, 10, y + 20);
        total += product.price;
        y += 40;

        // Add page number at the bottom
        if (index === dbFiltered.length - 1) {
            doc.text(`Page ${pageNumber}`, 10, doc.internal.pageSize.height - 10);
        }
    });
    doc.text(`Total of your products: ${total}`, 10, y);

    doc.save('myProducts.pdf');
}

function csvBtn() {
    const dbSelected = dbDynamic.filter(item => item.selected);
    let csv = 'Category, Name, Description, Available, Price NIS\n';
    let total = 0;
    dbSelected.forEach(item => {
        csv += `${item.category}, ${item.name}, ${item.description}, ${item.available}, ${item.price}\n`;
        total += item.price;
    })
    csv += `total:,,,, ${total}\n`;
    const blob = new Blob([csv], {type: 'text/csv;charset=utf-8'});
    saveAs(blob, 'products.csv');
}

function allBtn() {

    dbFiltered.forEach(item => {
        if(!item.selected) {
            item.selected = true;
            findElById(item.id).classList.add('selected');
        }
    })
    sessionStorage.setItem('db', JSON.stringify(dbDynamic)); // store status of db

}

function noneBtn() {

    dbFiltered.forEach(item => {
        if(item.selected) {
            item.selected = false;
            findElById(item.id).classList.remove('selected');
        }
    })
    sessionStorage.setItem('db', JSON.stringify(dbDynamic)); // store status of db

}

function findElById(id) {
    const itemEls = document.querySelectorAll('.grid-item');
    let searchedItem;
    console.log(itemEls.length);
    itemEls.forEach(itemEl => {
        if (parseInt(itemEl.getAttribute('data-id')) === id) {
            searchedItem = itemEl;
        }
    })

    return searchedItem;
}

