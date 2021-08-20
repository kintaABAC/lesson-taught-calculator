

// ※ getStorageData and localStorage variable are used without any variable keyword. So, they are globally declared

// currentMonth, monthArray, getDay, currentYear, createDate, and getDate are declared globally

// lessonArr, spLessonArr, cwLessonArr,ramaLessonArr, isLessonArr, mlLessonArr, and mcLessonArr are declared globally





// Generate current month
const currentMonth = new Date().getMonth();
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const getDay = monthArray[currentMonth];


// Generate current year
const currentYear = new Date().getFullYear();


// Generate and print a current date and month together
const createDate = new Date().getDate();
const getDate = document.querySelector('.header__td-date');
if(createDate === 1 ) {
    getDate.textContent = getDay + ', ' + createDate + 'st' + ', ' + currentYear;
} else if(createDate === 2) {
    getDate.textContent = getDay + ', ' + createDate + 'nd' + ', ' + currentYear;
} else if(createDate === 3) {
    getDate.textContent = getDay + ', ' + createDate + 'rd' + ', ' + currentYear;
} else {
    getDate.textContent = getDay + ', ' + createDate + 'th' + ', ' + currentYear;
}
// H1 title
document.querySelector('.header__month').textContent = getDay;






// Event listeners
document.querySelector('.calc-btn').addEventListener('click', calc);
document.querySelector('.reset-btn').addEventListener('click', reset);
document.body.addEventListener('load',getPreData());
document.querySelector('.save-btn').addEventListener('click', save);
document.querySelector('.clear-btn').addEventListener('click', clear);






// Function statement (definition) for calculation button on click event
function calc() {
    // Get each input value
    let spInputValue = document.getElementById('sp').value;
    let cwInputValue = document.getElementById('cw').value;
    let ramaInputValue = document.getElementById('rama').value;
    let isInputValue = document.getElementById('is').value;
    let mlInputValue = document.getElementById('ml').value;
    let mcInputValue = document.getElementById('mc').value;

    // run the error function, which will say 'only number is acceptable' if an error has occured
    if (error() === null ) return;

    let spNum = 0
    ,cwNum = 0
    ,ramaNum = 0
    ,isNum = 0
    ,mlNum = 0
    ,mcNum = 0;

    // Change each number stored as a string data type to number data type
    if (spInputValue > 0) spNum = parseInt(spInputValue);
    if (cwInputValue > 0) cwNum = parseInt(cwInputValue);
    if (ramaInputValue > 0) ramaNum = parseInt(ramaInputValue);
    if (isInputValue > 0) isNum = parseInt(isInputValue);
    if (mlInputValue > 0) mlNum = parseInt(mlInputValue);
    if (mcInputValue > 0) mcNum = parseInt(mcInputValue);

    const getTotal= document.querySelector('.total-input');
    getTotal.value = spNum + cwNum + ramaNum + isNum + mlNum + mcNum;    // Return value is a string, not number
    if (getTotal.value === '0') getTotal.value = '';
}





// Change 全角 to 半角

