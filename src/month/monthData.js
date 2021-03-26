var {isLeapYear, calcMonthStartingIdx} = require('./startingIdx');

var getMonthData = (month, year) => {
    var monthData = {};
    var monthArray = [];

    //=========================================
    var months = {
        1: {days: 31, name:"January"},
        2: {days: 28, name:"February"},
        3: {days: 31, name:"March"},
        4: {days: 30, name:"April"},
        5: {days: 31, name:"May"},
        6: {days: 30, name:"June"},
        7: {days: 31, name:"July"},
        8: {days: 31, name:"August"},
        9: {days: 30, name:"September"},
        10: {days: 31, name:"October"},
        11: {days: 30, name:"November"},
        12: {days: 31, name:"December"}
    }
    if(isLeapYear(year)) months[2].days = 29;
    //==========================================
    
    var monthStartingIdx = calcMonthStartingIdx(month, year);

    var prevMonth = month === 1 ? 12 : month - 1; //if month is january(1), prevMonth should be december(12)
    var prevMonthDays = months[prevMonth].days;
    var prevMonthStartingDay = prevMonthDays - monthStartingIdx + 1;

    var monthDays = months[month].days;

    var nextMonthStartingIdx = (monthStartingIdx + monthDays) % 7;

    var counter = 0;

    //1. FILL UP BEGINNING PORTION IF ANY(FROM PREVIOUS MONTH)
    for(var i = prevMonthStartingDay; i <= prevMonthDays; i++) {
        monthArray[counter] = {dayNumber: i};
        counter++;
    }

    //2. FILL UP MIDDLE PORTION(ACTUAL MONTH)
    for(var i = 1; i <= monthDays; i++) {
        monthArray[counter] = {dayNumber: i};
        counter++;
    }

    //3. FILL UP LAST PORTION IF ANY(NEXT MONTH)
    if(nextMonthStartingIdx !== 0) {    
        for(var i = 1; i <= 7 - nextMonthStartingIdx; i++) {
            monthArray[counter] = {dayNumber: i};
            counter++;
        }
    }


    return {
        month: month,
        monthName: months[month].name,
        year: year,
        monthData: monthArray
    };
}

module.exports = {
    getMonthData
}

