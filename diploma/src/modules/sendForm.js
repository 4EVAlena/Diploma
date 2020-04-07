const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    // const forms = document.querySelectorAll('form.capture-form, form.main-form'); 
    const forms = document.querySelectorAll('form'); 
    const inputs = document.querySelectorAll('input');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';

    
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            let target = event.target;
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;  
            const formData = new FormData(form);
            let bufferObj = {};
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
                calcData[key] = val;         
            }); 

            const postData = body => {
                return fetch ('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(body),
                });
            };    

            if (target.closest('.popup-discount')) {
                bufferObj = calcData;
            } else {
                bufferObj = body;
            }
            
            postData(bufferObj)
                .then( response => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }    
                    statusMessage.textContent = successMessage;
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                 })
                .finally(() => {                       
                    setTimeout(() => {
                        inputs.forEach(item => item.value = '');
                        statusMessage.innerText = '';   
                        bufferObj = {};                            
                    }, 5000);
                }); 
        });
    });    
      
};


export default sendForm;