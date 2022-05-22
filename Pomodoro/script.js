jQuery(function() {
    let status = false;
    let default_rest_time = 15;
    let current_time = 20;
    let current_time_second = 0;
    
    let not_change_time = current_time;
    
    let rest = false;
    let rest_on = true;
    
    let num_interval;
    
    let increase_box = $('.increase_box');
    let reduce_box = $('.reduce_box')
    
    //Start 
    $('#time').on('click', function() {
        
        if (status == false && rest == false) {
            status = true;
            
            num_interval = setInterval(countdown,1000);

            increase_box.css({'margin-bottom':'50px','opacity':'0'});
            reduce_box.css({'margin-top':'50px','opacity':'0'});

            $('body').css({'background-size': "100% 500%"});

            $('#time').css({'box-shadow':'5px 5px 5px 2px rgb(255,255,255)'});
            
            $('#stop').css({'opacity':'0%'});
            $('#rest').css({'opacity':'0%'});
            
            
            button_de_init();
            
        }
        
        else if (status) {
            
            status = false;
            clearInterval(num_interval);
            
            $('#time').css({'box-shadow': ""});
            
            $('#stop').css({'opacity':'100%'});
            $('#rest').css({'opacity':'100%'});
            
            increase_box.css({'left':'0px','opacity':'0'});
            reduce_box.css({'right':'0px','opacity':'0'});
            
            restart_btn();
            rest_btn();
            
            rest_on = true;
            
            
        }
        
        else if (rest_on == false) {
            num_interval = setInterval(countdown,1000);
            rest_on = true;
            
            $('#stop').off();
            $('#rest').off();
            
            $('#stop').css({'opacity':'0%'});
            $('#rest').css({'opacity':'0%'});
        }
        
        else {
            status = false;
            rest_on = false;
            clearInterval(num_interval);
            
            
            restart_btn();
            
            $('#stop').css({'opacity':'100%'});
            $('#rest').css({'opacity':'100%'});
            
        }
    })
        
    //Buttons
    function restart_btn() {
       $('#stop').on('click', function() {
            status = false;
            current_time = 20;
            current_time_second = 0;

            $('.time').text('20:00');

            increase_box.css({'margin-bottom':'0px','opacity':'100'});
            reduce_box.css({'margin-top':'0px','opacity':'100'});
            $('body').css({'background-size': "100% 100%"});
           
            $('#increase_hours').off();
            $('#increase_minute').off();
            $('#reduce_hours').off();
            $('#reduce_minute').off();
            button_init();
           
            rest = false;
        }) 
    }
    
    //Rest
    function rest_btn() {
        $('#rest').on('click', function() {
            rest = true;
            
            current_time = default_rest_time;
            current_time_second = 0;
            
            $('#increase_hours').off();
            $('#increase_minute').off();
            $('#reduce_hours').off();
            $('#reduce_minute').off();
            $('#stop').off();
            
            clearInterval(num_interval);
            
            current_time = default_rest_time;
            num_interval = setInterval(countdown,1000);
            
            $('#stop').css({'opacity':'0%'});
            $('#rest').css({'opacity':'0%'});
            
            increase_box.css({'margin-bottom':'50px','opacity':'0'});
            reduce_box.css({'margin-top':'50px','opacity':'0'});
            
            $('body').css({'background-position': "100% 0", 'background-size': "200% 100%"});
            
        })
    }
    
    let rest_time_5 = $('#rest_time_5');
    let rest_time_15 = $('#rest_time_15');
    let rest_time_25 = $('#rest_time_25');
    
    rest_time_5.on('click', function() {
        default_rest_time = 1;
        
        rest_time_5.css({'background':"rgb(255,255,255)",
                         'border-width':'3px'});
        
        rest_time_15.css({'background-color':'rgb(240,240,240)',
                          'border-width':'2px'});
        
        rest_time_25.css({'background-color':'rgb(240,240,240)',
                          'border-width':'2px'});
        
    })
    
    rest_time_15.on('click', function() {
        default_rest_time = 15;
        
        rest_time_5.css({'background':"rgb(240,240,240)",
                         'border-width':'2px'});
        
        rest_time_15.css({'background-color':'rgb(255,255,255)',
                          'border-width':'3px'});
        
        rest_time_25.css({'background-color':'rgb(240,240,240)',
                          'border-width':'2px'});
    })
    
    rest_time_25.on('click', function() {
        default_rest_time = 25;
        
        rest_time_5.css({'background':"rgb(240,240,240)",
                         'border-width':'2px'});
        
        rest_time_15.css({'background-color':'rgb(240,240,240)',
                          'border-width':'2px'});
        
        rest_time_25.css({'background-color':'rgb(255,255,255)',
                          'border-width':'3px'});
    })
    
    function button_de_init() {
        $('#increase_hours').off();
        $('#increase_minute').off();
        $('#reduce_hours').off();
        $('#reduce_minute').off();
        $('#stop').off();
        $('#rest').off();
    }
    
    function button_init() {
        $('#increase_hours').on('click', function() {
            current_time += 10;
            $('.time').text(String(current_time)+':00');
        })

        $('#increase_minute').on('click', function() {
            current_time += 1;
            $('.time').text(String(current_time)+':00');
        })

        $('#reduce_hours').on('click', function() {
            if (current_time-10 > 0) {
                current_time -= 10;
                $('.time').text(String(current_time)+':00');   
            }
        })

        $('#reduce_minute').on('click', function() {
            if (current_time-1 > 0) {
                current_time -= 1;
                $('.time').text(String(current_time)+':00');   
            }
        })
        
        let not_change_time = current_time;
    
    }
    
    button_init();
    restart_btn();
    
    //While countdown
    function countdown() {
        if (current_time_second == 0) {
            current_time_second = 60;
            current_time -= 1;
        }

        current_time_second -=1;

        let pattern = String(current_time);

        if (current_time < 10) {
            pattern = '0' + String(current_time);
        }

        if (current_time_second < 10) {
            pattern = pattern + ':0' + String(current_time_second);
        }

        else {
            pattern = pattern + ':' + String(current_time_second);
        }
        
        if (current_time == 0 && current_time_second == 0) {
            if (rest == false) {
                status = false;
                rest = true;
                rest_on = false;

                current_time_second = 0;
                clearInterval(num_interval);
                current_time = default_rest_time;

                $('body').css({'background-position': "100% 0", 'background-size': "200% 100%"});
                pattern = String(current_time) + ':' + String(current_time_second+'0'); 
            }
            
            else {
                status = true;
            
                
                clearInterval(num_interval);
                
                current_time = not_change_time;
                alert(not_change_time);
                current_time_second = 0;

                $('body').css({'background-size': "100% 500%"});

                $('#time').css({'box-shadow':'5px 5px 5px 2px rgb(255,255,255)'});

                button_de_init();
                
                pattern = String(current_time) + ':' + String(current_time_second+'0');
            }
                
        }

        $('.time').text(pattern);  
    }
    
})