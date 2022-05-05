function bigger() {
    document.getElementById('box').style.fontSize = "4em";
    window.alert('Hello, World!');

}

function fancyschmancy() {
    document.getElementById("BoringBetty").checked  = false;  
    var txt = document.getElementById('box');
    txt.style.fontWeight = 'bold';
    txt.style.color = '#0000FF';
    txt.style.textDecoration = 'underline';
    txt.style.font = 'Comic Sans MS'
}

function boringbetty() {
    document.getElementById("FancySchmancy").checked  = false;  
    var txt = document.getElementById('box');
    txt.style.fontWeight = 'normal';
    txt.style.color = '#000000'
    txt.style.textDecoration = 'none';
    txt.style.font = 'Arial'
    txt.style.fontSize = '1em'
}   

function Moo() {
    var txt = document.getElementById('box');
    txt.style.textTransform = 'uppercase';
    var split = txt.value.split(".");
    txt.value = split.join('-Moo.');

}