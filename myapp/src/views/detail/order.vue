<template>
	<div>
		<div class="order-box">
			<div class="menu-box">
				<ul>
					<li class="menu-list" active>当季推荐</li>
					<li class="menu-list">当季推荐</li>
					<li class="menu-list">当季推荐</li>
				</ul>
			</div>
			<div class="prod-box">
				<ul>
					<li class="cate-list">
						<div class="cate-title">当季推荐</div>
						<ul>
							<li class="prod-list">
								<div class="prod-img-box">
									<img src="../../assets/img/store1.jpg" />
								</div>
								<div class="prod-info">
									<div class="name">北海道云朵吐司</div>
									<div class="sale"><span class="num">月销112</span><span>赞90</span></div>
									<div class="price">￥100</div>
								</div>
							</li>
							<li class="prod-list">
								<div class="prod-img-box">
									<img src="../../assets/img/store1.jpg" />
								</div>
								<div class="prod-info">
									<div class="name">北海道云朵吐司</div>
									<div class="sale"><span class="num">月销112</span><span>赞90</span></div>
									<div class="price">￥100</div>
								</div>
							</li>
						</ul>
					</li>
					<li class="cate-list">
							<div class="cate-title">当季推荐</div>
							<ul>
								<li class="prod-list">
									<div class="prod-img-box">
										<img src="../../assets/img/store1.jpg" />
									</div>
									<div class="prod-info">
										<div class="name">北海道云朵吐司</div>
										<div class="sale"><span class="num">月销112</span><span>赞90</span></div>
										<div class="price">￥100</div>
									</div>
								</li>
								<li class="prod-list">
									<div class="prod-img-box">
										<img src="../../assets/img/store1.jpg" />
									</div>
									<div class="prod-info">
										<div class="name">北海道云朵吐司</div>
										<div class="sale"><span class="num">月销112</span><span>赞90</span></div>
										<div class="price">￥100</div>
									</div>
								</li>
							</ul>
						</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
.order-box{
	display: flex;
	font-size: 14px;
	.menu-box{
		width: 1.6rem;
		height: calc(100vh - 94px);
		flex: 0 0 1.6rem;
		background: #f5f5f5;
		.menu-list{
			color: #2c3e50;
			font-size: 0.26rem;
			padding: 0.18rem 0.24rem 0.44rem;
			line-height: 0.36rem;
			&.active{
				color: red;
			}
		}
	}
	.prod-box{
		flex: 1;
		min-width: 0;
		background: white;
		height: calc(100vh - 94px);
		.cate-list{
			padding: 0 0.2rem;
			.cate-title{
				height: 0.72rem;
				line-height: 0.72rem;
			}
			.prod-list{
				display: flex;
				margin-bottom: 0.4rem;
				.prod-img-box{
					width: 1.5rem;
					flex: 0 0 1.5rem;
					margin-right: 0.15rem;
					img{
						width: 100%;
					}
				}
				.prod-info{
					flex: 1;
					.name{
						font-size: 0.32rem;
						color: #333;
						font-weight: bold;
						line-height: 0.45rem;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin-bottom: 0.04rem;
					}
					.sale{
						color: #666;
						font-size: 11px;
						margin-bottom: 0.06rem;
						.num{
							margin-right: 0.2rem;
						}
					}
					.price{
						color: red;
						font-size: 0.36rem;
					}
				}
			}
		}
	}
}
</style>
