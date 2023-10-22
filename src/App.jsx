import './App.css'
import { ContextMovieCard } from './components/ContextMovieCard' //eslint-disable-line
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom' 
import { MovieCard } from './components/MovieCard' //eslint-disable-line
import MovieDetails from './pages/MovieDetails'
import LandinPage from './pages/LandinPage'


function App() {


  return (
    <Router>

      <header>
        <Link to="/">  <h1 className='title'>🎬Películas</h1> </Link>
      </header>

      <main>
          <switch>
            <Routes>
              <Route exact path='/movies/:movieId' Component={MovieDetails}/>  
              <Route path="/" Component={LandinPage} />
            </Routes>
          </switch>
      </main>

    </Router>
   
  )
}

export default App
