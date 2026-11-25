import { turism } from "../data/discover.mjs";

const turismCards = document.querySelector("#TurismCards");

if (turismCards){
    displayTurismCards(turism)
}

function displayTurismCards (data){
    data.forEach((place) =>{
        const section = document.createElement("section");
        const h2 = document.createElement("h2");
        const img = document.createElement("img");
        const address = document.createElement("span");
        const description = document.createElement("p");
        const Learnbtn = document.createElement("button");

        section.classList = "place";
        h2.textContent = place.title;
        img.src = place.image_url;
        img.alt = place.image_url;
        img.loading = "lazy";
        address.textContent = place.address;
        description.textContent = place.description;
        Learnbtn.textContent = "Learn More";

        section.appendChild(h2);
        section.appendChild(img);
        section.append(address);
        section.appendChild(description);
        section.appendChild(Learnbtn);

        turismCards.appendChild(section);
    })
}