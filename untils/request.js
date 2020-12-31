import uniRequest from "uni-request";

// h5
// #ifndef H5
uniRequest.defaults.baseURL = "http://ceshi2.dishait.cn/api/v1"
// #endif

// #ifdef H5
uniRequest.defaults.baseURL = "/api"
// #endif


// 请求拦截
uniRequest.interceptors.request.use(
	request => {
		//配置基本信息	
		request.headers.token = uni.getStorageSync("token");
		return request;
	},
	err => {
		console.log('请求失败');
		return Promise.reject(err);
	});

// 响应拦截
uniRequest.interceptors.response.use(function(response) {
	console.log('返回进入拦截成功')
	return Promise.resolve(response);
}, function(error) {
	console.log('返回进入拦截失败')
	return Promise.reject(error);
});

export default uniRequest;