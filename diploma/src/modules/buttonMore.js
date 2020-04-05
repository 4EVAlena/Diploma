const buttonMore = () => {
    const moreBtn = document.querySelector('.add-sentence-btn'),
        section = document.querySelector('.sentence'), 
        cards = document.querySelectorAll('.row > div');
    
    moreBtn.addEventListener('click', (e) => {
       cards.forEach(card => {
            card.classList.remove('visible-sm-block');
            card.classList.remove('hidden');
       });

       moreBtn.style.display = 'none';
    });
};

export default buttonMore;