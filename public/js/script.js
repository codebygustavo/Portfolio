const a = () => {
    const h = document.querySelector("header.header");
    if (window.scrollY > 10) {
        h.classList.add('for-scroll');
    } else {
        h.classList.remove('for-scroll')
    }
}

window.addEventListener("scroll", a);

const b = () => {
    const b = document.querySelector("body");

    b.classList.toggle('dark');
}

document.querySelector(".switch input").addEventListener("click", b);