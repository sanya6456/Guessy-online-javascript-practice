$(document).ready(function(){

    $('#gamestart').hide();

    $('#car').click(function(){
        $('.grid').hide();
        $('#gamestart').show();
    


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
        //disable buttons for 4s
        var fewSeconds = 4;

        $('.btn').prop('disabled', true);
        setTimeout(function(){
            $('.btn').prop('disabled', false);
        }, fewSeconds*1000);


        
        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random() * carbrands.length)];
            });
        });
    });

            //Game time!! //60sec
            /*var tme=0;
            var cntbck=5;
    
            setTimeout(countbacktimeout,3000);
    
            function countbacktimeout(){
    
                setInterval(countbacktime,1000);
                function countbacktime(){
                        tme++;
                        $('#timer').html(cntbck-tme);
                        if(cntbck-tme==0){
                            alert('fasz');
                            //$('#gamestart').hide(200);
                        }
                    }
                }
            }*/

            var tme=0;
            var cntbck=5;

            setTimeout(function(){
                setInterval(function(){
                    tme++;
                    $('#timer').html(cntbck-tme);
                    if(cntbck-tme==0){
                        $('#gamestart').hide();
                        $('.grid').show();
                    }
                },1000);
            },3000);


});