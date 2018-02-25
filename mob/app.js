jQuery(function($){
	$(document).mouseup(function (e){ 
		var div = $(".hide");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) { 
			div.hide(); 
		}
	});
});

$(".show").click(function(){
  $(".hide").show();
})
