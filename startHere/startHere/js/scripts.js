const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo);

const first = myInfo.get('first');
const last = myInfo.get('last');
const ordinance = myInfo.get('ordinance');
const date = myInfo.get('date');
const apptLocation = myInfo.get('location');
const phone = myInfo.get('phone');
const email = myInfo.get('email');

document.querySelector("#results").innerHTML = `
<p>Appointment for ${first} ${last}</p>
<p>Proxy ${ordinance} on ${date} in the ${apptLocation}</p>
<p><p>Your Phone: ${phone}</p>
<p>Your email is ${email}</p></p>
`;