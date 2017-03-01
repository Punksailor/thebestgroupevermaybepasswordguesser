/* global $ */
$(document).ready(function(){
    var answer = "word";
    
    $("button").click(function(){
        alert("DID YOU JUST ASSUME MY GENDER");
     
     
        if (answer === $("#No").val()){
            alert("you did good boi");
        } else {
            alert("nope");
        }

   });
});
