
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


reveals.forEach((element) => {

    observer.observe(element);

});

const products = document.querySelectorAll(".product");

products.forEach((product) => {

    product.addEventListener("click", () => {

        const productName =
            product.querySelector("h3").innerText;

        alert(
            `${productName} Collection\n\nComing soon...`
        );

    });

});


const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(9, 7, 7, 0.88)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background =
            "rgba(9, 7, 7, 0.55)";

        navbar.style.boxShadow =
            "none";

    }

});


document.querySelectorAll("a[href^='#']")
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });