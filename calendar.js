//array for months
let monthsNames = ['Janaury', 'Febreury', 'Marsh', 'April', 'May', 'June',
 'July', 'Agust', 'September', 'Octuber', 'November', 'Dicember'];

//variables for months, days and year
let currentDate = new Date();
let currentDay = currentDate.getDate();
let monthNumber = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

//get element by id
let Dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

//prev month and next month
let prevMonthDom = document.getElementById('prev-month');
let nextMonthDom = document.getElementById('next-month');

//definition of months and year
month.textContent = monthsNames[monthNumber];
year.textContent = currentYear.toString();

prevMonthDom.addEventListener('click', ()=>lastMonth());
nextMonthDom.addEventListener('click', ()=>nextMonth());

//Functions
writeMonth(monthNumber);

function writeMonth(month) {

    for(let i = startDay(); i>0; i--){
        Dates.innerHTML += `<div class="calendar__date calendar__item calendar__last-day">
        ${getTotalDays(monthNumber-1)-(i-1)}
    </div>`;
    }
    for(let i=1; i<=getTotalDays(month); i++){

        if(i===currentDay){
            Dates.innerHTML += `<div class="calendar__date calendar__item calendar__today">${i}</div>`;
         }else{
            Dates.innerHTML += `<div class="calendar__date calendar__item">${i}</div>`;
         }
         
    }

}
function getTotalDays(month) {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;

    }else if (month ==3 || month == 5 || month ==8 || month == 10) {
        return 30;

    } else {
        return isLeap() ? 29:28;
    }

}
//get year leap
function isLeap() {
    return ((currentYear % 100 !==0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));

}
//get firt day
function startDay() {
    let start = new Date(currentYear, monthNumber, 1);
    return((start.getDay()-1) === -1) ? 6 : start.getDay()-1;

}
//get last month
function lastMonth() {
    if(monthNumber !== 0){
        monthNumber--;
    }else{
            monthNumber == 11;
            currentYear--;
        }
        setNewDate();
    }
    //get next month
function nextMonth() {
    if(monthNumber !== 11){
        monthNumber++;
    }else{
        monthNumber == 0;
        currentYear++;
    }
    setNewDate();
}

function setNewDate() {
    currentDate.setFullYear(currentYear, monthNumber, currentDay);
    month.textContent = monthsNames[monthNumber];
    year.textContent = currentYear.toString();
    dates.textContent = '';
    writeMonth(monthNumber);

}
