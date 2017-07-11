define(function (require, exports, module) {
	var tplHeader = require("/include/header.html");
	var tplFooter = require("/include/footer.html");
	$('#header').html(tplHeader);
	$('#footer').html(tplFooter);
	function pageInit() {
		$("nav").css({
			"position":"absolute",
			"border":"2px solid red"
		});
	}
	
	function isContain(str, substr){
		return str.indexOf(substr) >= 0;
	};
	var pathName = window.location.pathname;

	var navItem = $('#header').find('.nav-item');
	navItem.removeClass("active");

	if (isContain(pathName,'index')){
		navItem.eq(0).addClass('active');
	} else if(isContain(pathName,'about')){
		navItem.eq(1).addClass('active');
	} else if(isContain(pathName,'news')){
		navItem.eq(2).addClass('active');
	} else if(isContain(pathName,'contact')){
		navItem.eq(3).addClass('active');
	}

	// pageInit();
})