//模拟jQuary；
(function(){
	function $(selector){
		
		return $.prototype.init(selector);
	}
	$.prototype = {
		init:function(selector){
			this.dom = document.getElementById(selector);
			return this;
		},
		index:function(){
		var arr = this.dom.parentNode.children;
		for(var i=0;i<arr.length;i++){
			if(arr[i] == this.dom){
				return i;
				}
			}
		},
		click:function(fun){
			this.dom.onclick = fun;
		},
	};
	window.$ = $;//封装后，将$赋值给window下的$方法；
})()
