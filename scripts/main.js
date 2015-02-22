(function() {
  'use strict';

  // Fun with ECMAScript 6
  document.addEventListener('DOMContentLoaded', () => {
    var funct = () => console.log('Arrows work!');
    funct();
  });





  // document.addEventListener('DOMContentLoaded', function() {
  //   console.log('The document has been loaded.');
  // });

  // document.addEventListener('mousemove', function(e) {
  //   var val = /\d{6}/.exec(e.x.toString() + e.y.toString());
  //   var h1 = document.querySelector('h1');

  //   if (/^[0-4]{1}\w[0-4]{1}\w[0-5]{1}\w/i.test(val)) {
  //     h1.style.color = '#eee';
  //   } else {
  //     h1.style.color = '#222';
  //   }

  //   document.body.style.backgroundColor = '#' + val;
  //   h1.innerHTML = val;
  // });

})();
