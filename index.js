$( ".card" ).on("click", function(){
  $(".card .front").toggleClass("flip");
  $(".solid").toggleClass("z-up");
  $('.dancing-taco').toggleClass('animated bounceInDown hidden');
});
