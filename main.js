let db = 
        {
            "Appliances": {
                "Refrigerator" : {
                "Description": "Bla bla",
                "Price": 1000,
                "img": "./img/img.jpg"
                },
                "Tami4" : {
                "Description": "very water dispenser",
                "Price": 900,
                "img": "./img/img.jpg"
                }
            }
        };
        
window.addEventListener('DOMContentLoaded', event => {

    const container = document.getElementById('container');

    Object.keys(db).forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.innerText = category;
        Object.keys(db[category]).forEach(item => {
            const itemTitle = document.createElement('h3');
            itemTitle.innerText = item;
            Object.keys(db[category][item]).forEach(property => {
                if (property !== "img") {
                    const propertyTitle = document.createElement('p');
                    propertyTitle.innerText = property + ': ' + db[category][item][property];
                    itemTitle.appendChild(propertyTitle);
                } else {
                    // add image
                    const imgContainerEl = document.createElement('div');
                    imgContainerEl.classList.add('image-container');
                    const imgEl = document.createElement('img');
                    imgEl.classList.add('fit-image');
                    imgEl.setAttribute('src', db[category][item][property]);
                    imgContainerEl.appendChild(imgEl);
                    itemTitle.appendChild(imgContainerEl);
                }
            })
            categoryTitle.appendChild(itemTitle);  
        })
        container.appendChild(categoryTitle);
    })


})
