var fetchMonthData = (month, year) => {
    console.log(month, year);
    return fetch(`http://localhost:3000/getMonthData/${month}/${year}`)
    .then(response => {
        return response.json();
    }).then(monthData => {
        return monthData;
    })
    .catch(err => {
        console.log('error', err)
    })
}

export default fetchMonthData;