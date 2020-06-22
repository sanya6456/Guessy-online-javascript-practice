$(document).ready(function(){
    //Ready, Steady, Go! function
    var counter=0;
    var timer;

    setInterval(time,1000);

    function time(){
        counter++;
        timer=counter;
        if(timer==1){
            $('#guessy').html('Ready!');
        } if (timer==2) {
            $('#guessy').html('Steady!');
        } if(timer==3) {
            $('#guessy').html('Go!');
        }
        
    }
    //_____ready, steady, go function end!_______


    //Game time!!

    




});