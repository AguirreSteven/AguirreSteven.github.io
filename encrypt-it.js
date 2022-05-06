
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
    var cipherType = document.getElementById('cipher-type');
    var text = document.getElementById('input-text');
    var val = val.value;

    if (cipherType.value == 'shift') {
        var res = shiftCipher(text);
        document.getElementById('result').textContent = res;
    } else {
        var res = random(text);
        document.getElementById('result').textContent = res;
    }
    

        
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  function random(text) {
      text = text.toLowerCase();
      
  }

  function resetFunc() {
    var x = document.getElementById('input-text');
    var y = document.getElementById('result');
    x.value = '';
    y.value = '';
  }

  function f12() {
    console.log('12 font clicked');
    var x = document.getElementById('input-text');
    var y = document.getElementById('result');
    x.style.fontSize = '12pt';
    y.style.fontSize = '12pt';

  }

  function f24() {
    console.log('24 font clicked');
    var x = document.getElementById('input-text');
    var y = document.getElementById('result');
    x.style.fontSize = '24pt';
    y.style.fontSize = '24pt';
}

  function allCap() {
    if (document.getElementById('all-caps').checked) {
        var x = document.getElementById("input-text");
        var y = document.getElementById('result');
        x.style.textTransform = "uppercase";
        y.style.textTransform = "uppercase";
    } else {
        var x = document.getElementById("input-text");
        var y = document.getElementById('result');
        x.style.textTransform = "lowercase";
        y.style.textTransform = "lowercase";
    }

  }



})();
