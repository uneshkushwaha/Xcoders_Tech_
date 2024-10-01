$(document).ready(function () {
    var w = window.innerWidth;

    if (w > 767) {
        $('#menu-jk').scrollToFixed();
    } else {
        // $('#menu-jk').scrollToFixed();
    }



})

$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});



$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});


$('#typewriteText').typewrite({
    speed: 8,
    actions: [
        { type: 'Love God. Love Each Other' },
        { delay: 1000 },
        { remove: { num: 26, type: '' } },
        { type: ' No Matter Who You are' },
        { delay: 1000 },
        { remove: { num: 21, type: '' } },
        { type: 'Love God. Love Each Other' },
    ]
});


//Registration form
// document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const fullname = document.getElementById("fullname").value;
//     const phonenumber = document.getElementById("phonenumber").value;
//     const address = document.getElementById("address").value;
//     const email = document.getElementById("email").value;

//     const emailBody = `
//         Full Name: ${fullname}
//         Phone Number: ${phonenumber}
//         Address: ${address}
//         Email: ${email}
//     `;

//     const mailtoLink = `mailto:kushwahaunesh2345@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

//     window.location.href = mailtoLink;
// });
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;
    const phonenumber = document.getElementById("phonenumber").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const emailBody = `
        Full Name: ${fullname}
        Phone Number: ${phonenumber}
        Address: ${address}
        Email: ${email}
    `;


    // Replace with your actual EmailJS credentials and template ID
    emailjs.send(service_qpr9zfx, template_1clh8ge, {
        message: emailBody,
        // You can optionally include additional recipient information here (not recommended)
        // to: 'kushwahaunesh2345@gmail.com'  // Not recommended for security reasons
    }, AeQxdRbBzls46HlCV)
        .then(function (response) {
            console.log('Email sent successfully:', response.status);
            alert("Your message has been sent successfully!");
        })
        .catch(function (error) {
            console.log('Failed to send email:', error);
            alert("There was an error sending your message. Please try again later.");
        });
});


// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});