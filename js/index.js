window.onscroll = function() {
  scrollNav();
  animateProgressBars();
  animateCounters();
  animatePortfolio();
  animateServices();
  animateTestimonials();
  animateClients();
  animateForm();
};
// shrink Nav
function scrollNav() {
  var body = $('body')
  var $navMenu = $('#nav-wrapper');
  var $logo = $('.navbar-brand > img')

  if (body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $navMenu.css('padding-top', '5px').css('padding-bottom', '5px');
    $logo.css('width', '80%').css('height', '80%')
    $navMenu.css('background-color', 'rgba(233, 233, 233, 0.88)');
  } else {
    $navMenu.css('padding-top', '35px').css('padding-bottom', '35px');
    $logo.css('width', '100%').css('height', '100%');
    $navMenu.css('background-color', 'rgba(233, 233, 233, 0)');
  }
}
//smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.length) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      scrollTo(hash);
    } // End if
  });
});
function scrollTo(el){
  if ($(el).length) {
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(el).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = el;
    });
  }
}
let skillsStart = false; //switch for skills / progress bars
let countersStart = false; //switch for counters
let portfolioStart = false; //switch for portfolio
let servicesStart = false; //switch for services
let testimonialsStart = false; //switch fortestimonials
let clientsStart = false; //switch for clients
let formStart = false; //switch for form

