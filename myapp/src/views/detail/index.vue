<template>
	<div>
		<seller-header :seller="seller"></seller-header>
		<van-tabs v-model="active" animated sticky color="#ffda41">
			<van-tab title="菜单">
				<order></order>
			</van-tab>
			<van-tab title="评价">内容 2</van-tab>
			<van-tab title="商家">内容 3</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import {getStoreById} from '../../api/detail.js';
	import sellerHeader from './seller-header';
	import order from './order.vue';
	export default {
		data(){
			return{
				seller:[],
				active:0
			}
		},
		components:{
			sellerHeader,
			order
		},
		methods:{
			getStoreMsg(){
				getStoreById({id:this.$route.query.id}).then(res=>{
					for(var item of res.data.list){
						if(item.id == this.$route.query.id){
							this.seller = item;
							console.log(item);
						}
					}
					
				})
			}
		},
		created() {
			this.getStoreMsg();
		}
	}
</script>

<style>
</style>
