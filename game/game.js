$(document).ready(function(){
<<<<<<< HEAD

    //Game types:
    // 1. car brands
    var carbrands=['Audi','Bmw','Maserati','McLaren','Ford'];
    var animals=['Tigris','Ló','Medve','Aranyhal','Fóka'];


=======
>>>>>>> parent of 913a732... update02
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
<<<<<<< HEAD
        } if(timer==4){


            //Carbrands Game time!!
            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random() * carbrands.length)];
            });

=======
>>>>>>> parent of 913a732... update02
        }
        
    }
    //_____ready, steady, go function end!_______


    //Game time!!

<<<<<<< HEAD
    //if click button go to next question
  

    $('#car').click(function(){
        $('.btn').click(function(){
            $('#guessy').html(function(){
                return carbrands[Math.floor(Math.random() * carbrands.length)];;
            });
        });
    });

    $('#animal').click(function(){
        $('.btn').click(function(){
            $('#guessy').html(function(){
                return animals[Math.floor(Math.random() * animals.length)];
            });
        });
    });

=======
>>>>>>> parent of 913a732... update02
    

    
    //___________



});