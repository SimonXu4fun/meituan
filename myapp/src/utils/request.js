import axios from 'axios';
const BASE_URL = "http://8.134.10.170/myapp/test"
// const BASE_URL = "http://admin/gxxmglzx.com/tender/test"
export default function({url, data={}}){
	return new Promise(resolev => {
		axios.get(BASE_URL + url, {
			params:data
		}).then(res => {
			if (res.data.errcode === 200 ) {
				resolev(res.data)
			} else{
				console.log(res.errmsg)
			}
		}).catch(err => {
				console.log(err)
		})
	})
}