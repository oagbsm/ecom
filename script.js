// CATEGORY + SUBCATEGORY DATA
const categories = [
    { name:"Best Deals", subs:["Flash","Discount","Combos","Snacks","Drinks","Healthy","Kids","Party","Seasonal","Top"] },
    { name:"Electronics", subs:["Mobiles","Cables","Chargers","Headphones","Speakers","Power Banks","Accessories","Home","LED","Computers"] },
    { name:"Fashion", subs:["Men","Women","Kids","Shoes","Bags","Accessories","Traditional","Sports","Winter","Summer"] },
    { name:"Home & Lifestyle", subs:["Cleaning","Kitchen","Bed & Bath","Decor","Storage","Lighting","Gardening","Tools","Pet","Candles"] },
    { name:"Groceries", subs:["Rice","Flour","Oil","Sugar","Salt","Spices","Pulses","Cereals","Noodles","Sauces"] },
    { name:"Fruits & Veg", subs:["Fresh","Leafy","Roots","Citrus","Exotic","Herbs","Frozen","Organic","Seasonal","Packaged"] },
    { name:"Baby Care", subs:["Diapers","Wipes","Milk","Foods","Toys","Bath","Health","Clothes","Safety","Accessories"] },
    { name:"Health", subs:["Vitamins","OTC","First Aid","Dental","Skin","Hair","Men","Women","Sports","Wellness"] },
    { name:"Cleaning", subs:["Detergent","Bathroom","Kitchen","Air","Laundry","Floor","Gloves","Tools","Refill","Surface"] },
    { name:"Pets", subs:["Food","Toys","Vitamins","Beds","Leashes","Grooming","Cages","Litter","Treats","Health"] }
];

// DOM
const bar = document.getElementById("categories");
const main = document.getElementById("content");

/* BUILD CATEGORY BUTTONS & SECTIONS */
categories.forEach((c, i) => {

    // button
    const btn = document.createElement("div");
    btn.className = "cat-btn";
    btn.textContent = c.name;

    btn.onclick = () => {
        document.querySelectorAll('.cat-btn')
            .forEach(x => x.classList.remove("active"));

        btn.classList.add("active");

        document.getElementById("section-"+i)
            .scrollIntoView({behavior:"smooth"});
    };

    bar.appendChild(btn);

    // section
    const sec = document.createElement("section");
    sec.className = "section";
    sec.id = "section-"+i;

    sec.innerHTML = `<h2>${c.name}</h2>`;

    const box = document.createElement("div");
    box.className = "subs";

    c.subs.forEach(s=>{
        const tag = document.createElement("div");
        tag.className="sub";
        tag.textContent=s;
        box.appendChild(tag);
    });

    sec.appendChild(box);
    main.appendChild(sec);
});
