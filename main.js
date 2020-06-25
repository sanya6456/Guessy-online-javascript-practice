$(document).ready(function(){

    $('#gamestart').hide();

    $('#car').click(function(){

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
                //Carbrands Game!!
                $('#guessy').html(function(){
                    return carbrands[Math.floor(Math.random() * carbrands.length)];
                });
            }
        };

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random() * carbrands.length)];
            });
        });
    }); //  <-- this is the end of #car .click!







    // Union functions!! ****************
    $('.col').click(function(){

        $('.grid').hide();
        $('#gamestart').show();

        //Game time!! //60sec
        var tme=0;
        var cntbck=60;

        setTimeout(function(){
            setInterval(function(){
                tme++;
                $('#timer').html(cntbck-tme);
                if(cntbck-tme==0){
                    alert('Az idő lejárt!');
                    $('#gamestart').hide();
                    $('.grid').show();
                }
            },1000);
        },3000);

        //disable buttons for 4s
        var fewSeconds = 4;

        $('.btn').prop('disabled', true);
        setTimeout(function(){
            $('.btn').prop('disabled', false);
        }, fewSeconds*1000);




    });// <-- this is the end of union functions

    //add results to .goods or .wrongs
    var dbg=0;
    var dbb=0;
    $('.btn-success').click(function(){
        var result=$('#guessy').html();
        $('.goods').append('<p>'+result+'</p>');

        dbg++;
        $('#goodcounter').html(dbg);
    });

    $('.btn-danger').click(function(){
        var result=$('#guessy').html();
        $('.wrongs').append('<p>'+result+'</p>');

        dbb++;
        $('#wrongcounter').html(dbb);
    });


});