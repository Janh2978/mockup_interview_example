// CSS
import '../scss/main.scss';
import 'bootstrap';

$(document).ready(function(){ 
  $("#dLabel").on("click", function(e){ 
    $("[aria-labelledby=\"dLabel\"]").toggleClass("show");
    e.stopPropagation();
    e.preventDefault();  
  });
});