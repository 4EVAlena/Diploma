const accord = () => {
    const accordionTwo = document.getElementById('accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
        collapses = accordionTwo.querySelectorAll(".collapse");

    panelHeading.forEach(panel => {
        panel.addEventListener('click', e => {
            e.preventDefault();
            if (panel.nextElementSibling.classList.contains("collapse")) {
                collapses.forEach((col) => {
                    col.style.display = "none";
                  });
                  panel.nextElementSibling.style.display = "block";            
         
            }
        });    
    });
};


export default accord;