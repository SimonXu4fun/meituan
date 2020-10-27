<template>
	<div class="scrollBox">
		<div>
			<seller-header :seller="seller"></seller-header>
			<van-tabs v-model="active" animated sticky color="#ffda41">
				<van-tab title="菜单">
					<order></order>
				</van-tab>
				<van-tab title="评价">内容 2</van-tab>
				<van-tab title="商家">
					<seller :seller="seller"></seller>
				</van-tab>
			</van-tabs>
		</div>
		<cart :seller="seller"></cart>
	</div>
</template>

<script>
	import {getStoreById} from '../../api/detail.js';
	import sellerHeader from './seller-header';
	import order from './order.vue';
	import seller from './../seller';
	import cart from './cart';
	import BScroll from 'better-scroll'
	
	export default {
		data(){
			return{
				seller:[],
				active:0,
				scrollBox:null
			}
		},
		components:{
			sellerHeader,
			order,
			seller,
			cart
		},
		methods:{
			getStoreMsg(){
				getStoreById({id:this.$route.query.id}).then(res=>{
					for(var item of res.data.list){
						if(item.id == this.$route.query.id){
							this.seller = item;
						}
					}
					
				})
			}
		},
		mounted() {
			setTimeout(()=>{
				this.scrollBox = new BScroll('.scrollBox', {
					bounce:false,
					click:true
				})
			},20)
			
		},
		created() {
			this.getStoreMsg();
		}
	}
</script>

<style lang="scss">
.scrollBox{
	height: 100vh;
	overflow: hidden;
}
</style>
