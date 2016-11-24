var height = $('.spoiler-body').hide().height();
$(function(){
	$('.spoiler-body').hide();
	$('.spoiler-title').click(function(){
		$(this).next().slideToggle();
	});
});

