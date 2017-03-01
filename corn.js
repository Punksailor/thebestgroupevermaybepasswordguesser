/* global $ */
$(document).ready(function(){
    var answer = "What is your pronoun?";
    
    $("button").click(function(){
        alert("DID YOU JUST ASSUME MY GENDER");
     
     
        if (answer === $("#No").val()){
            alert("thank you for respecting my pronouns");
        } else {
            alert("I WILL CALL MY LAWYERS ON YOU!!!");
        }

   });
});
