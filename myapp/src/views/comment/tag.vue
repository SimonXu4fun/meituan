<template>
	<div class="tag-box">
		<span class="tag-item" v-for="obj in tag" :key="obj.id" :class="{'active':currentTyp==obj.id}">{{obj.name}}({{obj.count}})</span>
	</div>
</template>

<script>
export default {
	props:["tag","currentTyp"]
	
}
</script>

<style lang="scss">
@import "@/assets/css/mixin.scss";
.tag-box{
	padding: 0.15rem 0.28rem 0.1rem;
	.tag-item{
		padding: 0 0.24rem;
		display: inline-block;
		height: 0.48rem;
		line-height: 0.48rem;
		text-align: center;
		font-size: 0.26rem;
		color: #666;
		margin: 0 0.2rem 0 0;
		@include border-fix(#bbb,0.52rem);
		&.active{
			@include border-fix(#ffb000,0.52rem);
			background: #fafab4;
		}
	}
}
</style>
