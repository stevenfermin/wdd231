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