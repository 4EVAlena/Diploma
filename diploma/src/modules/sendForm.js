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

            // сбор данных с первой секции
            if (target.id === "calcFormBlock") {
                if (document.getElementById("myonoffswitch").checked) {
                    body["Однокамерный септик"] = document.
                    getElementById("myonoffswitch").value;
                } else {
                    body["Двухкамерный септик"] = document.
                    getElementById("myonoffswitch").value;
                }   
            }
            // сбор данных со второй секции
            if (target.id === "calcFormBlock") {
                if (document.getElementById("myonoffswitch").checked) {
                    if (target === document.getElementById("select-one")) {
                        body["Диаметр первого септика"] = document.
                        getElementById("select-one").value;
                    } 
                    if (target === document.getElementById("select-two")) {
                        body["Количество колец первого септика"] = document.
                        getElementById("select-two").value;
                    }
                } else {
                    if (target === document.getElementById("select-one")) {
                        body["Диаметр первого септика"] = document.
                        getElementById("select-one").value;
                    }
                    if (target === document.getElementById("select-two")) {
                        body["Количество колец первого септика"] = document.
                        getElementById("select-two").value;
                    }
                    if (target === document.getElementById("select-three")) {
                        body["Диаметр второго септика"] = document.
                        getElementById("select-three").value;
                    } 
                    if (target === document.getElementById("select-four")) {
                        body["Диаметр колец второго септика"] = document.
                        getElementById("select-four").value;
                    }
                }    
            }
            // сбор данных с третьей секции
            if (target.id === "calcFormBlock") {
                if (document.getElementById("myonoffswitch-two")) {
                    body["Днище колодца необходимо"] = document.
                    getElementById("myonoffswitch-two").value;
                } else {
                    body["Днище колодца отсутствует"] = document.
                    getElementById("myonoffswitch-two").value;
                }   
            }
            // сбор данных с четвертой секции
            if (target.id === "calcFormBlock") {
                body["расстояние до дома"] = document.
                getElementById("collapseFour")
                .querySelector("input").value;
            }           
            // сбор данных с инпута "Введите свой вопрос" ком.дир.
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