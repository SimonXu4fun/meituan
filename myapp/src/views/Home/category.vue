<template>
	<div>
		<ul class="cate-box">
			<li class="cate-list" v-for="obj in cateList" :key="obj.id">
				<img class="cate-img" :src="obj.img"/>
				<p class="cate-title">{{obj.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				cateList:[]
			}
		},
		created: function() {
			axios.get('./get_type.json').then(res =>{
				// console.log(res);
				//
				if(res.data.errcode == 200){
					// console.log(res.data.data);
					this.cateList = res.data.data;
					/* for(let ob of this.cateList){
						console.log(ob.img);
					} */
					
				}else{
					console.log(res.data.errmsg)
				}
			}).catch(res=>{
				console.log(res);
			})
			/* var xmlhttp;
			xmlhttp=new XMLHttpRequest();
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200){
					console.log(xmlhttp.responseText);
					var res = JSON.parse(xmlhttp.responseText);
					console.log(res);
					this.cateList = res.data;
				}
				
			}
			xmlhttp.open("GET","./get_type.json",true);
			xmlhttp.send(); */
		}
	}
</script>

<style lang="scss" scoped>
	.cate-box{
		display: flex;
		flex-wrap: wrap;
		.cate-list{
			width: 20%;
			text-align: center;
			padding-top: 0.3rem;
			.cate-img{
				width: 1rem;
				height: 1rem;
			}
			.cate-title{
				font-size: 12px;
			}
		}
	}
</style>