// 全角　→ 半角 for sp
function toSpHalfWidth(spInputValue) {
    let s = "";
    spInputValue = String(spInputValue);
    for (let n=0;n<spInputValue.length;n++) {
        let t = spInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('sp').value = s;
}

// 全角　→ 半角 for cw
function toCwHalfWidth(cwInputValue) {
    let s = "";
    cwInputValue = String(cwInputValue);
    for (let n=0;n<cwInputValue.length;n++) {
        let t = cwInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('cw').value = s;
}

// 全角　→ 半角 for rama
function toRamaHalfWidth(ramaInputValue) {
    let s = "";
    ramaInputValue = String(ramaInputValue);
    for (let n=0;n<ramaInputValue.length;n++) {
        let t = ramaInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('rama').value = s;
}

// 全角　→ 半角 for is
function toIsHalfWidth(isInputValue) {
    let s = "";
    isInputValue = String(isInputValue);
    for (let n=0;n<isInputValue.length;n++) {
        let t = isInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('is').value = s;
}

// 全角　→ 半角 for ml
function toMlHalfWidth(mlInputValue) {
    let s = "";
    mlInputValue = String(mlInputValue);
    for (let n=0;n<mlInputValue.length;n++) {
        let t = mlInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('ml').value = s;
}

// 全角　→ 半角 for mc
function toMcHalfWidth(mcInputValue) {
    let s = "";
    mcInputValue = String(mcInputValue);
    for (let n=0;n<mcInputValue.length;n++) {
        let t = mcInputValue.substr(n,1);
        if (t.search(/[Ａ-Ｚａ-ｚ０-９]/g) == 0) {
            s += String.fromCharCode(t.charCodeAt(0) - 65248);
        } else {
            s += t;
        }
    }
    return document.getElementById('mc').value = s;
}

// Input event listeners
document.getElementById('sp').addEventListener('input',function() {
    let spInputValue = document.getElementById('sp').value;
    toSpHalfWidth(spInputValue);
});

document.getElementById('cw').addEventListener('input',function() {
    let cwInputValue = document.getElementById('cw').value;
    toCwHalfWidth(cwInputValue);
});

document.getElementById('rama').addEventListener('input',function() {
    let ramaInputValue = document.getElementById('rama').value;
    toRamaHalfWidth(ramaInputValue);
});

document.getElementById('is').addEventListener('input',function() {
    let isInputValue = document.getElementById('is').value;
    toIsHalfWidth(isInputValue);
});

document.getElementById('ml').addEventListener('input',function() {
    let mlInputValue = document.getElementById('ml').value;
    toMlHalfWidth(mlInputValue);
});

document.getElementById('mc').addEventListener('input',function() {
    let mcInputValue = document.getElementById('mc').value;
    toMcHalfWidth(mcInputValue);
});





// Function statement (definition) for reset button on click event
function reset() {
    let length = document.getElementsByClassName('main__input').length;
    for (let i = 0; i < length; i++) {
        document.getElementsByClassName('main__input')[i].value = '';
    }
    document.querySelector('.total-input').value = '';
}





// Function statement (definition) for getting data from local storage when loaded
function getPreData() {
    getStorageData = JSON.parse(localStorage.getItem('workload'));    // ※ use global variable to let the variable accessed outside function scope
    getSpStorageData = JSON.parse(localStorage.getItem('sp'));    // ※ use global variable to let the variable accessed outside function scope
    getCwStorageData = JSON.parse(localStorage.getItem('cw'));    // ※ use global variable to let the variable accessed outside function scope
    getRamaStorageData = JSON.parse(localStorage.getItem('rama'));    // ※ use global variable to let the variable accessed outside function scope
    getIsStorageData = JSON.parse(localStorage.getItem('is'));    // ※ use global variable to let the variable accessed outside function scope
    getMlStorageData = JSON.parse(localStorage.getItem('ml'));    // ※ use global variable to let the variable accessed outside function scope
    getMcStorageData = JSON.parse(localStorage.getItem('mc'));    // ※ use global variable to let the variable accessed outside function scope
}





// Function statement (definition) for reset button on click event
const lessonArr = []    // Cannot place the empty array inside the blocks of save function because it will reset the array to empty, which is[], everytime you call the function    // declared globally
    ,spLessonArr = []
    ,cwLessonArr = []
    ,ramaLessonArr = []
    ,isLessonArr = []
    ,mlLessonArr = []
    ,mcLessonArr = [];

function save() {
    let getIdTotal = document.querySelector('.total-input').value;
    if (getIdTotal === '') {
        alert('Please calculate the total first');
        return
    }

    // run error function, which will say 'only number is acceptable'
    if (error() === null ) return;

    const cf1 = confirm('do you want to save?');
    if (cf1 === false) {
        return
    }

    // Get each input value
    let spInputValue = document.getElementById('sp').value;
    let cwInputValue = document.getElementById('cw').value;
    let ramaInputValue = document.getElementById('rama').value;
    let isInputValue = document.getElementById('is').value;
    let mlInputValue = document.getElementById('ml').value;
    let mcInputValue = document.getElementById('mc').value;
    
    // Store each value in the local storage
    localStorage.setItem('sp', spInputValue);
    localStorage.setItem('cw', cwInputValue);
    localStorage.setItem('rama', ramaInputValue);
    localStorage.setItem('is', isInputValue);
    localStorage.setItem('ml', mlInputValue);
    localStorage.setItem('mc', mcInputValue);

    if(Array.isArray(getStorageData || getSpStorageData || getCwStorageData || getRamaStorageData || getIsStorageData || getMlStorageData || getMcStorageData)=== true) {
        let i = 0;
        for (i = 0; getStorageData.length > i; i++) {
            lessonArr.push(getStorageData[i]);
        }
        for (i = 0; getSpStorageData.length > i; i++) {
            spLessonArr.push(getSpStorageData[i]);
        }
        for (i = 0; getCwStorageData.length > i; i++) {
            cwLessonArr.push(getCwStorageData[i]);
        }
        for (i = 0; getRamaStorageData.length > i; i++) {
            ramaLessonArr.push(getRamaStorageData[i]);
        }
        for (i = 0; getIsStorageData.length > i; i++) {
            isLessonArr.push(getIsStorageData[i]);
        }
        for (i = 0; getMlStorageData.length > i; i++) {
            mlLessonArr.push(getMlStorageData[i]);
        }
        for (i = 0; getMcStorageData.length > i; i++) {
            mcLessonArr.push(getMcStorageData[i]);
        }
        getStorageData = false;
        getSpStorageData = false;
        getCwStorageData = false;
        getRamaStorageData = false;
        getIsStorageData = false;
        getMlStorageData = false;
        getMcStorageData = false;
    }
    
    let getTotal = document.querySelector('.total-input').value;    // Return string data type
    let getSpTotal = document.getElementById('sp').value;
    let getCwTotal = document.getElementById('cw').value; 
    let getRamaTotal = document.getElementById('rama').value; 
    let getIsTotal = document.getElementById('is').value; 
    let getMlTotal = document.getElementById('ml').value; 
    let getMcTotal = document.getElementById('mc').value; 

    lessonArr.push(getTotal);
    spLessonArr.push(getSpTotal);
    cwLessonArr.push(getCwTotal);
    ramaLessonArr.push(getRamaTotal);
    isLessonArr.push(getIsTotal);
    mlLessonArr.push(getMlTotal);
    mcLessonArr.push(getMcTotal);

    let strJson = JSON.stringify(lessonArr);    // Convert the array to strings, which is readable for JSON
    let strSpJson = JSON.stringify(spLessonArr);
    let strCwJson = JSON.stringify(cwLessonArr); 
    let strRamaJson = JSON.stringify(ramaLessonArr); 
    let strIsJson = JSON.stringify(isLessonArr); 
    let strMlJson = JSON.stringify(mlLessonArr); 
    let strMcJson = JSON.stringify(mcLessonArr); 

    localStorage.setItem('workload', strJson);    // Here, everytime you click the save button the number of totallessons will get stored to local storage on the browser
    localStorage.setItem('sp', strSpJson);
    localStorage.setItem('cw', strCwJson);  
    localStorage.setItem('rama', strRamaJson);  
    localStorage.setItem('is', strIsJson);  
    localStorage.setItem('ml', strMlJson);  
    localStorage.setItem('mc', strMcJson);  
        
    document.location.href = 'record.html';
}





//Function statement (definition) for CLEAR LOCAL STORAGE button on click event
function clear() {
    const cf = confirm('You really want to delete all the history?');
    if(cf === true) {
        localStorage.clear();
        location.reload();
    }
}





//Function statement (definition) for printing out an error
function error() {
     // Get each input value
     let getTotalInput = document.querySelector('.total-input');
     let spInputValue = document.getElementById('sp').value;
     let cwInputValue = document.getElementById('cw').value;
     let ramaInputValue = document.getElementById('rama').value;
     let isInputValue = document.getElementById('is').value;
     let mlInputValue = document.getElementById('ml').value;
     let mcInputValue = document.getElementById('mc').value;
 
     if(isNaN(spInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
     else if(isNaN(cwInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
     else if(isNaN(ramaInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
     else if(isNaN(isInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
     else if(isNaN(mlInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
     else if(isNaN(mcInputValue)) {
         alert('only number is acceptable');
         getTotalInput.value= '';
         return null;
     }
}