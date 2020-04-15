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

