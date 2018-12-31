// $(function() {
//   $('.quickflip-wrapper').hover( function(ev) { $(ev.target).quickFlipper();
//  });
// });

function flip() {
    $('.card').toggleClass('flipped');
}

var flashwords = [
  {
    ja:"猫",
    en:"cat",
  },
  {
    ja:"犬",
    en:"dog",
  },
  {
    ja:"蛸",
    en:"octopus",
  },
  {
    ja:"多才な",
    en:"versatile",
  },
]

const english = document.querySelector('.front');
const japanese = document.querySelector('.back');
const btn = document.querySelector('.button');
const message = document.querySelector('.message');
var a = flashwords.length;

function flash() {
  while (a) {
    var j = Math.floor( Math.random() * a );
    var t = flashwords[--a];
    flashwords[a] = flashwords[j];
    flashwords[j] = t;
  }
  console.log(flashwords);
}


flash();

var count = [];

function doFlash(){

  btn.addEventListener('click', function(){
    flip();
    var clicked = event.target;
    count.push(clicked);
    var countNum = count.length;

    if (countNum%2==1){
      japanese.innerHTML = flashwords[(countNum/2)+0.5].ja;
    } else {
      english.innerHTML = flashwords[countNum/2].en;
    }

    setTimeout(function(){
      if (countNum%2==1){
        message.innerHTML = "answer";
      } else {
        message.innerHTML = "next";
      }
    }, 500)




  });
};

doFlash();
