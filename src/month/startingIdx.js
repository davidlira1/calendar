var calcYearStartingIdx = (year) => {
    var baseYear = 2018;
    var baseYearStartingIdx = 1 //2018 begins on a Monday
    var yearStartingIdx = baseYearStartingIdx; //initializes it
    var yearIteratee = baseYear;

    for(var i = 0; i < year - baseYear; i++) {
        if(yearIteratee % 4 === 0) {
            //it's a leap year
            yearStartingIdx += 366;
        } else {
            yearStartingIdx += 365; 
        }
        yearIteratee++;
    }

    return yearStartingIdx %= 7;
}

//2020 => Wed => 3
//2021 => Fri => 5
//2022 => Sat => 6
//2023 => Sun => 0
//2024 => Mon => 1
//2025 => Wed => 3
// console.log(yearStartingIdx(11, 2020));
// console.log(yearStartingIdx(11, 2021));
// console.log(yearStartingIdx(11, 2022));
// console.log(yearStartingIdx(11, 2023));
// console.log(yearStartingIdx(11, 2024));
// console.log(yearStartingIdx(11, 2025));

var calcMonthStartingIdx = (month, year) => {
    var months = {
        1: [31,"January"],
        2: [28,"February"],
        3: [31,"March"],
        4: [30,"April"],
        5: [31,"May"],
        6: [30,"June"],
        7: [31,"July"],
        8: [31,"August"],
        9: [30,"September"],
        10: [31,"October"],
        11: [30,"November"],
        12: [31,"December"],
    }

    if(isLeapYear(year)) months[2][0] = 29;

    var monthStartingIdx = calcYearStartingIdx(year);

    for(var i = 1; i < month; i++) {
        monthStartingIdx+= months[i][0];
    }

    return monthStartingIdx %= 7;
}

var isLeapYear = (year) => {
    return year % 4 === 0;
}

//expect 6
//console.log(calcMonthStartingIdx(2, 2020));

//expect 0
//console.log(calcMonthStartingIdx(11, 2020));

//expect 2
//console.log(calcMonthStartingIdx(12, 2020));

//expect 5
//console.log(calcMonthStartingIdx(7, 2022));

//expect 6
//console.log(calcMonthStartingIdx(8, 2026));


module.exports = {
    calcMonthStartingIdx,
    isLeapYear
};;