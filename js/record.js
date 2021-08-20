document.body.addEventListener('load', lessonAmount());

function lessonAmount() {
    // get each key from the local storage
    let parsedWorkload = JSON.parse(localStorage.getItem('workload'));    // Get the value from workload key in the local storage and parse it into array by JSON parse method
    let parsedSp = JSON.parse(localStorage.getItem('sp'));
    let parsedCw = JSON.parse(localStorage.getItem('cw'));
    let parsedRama = JSON.parse(localStorage.getItem('rama'));
    let parsedIs = JSON.parse(localStorage.getItem('is'));
    let parsedMl = JSON.parse(localStorage.getItem('ml'));
    let parsedMc = JSON.parse(localStorage.getItem('mc'));
    
    let total = 0
    ,spTotal = 0
    ,cwTotal = 0
    ,ramaTotal = 0
    ,isTotal = 0
    ,mlTotal = 0
    ,mcTotal = 0;

    for (singleWorkload of parsedWorkload) {
        let num =  Number(singleWorkload);
        total += num;
    }
    for (singleSp of parsedSp) {
        let spNum =  Number(singleSp);
        spTotal += spNum;
    }
    for (singleCw of parsedCw) {
        let cwNum =  Number(singleCw);
        cwTotal += cwNum;
    }
    for (singleRama of parsedRama) {
        let ramaNum =  Number(singleRama);
        ramaTotal += ramaNum;
    }
    for (singleIs of parsedIs) {
        let isNum =  Number(singleIs);
        isTotal += isNum;
    }
    for (singleMl of parsedMl) {
        let mlNum =  Number(singleMl);
        mlTotal += mlNum;
    }
    for (singleMc of parsedMc) {
        let mcNum =  Number(singleMc);
        mcTotal += mcNum;
    }

    // Amount of lesson taught for the total and branch totals
    document.getElementsByClassName('sp-img')[0].textContent = spTotal;
    document.getElementsByClassName('cw-img')[0].textContent = cwTotal;
    document.getElementsByClassName('rama-img')[0].textContent = ramaTotal;
    document.getElementsByClassName('is-img')[0].textContent = isTotal;
    document.getElementsByClassName('ml-img')[0].textContent = mlTotal;
    document.getElementsByClassName('mc-img')[0].textContent = mcTotal;
    document.querySelector('.main__total-lesson').textContent = 'Total: ' + total;
}