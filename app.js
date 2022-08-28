const menu = [
    {
        id:1,
        title: "Butter Milk",
        category: "breakfast",
        price: 15.99,
        img: "./item-2.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },
    {
        id:2,
        title: "Cream",
        category: "lunch",
        price: 16.99,
        img: "./item-7.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },{
        id:3,
        title: "Isagio",
        category: "breakfast",
        price: 5.99,
        img: "./item-2.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },{
        id:4,
        title: "Contavaro",
        category: "shakes",
        price: 20.99,
        img: "./item-7.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },{
        id:5,
        title: "Roasted",
        category: "breakfast",
        price: 7.99,
        img: "./item-2.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },{
        id:6,
        title: "Heavy",
        category: "lunch",
        price: 5.99,
        img: "./item-7.jpeg",
        desc: `Reprehenderit cupidatat est ea nostrud exercitation quis nulla voluptate sunt veniam cupidatat amet adipisicing excepteur reprehenderit ad excepteur cupidatat nisi adipisicing culpa ullamco id labore enim dolore amet ipsum cupidatat`
    },
]

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");
window.addEventListener("DOMContentLoaded", function(){
       displayMenuItems(menu);
});

filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem;
            }
        })
        if(category === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory)
        }
    });
})
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){

        return `<article class="menu-item">
        <img src="${item.img}" class="photo">
        <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}