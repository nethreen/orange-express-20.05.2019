$(document).ready(function () {

    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // let a = $(".white-input").val();

    // console.log(a)


    $(".white-input").change(function(){
        let a = $(".white-input").val();

        console.log(a)
        $("#p-val").text(a*5.50)

        console.log($("#p-val").text())
    })


    !function($) {

        $('input').keyup(function() {
    
            $val = $(this).val();
            if( $reg = $(this).attr('pattern') ) {
                $reg = new RegExp($reg);
                if($reg.test($val)) {
                    $(this).closest('.form-group').addClass('form-success');
                    $(this).closest('.form-group').removeClass('form-error');
                }
                else {
                    $(this).closest('.form-group').removeClass('form-success');
                    $(this).closest('.form-group').addClass('form-error');
                }
            }
    
           
        }); 
    
     
      
      
    }(jQuery)
    $('#pop-up').click(function() {
        $('#modal-window').addClass('active');
     });
     $('.modal-close').click(function() {
        $(this).parent().removeClass('active');
     });
  


     $('.scrollup').click(function (){
        $("html,body").animate({
        scrollTop: 0
        }, 1000);
        return false;
        });


         // FOR ARROW BACK 
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
});
new WOW().init();
