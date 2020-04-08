'use strict';
const calcAccord = () => {
    const section = document.querySelector(".constructor"),
      tabs = section.querySelectorAll(".panel-heading"),
      collapses = section.querySelectorAll(".collapse"),
      buttons = section.querySelectorAll(".construct-btn"),
      titleToHide = section.querySelectorAll(".title-text")[1],
      box1ToHide = section.querySelectorAll(".select-box")[2],
      box2ToHide = section.querySelectorAll(".select-box")[3],  
      //   ________________________________________________________________  
      accordBlock = document.getElementById("accordion"),
      calcResult = document.getElementById("calc-result"),
      selects = accordBlock.querySelectorAll("select"),
      boxes = accordBlock.querySelectorAll(".select-box"),
      titles = accordBlock.querySelectorAll(".title-text");
    
    let prices = {
      oneVariant: 10000,
      twoVariant: 15000,
      firstSelectValue: 1,
      secondSelectValue: 1,
      thirdSelectValue: 1,
      fourthSelectValue: 1,
      dopValue: 1000,
    },
      variant = prices.oneVariant,
      dopVal = prices.dopValue;
    // __________________________________________________________________  
    titleToHide.style.display = "none";
    box1ToHide.style.display = "none";
    box2ToHide.style.display = "none";
  
    const acoord = () => {
      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          e.preventDefault();
          if (tab.nextElementSibling.classList.contains("collapse")) {
            collapses.forEach((col) => {
              col.style.display = "none";
            });
            tab.nextElementSibling.style.display = "block";
          }
        });
      });
  
      buttons.forEach((btn) => {
        if (!btn.classList.contains("call-btn")) {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const collapse = document.querySelector(btn.getAttribute("href"));
  
            collapses.forEach((col) => {
              col.style.display = "none";
            });
            collapse.style.display = "block";
          });
        }
      });
    };

    const showResult = () => {
      calcResult.value = variant *
      prices.firstSelectValue *
      prices.secondSelectValue *
      prices.thirdSelectValue *
      prices.fourthSelectValue +
      dopVal;
    };
  
    const calc = () => {
      accordBlock.addEventListener("change", (e) => {
        let target = e.target;
  
        //   проверка на первый чекбокс
        if (target.id === "myonoffswitch") {
          if (target.checked) {
            variant = prices.oneVariant;
            dopVal = 1000;
            boxes.forEach((box, i) => {
              if (i === 2 || i === 3) {
                box.style.display = "none";
              }
            });
  
            titles.forEach((title, i) => {
              if (i === 1) {
                title.style.display = "none";
              }
            });
            showResult();
          } else {
            variant = prices.twoVariant;
            dopVal = 2000;
            boxes.forEach((box, i) => {
              if (i === 2 || i === 3) {
                box.style.display = "inline-block";
              }
            });
  
            titles.forEach((title, i) => {
              if (i === 1) {
                title.style.display = "inline-block";
              }
            });
            showResult();
          }
        }
  
        if (target.id === "myonoffswitch-two") {
          if (
            target.checked &&
            document.getElementById("myonoffswitch").checked
          ) {
            dopVal = 1000;
          } else if (
            target.checked &&
            !document.getElementById("myonoffswitch").checked
          ) {
            dopVal = 2000;
          } else {
            dopVal = 0;
          }
          showResult();    
        }
  
        //   проверка на первый select
        if (target === selects[0]) {
          prices.firstSelectValue = +target.value;
          showResult();
        }
        //   проверка на второй select
        if (target === selects[1]) {
          prices.secondSelectValue = +target.value;
          showResult();
        }
  
        // проверка на третий select
        if (target === selects[2]) {
          prices.thirdSelectValue = +target.value;
          showResult();
        }
  
        // проверка на четвертый select
        if (target === selects[3]) {
          prices.fourthSelectValue = +target.value;
          showResult();
        }
      });
      showResult();
    };
  
    calc();
    acoord();
  };
  
  export default calcAccord;