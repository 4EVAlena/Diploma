const popup1 = () => {
    const popup = document.querySelector('.popup-call'),
        popupBtn = document.querySelectorAll('.call-btn'),
        popupСontent = document.querySelector('.popup-content');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = "block";

            if (screen.width > 768) {
                const start = Date.now();

                const draw = () => {
                    const idAnimation = requestAnimationFrame(draw);
                    const timePassed = Date.now() - start;
                    if (timePassed >= 800) {
                          
                        cancelAnimationFrame(idAnimation);
                        return;
                    }
                    let dist = +getComputedStyle(popupСontent).width.split("px")[0];
                    dist = -dist/5.5 + 40 + "px";
                    popupСontent.style.left = timePassed / 15 + "%";
                    popupСontent.style.marginLeft = dist;
                }
                draw();
            }
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
};

export default popup1;