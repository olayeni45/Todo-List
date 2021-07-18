let today = new Date();
let currentDay = today.getDay();
let day = "";

let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
}

let dayOfTheWeek = today.toLocaleDateString("en-us", options)

if (currentDay === 6 || currentDay === 0) {
    day = "weekend";
}
else {
    day = "weekday";
}

module.exports = {
    dayOfTheWeek,
    day
}