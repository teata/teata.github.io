$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.produk_item');
            setTimeout(function(){
                $('.produk_item').removeClass('hide');
            }, 500);
        } else{
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'+ category).removeClass('hide');
            }, 300);
        }
    });
});