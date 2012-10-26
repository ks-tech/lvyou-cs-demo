(function(){

	function tanClass(nav, ul) {
		var navs = baidu.dom.query(nav);
		var uls = baidu.dom.query(ul);
		baidu.each(navs, function (item, i) {
				item.onclick = function () {
					var nav_cur = baidu.dom.query(nav + '.tab-choosen')[0];
					var ul_cur = baidu.dom.query(ul + '.' + 'on')[0]
					baidu.dom.removeClass(nav_cur, 'tab-choosen');
					baidu.dom.addClass(item, 'tab-choosen');
					baidu.hide(ul_cur);
					baidu.dom.removeClass(ul_cur, 'on');
					baidu.show(uls[i]);
					baidu.dom.addClass(uls[i], 'on');
				};
			});
	}

	baidu.dom.ready(function () {
	
		lv.session = lv.session || {};
	
		tanClass("#sight span.sight-tab", "#sight ul");
		tanClass("#food span.food-tab", "#food ul");
		
		var n = 0;
		var timer = setInterval(function () {
					n = n < 7 ? n + 1 : 0;
					scrollPic(n);
				}, 3000);
				
		 T.event.on(T.g("intro"), "mouseover", function(e){
			clearInterval(timer);
		});
		
		var pics = baidu.dom.query('.mark li');
		var intros = baidu.dom.query('.intro li');

		function scrollPic(i) {
			var pic_cur = baidu.dom.query('.mark li.click')[0];
			var intro_cur = baidu.dom.query('.intro li.on')[0];
			baidu.dom.removeClass(pic_cur, 'click');
			baidu.dom.addClass(pics[i], 'click');
			baidu.hide(intro_cur);
			baidu.dom.removeClass(intro_cur, 'on');
			baidu.show(intros[i]);
			baidu.dom.addClass(intros[i], 'on');
		};
		
		baidu.each(pics, function (item, i) {
			item.onclick = function () {
				clearInterval(timer);
				scrollPic(i);
			};
		});

	});

})();
 
 