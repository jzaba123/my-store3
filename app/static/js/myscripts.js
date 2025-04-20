$(".target").on("click", function() {
    let $button = $(this);
    let oldVal = parseInt($button.parent().find("input").val());
    let newVal = 0;

    if ($button.text() == '+') {
        newVal = oldVal + 1;
    }
    else {
        if (oldVal > 0) {
            newVal = oldVal - 1;
        }
        else {
            newVal = 0;
        }
    }

    $button.parent().find("input").val(newVal);
    
    // Show or hide guest checkout button based on quantity
    if (newVal > 0) {
        $button.closest('form').find('.guest-checkout').show();
    } else {
        $button.closest('form').find('.guest-checkout').hide();
    }
});

$('.addToCart').on("click", function(event) {
    // Get the quantity input value
    let quantity = $(this).closest('form').find('.quantity').val();
    
    if(quantity == '0') {
        event.preventDefault();
        let flashMessage = $(this).siblings('.flashMessage');
        flashMessage.html("You need to select at least one item.");
        flashMessage.css("display", "block");
        flashMessage.delay(3000).slideUp();
    }
});

$(".flashMessage").delay(3000).slideUp();

