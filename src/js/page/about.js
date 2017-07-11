define(function (require, exports, module) {
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}

	var menu0 = GetQueryString("menu");
 	$('.detail').removeClass('active');
 	$('#menuList li').removeClass('active');
	$('#'+menu0).addClass('active');
	$('#menuList li').each(function(i){
		if($(this).attr('data-menu')==menu0){
			$(this).addClass('active');
		}
	})

	$('#menuList').on('click','li',function(e){
        var target = e.target;
        var menu = $(target).data('menu');
        $('#menuList li').removeClass('active');
        $(target).addClass('active');
        $('.detail').removeClass('active');
        $('#'+menu).addClass('active');
    })
})