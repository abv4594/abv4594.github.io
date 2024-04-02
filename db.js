// db

const db =
[
    {
        id: 1,
        category: "Electronics",
        name: "Samsung Monitor 22",
        description: "Model S22F350FHM",
        price: 200,
        available: "now",
        imgUrl: "./img/monitorSamsung.jpg",
        selected: false,
        sold: true
    },
    {
        id: 2,
        category: "Electronics",
        name: "Scanner Fujitsu",
        description: "Model IX500",
        price: 490,
        available: "now",
        imgUrl: "./img/scannerFujitsu.jpg",
        selected: false,
        sold: false
    },
    {
        id: 3,
        category: "Electronics",
        name: "Xbox One S",
        description: "Xbox One S with two controllers kinect and games",
        price: 450,
        available: "now",
        imgUrl: "./img/xBox.jpg",
        selected: false,
        sold: true
    },
    {
        id: 4,
        category: "Appliances",
        name: "Oven",
        description: "Oven Constructa pyrolytic CF4M78020Y",
        price: 890,
        available: "15-May-2024",
        imgUrl: "./img/forno.jpg",
        selected: false,
        sold: true
    },
    {
        id: 5,
        category: "Appliances",
        name: "Refrigerator",
        description: "Model Haier 547l",
        price: 800,
        available: "15-May-2024",
        imgUrl: "./img/geladeira.jpg",
        selected: false,
        sold: true
    },
    {
        id: 6,
        category: "Appliances",
        name: "TV 55",
        description: "TV Phillips 55",
        price: 350,
        available: "now",
        imgUrl: "./img/tvPhillips55.jpg",
        selected: false,
        sold: true
    },
    {
        id: 7,
        category: "Appliances",
        name: "Washing machine",
        description: "Washing machine 8Kg Samsung",
        price: 600,
        available: "15-May-2024",
        imgUrl: "./img/maqLavar.jpg",
        selected: false,
        sold: true
    },
    {
        id: 8,
        category: "Appliances",
        name: "Clothes dryer",
        description: "Drying machine 7Kg Indesit",
        price: 450,
        available: "15-May-2024",
        imgUrl: "./img/maqSecar.jpg",
        selected: false,
        sold: true
    },
 
    {
        id: 9,
        category: "Appliances",
        name: "Dishwasher",
        description: "Dishwasher electra",
        price: 250,
        available: "15-May-2024",
        imgUrl: "./img/lavaLouca.jpg",
        selected: false,
        sold: true
    },
    {
        id: 10,
        category: "Furnitures",
        name: "Bed + Mattress",
        description: "Bed + Mattress 120 x 190 - used 2 years only",
        price: 890,
        available: "15-May-2024",
        imgUrl: "./img/bedQueen.jpg",
        selected: false,
        sold: true
    },
    {
        id: 11,
        category: "Furnitures",
        name: "Study table",
        description: "Study table ikea 120x60",
        price: 250,
        available: "Now",
        imgUrl: "./img/studyTable.jpg",
        selected: false,
        sold: true
    },
    {
        id: 12,
        category: "Furnitures",
        name: "Mirror",
        description: "Mirror 40x150",
        price: 150,
        available: "Now",
        imgUrl: "./img/mirror.jpg",
        selected: false,
        sold: true
    },
    {
        id: 13,
        category: "Furnitures",
        name: "Student chair",
        description: "Student chair Ikea",
        price: 180,
        available: "Now",
        imgUrl: "./img/studyChair.jpg",
        selected: false,
        sold: true
    },
    {
        id: 14,
        category: "Furnitures",
        name: "Office chair",
        description: "Office chair Ikea",
        price: 240,
        available: "Now",
        imgUrl: "./img/officeChair.jpg",
        selected: false,
        sold: true
    },
    {
        id: 15,
        category: "Furnitures",
        name: "Single double bed (1)",
        description: "Single double bed 90x200 cm - includes two mattresses",
        price: 290,
        available: "Now",
        imgUrl: "./img/doubleBed.jpg",
        selected: false,
        sold: true
    },
    {
        id: 16,
        category: "Appliances",
        name: "Tami 4 Bubble X",
        description: "Tami 4 Bubble X",
        price: 890,
        available: "15-May-2024",
        imgUrl: "./img/tami4.jpg",
        selected: false,
        sold: false
    },
    {
        id: 17,
        category: "Appliances",
        name: "Ninja Blender",
        description: "Ninja Blender Hot & Cold HB153 - 1 year usage",
        price: 300,
        available: "15-May-2024",
        imgUrl: "./img/ninja.jpg",
        selected: false,
        sold: true
    },
    {
        id: 18,
        category: "Appliances",
        name: "Air Fryer",
        description: "Air Fryer Kenwood XL 3.7L",
        price: 180,
        available: "15-May-2024",
        imgUrl: "./img/airfryer.jpg",
        selected: false,
        sold: false
    },
    {
        id: 19,
        category: "Furnitures",
        name: "Sofa",
        description: "Sofa IKEA blue 277 x 90 cm (Chaise 165 cm)",
        price: 550,
        available: "15-May-2024",
        imgUrl: "./img/sofa.jpg",
        selected: false,
        sold: true
    },
    {
        id: 20,
        category: "Furnitures",
        name: "Dinner Table + 6 chairs",
        description: "In glass - gray with chairs - 220 x 96 cm",
        price: 750,
        available: "15-May-2024",
        imgUrl: "./img/dinnerTable.jpg",
        selected: false,
        sold: true
    },
    {
        id: 21,
        category: "Appliances",
        name: "iRobot",
        description: "iRobot",
        price: 200,
        available: "Now",
        imgUrl: "./img/iRobot.jpg",
        selected: false,
        sold: true
    },
    {
        id: 22,
        category: "Furnitures",
        name: "King double bed",
        description: "King double bed IKEA with 2 drawers + King Mattress + 2 Bedside tables",
        price: 2200,
        available: "15-May-2024",
        imgUrl: "./img/kingBed.jpg",
        selected: false,
        sold: true
    },
    {
        id: 23,
        category: "Furnitures",
        name: "Side cart",
        description: "Side cart with wheels IKEA - black",
        price: 50,
        available: "Now",
        imgUrl: "./img/sideCart.jpg",
        selected: false,
        sold: true
    },
    {
        id: 24,
        category: "Furnitures",
        name: "Side table",
        description: "Side table IKEA",
        price: 50,
        available: "Now",
        imgUrl: "./img/sideTable.jpg",
        selected: false,
        sold: true
    },
    {
        id: 25,
        category: "Electronics",
        name: "Wi-fi extender",
        description: "3 x Wi-fi extenders Google",
        price: 180,
        available: "Now",
        imgUrl: "./img/googleWifi.jpg",
        selected: false,
        sold: true
    },
    {
        id: 26,
        category: "Furniture",
        name: "TV Stand",
        description: "TV Stand BYAS IKEA 160 x 42 x 45",
        price: 180,
        available: "15-May-2024",
        imgUrl: "./img/rack.jpg",
        selected: false,
        sold: true
    },
    {
        id: 27,
        category: "Appliances",
        name: "5 filters + 1 Lamp Tami4 BubbleX",
        description: "5 filters + 1 Lamp Tami4 BubbleX - NEW!",
        price: 500,
        available: "now",
        imgUrl: "./img/tami4Filters.jpg",
        selected: false,
        sold: true
    },
    {
        id: 28,
        category: "Appliances",
        name: "Dyson V11",
        description: "Dyson with stand and add-ons",
        price: 700,
        available: "15-May-2024",
        imgUrl: "./img/dyson.jpg",
        selected: false,
        sold: true
    },
    {
        id: 29,
        category: "Appliances",
        name: "Bosch pressure washer",
        description: "Bosch Easyaquatak 110",
        price: 290,
        available: "15-May-2024",
        imgUrl: "./img/boschPressure.jpg",
        selected: false,
        sold: true
    },
    {
        id: 30,
        category: "Appliances",
        name: "Bissel Crosswave",
        description: "Bissel Crosswave 2582N",
        price: 490,
        available: "Now",
        imgUrl: "./img/crosswave.jpg",
        selected: false,
        sold: true
    },
    {
        id: 31,
        category: "Electronics",
        name: "Printer HP",
        description: "Printer HP 3545",
        price: 200,
        available: "15-May-2024",
        imgUrl: "./img/printer.jpg",
        selected: false,
        sold: true
    },
    {
        id: 32,
        category: "Furnitures",
        name: "Single double bed (2)",
        description: "Single double bed 90x200 cm - includes two mattresses",
        price: 290,
        available: "Now",
        imgUrl: "./img/doubleBed.jpg",
        selected: false,
        sold: false
    },
    
            
];
export default db; 
