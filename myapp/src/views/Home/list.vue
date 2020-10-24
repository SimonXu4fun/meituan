<template>
	<div>
		<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
			<ul class="list-container">
				<li class="shop-list" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
					<div class="img-box">
						<img :src="item.img" />
					</div>
					<div class="info-box">
						<div class="title">{{item.name}}</div>
						<div class="rate-box">
							<div>
								<star :score="item.score"></star>
								<span class="rate">{{item.score}}分</span>
								<span>月销{{item.num}}</span>
							</div>
							<div>
								<span>{{item.minute}}分钟</span>
								<span class="left-line">{{item.distance}}</span>
							</div>
						</div>
						<div class="distribution-box">
							<span>起送{{item.pre_capita}}</span>
							<span class="left-line">配送{{item.fee}}</span>
							<span class="left-line">人均{{item.price}}</span>
						</div>
					</div>
				</li>
			</ul>
		</van-list>
	</div>
</template>

<script>
import star from '../../components/star';
import {getStore} from '../../api/home';
export default {
	data(){
		return{
			current:0,
			size:10,
			list:[],
			loading:false,
			finished:false,
			total:0
		}
	},
	components:{
		star
	},
	methods:{
		//获取商家列表
		getData(){
			getStore({
				current:this.current,
				size:this.size
			}).then(res=>{
				this.list = res.data.list.slice(0,(this.current+1)*this.size);
				// this.list = this.list.concat(res.data.list);
				this.loading = false;
				this.current++;
				this.total = res.data.total;
				if(this.list.length >= this.total){
					this.finished = true
				}
				
			});
			
		},
		goDetail(id){
			this.$router.push({path:'/detail', query:{id}})
		}
	},
	
	created() {
		this.$store.dispatch('getStoreList');
	}
}
</script>

<style lang="scss" scoped>
.list-container{
	padding: 0 0.2rem;
	.shop-list{
		margin: 0.2rem 0 0.5rem 0;
		display: flex;
		.img-box{
			width: 1.52rem;
			height: 1.14rem;
			img{
				width: 100%;
				height: 100%;
			}
			margin-right: 0.16rem;
		}
		.info-box{
			flex: 1;
			.title{
				font-size: 0.32rem;
				color: #333;
				line-height: 1.4;
				font-weight: 600;
			}
			.rate-box, 
			.distribution-box{
				font-size: 11px;
				display: flex;
				color: #333;
				line-height: 1.4;
				font-family: mtsi-font;
				.left-line::before{
					content: "";
					display: inline-block;
					width: 1px;
					height: 10px;
					margin: 0 5px;
					background: #ccc;
				}
			}
			.rate-box{
				justify-content: space-between;
				.rate{
					margin-right: 0.2rem;
				}
			}
		}
	}
}
</style>
