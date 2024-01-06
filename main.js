let db = 
        [
                {
                category: "Appliance",
                name: "Refrigerator",
                description: "Used for 5 years, in perfect condition, never had issues",
                price: 1000,
                imgUrl: "./img/img.jpg"
                },
                {
                category: "Appliance",
                name: "Tami4 BubbleX",
                description: "Used for 4 years, in perfect condition, never had issues",
                price: 1000,
                imgUrl: "./img/img.jpg"
                },
                {
                category: "Sports",
                name: "Bike",
                description: "Used for 4 years, in perfect condition, never had issues",
                price: 1000,
                imgUrl: "./img/img.jpg"
                }      
            
        ];
        
window.addEventListener('DOMContentLoaded', event => {

    const gridContainer = document.getElementById('itemGrid');

    db.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('grid-item');
        console.log(item);
        itemEl.innerHTML = `
            <img src="${item.imgUrl}" alt="${item.name}" width="250" height="250">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price}</p>
        `;
        gridContainer.appendChild(itemEl);
    })


})
