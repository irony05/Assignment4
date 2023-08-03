"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-05

      Project to validate a user form
      Author: 
      Date:   

      Filename: project12-05.js
*/



$(document).ready(function () {
  // apply the novalidate attribute so that the browser validation is not run
  $("form#userform").attr("novalidate", "");

  // run a function when the form is submitted
  $("form#userform").submit((e) => {
    let isValid = true;

    // confirm that a username has been supplied
    let username = $("input#username");
    // test the value of the username input box
    if ($(username).val() === "") { // Added parentheses after val() to call the function
      // if the name is missing, display an error message
      isValid = false;
      $(username).next()
        .hide()
        .text("* You must supply a username")
        .show(500);
    } else {
      // display an empty text string
      $(username).next().text("");
    }

    // confirm that an email address has been supplied
    let email = $("input#email"); // Added missing $ before (input#email)
    // test the text of the email box is a valid email address
    let mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // Corrected the regular expression
    // /^ & $/ these are the delimiters and they mark the beginning and end of the pattern.
    // [a-z] character class
    let validMail = mailRE.test(email.val());

    if (validMail !== true) {
      // if the email address does not match the regular expression pattern, display an error message
      isValid = false;
      $(email).next()
        .hide()
        .text("* Not a valid e-mail address")
        .show(500);
    } else {
      // display an empty text string
      $(email).next().text("");
    }

    // confirm that valid password has been supplied
    let pwd = $("input#pwd");
    // test the text of the password box conforms to the password rules
    let pwdRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let validPwd = pwdRE.test(pwd.val());

    if (validPwd !== true) {
      // if the password does not match the regular expression pattern, display an error message
      isValid = false;
      $(pwd).next()
        .hide()
        .text("* Invalid password")
        .show(500);
    } else {
      // display an empty text string
      $(pwd).next().text("");
    }

    // confirm that the two passwords match
    let pwd2 = $("input#pwd2");

    if (pwd.val() !== pwd2.val()) {
      // if the passwords don't match, display an error message
      isValid = false;
      $(pwd2).next()
        .hide()
        .text("* Passwords must match")
        .show(500); // Corrected the interval to 500 milliseconds
    } else {
      // display an empty text string
      $(pwd2).next().text("");
    }

    // Confirm that there is no invalid data in the form
    if (isValid === false) { // Fixed the comparison operator from = to ===
      // if there is invalid data, cancel the form submission
      e.preventDefault();
    }
  });
});
