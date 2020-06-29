$(document).ready(function(){
    $('#gamestart').hide();


    $('#car').click(function(){

        //Game types:
        // 1. car brands
        var carbrands=['Audi','Bmw','Maserati','Ford','Abarth','Fiat','McLaren','Aston Martin','Chevrolet','Alfa Romeo','Chrysler','Citroen','Dacia','Daewoo','Dodge','Ferrari','Honda','Hyundai','Jaguar','KIA','Lada','Lexus','Lancia','Lamborghini','Land Rover','Lotus','Maserati','Mazda','Mercades-AMG','Mercedes-Benz','Mini','Mitsubishi','Moszkvics','Nissan','Opel','Peugeot','Porsche','Renault','Rolls-Rolls','Rover','SAAB','Seat','Skoda','Subaru','Suzuki','Tesla','Toyota','Trabant','UAZ','Volkswagen','Volvo','Wartburg','Bugatti'];  
        var outputcar=[];

        var z=0;
        var u=carbrands.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputcar.push(carbrands[z]);
                    return carbrands.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputcar.push(carbrands[z]);
                        return carbrands.splice(z,1);
                    }
                });
            }
        };

    }); //  <-- this is the end of #car .click!


    $('#animal').click(function(){

        //Game types:
        // 1. car brands
        var animals=['Rája','Elefánt','Macska','Hal','Juh','Amerikai Görény','Tigris','Flamingó','Angolna','Pásztormadár','Réti Farkas','Szirti Sas','Aranyhal','Vipera','Ördöghal','Tonhal','Teve','Héja','Sólyom','Medve','Panda','Házityúk','Cinege','Holló','Turul','Cápa','Fácán','Mormota','Denevér','Csörgőkígyó','Sügér','Naphal','Oposszum','Párduc','Aligátor','Vizibika','Busa','Gekkó','Selyemmajom','Orrszarvú','Oroszlán','Puma','Hiéna','Bagoly','Gazella','Galamb','Tehén','Fóka','Pingvin','Hópárduc','Papagáj','Lazac','Farkas'];  
        var outputanimals=[];

        var z=0;
        var u=animals.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputanimals.push(animals[z]);
                    return animals.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputanimals.push(animals[z]);
                        return animals.splice(z,1);
                    }
                });
            }
        };
    }); //  <-- this is the end of #animal .click!

    $('#cartoon').click(function(){

        //Game types:
        // 1. car brands
        var cartoons=['Angry Birds 2','Csizmás, a kandúr','Apróláb','Lego Batman - A film','Bébi Úr','Ralph lezúzza a netet','Verdák 3','Gru 3','Bambi','Hotel Transylvania 3','Volt','Madagaszkár 3','Kung Fu Panda 2','Pinokkió','Szörny Rt.','A hihetetlen család','Pókember - Irány a pókverzum','South Park','Tarzan','Micimackó','Jégvarázs','A Simpson család','WALL-E','Toy Story 3','Lilo & Stitch','101 kiskutya','Aranyhaj és a nagy gubanc','Hófehérke és a hét törpe','Herkules','Hős6os','Lecsó','Némó nyomában','A kis hableány','Shrek 2','Gru','A szépség és a szörnyeteg','Így neveld a sárkányodat','Fel!','Macskafogó','Vuk','Aladdin','Az oroszlánkirály','Kacsamesék','Mickey egér','Varázslók a Waverly helyből','Hannah Montana','H2O - Egy vízcsepp elég','Zack és Cody élete','Zsenipalánták'];  
        var outputcartoons=[];

        var z=0;
        var u=cartoons.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputcartoons.push(cartoons[z]);
                    return cartoons.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputcartoons.push(cartoons[z]);
                        return cartoons.splice(z,1);
                    }
                });
            }
        };
    }); //  <-- this is the end of #cartoon .click!

    $('#movie').click(function(){

        //Game types:
        // 1. car brands
        var movies=['A remény rabjai','Forrest Gump','Szerelmünk lapjai','Életrevalók','Terminátor','A keresztapa','Vissza a jövőbe','Elrabolva','Kapj el, ha tudsz!','Hetedik','Gran Torino','A tanú','Kincs, ami nincs','Gladiátor','A bakancslista','Volt egyszer egy vadnyugat','Blöff','Good Will Hunting','Oscar','Harcosok klubja','Eredet','A szökevény','A Gyűrűk Ura','A tökéletes trükk','Ponyvaregény','A tégla','Indul a bakterház','Leon, a profi','Star Wars','Az ördög ügyvédje','Kelly hósei','A bolygó neve - Halál','Igazából szerelem','Pillangó-hatás','Amerikai szépség','A Karib-tenger kalózai','Számkivetett','Mátrix','A szív bajnokai','Az elveszett frigyláda fosztogatói','Reszkessetek, betörők!','Viharsziget','Ryan közlegény megmentése','A bárányok hallgatnak','Séta a múltban','Casino','Hét élet','Az utolsó szamuráj','A sötét lovag','Anna','A vadon hívó szava','Bad Boys','Az 5. hullám','Csaló csajok','Jó srácok','Jojo nyuszi','Jumanji','Joker','Volt egyszer egy Hollywood','Alita - A harc angyala','A szabadság ötven árnyalata','Az aszfalt királyai','A magas lány','Halálos iramban - Hobbs & Shaw','Aquaman','Az - Második fejezet','Sonic','Zombiland 2 - A második lövés','Venom','Shazam','John Wick - 3. felvonás','A csókfülke','Jurassic World','Csillag születik','Mamma Mia','Pókember - Idegenben','Annabelle 2 - A teremtés'];  
        var outputmovies=[];

        var z=0;
        var u=movies.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputmovies.push(movies[z]);
                    return movies.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputmovies.push(movies[z]);
                        return movies.splice(z,1);
                    }
                });
            }
        };
    }); //  <-- this is the end of #movie .click!

    $('#superhero').click(function(){
        
        //Game types:
        // 1. car brands
        var superheroes=['Loki','Deadpool','Peter Parker','Hulk','Pókember','Tony Stark','Vasember','Superman','Fekete özvegy','Logan','Thor','Amerika kapitány','Marvel kapitány','Batgirl','Darázs','Polaris','Batman','Superman','Wonder Woman','Mr. Irdatlan','Nyúlányka','Supergirl','Furi','Fridzsiman','A tél katonája','Drax - a romboló','Mordály','Loki','Herkules','Aquaman','Boomer','Marvel kapitány','Kronosz','Zöldíjász','Zöld lámpás','Joker','Karate Kölyök','Kaszás','Robin','Penge','A bosszúállók','Fekete Párduc','X professzor','Optimus Prime','Tini nindzsa teknőcök','Venom','Fantasztikus négyes'];  
        var outputsuperheroes=[];

        var z=0;
        var u=superheroes.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputsuperheroes.push(superheroes[z]);
                    return superheroes.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputsuperheroes.push(superheroes[z]);
                        return superheroes.splice(z,1);
                    }
                });
            }
        };
    }); //  <-- this is the end of #superhero .click!

    $('#country').click(function(){
        
        //Game types:
        // 1. car brands
        var countries=['Argentína','Andorra','Ausztrália','Ausztria','Brazília','Bulgária','Ciprus','Csehország','Dánia','Dél-afrikai Köztársaság','Korea','USA','Egyesült Királyság','Egyiptom','Finnország','Franciaország','Görögország','Hollandia','Horvátország','India','Izland','Irak','Írország','Japán','Kanada','Kína','Kolumbia','Lengyelország','Luxemburg','Madagaszkár','Magyarország','Mexikó','Németország','Olaszország','Oroszország','Portugália','Románia','Spanyolország','Svájc','Svédország','Szlovákia','Szlovénia','Törökország','Uruguay','Vatikán','Vietnám','Venezuels'];  
        var outputcountries=[];

        var z=0;
        var u=countries.length;

        //click button go to next question
        $('.btn').click(function(){
            $('#guessy').html(function(){
                while(u--){
                    z=Math.floor(Math.random()*(u+1));
                    outputcountries.push(countries[z]);
                    return countries.splice(z,1);
                }
            });
        });

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
                    while(u--){
                        z=Math.floor(Math.random()*(u+1));
                        outputcountries.push(countries[z]);
                        return countries.splice(z,1);
                    }
                });
            }
        };
    }); //  <-- this is the end of #country .click!





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
                    location.reload();
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
        //write results
        var result=$('#guessy').html();
        $('.goods').append('<p>'+result+'</p>');
        //count results
        dbg++;
        $('#goodcounter').html(dbg);
        //limit clicks to 17
        if(dbg==17){
            $('.btn-success').prop('disabled','true');
        }
    });

    $('.btn-danger').click(function(){
        //write results
        var result=$('#guessy').html();
        $('.wrongs').append('<p>'+result+'</p>');
        //count results
        dbb++;
        $('#wrongcounter').html(dbb);
        //limit clicks to 17
        if(dbb==17){
            $('.btn-danger').prop('disabled','true');
        }
    });


});