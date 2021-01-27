$(document).ready(function () {

    //Grab current day and date from dayjs and put in header
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

    //If dayjs().format(HH:mm)===23:59, clear local storage?


    var currentHour = dayjs().hour();
    console.log(currentHour);

    $('.row textarea').each(function (i) {
        //The requirement is to show the workday, 9am - 5pm, so I offset the loop by 9 hours
        var hour = i + 9;

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

    for (var i = 9; i < 18; i++) {
        $('#hour' + i).text(JSON.parse(localStorage.getItem('hour' + i)));
    }

    // Attach "ON CLICK" event to all the save buttons
    $(".saveBtn").on("click", function (event) {
        //prevent default so I can apply a for loop to all the time blocks
        event.preventDefault();

        // Iterate through hours 9 to 17
        for (var i = 9; i < 18; i++) {
            localStorage.setItem("hour" + i, JSON.stringify($("#hour" + i).val()));
            console.log("hour" + i);
        }
    });


});