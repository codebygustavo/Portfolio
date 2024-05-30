const a = () => {
    const h = document.querySelector("header.header");
    if (window.scrollY > 10) {
        h.classList.add('for-scroll');
    } else {
        h.classList.remove('for-scroll')
    }
}

window.addEventListener("scroll", a);

const toggleThema = document.querySelector(".switch input")

const b = () => {
    const b = document.querySelector("body");

    b.classList.toggle('dark');

    if(b.classList.contains('dark')) {
        sessionStorage.setItem("mode", true)
        toggleThema.checked = true
    } else {
        sessionStorage.setItem("mode", false)
    }

}

const mode = sessionStorage.getItem("mode");

if (mode === "true") {
    b();
}

toggleThema.addEventListener("click", b);