'use strict';

import popup1 from './modules/popup1';
import sendForm from './modules/sendForm';
import valid from './modules/valid';
import accord from './modules/accord';
import calcAccord from './modules/calcAccord';
import buttonMore from './modules/buttonMore';
import animateBtn from './modules/animateBtn';
import animateImg from './modules/animateImg';
import popupDiscount from './modules/popupDiscount';
import popupConsultation from './modules/popupConsultation';
import checkBtn from './modules/checklistBtn';


// popup1
popup1();
// sending form data
sendForm();
// valid
valid();
// accordeon
accord();
// calculator - accordion
calcAccord(10000);
// button "More"
buttonMore();
// buttons animation
animateBtn();
// expand Images animation
animateImg();
// popup discount
popupDiscount();
// popup consultation
popupConsultation();
// popup check and discount
checkBtn();
// show hidden blocks
buttonMore();


