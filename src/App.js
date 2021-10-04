import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path='/'><Home></Home></Route>
        <Route path='/home'><Home></Home></Route>
        <Route path='/services'><Services></Services></Route>
        <Route path='*'><NotFound></NotFound></Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
