$(document).ready(function(){
    $('#usercheck').hide();
    $('#passcheck').hide();

    var user_err = true;
    var pass_err = true;

    $('#submit').click(function(){
        var user = $('#username').val();
        var password = $('#password').val();
        
        if(user == ''){
            $('#usercheck').show();
            $('#usercheck').html('Username cannot be blank.');
            $('#usercheck').css('color','red');
            user_err=false;
            return false;
        }
        else{
            $('#usercheck').hide();
        }
        if(user.length < 5 || user.length > 10){
            $('#usercheck').show();
            $('#usercheck').html('Username must be between 5 and 10 characters.');
            $('#usercheck').css('color','red');
            user_err=false;
            return false;
        }
        else
        {
            $('#usercheck').hide();
        }
       
 



    })

});