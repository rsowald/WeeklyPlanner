//Grab current day and date from dayjs and put in header
$("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"))

//If dayjs().format(HH:mm)===23:59, clear local storage?


var currentHour = dayjs().hour()
console.log(currentHour)

$('.row textarea').each(function (i) {
    var hour = i + 9; //Our page's requirement is to show the workday, 9am - 5pm, so we offset our loop by 9 hours

    if (hour < currentHour) {
        $(this).addClass('past');
    }
    else if (hour === currentHour) {
        $(this).addClass('present');
    }
    else {
        $(this).addClass('future');
    }
});

