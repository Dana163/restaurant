let i = 0;
let txt = 'Nous faisons tout pour satisfaire nos clients.';
let speed = 30;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("description").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(document).ready(function(){
    $('li').click(function(){
        $('li').css('color','black');
        $(this).css('color', 'green');
    });
});

