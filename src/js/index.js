$(window).scroll(()=>{
	headerBg()
})
$(headerBg())

$(".goTop").click(function(){
	goTop()
})

function headerBg(){
	let top = $(window).scrollTop()
	if(top > 0){
		$(".header").addClass('header-bg')
		$(".f-nav").addClass('f-nav-show')
	}else{
		$(".header").removeClass('header-bg')
		$(".f-nav").removeClass('f-nav-show')
	}
}
function goTop(){
	$('body,html').animate({
		scrollTop: 0
	})
}
