// var 1
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-73434776-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


function trackButton(e) {
  _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  console.log('send');
};

var buttons = document.querySelectorAll('a');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButton(this));
}





// // var 2
//   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//   })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

//   ga('create', 'UA-73434776-1', 'auto');
//   ga('send', 'pageview');

//   ga(function(tracker) {
// 	  // Logs the tracker created above to the console.
// 	  console.log(tracker);
// 	  console.log(ga.getAll());
//   });


// function trackButton(e) {
//   ga('send', 'event', e.target.id, 'clicked');
// };

// var buttons = document.querySelectorAll('a'),
//     switcher = document.querySelector('#switcher');
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', trackButton(this));
// }
// switcher.addEventListener('click', trackButton(this));