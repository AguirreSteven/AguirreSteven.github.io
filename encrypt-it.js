/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {

    let encrypt = document.getElementById('encrypt-it');
    encrypt.addEventListener('click',encryptFunc);

    let reset = document.getElementById('reset');
    reset.addEventListener('click',resetFunc);

    let font12 = document.getElementById('f12');
    font12.addEventListener('click',f12);

    let font24 = document.getElementById('f24');
    font24.addEventListener('click',f24);

    let cap = document.getElementById('all-caps')
    cap.addEventListener('click',allCap)


  }

  function encryptFunc() {
    var cipherType = document.getElementById('cipher-type').value;
    var inputText = document.getElementById('input-text').value;
    var result = document.getElementById('result');
    
        
  }

  function resetFunc() {

  }

  function f12() {

  }

  function f24() {

  }

  function allCap() {

  }



});