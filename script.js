javascript

document.getElementById("year").textContent = new Date().getFullYear();


document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

