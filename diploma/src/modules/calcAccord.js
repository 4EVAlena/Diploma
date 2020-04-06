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
    const boxes = section.querySelectorAll(".select-box");
    const selects = section.querySelectorAll(".form-control");
    const select3 = section.querySelectorAll(".form-control")[2];
    const optionsSelect3 = select3.querySelectorAll("option");
    const select4 = section.querySelectorAll(".form-control")[3];
    const optionsSelect4 = select4.querySelectorAll("option");

    const calcResult = section.querySelector('#calc-result');
    const options = document.querySelectorAll("option");

    let result = 0;    
    let standartPrice = 10000; // базовая стоимость
    let variant = 1;
    let countOne = 1; // коэф диаметра одного септика
    let countTwo = 1; // коэф колец одного септика
    let countThree = 1; // коэф диаметра дренажного септика
    let countFour = 1; // коэф колец дренажного септика
    let floor = 0;

    const getResult = () => {
        if (variant === 1) {
            return ((result + standartPrice) + floor);
        } else if (variant === 11) {
            return (((result + standartPrice) * countOne * countTwo) + floor);
        } else if (variant === 2) {
            return (((result + standartPrice) * countOne * countTwo) + 
            ((result + standartPrice) * countThree * countFour) + floor);
        }     
    };

    const resetCalc = () => {
        selects.forEach(select => {
            select.value = select.options[0].value;
        });
        calcResult.value = 0;
        result = 0;
        standartPrice = 10000;    
        countOne = 1;    
        countTwo = 1;
        countThree = 1;    
        countFour = 1;
        variant = 1;
        floor = 0;
    };

    const eraseSelect3OptionsValue = () => {
        optionsSelect3.forEach((opti, index) => {
            opti[index].value ='';
        });
    };
    const eraseSelect4OptionsValue = () => {
        optionsSelect4.forEach((opti, index) => {
            opti[index].value ='';
        });
    };

    const insertSelect3OptionsValue = () => {
        optionsSelect3.forEach((opti, index) => {
            opti[0].value ="1.4 метра";
            opti[1].value ="2 метра";
        });
    };
    const insertSelect4OptionsValue = () => {
        optionsSelect4.forEach((opti, index) => {
            opti[0].value ="1 штука";
            opti[1].value ="2 штуки";
            opti[2].value ="3 штуки";
        });
    };

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

        calcBlock.addEventListener("change", (e) => {
            e.preventDefault();
            let target = e.target;
            if(target.matches("#myonoffswitch.onoffswitch-checkbox")) {
    
                // чистим форму
                resetCalc();
                variant = 11;
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
                            // eraseSelect3OptionsValue();
                            // eraseSelect4OptionsValue();                            
                        }
                    });
                    standartPrice = 10000;
                    calcResult.value = getResult();                                   
                } else {
                    resetCalc();
                    standartPrice = 15000;

                    titles.forEach((title, index) => {
                        if (index === 1) {
                            title.style.display = "inline-block";
                        }
                    });
                    boxes.forEach((box, index) => {
                        if (index === 2 || index === 3) {
                            box.style.display = "inline-block";
                            // insertSelect3OptionsValue();
                            // insertSelect4OptionsValue();
                        }
                    });
                    calcResult.value = getResult();
                }
              
            // секция опций   
            } else if (target.matches(".constructor .form-control")) {
                    variant = 11;
                    console.log(target.matches(".constructor .form-control"));
        
                    selects.forEach((select, index) => {
                        console.log(select.value);
                        options.forEach(option => {
                        // если один колодец диаметром 1,4 метра
                                if (firstInput.checked === true && 
                                            select[0].value === "1.4 метра" && 
                                            select[1].value === "3 штуки") {
                                    console.log(1);
                                    standartPrice = 10000;
                                    countOne = 1;
                                    countTwo = 1.5;                
                                    variant = 11;
                                    // console.log(select);
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                } else if (firstInput.checked === true && 
                                            option.value === "1.4 метра" && 
                                            option.value === "2 штуки") {
                                                console.log("success");
                                    countOne = 1;
                                    countTwo = 1.3;                
                                    variant = 11;   
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                } else if (firstInput.checked === true && 
                                            select.value === "1.4 метра" && 
                                            select.value === "1 штука") {
                                    countTwo = 1; 
                                    standartPrice = 10000;
                                    countOne = 1;
                                    countTwo = 1;                
                                    variant = 11;
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                }   else if (firstInput.checked === false &&
                                            select.value === "1.4 метра" && 
                                            select.value === "1 штука" && 
                                            select.value === "1.4 метра" && 
                                            select.value === "1 штука") {
                                    variant = 2;
                                    standartPrice = 15000;
                                    countOne = 1;            
                                    countTwo = 1;
                                    countThree = 1;            
                                    countFour = 1;
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                } else if (firstInput.checked === false &&
                                    select.value === "1.4 метра" && 
                                    select.value === "2 штуки" && 
                                    select.value === "1.4 метра" && 
                                    select.value === "1 штука") {
                                    variant = 2;
                                    standartPrice = 15000;
                                    countOne = 1;            
                                    countTwo = 1.3;
                                    countThree = 1;            
                                    countFour = 1;
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                } else if (firstInput.checked === false &&
                                    select.value === "1.4 метра" && 
                                    select.value === "3 штуки" && 
                                    select.value === "1.4 метра" && 
                                    select.value === "1 штука") {
                                    variant = 2;
                                    standartPrice = 15000;
                                    countOne = 1;            
                                    countTwo = 1.5;
                                    countThree = 1;            
                                    countFour = 1;
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                } else if (firstInput.checked === false &&
                                    select.value === "2 метра" && 
                                    select.value === "1 штука" && 
                                    select.value === "1.4 метра" && 
                                    select.value === "1 штука") {
                                    variant = 2;
                                    standartPrice = 15000;
                                    countOne = 1.2;            
                                    countTwo = 1;
                                    countThree = 1;            
                                    countFour = 1;
                                    console.log("floor: ", floor);
                                    console.log("countOne: ", countOne);
                                    console.log("countTwo: ", countTwo);
                                    console.log("standartPrice: ", standartPrice);
                                    console.log("result: ", result);
                                    console.log(getResult());
                                }     
                            });                 
                  
                });    
                
                // секция наличия днища       
            } else if (target.matches("#myonoffswitch-two.onoffswitch-checkbox")) {
                    variant = 11;
                    floor = 0;
                if (secondInput.checked === true && firstInput.checked === false) {
                    floor = 2000;                 
                    calcResult.value = getResult();
                } else if (secondInput.checked === true) {
                    floor = 1000;                       
                    calcResult.value = getResult();
                } else {
                    floor = 0;                  
                    calcResult.value = getResult();
                }   
            }    
    });

};


export default calcAccord;