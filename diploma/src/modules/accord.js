const accord = () => {
    const accordionTwo = document.getElementById('accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading');

    panelHeading.forEach(panel => {
        panel.addEventListener('click', e => {
            if (e.target && (e.target.closest('.panel-heading') ||
                            e.target.closest('.panel') ||
                            e.target.closest('#accordion-two'))) {
                e.preventDefault();

                let target = e.target.closest('.panel-heading');
                target.classList.toggle("in");

                let panelCollapse = target.nextElementSibling;
                if (panelCollapse.style.display === "block") {
                    panelCollapse.style.display = "none";
                } else {
                    panelCollapse.style.display = "block";
                }
            }
        });    
    });
};


export default accord;