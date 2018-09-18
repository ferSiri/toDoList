$("ul").on("click", "li", function(){
        $(this).toggleClass("completado")
      });

      
$("ul").on("click", "i", function(event){
$(this).parent().fadeOut(500, function(){
  $(this).remove();
});
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
if(event.key == "Enter") {
  $("ul").append("<li><i class='far fa-trash-alt' aria-hidden='true'></i>"+ $(this).val() + "</li>");
  $(this).val("");
  event.stopPropagation();
}
});
$(".fa-eye").click(function(){
     $("input").slideToggle()
})