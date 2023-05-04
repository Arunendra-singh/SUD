$(document).ready(function() {

    //for card selection on hover 

    $(".card").hover(
        function() {
            $(".card").not(this).removeClass('cardBlueActive');
            $(this).toggleClass('cardBlueActive');

            if ($('.PlanCntnDiv .card').hasClass("cardBlueActive")) {
                $(this).parent().addClass('ful_height');
            } else {
                $(this).parent().removeClass('ful_height');
            }
        }
    );

    $(".card .PlanKnowMore").click(function() {
        $(".card .PlanKnowMore").not(this).parent(".card").removeClass("cardBlueActive");
        $(this).parents(".card").toggleClass("cardBlueActive");
    });

})

/**************************************/