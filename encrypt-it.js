
(function() {
  "use strict";
  window.addEventListener("load", init);
  console.log('Window loaded');

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {

    var encryptButton = document.getElementById('encrypt-it');
    encryptButton.addEventListener('click',encryptFunc);

    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetFunc);

    var font12 = document.getElementById('f12');
    font12.addEventListener('click',f12);

    var font24 = document.getElementById('f24');
    font24.addEventListener('click',f24);

    var cap = document.getElementById('all-caps')
    cap.addEventListener('click',allCap)


  }

  function encryptFunc() {


        
  }

  function resetFunc() {
    console.log('test');
    var x = document.getElementById('input-text');
    var y = document.getElementById('result');
    x.value = 'x';
    y.value = '';
  }

  function f12() {
    if (document.getElementById('f12').checked) {
        var x = document.getElementById('input-text');
        x.style.fontsize = '12pt';
    }
  }

  function f24() {
    if (document.getElementById('f24').checked) {
        var x = document.getElementById('input-text');
        x.style.fontsize = '24pt';
  }
}

  function allCap() {
    var cap = document.getElementById("all-caps");
    if (cap.checked) {

    }
  }



})();
