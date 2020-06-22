$(document).ready(function(){

    //Game types:
    // 1. car brands
    var carbrands=['Audi','Bmw','Maserati','McLaren','Ford'];

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
        } if(timer==4){


            //_____ready, steady, go function end!_______

            //Game time!!
            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random() * carbrands.length)];
            });

        }
        
    }

    //disable buttons for 4s
    var fewSeconds = 4;

    $('.btn').prop('disabled', true);
    setTimeout(function(){
        $('.btn').prop('disabled', false);
    }, fewSeconds*1000);
    //__________________________



    if($('#car').click()){
        $('.btn').click(function(){

            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random()*carbrands.length)];
            });
        });
    }




});