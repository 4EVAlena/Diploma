const accord = () => {
    const accordionTwo = document.getElementById('accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
        panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

    panelHeading.forEach(panel => {
        panel.addEventListener('click', e => {
            if (e.target && (e.target.closest('.panel-heading') || e.target.closest('.panel') || e.target.closest('#accordion-two'))) {
            e.preventDefault();
            let target = e.target.closest('.panel-heading');
                for (let i = 0; i < panelCollapse.length; i++) {
                    panelCollapse[i].classList.remove('in');
                }
            target.nextElementSibling.classList.toggle('in');
            }
        });    
    });
};


export default accord;