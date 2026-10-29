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
        credits: 2
    },
    {
        name: "WDD",
        room: "131",
        credits: 2
    },
    {
        name: "WDD",
        room: "231",
        credits: 2
    },
    {
        name: "CSE",
        room: "130",
        credits: 2
    },
    {
        name: "CSE",
        room: "131",
        credits: 2
    },
    {
        name: "CSE",
        room: "231",
        credits: 2
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
    filteredCourses.forEach((course) => {
        
        let ul =  document.createElement("ul")
        ul.className = "courses"

        let li =  document.createElement("li")
        li.innerHTML = `${course.name} ${course.room}`;
        credits += course.credits;
        ul.appendChild(li)
        document.querySelector("#list").append(ul)
        
        p.innerHTML = `The total credits for the course above is ${credits}`
        document.querySelector("#list").append(p)
    });
}