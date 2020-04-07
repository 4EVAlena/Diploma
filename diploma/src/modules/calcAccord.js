'use strict';
const calcAccord = () => {
    const section = document.querySelector(".constructor");
    const tabs = section.querySelectorAll(".panel-heading");
    const collapses = section.querySelectorAll(".collapse");
    const buttons = section.querySelectorAll(".construct-btn");
    const calcBlock = section.querySelector(".panel-group");
    const firstInput = document.querySelector(".onoffswitch-checkbox#myonoffswitch");
    const secondInput = document.querySelector(".onoffswitch-checkbox#myonoffswitch-two");
    const titles = section.querySelectorAll(".title-text");
    const titleToHide = section.querySelectorAll(".title-text")[1];
    const boxes = section.querySelectorAll(".select-box");
    const box1ToHide = section.querySelectorAll(".select-box")[2];
    const box2ToHide = section.querySelectorAll(".select-box")[3];
    const selects = section.querySelectorAll(".form-control");
    const select1 = section.querySelectorAll(".form-control")[0];    
    const select2 = section.querySelectorAll(".form-control")[1];    
    const select3 = section.querySelectorAll(".form-control")[2];
    const select4 = section.querySelectorAll(".form-control")[3];    
    const calcResult = section.querySelector('#calc-result');
    const options = document.querySelectorAll("option");
    const distance = section.querySelector("#collapseFour input");

    // эти значения будут после загрузке страницы
    let oneCameraDiameter = select1.value = '1.4 метра',
        oneCameraRingQuantity = select2.value = '1 штука',
        twoCameraDiameter = select3.value = '1.4 метра',
        twoCameraRingQuantity = select4.value = '1 штука',
        camera = firstInput.checked = true,
        bottom = secondInput.checked = false,
        distanceToBuilding = distance.value = '',
        basicPrice = 10000;
        calcResult.value = basicPrice;

        titleToHide.style.display = "none";
        box1ToHide.style.display = "none";
        box2ToHide.style.display = "none";

        const countSum = () => {
        // переменные для калькуляции
        let result = 0,
            firstDiameterPrice = 0, 
            secondDiameterPrice = 0,
            oneCameraRingPrice = 0,
            twoCameraRingPrice = 0,
            oneBottomPrice = 0,
            twoBottomPrice = 0;

            calcResult.value = result + firstDiameterPrice + oneCameraRingPrice + oneBottomPrice +
                                        secondDiameterPrice + twoCameraRingPrice + twoBottomPrice;

                
        tabs.forEach(tab => {
            tab.addEventListener("click", (e) => {
                e.preventDefault();
                if (tab.nextElementSibling.classList.contains("collapse")) {
                    collapses.forEach(col => {
                        col.style.display = "none";
                    });
                    tab.nextElementSibling.style.display = "block";
                }    
            });
        });

        buttons.forEach(btn => {
            if(!btn.classList.contains("call-btn")) {
                btn.addEventListener("click", (e) => {
                    e.preventDefault();
                    const collapse = document.querySelector(btn.getAttribute("href"));
                
                        collapses.forEach(col => {
                            col.style.display = "none";
                        });
                        collapse.style.display = "block";
                
                });
            }    
        });
        
        // const resetCalc = () => {
        //     selects.forEach(select => {
        //         select.value = select.options[0].value;
        //     });
        //     result = 0,
        //     firstDiameterPrice = 0, 
        //     secondDiameterPrice = 0,
        //     oneCameraRingPrice = 0,
        //     twoCameraRingPrice = 0,
        //     oneBottomPrice = 0,
        //     twoBottomPrice = 0;
        // };    

    // собраем данные с 1-й, 2-й и 4-й секции калькулятора аккордиона и ведем подсчет
        calcBlock.addEventListener("change", (e) => {
            e.preventDefault();
            let target = e.target;
            if(target.matches("#myonoffswitch.onoffswitch-checkbox")) {    
                // очистим форму
                // resetCalc();
                // выбираем однокамерный, скрываем селекты с индексами 2 и 3 и заголовок
                    if (firstInput.checked === true) {
                        titles.forEach((title, index) => {
                            if (index === 1) {
                                title.style.display = "none";
                            }
                        });
                        boxes.forEach((box, index) => {
                            if (index === 2 || index === 3) {
                                box.style.display = "none";                                  
                            }
                        });
                        result = basicPrice;
                    } else {
                        // resetCalc();
                        titleToHide.style.display = "block";
                        box1ToHide.style.display = "block";
                        box2ToHide.style.display = "block";
                        basicPrice = 15000;
                        result = basicPrice;

                        titles.forEach((title, index) => {
                            if (index === 1) {
                                title.style.display = "inline-block";
                            }
                        });
                        boxes.forEach((box, index) => {
                            if (index === 2 || index === 3) {
                                box.style.display = "inline-block";                          
                            }
                        });
                    } 
            } else if (target.matches("#myonoffswitch-two.onoffswitch-checkbox")) {
                if (secondInput.checked === true && firstInput.checked === false) {
                    twoBottomPrice = 2000;                 
                } else if (bottom === true) {
                    oneBottomPrice = 1000;                       
                } else {
                    oneBottomPrice = 0;                  
                }   
            } else if (target.matches("#collapseFour input")) {
                distanceToBuilding = target.value;
            }
        });        

        // собираем данные со 2-го блока калькулятора - с селектов и подгружаем их в подсчет
        document.addEventListener('input', event => {
            const target = event.target;
            if (target.tagName.toLowerCase() === 'select') {
                if (camera === true) {
                    basicPrice = 10000;
                    result = basicPrice;
                    if (target.closest(select1)) {    // выбираем диаметр одиночного септика                   
                        if (oneCameraDiameter === "2 метра") { // select1.value === "2 метра"
                            firstDiameterPrice = +basicPrice * 0.2; // это будет 2000руб
                        } else {
                            firstDiameterPrice = +(basicPrice * 0);
                        }                  
                    }
                    if (target.closest(select2)) { // выбираем количество колец одиночного септика      
                        if (oneCameraRingQuantity === "2 штуки") { // select2.value === "2 штуки"
                            oneCameraRingPrice = +basicPrice * 0.3; // это будет 3000руб
                        } else if (oneCameraRingQuantity === "3 штуки") { // select2.value === "3 штуки"
                            oneCameraRingPrice = +basicPrice * 0.5; // это будет 5000руб
                        } else {
                            oneCameraRingPrice = +(basicPrice * 0);
                        }
                    }
                } else if (camera === false) {
                    basicPrice = 15000;
                    result = basicPrice;
                    if (target.closest(select1)) {                        
                        if (oneCameraDiameter === "2 метра") { // select1.value === "2 метра"
                            firstDiameterPrice = +basicPrice * 0.2; // это будет 3000руб
                        } else {
                            firstDiameterPrice = +(basicPrice * 0);
                        }                   
                    }
                    if (target.closest(select2)) {
                        if (oneCameraRingQuantity === "2 штуки") { // select2.value === "2 штуки"
                            oneCameraRingPrice = +basicPrice * 0.3; // это будет 4500руб
                        } else if (oneCameraRingQuantity === "3 штуки") { // select2.value === "3 штуки"
                            oneCameraRingPrice = +basicPrice * 0.5; // это будет 7500руб
                        } else {
                            oneCameraRingPrice = +(basicPrice * 0);
                        }
                    }
                    if (target.closest(select3)) {
                        if (twoCameraDiameter === "2 метра") { // select1.value === "2 метра"
                            secondDiameterPrice = +basicPrice * 0.2; // это будет 3000руб
                        } else {
                            secondDiameterPrice = +(basicPrice * 0);
                        } 
                    }
                    if (target.closest(select4)) {
                        if (twoCameraRingQuantity === "2 штуки") { // select2.value === "2 штуки"
                            twoCameraRingPrice = +basicPrice * 0.3; // это будет 4500руб
                        } else if (twoCameraRingQuantity === "3 штуки") { // select2.value === "3 штуки"
                            twoCameraRingPrice = +basicPrice * 0.5; // это будет 7500руб
                        } else {
                            twoCameraRingPrice = +(basicPrice * 0);
                        }
                    }
                }    
            }
        });
    };
countSum();

};


export default calcAccord;