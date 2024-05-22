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

document.addEventListener("DOMContentLoaded", function () {
    const divWorkCards = document.querySelectorAll('.div-work-card');
    const cursorFollower = document.querySelector('.cursor-follower');
    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    divWorkCards.forEach(div => {
        div.addEventListener('mouseenter', () => {
            cursorFollower.style.display = 'block';
        });

        div.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        div.addEventListener('mouseleave', () => {
            cursorFollower.style.display = 'none';
        });
    });

    function updateCursorFollower() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        followerX += dx / 8;
        followerY += dy / 8;

        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';

        requestAnimationFrame(updateCursorFollower);
    }

    updateCursorFollower();
});
