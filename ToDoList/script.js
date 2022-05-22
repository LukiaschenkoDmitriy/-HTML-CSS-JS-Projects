$(function() {
    replFun()
})

var replFun = function() {
    // Input animation
    var input = $('.task');
    var buttonAdd = $('.buttonAdd');
    input.focus(function() {
        $('.underLine').css('width', '650px');
        
        $('.overLine').css('width', '650px')
        input.css('background','#fff');
        input.css('border', 'none')
    })
    
    input.focusout(function() {
        $('.underLine').css('width','0px');
        
        $('.overLine').css('width','0px');
        
        input.css('background', '#f0f0f0');
    })
    
    //Button animation
    buttonAdd.click(function() {
        if (input.val()) {
            buttonAdd.css('box-shadow', '0px 0px 0px 5px rgb(237, 154, 59)');
            buttonAdd.css('color','rgb(237, 154, 59)');
            
            //Append Object
            $('.activeTasks').append(`<div class="jus_center_box"><div class="taskBlock"><div class="taskTitle">${input.val()}</div></div><div class="buttonRemove">DEL</div></div>`)
            
            input.val('')
            
            $('.buttonRemove').click(function() {
                $(this).parent().remove()
    })
        }
        else {
            buttonAdd.css('box-shadow', '0px 0px 0px 5px rgb(245, 66, 66)');
            buttonAdd.css('color', 'rgb(245, 66, 66)');
            input.css('border', '1px solid red');
        }
    })
    
    $('.buttonRemove').click(function() {
        $(this).parent().remove()
    })
    
    buttonAdd.mouseleave(function() {
        buttonAdd.css('box-shadow', '0px 0px 0px 1px #a2a1a1');
        buttonAdd.css('color', '#a2a1a1')
    })
    
    buttonAdd.mouseenter(function() {
        buttonAdd.css('box-shadow', '0px 0px 0px 5px #96e78b');
        buttonAdd.css('color','#96e78b');
    })
    
    //Task blocks
}