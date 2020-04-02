const animateBtn = () => {
    const forms = document.querySelectorAll('form, div');
    
    forms.forEach(form => {
        let currentButton = null;
        document.addEventListener('mouseover', (event) => {
            event.preventDefault();
            if (currentButton) return;
                let target = event.target.closest('.button');
            if (!target) return;
            if (!form.contains(target)) return;
                currentButton = target;
                currentButton.style.background = '#90c406';
                currentButton.style.fontSize = '1.7rem';
                currentButton.style.fontWeight = 'bold';
                currentButton.style.border = '2px solid #7ec14d';
                currentButton.style.padding = '1.5rem 0rem';
                currentButton.style.boxSizing = 'content-box';
        });
        document.addEventListener('mouseout', (event) => {
            event.preventDefault();
            if (!currentButton) return;
                let relatedTarget = event.relatedTarget;

            while (relatedTarget) {            
                if (relatedTarget == currentButton) return;
                    relatedTarget = relatedTarget.parentNode;
            }      
                currentButton.style.background = '';
                currentButton.style.fontSize = '';
                currentButton.style.fontWeight = '';
                currentButton.style.border = '';
                currentButton.style.padding = '';
                currentButton.style.boxSizing = '';
                currentButton = null;
        });
    });        
};

export default animateBtn;