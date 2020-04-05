const calcAccord = (oneWellPrice = 10000) => {
    const panelGroup = document.getElementById('accordion'),
        panelHeading = panelGroup.querySelectorAll('.panel-heading'),
        panelCollapse = panelGroup.querySelectorAll('.panel-collapse'),
        //--------------------------------------
        myOnOffSwitch = document.getElementById('myonoffswitch'), // кол-во камер
        first = myOnOffSwitch.querySelector('.onoffswitch-inner'),
        second = myOnOffSwitch.querySelector('.onoffswitch-switch'),
        myOnOffSwitchTwo = document.getElementById('myonoffswitch-two'), // наличие днища
        selects = panelGroup.querySelectorAll('select'), // селекты второго блока
        calcResult = document.getElementById('calc-result');

    panelHeading.forEach(panel => {
        panel.addEventListener('click', e => {
            e.target.style.cursor = 'pointer';

            if (e.target && (e.target.closest('.construct-btn') || e.target.closest('.construct-btn span') )) {
                e.preventDefault();
                let target = e.target.closest('.construct-btn');
                // const arrPanels = Array.from(panels);
                for (let i=0; i<panelCollapse.length; i++) {
                    // for (let j = 0; j < i; j++) {
                        panelCollapse[i].classList.remove('in');
                    }
                target.nextElementSibling.nextElementSibling.classList.toggle('in');
                
            } else if (e.target && (e.target.closest('.panel-heading') ||
                                    e.target.closest('.panel') ||
                                e.target.closest('#accordion'))) {
                e.preventDefault();
                let target = e.target.closest('.panel-heading');
                    for (let i = 0; i < panelCollapse.length; i++) {
                        panelCollapse[i].classList.remove('in');
                    }
                target.nextElementSibling.classList.toggle('in');
            }
        });    
    });

    const variants = [
        [10000, 12000, 13000, 15000, 17000], // однокамерный, без днища
        [15000, 18000, 19500, 22500, 25500] // двухкамерный, без днища        
    ];

    const bottom = [0, 1000]; // днище

    let result = 0,
    type = 0,
    index = 0,
    i = 0,
    variant = variants[type][index], // это 10000 самое начальное значение
    bottomValue = bottom[i];
    // bottomValue = i = 0 ? 0 : 1000;


    const resetCalc = () => {
        selects.forEach(select => {
            select.value = select.options[0].value;
        });
        index = 0;
        type = 0;
        i = 0;
    };

    const checkIndex = () => {
        variant = variants[type][index];
    };

    const checkBottom = () => {
        bottomValue = bottom[i]; 
        return bottomValue;
    };
    // если 2-х камерный, то умножить на 2
    const checkDoubleBottom = () => {
        if (type === 1 && bottomValue === 1000) {
            return checkBottom() * 2;
        } else return;
    };

    const giveResult = () => {
        return (result + variant) + checkBottom() + checkDoubleBottom();
    };

    const showTotal = () => {
        calcResult.value = giveResult();
    };

    myOnOffSwitch.value = variants[type];
    myOnOffSwitchTwo.value = bottom[i];
    calcResult.value = giveResult();

    myOnOffSwitch.addEventListener("change", event => {
        resetCalc();
        const target = event.target;
        target.value = myOnOffSwitch.value;
        if (target.value === first) {
            type = 1;
        } else if (target.value === second) {
            type = 0;
        }
    });

    selects.forEach(select => {
        // let selectValue = 0;
        let selectInnerText = "";
        select.addEventListener('change', event => {
            const target = event.target;

            selectInnerText = selects[select].options[select.selectedIndex].value;
            console.log(selectInnerText);
            // selectValue = parseInt(selectInnerText.match(/\d+/));
            
                if (selectInnerText === "1.4 метра" ||
                    (selectInnerText === "1.4 метра" && selectInnerText === "1 штука")) {
                    index = 0;
                } else if (selectInnerText === "1.4 метра" && selectInnerText === "2 штуки") {
                    index = 2;
                }  else if (selectInnerText === "1.4 метра" && selectInnerText === "3 штуки") {
                    index = 3;
                }  else if (selectInnerText === "2 метра" ||
                            (selectInnerText === "2 метра" && selectInnerText === "1 штука")) {
                    index = 1;
                }  else if (selectInnerText === "2 метра" ||
                            (selectInnerText === "2 метра" && selectInnerText === "2 штуки")) {
                    index = 3;
                }  else if (selectInnerText === "2 метра" ||
                            (selectInnerText === "3 метра" && selectInnerText === "3 штуки")) {
                    index = 4;
                }            
            
            checkIndex();
            showTotal();
        });    
    });

    myOnOffSwitchTwo.addEventListener("change", event => {
        const target = event.target;
        target.value = myOnOffSwitchTwo.value;
        if (target.value === myOnOffSwitchTwo.value) {
            i = 1;
        } else {
            i = 0; 
        }
    });

};


export default calcAccord;