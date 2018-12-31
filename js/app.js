// $(function() {
//   $('.quickflip-wrapper').hover( function(ev) { $(ev.target).quickFlipper();
//  });
// });

function flip() {
    $('.card').toggleClass('flipped');
}

const btn = document.querySelector('.button');

btn.addEventListener('click', function(){
  flip();
});
