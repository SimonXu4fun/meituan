<template>
	<div class="seller-box">
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-weizhi"></span>
				<span>{{seller.address}}</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-peisong"></span>
				<span>配送服务：提供美团高品质配送服务</span>
			</li>
			<li class="list">
				<span class="iconfont icon-shijian"></span>
				<span>配送时间: {{seller.delivery_time}}</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-jian"></span>
				<span>{{seller.full}}</span>
			</li>
		</ul>
		<ul class="list-box">
			<li class="list">
				<span class="iconfont icon-xin"></span>
				<span>本店新用户立减2元</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	props:["seller"]
}
</script>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.seller-box{
	padding: 0 0.3rem;
	.list-box{
		@include border-bottom-1px(#ebedf0);
		padding-top: 0.36rem;
		.list{
			font-size: 0.28rem;
			color: #333;
			padding-bottom: 0.36rem;
			.iconfont{
				color: #c0c0c0;
				margin-right: 0.26rem;
			}
			.icon-jian{
				color: #fb4d41;
			}
			.icon-xin{
				color: #fb4d41;
			}
		}
	}
}	
</style>
