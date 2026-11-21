const memberUrl = 'data/members.json';
const cards = document.querySelector("#cards");

async function getMembers() {
    try {
        const response = await fetch(memberUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data);
        displaySpotlights(data);
    } catch (error) {
        console.error(error);
    }    
}

if (cards) {
    getMembers();
}

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList = "card";
        const CompanyName = document.createElement("h1");
        const CompanyTag = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const url = document.createElement("p");

        CompanyName.textContent = member.companyName;
        CompanyTag.textContent = member.industry;
        address.textContent = member.address;
        phone.textContent = member.phoneNumber;
        url.textContent = member.websiteURL;

        card.appendChild(CompanyName);
        card.appendChild(CompanyTag);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        cards.appendChild(card);
    });
}

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

if (gridBtn && listBtn && cards) {
    gridBtn.addEventListener("click", () => {
        if (cards.classList.contains('grid') && !cards.classList.contains("list")){
        } else if(cards.classList.contains("list")){
            cards.classList.toggle("list");
            cards.classList.toggle("grid");
        }
    });

    listBtn.addEventListener("click", () => {
        if (cards.classList.contains('list') && !cards.classList.contains("grid")){
        } else if(cards.classList.contains("grid")){
            cards.classList.toggle("grid");
            cards.classList.toggle("list");
        }
    });
}

const hamBtn = document.querySelector("#ham-btn");
const mobileNav = document.querySelector("#mobileNav");

if (hamBtn && mobileNav) {
    hamBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("show");
    });
}

const sign = document.getElementById("signature");
const Cname = document.getElementById("DName");
const CAddress = document.getElementById("DAddress");
const CEmail = document.getElementById("DEmail");
const CPhone = document.getElementById("DNumber");
const lastModified = document.getElementById("lastModified");

if (Cname) Cname.innerHTML = `<strong>ChamberRD Chamber of Commerce</strong>`;
if (CAddress) CAddress.innerHTML = `Calle B, San francisco, Distrito Nacional`;
if (CEmail) CEmail.innerHTML = `chamberrd@commerce.org`;
if (CPhone) CPhone.innerHTML = `1809-809-8098`;

let date = new Date();
if (sign) sign.innerHTML = `&copy;${date.getFullYear()}🌄Cesar Steven Fermin🌄 Dominican Republic`;
if (lastModified) lastModified.innerHTML = document.lastModified;

/*************Weather*************/

const forecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=18.46&lon=-69.93&units=imperial&appid=e23e1b9d9e79bb6b6d0e99e171055e4f'
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=18.46&lon=-69.93&units=imperial&appid=e23e1b9d9e79bb6b6d0e99e171055e4f'
const temp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('.figcaption');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok){  
            const data = await response.json()
            if (temp && weatherIcon &&caption) {
                displayResults(data);
            }
            
        } else {
            throw new Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    temp.innerHTML = `Today's temperature is: ${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', description);
    caption.textContent = description
}

async function forecastFetch() {
    try {
        const response = await fetch(forecast);
        if(response.ok){  
            const data = await response.json()
            if (temp && weatherIcon &&caption) {
                displayForecast(data);
                console.log(data)
            }
            
        } else {
            throw new Error(await response.text());
        }

    } catch (error){
        console.log(error);
    }
}

forecastFetch();

function displayForecast(data){
    const dailyForecast = data.list.filter(item => item.dt_txt.includes("12:00:00"))
    const getThreeDays = dailyForecast.slice(0,3);
    
    const htmlForecast = document.querySelector("#forecast")
    getThreeDays.forEach(day => {
        const section = document.createElement("section");
        section.classList = "cast";
        const todayCast = document.createElement("p");
        const temperature = document.createElement("p");
        const weather = document.createElement("p");
        const forecastIcon = document.createElement("img");
        const date = day.dt_txt.split(" ");
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
        const description = day.weather[0].description;
        forecastIcon.setAttribute('src', icon)
        forecastIcon.setAttribute('alt', description)
        todayCast.innerHTML = `Date: ${date[0]}`;
        temperature.innerHTML = `Temperature: ${day.main.temp}&deg;F`
        weather.innerHTML = `Weather: ${description}`
        section.appendChild(forecastIcon)
        section.appendChild(todayCast);
        section.appendChild(temperature);
        section.appendChild(weather);
        htmlForecast.appendChild(section)
    })

}


/*******************COMPANIES**********************/

const spotlights = document.querySelector("#spotlights")

async function getSpotlight() {
    try {
        const response = await fetch(memberUrl);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        displaySpotlights(data);
    } catch (error) {
        console.error(error);
    }    
}

if (spotlights) {
    getSpotlight();
}

const displaySpotlights = (companies) => {

    const filteredCompanies = companies.filter(
        (company) => company.membershipLevel ===2 || company.membershipLevel === 3
    );

    const randomCompanies = filteredCompanies.sort(() => 0.5 - Math.random());
    const selectedCompanies = randomCompanies.slice(0,3);

    spotlights.innerHTML = "";
    
    selectedCompanies.forEach((company) => {
        const section = document.createElement("section");
        section.classList = "spot";
        const name = document.createElement("h2");
        const logo = document.createElement("img");
        const phone = document.createElement("span");
        const address = document.createElement("span");
        const website = document.createElement("span");
        const membership = document.createElement("p");


        name.textContent = company.companyName;
        logo.src = company.imageFileName;
        logo.alt = company.name;
        phone.innerHTML = `<strong>Phone:</strong> ${company.phoneNumber}`;
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;
        website.innerHTML = `<strong>Website:</strong> ${company.websiteURL}`;

        if (company.membershipLevel === 2){
            membership.textContent = "Silver";
        } else if (company.membershipLevel ===3) {
            membership.textContent = "Gold";
        }
        

        section.appendChild(name);
        section.appendChild(logo);
        section.appendChild(phone);
        section.appendChild(address);
        section.appendChild(website);
        section.appendChild(membership);

        spotlights.appendChild(section);
    });
}

/**Memberships**/

const memberships = [
    {
    id: "np",
    level: "Non Profit",
    benefits: ["Standard listing in the online Business Directory", 
        "Access to monthly community networking mixers", 
        "Eligibility to post community events on the Chamber calendar", 
        "Monthly digital Chamber newsletter subscription"],
    payment: 0
    },
    {
    id: "bronze",
    level: "Bronze",
    benefits: ["Everything in Non-Profit", 
        "Enhanced directory listing with logo, website link, and social handles",
        "Member-to-member discount program access",
        "Official 'Chamber Member' digital badge & window decal",
        "Discounted admission to workshops and seminars"],
    payment: 0
    },
    {
    id: "silver",
    level: "Silver",
    benefits: ["Everything in Bronze",
        "Priority placement in directory search results",
        "2 complimentary tickets to annual networking events & luncheons",
        "Quarterly social media spotlight feature across Chamber channels",
        "Free access to business training workshops and webinars",
        "Ability to post job openings on the Chamber job board"],
    payment: 0
    },
    {
    id: "gold",
    level: "Gold",
    benefits: ["Everything in Silver",
        "Homepage 'Company Spotlight' rotation on the Chamber website",
        "Featured banner ad in the monthly Chamber newsletter",
        "VIP seating and 4 complimentary passes to the Annual Gala & major summits",
        "Complimentary ribbon-cutting ceremony & press release promotion",
        "Invitation to executive roundtables and policy committees"],
    payment: 0
    }
]

const npBtn = document.querySelector("#btn-np");
const bronzeBtn = document.querySelector("#btn-bronze");
const silverBtn = document.querySelector("#btn-silver");
const goldBtn = document.querySelector("#btn-gold");

const membershipDial = document.querySelector("#dialog-membership")

if (npBtn){
    npBtn.addEventListener("click", () => {
        membershipDetails(memberships.find(membership => membership.id == "np"))
    })
}

if (bronzeBtn){
    bronzeBtn.addEventListener("click", () => {
        membershipDetails(memberships.find(membership => membership.id == "bronze"))
    })
}

if (silverBtn){
    silverBtn.addEventListener("click", () => {
        membershipDetails(memberships.find(membership => membership.id == "silver"))
    })
}

if (goldBtn){
    goldBtn.addEventListener("click", () => {
        membershipDetails(memberships.find(membership => membership.id == "gold"))
    })
}

function membershipDetails(memberDetails) {
    membershipDial.innerHTML = `
    <div class="dialHead">
        <h1>${memberDetails.level} Membership</h1>
        <button id="closeModal" aria-label="close">❌</button>
    </div>
    <div class="benefits">
    <p>Benefits include:</p>
    <ul id="level-benefits">
    <ul>
    </div>
    `;
    
    const ul = document.querySelector("#level-benefits")
    
    memberDetails.benefits.forEach((benefit) => {
        const li =  document.createElement("li")
        li.textContent = benefit;
        ul.appendChild(li);
    })

    membershipDial.showModal();

    membershipDial.querySelector("#closeModal").addEventListener("click", () => {
        membershipDial.close();
    })
}

const result =  document.querySelector("#form-results");

if (result){
    const h1 = document.createElement("h1")
    h1.innerHTML = `El diañe mi loco`;

    result.appendChild(h1);
}

const getURL = window.location.search;

const myInfo = new URLSearchParams(getURL)