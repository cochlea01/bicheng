define(function(require,exports,modlue){
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(121.519604, 31.265917), 17);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP ]}));   //添加地图类型控件
	map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
  
  	//弹跳点
  	var point = new BMap.Point(121.519604, 31.265917);
	map.centerAndZoom(point, 17);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

	//文本标注
	var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-30, -80)    //设置文本偏移量
	}
	var label = new BMap.Label("北美广场A座", opts);  // 创建文本标注对象
		label.setStyle({
			color : "#555",
			fontSize : "12px",
			height : "23px",
			lineHeight : "23px",
			border:"1px solid #aaa",
			padding:"0px 10px"
		 });
	map.addOverlay(label);
	
	//定位相关控件
	// 添加带有定位的导航控件
	var navigationControl = new BMap.NavigationControl({
		// 靠左上角位置
		anchor: BMAP_ANCHOR_TOP_LEFT,
		// LARGE类型
		type: BMAP_NAVIGATION_CONTROL_LARGE,
		// 启用显示定位
		enableGeolocation: true
	});
	map.addControl(navigationControl);
	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl();
	geolocationControl.addEventListener("locationSuccess", function(e){
	// 定位成功事件
	var address = '';
	address += e.addressComponent.province;
	address += e.addressComponent.city;
	address += e.addressComponent.district;
	address += e.addressComponent.street;
	address += e.addressComponent.streetNumber;
	alert("当前定位地址为：" + address);
	});
	geolocationControl.addEventListener("locationError",function(e){
	// 定位失败事件
	alert(e.message);
	});
	map.addControl(geolocationControl);
});