$(function () {
    $(window)
        .on('load', function () {
            $('div#loading').fadeOut(6000);
            window.sr = ScrollReveal({reset: false});
            var commonCards = `.timeline-dot,.timeline-content,
                                 #skills-card, #testimonials-card, 
                                 #featured-projects-card, .projects-card, #contact-card, 
                                 #clients,.section-title img`;

            sr.reveal('.skillbar-bar', {
                duration: 1800,
                delay: 300,
                distance: '0'
            });

            sr.reveal('#profile-card-container', {
                duration: 1400,
                distance: '150px'
            });

            sr.reveal('#about-card', {
                duration: 1400,
                delay: 500
            });

            sr.reveal(commonCards, {duration: 1100});

        });
})
