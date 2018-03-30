$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        
        if(category == 'all'){
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.produk_item').removeClass('hide');
            }, 300);
        } else{
            $('.produk_item').addClass('hide');
            setTimeout(function(){
                $('.'_category).removeClass('hide');
            }, 300);
        }
    });
});