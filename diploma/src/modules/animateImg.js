const animateImg = () => {
       const imgBoxes = document.querySelectorAll('.img-box');
            console.log(imgBoxes);

      imgBoxes.forEach(imgBox => {
        let currentImg = null;
            imgBox.addEventListener('mouseover', () => {
                event.preventDefault();
                if (currentImg) return;
                    let target = event.target.closest('img');
                    console.log(target);
                if (!target) return;
                if (!imgBox.contains(target)) return;
                    currentImg = target;
                    currentImg.style.border = '2px solid #7ec14d';
                    currentImg.style.transition = 'all 1s ease-out';
                    currentImg.style.transform = 'scale(1.1)';
            });
            imgBox.addEventListener('mouseout', (event) => {
                event.preventDefault();
                if (!currentImg) return;
                    let relatedTarget = event.relatedTarget;

                while (relatedTarget) {            
                    if (relatedTarget == currentImg) return;                    
                }      
                    currentImg.style.border = '';
                    currentImg.style.transition = '';
                    currentImg.style.transform = '';
                    currentImg = null;
        });
    
    }); 
}            

export default animateImg;