import {getProductById} from '../api/detail.js'
import Vue from 'vue'
const product = {
	namespaced:true,
	state:{
		productList:[]
	},
	getters:{
		selectList(state){
			let result = [];
			state.productList.forEach(obj=>{
				obj.content.forEach(prod=>{
					if(prod.count){
						result.push(prod);
					}
				})
			})
			return result;
		},
		totalPrice(state,getter){
			return getter.selectList.reduce((price,prod)=>{
				return price + prod.count*prod.price;
			},0)
		},
		total(state,getter){
			return getter.selectList.reduce((total,prod)=>{
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
			let prod = state.productList[type].content[index];
			if(prod.count){
				Vue.set(prod,'count',prod.count+1)
			}else{
				Vue.set(prod,'count',1)
			}
		},
		reduceCart(state,{type,index}){
			let prod = state.productList[type].content[index];
			if(prod.count){
				Vue.set(prod,'count',prod.count-1)
			}
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
							commit('saveProdList', item.goods);
							resolve()
						}
					}
				})
			})
		}
		
	}
}

export default product