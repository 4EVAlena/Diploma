const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    // const forms = document.querySelectorAll('form.capture-form, form.main-form'); 
    // const forms = document.querySelectorAll('form'); 
    const inputs = document.querySelectorAll('input');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #19b5fe';

    
        document.addEventListener('submit', event => {
            event.preventDefault();
            let target = event.target;
            target.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;  
            const formData = new FormData(target);
            const body = {};
            
            formData.forEach((val, key) => {
                body[key] = val;
            });           

            if (target.id === "myonoffswitch") {
                if (target.checked) {
                    body["Однокамерный септик"] = document.
                    getElementById("myonoffswitch").value;
                } else {
                    body["Двухкамерный септик"] = document.
                    getElementById("myonoffswitch").value;
                }   
            }

            if (target.id === "collapseThree") {
                if (target.checked &&
                    document.getElementById("myonoffswitch").checked) {
                    body["Днище колодца необходимо"] = document.
                    getElementById("myonoffswitch-two").value;
                } else {
                    body["Днище колодца отсутствует"] = document.
                    getElementById("myonoffswitch-two").value;
                }   
            }

            if (target.id === "calcFormBlock") {
                body["расстояние до дома"] = document.
                getElementById("collapseFour")
                .querySelector("input").value;
            }           

            if (target.id === "consultDirectorBlock") {
                body["Вопрос-консультация у директора"] = document.
                querySelector(".director-form")
                .querySelector("input").value;
            }

            const postData = body => {
                return fetch ('./server.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify(body),
                });
            };    
            
            postData(body)
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
                    }, 5000);
                }); 
        });
        
      
};


export default sendForm;