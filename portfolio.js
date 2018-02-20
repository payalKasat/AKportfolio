/**
 * Created by ashwi on 9/9/2016.
 */
/*Jai hanumanji*/
$(document).ready(function(){
    timeMessage();
    displayAnimation();
    divClick();


});
function timeMessage(){
    var x ="";
    var time = new Date().getHours();
    if (time < 12){
        $('.time_message').html('<h2>Good Morning!!</h2>');

    }
    else if(time < 18){
        $('.time_message').html('<h2>Good Afternoon!!</h2>');
    }
    else{
        $('.time_message').html('<h2>Good Evening!!</h2>');
    }
}

function displayAnimation(){
    $('.port_name').fadeIn(5000);
    $('.info_div').show(5000);

}

function divClick(){
    $('.info_div').click(function(){
        $('.info_page').hide(2000);
        $('.row1').addClass('info_div_animation');
        $('.row2').addClass('info_div_animation2');
        $('.port_name').fadeOut(4000);
        var info_page = $("<div></div>").addClass('info_page');
        $('.main_body').append(info_page);

    })

}