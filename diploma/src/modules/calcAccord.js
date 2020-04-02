const calcAccord = () => {
    const panelGroup = document.getElementById('accordion'),
    panelHeading = panelGroup.querySelectorAll('.panel-heading'),
    panelCollapse = panelGroup.querySelectorAll('.panel-collapse'),
    constructBtn = document.querySelectorAll('.construct-btn'),
    panels = document.querySelectorAll('.panel');


    panelHeading.forEach(panel => {
        panel.addEventListener('click', e => {
            if (e.target && (e.target.closest('.construct-btn') || e.target.closest('.construct-btn span') )) {
                e.preventDefault();
                let target = e.target.closest('.construct-btn');
                target.style.cursor = 'pointer';
                
                // for (let i = 0; i < panelCollapse.length; i++) {
                //     panelCollapse[i].classList.remove('in');
                //     panelCollapse[i+1].classList.add('in');
                // }
                // target.nextElementSibling.classList.toggle('in');
            }
            else if (e.target && (e.target.closest('.panel-heading') || e.target.closest('.panel') || e.target.closest('#accordion'))) {
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


export default calcAccord;