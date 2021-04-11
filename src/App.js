import NavbarMenu from './components/NavbarMenu/NavbarMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PopularMovie from'./pages/PopularMovies';
import HomePage from './pages/Homepage';
import FooterWeb from './components/Footer/Footer'

function App() {
	return (
		<>
			<Router>
				<NavbarMenu />
				<Switch>
					<Route path="/popular-movies">
						<PopularMovie/>
					</Route>
					<Route path="/">
						<HomePage/>
					</Route>
				</Switch>
			</Router>
			<FooterWeb />
		</>
	)
}

export default App;