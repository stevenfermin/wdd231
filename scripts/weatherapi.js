const temp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.41&lon=10.43&units=imperial&appid=e23e1b9d9e79bb6b6d0e99e171055e4f'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok){  
            const data = await response.json()
            displayResults(data)
            
        } else {
            throw new Error(await response.text());
        }
    }catch (error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc)
    weatherIcon.setAttribute('alt', description);
    caption.textContent = description
}