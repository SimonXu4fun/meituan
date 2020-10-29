<template>
	<div class="score-box">
		<div class="seller-score">
			<div class="num">{{score}}</div>
			<div class="desc">商家评分</div>
		</div>
		<div class="pack-score">
			<div class="item">
				<span>口味</span>
				<star :score="flavor"></star>
				<span>{{flavor}}</span>
			</div>
			<div class="item">
				<span>包装</span>
				<star :score="packing"></star>
				<span>{{packing}}</span>
			</div>
		</div>
		<div class="deliver-score">
			<div class="num">{{delivery}}</div>
			<div class="desc">配送评分</div>
		</div>
	</div>
</template>

<script>
import star from "@/components/star"
export default {
	components:{
		star
	},
	props:["delivery","score","packing","flavor"]
}
</script>

<style lang="scss">
.score-box{
	display: flex;
	background: white;
	padding: 0.3rem 0.3rem 0.15rem 0.3rem;
	.seller-score, .deliver-score{
		width: 1.86rem;
		flex: 0 0 1.86rem;
		text-align: center;
		font-size: 0.28rem;
		.num{
			font-size: 0.54rem;
			height: 0.6rem;
			line-height: 0.6rem;
			font-weight: 600;
		}
	}
	.seller-score{
		.num{
			color: #ffb000;
		}
	}
	.deliver-score{
		border-left: 1px solid #ccc ;
		.num{
			color: #999;
		}
	}
	.pack-score{
		flex: 1;
		color: #666;
		font-size: 0.26rem;
		.item{
			margin: 0.06rem 0 0.2rem;
			
		}
	}
}
</style>
