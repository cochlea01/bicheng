define(function (require, exports, module) {
	var strategyLayoutLineCover = $('.strategyLayoutLineCover');
	$('#strategyLayout').mousemove(function(e){
		var x = e.pageX;
		strategyLayoutLineCover.css("width",x+"px");
	});
	$(".strategyLayout").find(".item").on('mouseenter',function(){
		var imgId = $(this).data("num");
		var srcImgArray = [
			"img/indexSection2_01a.png",
			"img/indexSection2_02a.png",
			"img/indexSection2_03a.png",
			"img/indexSection2_04a.png",
			"img/indexSection2_05a.png",
			"img/indexSection2_06a.png",
		]
		var strategyLayoutContent = [
			"金融信息服务，资产管理，投资管理，软件开发及电子商务",
			"经营进出口贸易专业外贸公司",
			"涵盖旅游地产、影视文化、艺术、演出类的项目投资",
			"物流搬运机械工程机械的研发和生产",
			"光伏发电、风能、生物质能、汽车新能源",
			"铁矿石采选加工为主业、辅以贸易、运输、投资等产业的企业"
		]
		$(this).find('img').attr('src',srcImgArray[imgId-1]);
		$('#strategyLayoutContent').html(strategyLayoutContent[imgId-1]);
	});
	$(".strategyLayout").find(".item").on('mouseleave',function(){
		var imgId = $(this).data("num");
		var srcImgArray = [
			"img/indexSection2_01.png",
			"img/indexSection2_02.png",
			"img/indexSection2_03.png",
			"img/indexSection2_04.png",
			"img/indexSection2_05.png",
			"img/indexSection2_06.png",
		]
		$(this).find('img').attr('src',srcImgArray[imgId-1]);
		$('#strategyLayoutContent').html("");
	});

});