const popupDiscount = () => {
    const discountBtns = document.querySelectorAll('.discount-btn'),
        popupDiscount = document.querySelector('.popup-discount');

    discountBtns.forEach(discountBtn => {
        discountBtn.addEventListener('click', (e) => {
            if (e.target === discountBtn) {
            event.preventDefault();
            popupDiscount.style.display = "block";

            } else {
            popupDiscount.style.display = "none";
            }
        });
    });

    popupDiscount.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            if (!target) {
                popupDiscount.style.display = 'none';
            }
        }
    });
    
};

export default popupDiscount;