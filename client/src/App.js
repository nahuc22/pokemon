import './App.css';
import Create from './views/Create/Create';
import Details from './views/Details/Details';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing';
import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/details" component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
