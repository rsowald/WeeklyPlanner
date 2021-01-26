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

    function initSchedule() {
        var saved9 = JSON.parse(localStorage.getItem('hour9'));
        console.log(saved9)
        if (saved9 !== null) {
            $("#hour9").text(saved9);
        }
        var saved10 = JSON.parse(localStorage.getItem('hour10'));
        console.log(saved10)
        if (saved10 !== null) {
            $("#hour10").text(saved10);
        }
        var saved11 = JSON.parse(localStorage.getItem('hour11'));
        console.log(saved11)
        if (saved11 !== null) {
            $("#hour11").text(saved11);
        }
        var saved12 = JSON.parse(localStorage.getItem('hour12'));
        console.log(saved12)
        if (saved12 !== null) {
            $("#hour12").text(saved12);
        }
        var saved13 = JSON.parse(localStorage.getItem('hour13'));
        console.log(saved13)
        if (saved13 !== null) {
            $("#hour13").text(saved13);
        }
        var saved14 = JSON.parse(localStorage.getItem('hour14'));
        console.log(saved14)
        if (saved14 !== null) {
            $("#hour14").text(saved14);
        }
        var saved15 = JSON.parse(localStorage.getItem('hour15'));
        console.log(saved15)
        if (saved15 !== null) {
            $("#hour15").text(saved15);
        }
        var saved16 = JSON.parse(localStorage.getItem('hour16'));
        console.log(saved16)
        if (saved16 !== null) {
            $("#hour16").text(saved16);
        }
        var saved17 = JSON.parse(localStorage.getItem('hour17'));
        console.log(saved17)
        if (saved17 !== null) {
            $("#hour17").text(saved17);
        }
    }

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

    initSchedule()
    saveHour()

});