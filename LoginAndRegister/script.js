var loginBlock = document.getElementById('login');
var registerBlock = document.getElementById('register');
var content = document.getElementById('content');

var loginTitle = (document.getElementById('loginTitle')) ? document.getElementById('loginTitle') : document.getElementById('loginTitleActive');

var allInput = document.querySelectorAll('input');


var registerTitle = (document.getElementById('registerTitle')) ? document.getElementById('registerTitle') : document.getElementById('registerTitleActive');


function pressTitle(block) {
    
    //Press on login title
    if (block == 'login') {
        loginBlock.style.display = 'block';
        registerBlock.style.display = 'none';
        loginBlock.style.opacity = '100%';
        registerBlock.style.opacity = '0%';
        
        content.style.height = '470px';
        
        //Change size
        loginTitle.id = 'loginTitleActive';
        registerTitle.id = 'registerTitle';
          
    }
    
    //Press on register title
    else {
        loginBlock.style.display = 'none';
        registerBlock.style.display = 'block';
        loginBlock.style.opacity = '0%';
        registerBlock.style.opacity = '100%';
         
        content.style.height = '520px';
        
        //Change size
        registerTitle.id = 'registerTitleActive';
        loginTitle.id = 'loginTitle';
        
    };
}