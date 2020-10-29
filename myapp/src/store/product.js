import {getProductById} from '../api/detail.js'
import Vue from 'vue'
const product = {
	namespaced:true,
	state:{
		productList:[],
		cartList:[]
	},
	getters:{
		selectList(state){
			// let result = [];
			state.productList.forEach(obj=>{
				obj.content.forEach(prod=>{
					if(prod.count){
						state.cartList.push(prod);
					}
				})
			})
			return state.cartList;
		},
		totalPrice(state){
			return state.cartList.reduce((price,prod)=>{
				return price + prod.count*prod.price;
			},0)
		},
		total(state){
			return state.cartList.reduce((total,prod)=>{
				return total + prod.count;
			},0)
		}
	},
	mutations:{
		saveProdList(state, arr){
			state.productList = [...arr];
		},
		addCart(state,{type,index}){
			//分类 索引
			var isExist = false;
			let prod = state.productList[type].content[index];
			if(prod.count){
				Vue.set(prod,'count',prod.count+1);
			}else{
				Vue.set(prod,'count',1)
			}
			for (var i in state.cartList){
				if (state.cartList[i]){
					if(state.cartList[i].id == prod.id){
						state.cartList[i].count++;
						isExist = true;
					}
				}
			}
			if (!isExist) {
				var obj = {...prod};
				state.cartList.push(obj);
				isExist = true;
			}
			
			
		},
		reduceCart(state,{type,index}){
			let prod = state.productList[type].content[index];
			if(prod.count){
				Vue.set(prod,'count',prod.count-1)
			}
			for (var i in state.cartList){
				if(state.cartList[i].id == prod.id){
					state.cartList[i].count--;
				}
			}
		},
		clearCartList(state){
			state.cartList=[]
		}
	},
	actions:{
		//请求商品列表
		getProdList({commit}, id){
			return new Promise(resolve =>{
				getProductById({id}).then(res =>{
				// var prodData = eval('('+ res +')');
				
					var prodData = res;
					for(let item of prodData.data){
						if(item.store_id == id){
							let list = item.goods;
							list.forEach((li,type) =>{
								li.content.forEach((prod,index) =>{
									prod.type = type;
									prod.index = index;
								})
							})
							commit('saveProdList', list);
							resolve()
						}
					}
				})
			})
		}
	}
}

export default product