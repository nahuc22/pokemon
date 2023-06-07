import './App.css';
import Create from './views/Create/Create';
import Details from './views/Details/Details';
import NavBar from './components/NavBar/NavBar'
import { Route, useLocation} from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';



function App() {  
  const location = useLocation();
  return (
      <div className="App">
          {/* {location.pathname !== "/" && <NavBar/>} */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/pokemon/:id" component={Details} />
      </div>
  );
}

export default App;
