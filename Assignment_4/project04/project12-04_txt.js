"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow
      Author: Imam
      Date:   2023-08-01

      Filename: project12-04.js
*/

// project12-04_txt.js

//initial value 0.
let slideNumber = 0;


// To move the picture towards right
$("#leftbutton").click(function () {
  
  if (slideNumber > 0) {
    
    $("img.slideImages").animate({ left: "+=401px" }, 2000); //2 second interval

    // Decrease the value by 1.
    slideNumber--;

    
    let currentSlide = $("img.slideImages")[slideNumber];

    
    let slideCaption = $(currentSlide).attr("alt");

    // changeCaption funtion with slideCaption parameter.
    changeCaption(slideCaption);
  }
});


//To move the picture left.
$("#rightbutton").click(function () {
  if (slideNumber < 11) {
    $("img.slideImages").animate({ left: "-=401px" }, 2000);
    slideNumber++;
    let currentSlide = $("img.slideImages")[slideNumber];
    let slideCaption = $(currentSlide).attr("alt");
    changeCaption(slideCaption);
  }
});

//changeCaption funtion with a single parameter captionText. 
function changeCaption(captionText) {
 
  $("div#caption").effect("blind", { mode: "hide", direction: "left" }, 500, 
  function () {
    $("div#caption").text(captionText);
  });

  
  $("div#caption").effect("blind", { mode: "show", direction: "left" }, 500);
}


