import axios from 'axios'

const apiKey = 'b55c051971fa1083ada7935760369c3e'

const HelperAPI = axios.create({
	baseURL: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
})

// const HelperAPI = {
// 	trending
// }

export default HelperAPI
