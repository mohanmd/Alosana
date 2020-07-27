// multiple file upload
$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#file-upload').on('change', function() {
        imagesPreview(this, 'div.files-display');
    });
});

jQuery(document).ready(function($) {

    $('.fileinput').focus(function(){
        $(this).parent().css({'border-color': '#4a77c3','background-color':'#eee'});
    })
});

// back btn
function goBack() {
    window.history.back();
  }

// open menu
// $(document).ready(function(){
//     $('.menu-parent').click(function(){
//         // e.preventDefault();
//         // if($(this).hasClass('menu-open')){
//         //     $('.menu-parent').removeClass('menu-open');
//         //     // alert('is there')
//         // }else{
//         // }
//         $(this).toggleClass('menu-open');
//     });
// });

// chat scroll
$(document).ready(function () {
    // $('.chating-box ').animate({
    //     scrollTop: $('.chating-box .chat:last-child').position().bottom
    // }, 'slow');
     
    $('.chating-box').animate({
        // scrollTop: $('#msgs').eq(0).scrollHeight}, 2000);
         scrollTop: $('.chating-box')[0].scrollHeight}, 700);
         $(".send-msg-btn").on("click", function(){
            var text = $('#btn-input');
            $('.chating-box').append('<div class="my-chat chat"><div class="chat-cont">'+ text.val() +'</div> </div></div>');
          text.val('');
          $('.chating-box').animate({
            // scrollTop: $('#msgs').eq(0).scrollHeight}, 2000);
             scrollTop: $('.chating-box')[0].scrollHeight}, 700);
        });
});