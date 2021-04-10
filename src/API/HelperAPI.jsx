import axios from 'axios';

const apiKey = 'b55c051971fa1083ada7935760369c3e';

const trending = axios.create({
	baseURL: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`
})

const popularMovies = axios.create({
	baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
})

const HelperAPI = {
	trending,
	popularMovies
}

export default HelperAPI;
