;(function($){
//插件前写;可避免压缩代码时报错；
	$.prototype.color = function(col){
		this.css("color",col);
		return this;
	};//通过给jQuary原型对象添加方法，实现添加插件；
})($)//将$变为参数，而不是jQuary中$对象，避免冲突；
