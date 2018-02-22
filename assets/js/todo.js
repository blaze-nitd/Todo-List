
$("li").click(function(){
	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css("color","black");
	$(this).css("text-decoration","none");
	}
	else
	{
	$(this).css("color","gray");
	$(this).css("text-decoration","line-through");
    }
});

$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
       $(this).remove();	
    })
    event.stopPropagation();
});