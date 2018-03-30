$(document).ready(function(){
	$('.portfolio-item').addClass('hide');
	setTimeout(function()
               });
        {
        $('.bulb').removeClass('hide');
    }, 300);

    $('.portfolio-filter').click(function(){
        var category = $(this).attr('id');
        
            $('.portfolio-item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
       
    });
});