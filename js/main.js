$(function (){
    setInterval(function (){
        timespan = countdown( new Date(2014,11,13,13), null, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
        $('#days').html(timespan.days.toString());
        $('#hours').html(timespan.hours.toString());
        $('#minutes').html(timespan.minutes.toString());
        $('#secounds').html(timespan.seconds.toString());
    },1000);
});
