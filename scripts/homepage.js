const hambutton = document.querySelector("#ham-btn");
const navBar = document.querySelector("#nav-bar");

hambutton.addEventListener("click", () => {
    hambutton.classList.toggle("show");
    navBar.classList.toggle("show");
})

const courses = [
    {
        name: "WDD",
        room: "130",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    },
    {
        name: "WDD",
        room: "131",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    },
    {
        name: "WDD",
        room: "231",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    },
    {
        name: "CSE",
        room: "130",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    },
    {
        name: "CSE",
        room: "131",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    },
    {
        name: "CSE",
        room: "231",
        credits: 2,
        title: "",
        certificate: "Web and Computer Programming",
        description: "",
        technology: "HTML, CSS, JS"
    }
]

courseList(courses)

const all = document.querySelector("#all")

all.addEventListener("click", () => {
    courseList(courses)
});

const wdd = document.querySelector("#wdd")

wdd.addEventListener("click", () => {
    courseList(courses.filter(course => course.name == "WDD"))
});

const cse = document.querySelector("#cse")

cse.addEventListener("click", () => {
    courseList(courses.filter(course => course.name == "CSE"))
});

function courseList(filteredCourses){
    document.querySelector("#list").innerHTML = ""
    let p = document.createElement("p")
    let credits = 0

    let ul =  document.createElement("ul")
    ul.className = "courses"

    document.querySelector("#list").append(ul)

    filteredCourses.forEach((course) => {

        let li =  document.createElement("li")

        const a = document.createElement("a");
        a.id = `${course.name}-${course.room}`;
        a.href = "#list"

        a.innerHTML = `${course.name} ${course.room}`;

        a.addEventListener('click', () => displayCourseDetails(course));

        li.appendChild(a)
        credits += course.credits;
        ul.appendChild(li)
        
    });

    p.innerHTML = `The total credits for the course above is ${credits}`
    document.querySelector("#list").append(p)
}

const courseDetails = document.querySelector("#course-dialog")

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
    <button id="closeModal" aria-label="Close">❌</button>
    <h2>${course.name} ${course.room}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits: </strong>${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies: </strong>${course.technology}</p>
    `;
    courseDetails.showModal();

    courseDetails.querySelector("#closeModal").addEventListener('click', () => {
        courseDetails.close();
    })
}

const sign = document.getElementById("signature")

let date = new Date()

sign.innerHTML = `&copy;${date.getFullYear()}🌄Cesar Steven Fermin🌄 Dominican Republic`

document.getElementById("lastModified").innerHTML = document.lastModified;
