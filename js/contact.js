$(document).ready(function(){
    $('li').click(function(){
        $('li').css('color','black');
        $(this).css('color', 'green');
    });
});