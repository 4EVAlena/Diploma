const checklistBtn = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check');

        checkBtn.addEventListener('click', (e) => {
            if (e.target === checkBtn) {
            event.preventDefault();
            popupCheck.style.display = "block";

            } else {
                popupCheck.style.display = "none";
            }
        });
    

        popupCheck.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            if (!target) {
                popupCheck.style.display = 'none';
            }
        }
    });
    
};

export default checklistBtn;