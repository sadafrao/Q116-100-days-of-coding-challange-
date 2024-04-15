// Q116
// create a switch case that matches several casses  to the same code block 
// this fuction log the season based on the month
function season(month) {
    switch (month) {
        case "December":
        case "January":
        case "February":
            console.log("Winter");
            break;
        case "March":
        case "April":
        case "May":
            console.log("Spring");
            break;
        case "June":
        case "July":
        case "August":
            console.log("Summer");
            break;
        case "September":
        case "October":
        case "November":
            console.log("Autumn");
            break;
    }
}
season("December");
