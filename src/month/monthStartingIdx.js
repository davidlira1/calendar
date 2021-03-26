var monthStartingIdx = (month, year) {
    var monthStartingIdx = yearStartingIdx(year);

    var months = {
        1: [31,"January"],
        1: [28,"February"],
        1: [31,"March"],
        1: [30,"April"],
        1: [31,"May"],
        1: [30,"June"],
        1: [31,"July"],
        1: [31,"August"],
        1: [30,"September"],
        1: [31,"October"],
        1: [30,"November"],
        1: [31,"December"],
    }

    for(var i = 1; i < month; i++) {
        monthStartingIdx+= months[i][0];
    }
}