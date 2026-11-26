const allNavLinks = document.querySelectorAll(".link a");

const currentPage = window.location.href.split("/").pop() || "index.html";

allNavLinks.forEach(links => {
    if (links.getAttribute("href") === currentPage){
        
        links.parentElement.classList.add("current");
    }
});