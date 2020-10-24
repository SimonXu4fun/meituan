import request from '../utils/request.js'
//传data
export function getStoreById(data){
	return request({
		url:'/get_store.json',
		data
	})
}