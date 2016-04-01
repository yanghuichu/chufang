/*;(function($){
	$("#foot a").on("tap",function(){
		var conPage=$(this).attr("href");
		$(conPage).css({
				"-webkit-transform":"translate3d(0,0,0)",
                " -webkit-transition":"all 1s"
			}).addClass.siblings().css({
				"-webkit-transform":"translate3d(-100%,0,0)"
                
			})
	})
})(Zepto)
*/

		$('.foot').on('click', 'a', function (e) {
			/* 阻止默认行为 */
			e.preventDefault();
			/* 添加移除class */
			$(this).addClass('on').siblings('a').removeClass('on');
			/* 获取当前id */
			var curId = $(this).attr('href');

			$(curId).css({
				'transform': 'translate3d(0, 0, 0)',
				'transition': 'transform .2s ease'
			}).siblings('section').css({
				'transform': 'translate3d(100%, 0, 0)',
				'transition': 'transform 0s ease'
			});
		});