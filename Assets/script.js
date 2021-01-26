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

    //     function init() {
    //         $('.row textarea').each(function (i) {
    //             var storedData = JSON.parse(localStorage.getItem('schedule'));

    //             if (storedData !== null) {
    //                 schedule = storedData;
    //             }

    //             renderSchedule();
    //         }

    // function renderSchedule() {

    //             }

    function saveHour() {
        $("#saveBtn9").on("click", function () {
            var schedule = $('#hour9').val();
            console.log(schedule);
            localStorage.setItem("hour9", JSON.stringify(schedule));
        })

        $("#saveBtn10").on("click", function () {
            var schedule = $('#hour10').val();
            console.log(schedule);
            localStorage.setItem("hour10", JSON.stringify(schedule));
        })

        $("#saveBtn11").on("click", function () {
            var schedule = $('#hour11').val();
            console.log(schedule);
            localStorage.setItem("hour11", JSON.stringify(schedule));
        })

        $("#saveBtn12").on("click", function () {
            var schedule = $('#hour12').val();
            console.log(schedule);
            localStorage.setItem("hour12", JSON.stringify(schedule));
        })

        $("#saveBtn13").on("click", function () {
            var schedule = $('#hour13').val();
            console.log(schedule);
            localStorage.setItem("hour13", JSON.stringify(schedule));
        })

        $("#saveBtn14").on("click", function () {
            var schedule = $('#hour14').val();
            console.log(schedule);
            localStorage.setItem("hour14", JSON.stringify(schedule));
        })

        $("#saveBtn15").on("click", function () {
            var schedule = $('#hour15').val();
            console.log(schedule);
            localStorage.setItem("hour15", JSON.stringify(schedule));
        })

        $("#saveBtn16").on("click", function () {
            var schedule = $('#hour16').val();
            console.log(schedule);
            localStorage.setItem("hour16", JSON.stringify(schedule));
        })

        $("#saveBtn17").on("click", function () {
            var schedule = $('#hour17').val();
            console.log(schedule);
            localStorage.setItem("hour17", JSON.stringify(schedule));
        })
    }

    saveHour()

    // init();
});