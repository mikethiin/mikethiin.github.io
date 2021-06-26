var layerCount = 4; //Capas de estrellas
var starCount = 700; //Numero de estrellas
var maxTime = 31;
var universe = document.getElementById('universe');
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName('body')[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = Math.floor((w.innerHeight || e.clientHeight)/100 * 250);
for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var speed = 1000 * (Math.random() * maxTime + 1);
  if(i != 1){
    var star = document.createElement('div');
    star.setAttribute('class', 'star' + (3 - Math.floor((speed / 1000) / 8)));
    star.style.backgroundColor = 'white';
  }else{
    var star = document.createElement('div');
    star.setAttribute('class','starBiene' + i);
  }
  universe.appendChild(star);
  star.animate([{transform: 'translate3d(' + width + 'px, ' + ypos + 'px, 0)'},
              {transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + ypos + 'px, 0)'}],
             {delay: Math.random() * -speed, duration: speed, iterations: 1000});
 }
