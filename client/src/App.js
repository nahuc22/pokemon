import style from './App.css';
import Create from './views/Create/Create';
import Details from './views/Details/Details';
import NavBar from './components/NavBar/NavBar'
import { Route, useLocation} from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'

function App() {  
  const location = useLocation();
  return (
      <div className={style.container}>
           {location.pathname !== "/" && <NavBar/>} 

          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/pokemon/:id" component={Details} />
      </div>
  );
}

export default App;