$(document).ready(function(){
//add click on contact us button
  $('#hero-banner .custom-button').click(function(){
    scrollTo('#contact-us');
  })
})
function animateProgressBars(){
  // https://stackoverflow.com/questions/23575095/animating-bootstrap-progress-bar-width-with-jquery
  //run if visible
  if ($('#skills').visible(true)) {
    //check switch
    if (!skillsStart) {
      //switch off if fired once
      skillsStart = true;
      //reveal section
      $('#skills').addClass('section-reveal');
      //animate progress bars
      $('.progress').each((index, item) => {
        const bar = $(item).find('.progress-bar');

        bar.animate({'width': bar.attr("aria-valuenow") + "%"}, 3000);
      });
    }
  }
}
function animateCounters(){
  //https://codepen.io/shivasurya/pen/FatiB
  //run if viible
  if ($('#counters').visible(true)) {
    //check switch
    if (!countersStart) {
      //switch off if fired once
      countersStart = true;
      //reveal section
      $('#counters').addClass('section-reveal');
      //animate counters
      $('h6.count').each(function () {
        $(this).prop('Counter',0).animate({
          Counter: $(this).text()
        }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
      //appear Icons
      $('#counters i').addClass('appear');
    }
  }
}
function animatePortfolio(){
  if ($('#portfolio').visible(true)) {
    if (!portfolioStart) {
      //switch off if fired once
      portfolioStart = true;
      //reveal section
      $('#portfolio').addClass('section-reveal');
    }
  }
}
function animateServices(){
  if ($('#services').visible(true)) {
    if (!servicesStart) {
      //switch off if fired once
      servicesStart = true;
      //reveal section
      $('#services').addClass('section-reveal');
      //appear Icons
      $('#services i').addClass('appear');
    }
  }
}
function animateTestimonials(){
  if ($('#testimonials').visible(true)) {
    if (!testimonialsStart) {
      //switch off if fired once
      testimonialsStart = true;
      //reveal section
      $('#testimonials').addClass('section-reveal');
    }
  }
}
function animateClients(){
  if ($('#clients').visible(true)) {
    if (!clientsStart) {
      //switch off if fired once
      clientsStart = true;
      //reveal section
      $('#clients').addClass('section-reveal');
    }
  }
}
function animateForm(){
  if ($('#contact-us').visible(true)) {
    if (!formStart) {
      //switch off if fired once
      formStart = true;
      //reveal section
      $('#contact-us').addClass('section-reveal');
    }
  }
}
/* PROJECTS hover*/
$(document).ready(function(){
  const projectLink = [
                        {project : 1, link : './porfolio/project1/project.html', img : './img/portfolio/1.png'},
                        {project : 2, link : './porfolio/project2/project.html', img : './img/portfolio/2.png'},
                        {project : 3, link : './porfolio/project3/project.html', img : './img/portfolio/3.png'},
                        {project : 4, link : './porfolio/project4/project.html', img : './img/portfolio/4.png'},
                        {project : 5, link : '#portfolio', img : ''},
                        {project : 6, link : '#portfolio', img : ''},
                        {project : 7, link : '#portfolio', img : ''},
                        {project : 8, link : '#portfolio', img : ''}
                        ]
  const projects = $('#portfolio .row > div.col-md-3 ');

  //set background
  for (var i = 0; i < projectLink.length; i++) {
    $(projects[i]).css({backgroundImage : `url('${projectLink[i].img}')`})
  }

  for (var i = 0; i < projectLink.length; i++) {
    const overlay = $(`<div class="project-overlay"><a href="${projectLink[i].link}"><i class="pe-7s-look pe-4x pe-va"></i></a></div>`);

    $(projects[i]).hover(function(e){
      overlay.appendTo($(e.target));
    },
    function(e){
      $(overlay, e.target).remove();
    });
  }
})
/* PROJECTS reveal*/
$(document).ready(function(){
  const moreProjectsBtn = $('#portfolio .load-more-btn p'),
        projectRows = $('#portfolio .row:not(:last-child)'),
        len = projectRows.length;
  let rowCounter = 0;
  if (projectRows.length) {
    moreProjectsBtn[0].addEventListener('click', function(){
      let i = rowCounter;

      if($(projectRows[i]).is(":visible")){
        revealNext(i);
      } else if (rowCounter === len) {
        $(projectRows).hide(300);
        $(projectRows[0]).show(400);
        scrollTo('#portfolio');
        rowCounter = 0;
        moreProjectsBtn[0].innerText = 'Show more projects';
      }
    });
  }
  function revealNext(i){
    $(projectRows[i+1]).show(500).css({display: 'flex'});
    rowCounter++;
    if (rowCounter === len-1) {
      moreProjectsBtn[0].innerText = 'Show less projects';
      rowCounter = len;
    }
  }
});

/* TESTIMOLIALS slider*/
$(document).ready(function () {
  //get slides
  const slides = $('#testimonials ul li');
  //set equal height
  let maxSlideHeight = 0;

  for (var i = 0; i < slides.length; i++) {
    let h = $(slides[i]).height();

    if (h > maxSlideHeight) {
      maxSlideHeight = h;
    }
  }
  $(slides).css({minHeight: `${maxSlideHeight}px`});
  //hide all but first
  slides.hide();
  slides.eq(0).show();
  //generate bullet buttons
  for (var i = 0; i < slides.length; i++) {
    const bulletControl = $(`<div class="slider-control ${i} "></div>`),
          bulletDiv = $('.controls');
    //append and center controls
    bulletControl.appendTo(bulletDiv);
    bulletDiv.css({left: `calc(50% - ${bulletDiv.width/2}px)`});
  }
  //select first
  $($('.slider-control')[0]).addClass('selected')
  //add eventlistener
  const controls = $('.slider-control');

  for (var i = 0; i < controls.length; i++) {
    controls[i].addEventListener('click', function(e) {
      changeSlide(e);
    });
  }

  function changeSlide(e){
    //reset to white color
    for (var x = 0; x < controls.length; x++) {
      controls[x].classList.remove('selected');
    }
    //get tatget class name
    const elName = e.target.className;

    for (var j = 0; j < controls.length; j++) {
      //if target class name includes index
      if (elName.includes(j)) {
        //show another slide
        slides.hide();
        slides.eq(j).show(600);
      }
    }
    $(e.target).toggleClass('selected');
  }
});

/* Email FORM */
$(document).ready(function () {
    $('[name="send-button"]').click(function (e) {
      console.log($('form'));
      // e.preventDefault(); //STOP default action
      const name = $('[name="name"]').val(),
            email = $('[name="email"]').val(),
            message = $('[name="message"]').val();

      if (name && email && message) {
        //emailjs.com
        emailjs.sendForm('gmail', 'template_C6kumJaD', '#contactForm')
        .then(function(response) {
          // console.log('SUCCESS!', response.status, response.text);
          $('.form-success-message').show();
          $('#contactForm').hide();
        }, function(error) {
          $('.form-error-message').show();
          console.log('FAILED...', error);
        });
      }
    });
});
