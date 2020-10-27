import request from '../utils/request.js'
//传data
export function getStoreById(data){
	return request({
		url:'/get_store.json',
		data
	})
}

export function getProductById(data){
	return request({
		url:'/get_nav.json',
		data
	})
	
}