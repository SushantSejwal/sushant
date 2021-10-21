const button = document.querySelector(".toggle-btn"); const line1 = document.querySelector(".toggle-btn-line-1");
const line2 = document.querySelector(".toggle-btn-line-2"); const scale = document.querySelector(".all-other-items");
const ssss = document.querySelectorAll(".link"); const anchor = document.querySelectorAll(".main-item-a");
const link_1 = document.querySelector(".link_1"); const link_2 = document.querySelector(".link_2");
const link_3 = document.querySelector(".link_3"); const logo_svg_container = document.querySelector('.main-item-a-svg-container')
const svg_g = document.querySelector('.main-logo-svg-g')
const link_4 = document.querySelector(".link_4"); 
// const link_5 = document.querySelector(".link_5"); 

button.addEventListener("click", () => { toggle(); }
);

ssss.forEach((item) => {
    item.addEventListener("click", () => {
        if (scale.classList.contains("sushantsejwal")) { toggle(); }
    });
});

anchor.forEach((item) => {
    item.addEventListener("click", () => {
        if (scale.classList.contains("sushantsejwal")) { toggle(); }
    });
});

function toggle() {
    line1.classList.toggle("sushantsejwal"); 
    line2.classList.toggle("sushantsejwal"); 
    scale.classList.toggle("sushantsejwal"); 
    link_1.classList.toggle("sushantsejwal"); 
    link_2.classList.toggle("sushantsejwal"); 
    link_3.classList.toggle("sushantsejwal"); 
    link_4.classList.toggle("sushantsejwal"); 
};

// SVG

logo_svg_container.addEventListener("mouseover", () =>
    svg_g.classList.add("sushant_anshika")
);

logo_svg_container.addEventListener("mouseleave", () =>
    svg_g.classList.remove("sushant_anshika")
);

const date = new Date(); //getting date
const year = date.getFullYear(); //getting year

const footer = document.getElementById("footer-div-span"); //getting footer by ID
footer.innerHTML = 'Copyright &copy;' + ' ' + year + ' ' + 'Sushant. All rights reserved'; // footer message

// from 

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, { 
        method: "POST", body: new FormData(document.getElementById("sheetdb-form")), 
    }).then(response => response.json()).then((html) => { 
        location.reload() 
    });
});