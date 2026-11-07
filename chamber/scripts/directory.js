const memberUrl = 'data/members.json';
const cards = document.querySelector("#cards")


async function getMembers() {
    try {
        const response = await fetch(memberUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        
        }
        const data = await response.json();
        displayMembers(data);
    } catch (error)
    {
        console.error(error);
    }    
}

getMembers();

const displayMembers = (members) =>{
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList = "card";
        const CompanyName = document.createElement("h1");
        const CompanyTag = document.createElement("h2");
        const img = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");

        CompanyName.textContent = member.companyName;
        CompanyTag.textContent = member.industry;
        img.src;
        address.textContent = member.address;
        phone.textContent = member.phoneNumber;
        url.textContent = member.websiteURL;

        card.appendChild(CompanyName);
        card.appendChild(CompanyTag);
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", ()=> {
    if (cards.classList.contains('grid') &! cards.classList.contains("list")){
        cards.classList = cards.classList;

    } else if(cards.classList.contains("list")){
        cards.classList.toggle("list");
        cards.classList.toggle("grid");
    }

})

listBtn.addEventListener("click", () => {
    if (cards.classList.contains('list') &! cards.classList.contains("grid")){
        cards.classList = cards.classList;

    } else if(cards.classList.contains("grid")){
        cards.classList.toggle("grid");
        cards.classList.toggle("list");
    }
})


const hamBtn = document.querySelector("#ham-btn")
const mobileNav = document.querySelector("#mobileNav")

hamBtn.addEventListener(("click"), () => {
    mobileNav.classList.toggle("show")
})

const sign = document.getElementById("signature")
const Cname = document.getElementById("DName")
const CAddress = document.getElementById("DAddress")
const CEmail = document.getElementById("DEmail")
const CPhone = document.getElementById("DNumber")

Cname.innerHTML = `<strong>ChamberRD Chamber of Commerce</strong>`
CAddress.innerHTML = `Calle B, San francisco, Distrito Nacional`
CEmail.innerHTML = `chamberrd@commerce.org`
CPhone.innerHTML = `1809-809-8098`

let date = new Date()

sign.innerHTML = `&copy;${date.getFullYear()}🌄Cesar Steven Fermin🌄 Dominican Republic`

document.getElementById("lastModified").innerHTML = document.lastModified;