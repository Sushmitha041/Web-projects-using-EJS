//jshint esversion:6

// console.log(module);

module.exports.getDate = getDate;

function getDate(){
    let today = new Date();

    let options = {
        weekday :"long",
        day : "numeric",
        month :"long",
        year : "numeric"
    };

    let day = today.toLocaleDateString("en-US",options);

    return day;
}

    exports.getDay = function () {
    let today = new Date();

    let options = {
        weekday :"long"
    };

    return today.toLocaleDateString("en-US",options);
}