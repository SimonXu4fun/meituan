import request from '../utils/request.js'
export function getComment(data){
	return request({
		url:'/get_info.json',
		data
	})
	
}