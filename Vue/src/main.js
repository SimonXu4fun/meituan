document.onload = function(){
	import Vue from '../vue.js'
	new Vue({
		el:"#app",
		data:{
			msg:"hello vue!"
		}
	});
}