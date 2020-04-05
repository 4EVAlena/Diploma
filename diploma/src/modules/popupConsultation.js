const popupConsultation = () => {
    const consultBtn = document.querySelector('.director-btn'),
        popupConsult = document.querySelector('.popup-consultation');

        consultBtn.addEventListener('click', (e) => {
            if (e.target == consultBtn) {
            event.preventDefault();
            popupConsult.style.display = "block";

            } else {
            popupConsult.style.display = "none";
            }
        });
    

    popupConsult.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupConsult.style.display = 'none';
        } else {

            target = target.closest('.popup-content');
            if (!target) {
                popupConsult.style.display = 'none';
            }
        }
    });
    
};

export default popupConsultation;